"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircleQuestion } from "lucide-react";
import { choices } from "@/components/choice-helper";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function FloatingHelper() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Don't show on contact page — the cards are already inline there
  if (pathname === "/contact") return null;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Hulp nodig? Open keuzehulp"
        className={cn(
          "hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 rounded-full",
          "bg-gradient-to-r from-red-600 to-red-700 px-5 py-3 text-sm font-semibold text-white",
          "shadow-xl shadow-red-600/30 transition-all duration-200",
          "hover:from-red-700 hover:to-red-800 hover:shadow-2xl hover:shadow-red-600/40",
          "active:scale-95",
          "min-h-[var(--tap)] min-w-[var(--tap)]"
        )}
      >
        <MessageCircleQuestion className="h-5 w-5" aria-hidden="true" />
        <span>Hulp nodig?</span>
      </SheetTrigger>
      <SheetContent side="right" className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-lg">
            Waar kunnen we u mee helpen?
          </SheetTitle>
          <SheetDescription>
            Kies de optie die het beste bij uw situatie past.
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-2 px-4 pb-4">
          {choices.map((choice) => (
            <a
              key={choice.id}
              href={`/contact?onderwerp=${choice.id}`}
              className="group flex items-center gap-4 rounded-xl border-2 border-border p-4 transition-all duration-200 hover:border-red-300 hover:bg-red-50/50"
            >
              <div className="rounded-lg bg-gradient-to-br from-muted to-muted/80 p-2.5 transition-colors group-hover:from-red-100 group-hover:to-red-50">
                <choice.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-red-600" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">{choice.title}</p>
                <p className="text-xs text-muted-foreground">
                  {choice.subtitle}
                </p>
              </div>
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
