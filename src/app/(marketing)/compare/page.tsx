import { AdPlaceholder } from "@/components/ads/ad-placeholder";
import { CompareGallery } from "@/components/marketing/compare-gallery";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Badge } from "@/components/ui/badge";
import { compareSummaries } from "@/data/compare";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Database and ERD Comparisons | drawDB",
  description: "Compare databases, ORMs, ERD tools, and schema workflows with decision-stage comparison pages.",
  path: "/compare",
});

export default function ComparePage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <div className="space-y-14">
        <section className="grid gap-6 xl:grid-cols-[1.05fr,0.95fr]">
          <div className="mesh-card panel-glow relative overflow-hidden rounded-[2rem] border border-white/10 p-8 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_65%)]" />
            <div className="relative space-y-6">
              <Badge>Compare Hub</Badge>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-balance font-heading text-4xl font-semibold tracking-tight text-white md:text-6xl">
                  Database and ERD comparisons built for decision-stage search intent.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                  Browse high-intent X vs Y pages for platforms, databases, modeling approaches, and design workflows.
                  Each page is structured to answer what changes, who each option fits, and where to go next.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5">Comparison table</span>
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5">Use cases</span>
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5">Related tools</span>
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5">Internal linking cluster</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
            <div className="mesh-card rounded-[1.6rem] border border-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Why it converts</p>
              <p className="mt-3 text-sm leading-7 text-white">
                Comparison traffic is closer to action than generic educational traffic. These pages help users narrow
                choices, then route them into tools and templates.
              </p>
            </div>
            <AdPlaceholder className="min-h-[180px]" label="Compare Directory Ad Zone" />
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            title="Explore the current comparison matrix"
            description="Start with a featured decision page, then move through adjacent comparisons to stay inside the same topic cluster."
          />
          <CompareGallery pages={compareSummaries} />
        </section>
      </div>
    </div>
  );
}
