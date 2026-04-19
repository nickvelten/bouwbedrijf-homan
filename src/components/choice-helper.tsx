"use client";

import { useSearchParams } from "next/navigation";
import { Home, MapPin, Users, Building2, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const choices = [
  {
    id: "nieuwbouw",
    icon: Home,
    title: "Nieuwbouw",
    subtitle: "Ik wil een woning laten bouwen",
  },
  {
    id: "kavel",
    icon: MapPin,
    title: "Kavel gevonden",
    subtitle: "Ik heb een kavel op het oog",
  },
  {
    id: "2-onder-1-kap",
    icon: Users,
    title: "2-onder-1-kap",
    subtitle: "Samen bouwen met een ander",
  },
  {
    id: "ontwikkellocatie",
    icon: Building2,
    title: "Ontwikkellocatie",
    subtitle: "Ik heb een potentiële locatie",
  },
  {
    id: "terugbelverzoek",
    icon: Phone,
    title: "Terugbelverzoek",
    subtitle: "Bel mij over...",
  },
] as const;

export type ChoiceId = (typeof choices)[number]["id"];

export { choices };

export function ChoiceCards({
  selected,
  onSelect,
  className,
}: {
  selected?: string | null;
  onSelect?: (id: ChoiceId) => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
        className
      )}
    >
      {choices.map((choice) => {
        const isSelected = selected === choice.id;
        return (
          <button
            key={choice.id}
            type="button"
            onClick={() => onSelect?.(choice.id)}
            className={cn(
              "group relative flex flex-col items-center gap-3 rounded-2xl border-2 p-6 text-center transition-all duration-200",
              isSelected
                ? "border-red-600 bg-red-50 shadow-lg shadow-red-600/10"
                : "border-border bg-card hover:border-red-300 hover:bg-red-50/50 hover:shadow-md"
            )}
          >
            <div
              className={cn(
                "rounded-xl p-3 transition-colors",
                isSelected
                  ? "bg-gradient-to-br from-red-600 to-red-700"
                  : "bg-gradient-to-br from-muted to-muted/80 group-hover:from-red-100 group-hover:to-red-50"
              )}
            >
              <choice.icon
                className={cn(
                  "h-6 w-6 transition-colors",
                  isSelected
                    ? "text-white"
                    : "text-muted-foreground group-hover:text-red-600"
                )}
              />
            </div>
            <div>
              <p
                className={cn(
                  "font-semibold transition-colors",
                  isSelected ? "text-red-700" : "text-foreground"
                )}
              >
                {choice.title}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {choice.subtitle}
              </p>
            </div>
            {isSelected && (
              <div className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-red-600 ring-2 ring-white">
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="h-4 w-4 text-white"
                >
                  <path
                    d="M12 5L6.5 10.5L4 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}

export function ChoiceCardsLinked({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
        className
      )}
    >
      {choices.map((choice) => (
        <a
          key={choice.id}
          href={`/contact?onderwerp=${choice.id}`}
          className="group relative flex flex-col items-center gap-3 rounded-2xl border-2 border-white/20 bg-black/40 p-6 text-center backdrop-blur-md transition-all duration-200 hover:border-red-400/50 hover:bg-black/50 hover:shadow-lg"
        >
          <div className="rounded-xl bg-white/10 p-3 transition-colors group-hover:bg-red-600/80">
            <choice.icon className="h-6 w-6 text-white/80 transition-colors group-hover:text-white" />
          </div>
          <div>
            <p className="font-semibold text-white">{choice.title}</p>
            <p className="mt-0.5 text-xs text-white/60">{choice.subtitle}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
