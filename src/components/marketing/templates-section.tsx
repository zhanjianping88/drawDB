import { templateSummaries } from "@/data/templates";
import { SectionHeading } from "@/components/marketing/section-heading";
import { TemplateGallery } from "@/components/marketing/template-gallery";

export function TemplatesSection() {
  return (
    <section className="py-20">
      <div className="container-shell space-y-10">
        <SectionHeading
          description="Template pages widen keyword coverage and create direct bridges from informational search intent into the product."
          eyebrow="Database Templates"
          title="Schema templates that work as both acquisition assets and product entry points."
        />
        <TemplateGallery templates={templateSummaries.slice(0, 4)} />
      </div>
    </section>
  );
}
