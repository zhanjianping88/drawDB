import { createMetadata } from "@/lib/seo/metadata";
import { templateSummaries } from "@/data/templates";
import { SectionHeading } from "@/components/marketing/section-heading";
import { TemplateGallery } from "@/components/marketing/template-gallery";
import { AdPlaceholder } from "@/components/ads/ad-placeholder";

export const metadata = createMetadata({
  title: "drawDB Templates | Database Schema Templates",
  description: "Browse reusable schema templates for common product and business use cases.",
  path: "/templates",
});

export default function TemplatesPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <div className="space-y-12">
        <SectionHeading
          align="center"
          eyebrow="Template Gallery"
          title="Database schema templates built for long-tail search and real engineering workflows."
          description="Browse reusable templates for ecommerce, CRM, SaaS, HR, healthcare, education, and operations use cases."
        />
        <AdPlaceholder className="min-h-[140px]" label="Template Gallery Ad Zone" />
        <TemplateGallery templates={templateSummaries} />
      </div>
    </div>
  );
}
