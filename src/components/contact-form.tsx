"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChoiceCards, type ChoiceId } from "@/components/choice-helper";

// Prefill-tekst voor het onderwerpveld per keuze. Het veld blijft vrij
// bewerkbaar; dit is alleen een startwaarde.
const choiceLabels: Record<ChoiceId, string> = {
  nieuwbouw: "Nieuwbouw · Ik wil een woning laten bouwen",
  kavel: "Kavel gevonden · Ik heb een kavel op het oog",
  "2-onder-1-kap": "2-onder-1-kap · Samen bouwen met een ander",
  ontwikkellocatie: "Ontwikkellocatie · Ik heb een potentiële locatie",
  terugbelverzoek: "Terugbelverzoek",
  overige: "Overige vraag of sollicitatie",
};

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [selected, setSelected] = useState<ChoiceId | null>(null);
  const [onderwerp, setOnderwerp] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const successRef = useRef<HTMLDivElement>(null);
  // Tijdval tegen bots: de server weigert inzendingen die onmenselijk snel
  // na het laden van het formulier binnenkomen.
  const startedAtRef = useRef(0);

  useEffect(() => {
    startedAtRef.current = Date.now();
  }, []);

  // Het formulier maakt na verzenden plaats voor een veel kleiner
  // succeskaartje; zonder correctie blijft de scrollpositie onderaan
  // (voorbij de melding) hangen. Scroll de melding in beeld en geef
  // focus zodat ook schermlezers hem aankondigen.
  useEffect(() => {
    if (status === "success") {
      successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      successRef.current?.focus({ preventScroll: true });
    }
  }, [status]);

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("onderwerp");
    if (param && param in choiceLabels) {
      setSelected(param as ChoiceId);
      setOnderwerp(choiceLabels[param as ChoiceId]);
    }
  }, []);

  // Keuzekaart selecteren vult het onderwerp voor; het veld blijft bewerkbaar.
  function selectChoice(id: ChoiceId) {
    setSelected(id);
    setOnderwerp(choiceLabels[id]);
  }

  const isCallback = selected === "terugbelverzoek";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = {
      ...Object.fromEntries(new FormData(form).entries()),
      t: startedAtRef.current,
    };

    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Versturen mislukt. Probeer het later opnieuw.");
      }
      setStatus("success");
      form.reset();
      setSelected(null);
      setOnderwerp("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Versturen mislukt. Probeer het later opnieuw.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className="rounded-3xl border border-foreground/10 bg-muted p-8 outline-none sm:p-10"
      >
        <h2 className="text-2xl font-bold">Bedankt voor je bericht!</h2>
        <p className="mt-3 text-muted-foreground">
          We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je
          op, meestal binnen één werkdag.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/5"
        >
          Nog een bericht sturen
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Choice cards */}
      <fieldset className="mb-8">
        <legend className="mb-4 text-sm font-semibold uppercase tracking-widest text-red-700">
          Wat beschrijft jouw situatie?
        </legend>
        <ChoiceCards
          selected={selected}
          onSelect={selectChoice}
          className="lg:grid-cols-3"
        />
      </fieldset>

      <h2 className="text-2xl font-bold">
        {isCallback ? "Terugbelverzoek" : "Stuur ons een bericht"}
      </h2>
      <p className="mt-2 text-muted-foreground">
        {isCallback
          ? "Vul je gegevens in en wij bellen je zo snel mogelijk terug."
          : "Vul het formulier in en wij nemen zo snel mogelijk contact met je op."}
      </p>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
        {/* Honeypot — verborgen voor mensen, bots vullen 'm in */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Bedrijf (niet invullen)</label>
          <input id="company" name="company" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="naam">
              Naam <span aria-hidden="true">*</span>
              <span className="sr-only">verplicht</span>
            </Label>
            <Input
              id="naam"
              name="naam"
              autoComplete="name"
              placeholder="Je naam"
              required
              aria-required="true"
              className="mt-2 h-14 rounded-full border-foreground/15 bg-background px-5 text-base focus-visible:border-foreground/30 focus-visible:ring-foreground/10"
            />
          </div>
          <div>
            <Label htmlFor="telefoon">
              Telefoon{" "}
              {isCallback && (
                <>
                  <span aria-hidden="true">*</span>
                  <span className="sr-only">verplicht</span>
                </>
              )}
            </Label>
            <Input
              id="telefoon"
              name="telefoon"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="Je telefoonnummer"
              required={isCallback}
              aria-required={isCallback}
              className="mt-2 h-14 rounded-full border-foreground/15 bg-background px-5 text-base focus-visible:border-foreground/30 focus-visible:ring-foreground/10"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="email">
            E-mail <span aria-hidden="true">*</span>
            <span className="sr-only">verplicht</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="je@email.nl"
            required
            aria-required="true"
            className="mt-2 h-14 rounded-full border-foreground/15 bg-background px-5 text-base focus-visible:border-foreground/30 focus-visible:ring-foreground/10"
          />
        </div>
        <div>
          <Label htmlFor="onderwerp">Onderwerp</Label>
          <Input
            id="onderwerp"
            name="onderwerp"
            autoComplete="off"
            placeholder="Waar gaat je vraag over?"
            className="mt-2 h-14 rounded-full border-foreground/15 bg-background px-5 text-base focus-visible:border-foreground/30 focus-visible:ring-foreground/10"
            value={onderwerp}
            onChange={(e) => {
              setOnderwerp(e.target.value);
              setSelected(null);
            }}
          />
        </div>
        <div>
          <Label htmlFor="bericht">
            {isCallback ? "Wanneer kunnen we je het beste bereiken?" : "Bericht"}{" "}
            <span aria-hidden="true">*</span>
            <span className="sr-only">verplicht</span>
          </Label>
          <Textarea
            id="bericht"
            name="bericht"
            placeholder={
              isCallback
                ? "Vertel kort waar je over gebeld wilt worden en wanneer je beschikbaar bent..."
                : "Vertel ons meer over je project of vraag..."
            }
            rows={6}
            required
            aria-required="true"
            className="mt-2 min-h-[160px] rounded-3xl border-foreground/15 bg-background px-5 py-4 text-base focus-visible:border-foreground/30 focus-visible:ring-foreground/10"
          />
        </div>

        <p
          id="form-status"
          aria-live="polite"
          aria-atomic="true"
          className={status === "error" ? "text-sm font-medium text-red-700" : "sr-only"}
        >
          {status === "error" ? errorMessage : ""}
        </p>

        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center gap-3 rounded-full bg-foreground py-3 pl-7 pr-3 text-base font-medium text-background transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span>
            {status === "sending"
              ? "Versturen..."
              : isCallback
                ? "Verstuur terugbelverzoek"
                : "Verstuur bericht"}
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition-transform group-hover:translate-x-0.5">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
          </span>
        </button>
      </form>
    </div>
  );
}
