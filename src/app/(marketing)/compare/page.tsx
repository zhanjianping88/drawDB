import { AdPlaceholder } from "@/components/ads/ad-placeholder";
import { CompareGallery } from "@/components/marketing/compare-gallery";
import { SectionHeading } from "@/components/marketing/section-heading";
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
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Comparisons"
          title="Decision-stage comparison pages for databases, ERD tools, and schema workflows."
          description="Browse high-intent X vs Y pages designed for users choosing between platforms, database engines, modeling approaches, and design workflows."
        />
        <AdPlaceholder className="min-h-[140px]" label="Compare Directory Ad Zone" />
        <CompareGallery pages={compareSummaries} />
      </div>
    </div>
  );
}
