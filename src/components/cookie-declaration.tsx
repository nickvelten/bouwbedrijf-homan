"use client";

import { useEffect, useRef } from "react";

// Cookiebot rendert de cookieverklaring op de plek van de script-tag in de
// DOM. next/script injecteert in <head>/<body>, dus we voegen het script
// client-side toe binnen deze container zodat de verklaring hier verschijnt.
export function CookieDeclaration() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container || container.querySelector("#CookieDeclaration")) return;

    const script = document.createElement("script");
    script.id = "CookieDeclaration";
    script.src =
      "https://consent.cookiebot.com/095a2fb4-122c-4512-9c98-651f110cb9a9/cd.js";
    script.type = "text/javascript";
    script.async = true;
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div ref={ref} className="cookie-declaration" />;
}
