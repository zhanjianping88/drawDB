import { featureItems } from "@/data/home";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/marketing/section-heading";

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container-shell space-y-10">
        <SectionHeading
          description="The marketing site should feel like a serious product platform from day one, even before the editor is integrated."
          eyebrow="Feature Grid"
          title="A launch-ready foundation for SEO growth, product expansion, and monetization."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featureItems.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card className="p-6" key={feature.title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/8 bg-white/4">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </span>
                <h3 className="mt-6 font-heading text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
