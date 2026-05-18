import { AdPlaceholder } from "@/components/ads/ad-placeholder";
import { EditorPreviewSection } from "@/components/marketing/editor-preview-section";
import { FaqSection } from "@/components/marketing/faq-section";
import { FeaturesSection } from "@/components/marketing/features-section";
import { HeroSection } from "@/components/marketing/hero-section";
import { PopularToolsSection } from "@/components/marketing/popular-tools-section";
import { TemplatesSection } from "@/components/marketing/templates-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="container-shell pb-4">
        <AdPlaceholder className="min-h-[140px]" label="Homepage Hero Ad Zone" />
      </div>
      <PopularToolsSection />
      <EditorPreviewSection />
      <TemplatesSection />
      <FeaturesSection />
      <FaqSection />
    </>
  );
}
