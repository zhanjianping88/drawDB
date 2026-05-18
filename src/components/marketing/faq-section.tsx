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
            description="Keep FAQ content useful enough for search and specific enough to support structured data later."
            eyebrow="FAQ"
            title="Technical positioning answers for the first launch."
          />
          <AdPlaceholder className="min-h-[220px]" label="Homepage FAQ Ad Zone" />
        </div>
        <Card className="p-6">
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
