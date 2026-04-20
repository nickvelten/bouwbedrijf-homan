"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChoiceCards, choices, type ChoiceId } from "@/components/choice-helper";

const choiceLabels: Record<ChoiceId, string> = {
  nieuwbouw: "Nieuwbouw — Ik wil een woning laten bouwen",
  kavel: "Kavel gevonden — Ik heb een kavel op het oog",
  "2-onder-1-kap": "2-onder-1-kap — Samen bouwen met een ander",
  ontwikkellocatie: "Ontwikkellocatie — Ik heb een potentiële locatie",
  terugbelverzoek: "Terugbelverzoek",
};

export function ContactForm() {
  const [selected, setSelected] = useState<ChoiceId | null>(null);

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("onderwerp");
    if (param && param in choiceLabels) {
      setSelected(param as ChoiceId);
    }
  }, []);

  const isCallback = selected === "terugbelverzoek";

  return (
    <div>
      {/* Choice cards */}
      <fieldset className="mb-8">
        <legend className="mb-4 text-sm font-semibold uppercase tracking-widest text-red-700">
          Wat beschrijft uw situatie?
        </legend>
        <ChoiceCards
          selected={selected}
          onSelect={setSelected}
          className="lg:grid-cols-3"
        />
      </fieldset>

      <h2 className="text-2xl font-bold">
        {isCallback ? "Terugbelverzoek" : "Stuur ons een bericht"}
      </h2>
      <p className="mt-2 text-muted-foreground">
        {isCallback
          ? "Vul uw gegevens in en wij bellen u zo snel mogelijk terug."
          : "Vul het formulier in en wij nemen zo snel mogelijk contact met u op."}
      </p>

      <form
        className="mt-8 space-y-6"
        aria-describedby="form-status"
        noValidate
      >
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
              placeholder="Uw naam"
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
              placeholder="Uw telefoonnummer"
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
            placeholder="uw@email.nl"
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
            placeholder="Waar gaat uw vraag over?"
            className="mt-2 h-14 rounded-full border-foreground/15 bg-background px-5 text-base focus-visible:border-foreground/30 focus-visible:ring-foreground/10"
            value={selected ? choiceLabels[selected] : ""}
            onChange={() => setSelected(null)}
          />
        </div>
        <div>
          <Label htmlFor="bericht">
            {isCallback ? "Wanneer kunnen we u het beste bereiken?" : "Bericht"}{" "}
            <span aria-hidden="true">*</span>
            <span className="sr-only">verplicht</span>
          </Label>
          <Textarea
            id="bericht"
            name="bericht"
            placeholder={
              isCallback
                ? "Vertel kort waar u over gebeld wilt worden en wanneer u beschikbaar bent..."
                : "Vertel ons meer over uw project of vraag..."
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
          className="sr-only"
        />

        <button
          type="submit"
          className="group inline-flex items-center gap-3 rounded-full bg-foreground py-3 pl-7 pr-3 text-base font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          <span>{isCallback ? "Verstuur terugbelverzoek" : "Verstuur bericht"}</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition-transform group-hover:translate-x-0.5">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
          </span>
        </button>
      </form>
    </div>
  );
}
