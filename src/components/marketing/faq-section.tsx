import { faqItems } from "@/data/home";
import { AdPlaceholder } from "@/components/ads/ad-placeholder";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/marketing/section-heading";

export function FaqSection() {
  return (
    <section className="py-20">
      <div className="container-shell grid gap-8 xl:grid-cols-[0.95fr,1.05fr]">
        <div className="space-y-6">
          <SectionHeading
            description="Keep FAQ content useful enough for search and concrete enough to reassure serious builders that the platform solves a real workflow."
            title="Answer the adoption questions before the user has to ask them."
          />
          <Card className="mesh-card p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100/80">What changed</p>
            <div className="mt-4 space-y-3">
              {[
                "Real editor route is now connected under /app",
                "Template pages can open directly into an editable schema",
                "Tool pages now feel like workflow entry points instead of content cul-de-sacs",
              ].map((item) => (
                <div className="rounded-2xl border border-white/8 bg-black/18 px-4 py-3 text-sm leading-6 text-muted-foreground" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </Card>
          <AdPlaceholder className="min-h-[220px]" label="Homepage FAQ Ad Zone" />
        </div>
        <Card className="mesh-card panel-glow p-6">
          <Accordion className="w-full" collapsible type="single">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
}
