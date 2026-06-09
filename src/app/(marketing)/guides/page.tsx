import { AdPlaceholder } from "@/components/ads/ad-placeholder";
import { GuideGallery } from "@/components/marketing/guide-gallery";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Badge } from "@/components/ui/badge";
import { guideSummaries } from "@/data/guides";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Database Design Guides | drawDB",
  description: "Read database design guides that connect schema tools, templates, and comparison pages into stronger topic clusters.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <div className="space-y-14">
        <section className="grid gap-6 xl:grid-cols-[1.02fr,0.98fr]">
          <div className="mesh-card panel-glow relative overflow-hidden rounded-[2rem] border border-white/10 p-8 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_62%)]" />
            <div className="relative space-y-6">
              <Badge>Guide Library</Badge>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-balance font-heading text-4xl font-semibold tracking-tight text-white md:text-6xl">
                  Long-form database guides that turn search traffic into product understanding.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                  These guides connect education with action. Readers can learn a modeling concept, inspect templates,
                  compare alternatives, and jump into a real schema workflow from the same content cluster.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5">Table of contents</span>
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5">Examples & checklists</span>
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5">Related pages</span>
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5">FAQ schema</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
            <div className="mesh-card rounded-[1.6rem] border border-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Cluster strategy</p>
              <p className="mt-3 text-sm leading-7 text-white">
                Guides pull in broader informational demand, then distribute authority into tools, templates, and
                compare pages through deliberate internal linking.
              </p>
            </div>
            <AdPlaceholder className="min-h-[180px]" label="Guides Directory Ad Zone" />
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading
            title="Start with a featured guide, then branch into workflows"
            description="The first guide sets the theme. The surrounding pages expand the topic into practical design decisions, examples, and tools."
          />
          <GuideGallery guides={guideSummaries} />
        </section>
      </div>
    </div>
  );
}
