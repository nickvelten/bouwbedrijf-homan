"use client";

import dynamic from "next/dynamic";

// Dynamic-import below-the-fold widgets so framer-motion + base-ui-sheet
// don't ship in the LCP-critical chunks.
const FloatingHelper = dynamic(
  () => import("@/components/floating-helper").then((m) => m.FloatingHelper),
  { ssr: false },
);
const StickyCTA = dynamic(
  () => import("@/components/sticky-cta").then((m) => m.StickyCTA),
  { ssr: false },
);

export function DeferredWidgets() {
  return (
    <>
      <FloatingHelper />
      <StickyCTA />
    </>
  );
}
