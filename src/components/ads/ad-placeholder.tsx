import { cn } from "@/lib/utils";

type AdPlaceholderProps = {
  label?: string;
  className?: string;
};

export function AdPlaceholder({ label = "AdSense Placeholder", className }: AdPlaceholderProps) {
  return (
    <div
      className={cn(
        "rounded-[1.25rem] border border-dashed border-blue-400/25 bg-blue-500/6 p-5",
        className,
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200/80">{label}</p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Reserved monetization zone for AdSense or affiliate modules. Keep this slot below primary
        value content and visually distinct from product CTAs.
      </p>
    </div>
  );
}
