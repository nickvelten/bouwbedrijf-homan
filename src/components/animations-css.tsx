import type { ReactNode } from "react";

const baseFade =
  "motion-safe:animate-in motion-safe:fade-in motion-safe:duration-500 motion-safe:fill-mode-both";

const directions = {
  up: "motion-safe:slide-in-from-bottom-3",
  down: "motion-safe:slide-in-from-top-3",
  left: "motion-safe:slide-in-from-right-3",
  right: "motion-safe:slide-in-from-left-3",
} as const;

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  direction?: keyof typeof directions;
  className?: string;
}) {
  const style = delay ? { animationDelay: `${delay * 1000}ms` } : undefined;
  return (
    <div
      className={`${baseFade} ${directions[direction]} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function ScaleIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const style = delay ? { animationDelay: `${delay * 1000}ms` } : undefined;
  return (
    <div
      className={`${baseFade} motion-safe:zoom-in-95 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function StaggerContainer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({
  children,
  className = "",
  index = 0,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
}) {
  return (
    <div
      className={`${baseFade} motion-safe:slide-in-from-bottom-2 ${className}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {children}
    </div>
  );
}
