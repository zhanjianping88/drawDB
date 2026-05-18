import { AdPlaceholder } from "@/components/ads/ad-placeholder";
import { GuideGallery } from "@/components/marketing/guide-gallery";
import { SectionHeading } from "@/components/marketing/section-heading";
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
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Guides"
          title="Long-form database guides that connect tools, templates, and comparison pages."
          description="Use these guides to learn database design more systematically, then move into schema tools, templates, and decision-stage comparisons."
        />
        <AdPlaceholder className="min-h-[140px]" label="Guides Directory Ad Zone" />
        <GuideGallery guides={guideSummaries} />
      </div>
    </div>
  );
}
