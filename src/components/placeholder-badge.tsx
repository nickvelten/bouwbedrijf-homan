export function PlaceholderBadge({
  label = "Placeholder — nieuwe fotografie",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={`pointer-events-none absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-white backdrop-blur ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden="true" />
      {label}
    </span>
  );
}
