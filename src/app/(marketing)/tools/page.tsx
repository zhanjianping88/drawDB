import { createMetadata } from "@/lib/seo/metadata";
import { AdPlaceholder } from "@/components/ads/ad-placeholder";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ToolDirectory } from "@/components/marketing/tool-directory";
import { toolPages } from "@/data/tools";

export const metadata = createMetadata({
  title: "drawDB Tools | Database Schema and ERD Tooling",
  description: "Explore database schema generators, ERD tools, SQL design tools, and engine-specific database workflow pages.",
  path: "/tools",
});

export default function ToolsPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Tool Directory"
          title="Explore the full database tools library by category."
          description="Browse schema generators, ER diagram tools, SQL design pages, and engine-specific database workflows from one searchable hub."
        />
        <AdPlaceholder className="min-h-[140px]" label="Tools Directory Ad Zone" />
        <ToolDirectory tools={toolPages} />
      </div>
    </div>
  );
}
