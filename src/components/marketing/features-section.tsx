import { featureItems } from "@/data/home";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/marketing/section-heading";

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container-shell space-y-10">
        <SectionHeading
          description="The platform layer should look opinionated and technical, with clearer product hierarchy than a generic six-card grid."
          eyebrow="Feature Grid"
          title="A product foundation that feels deliberate, technical, and launch-ready."
        />
        <div className="grid gap-6 xl:grid-cols-[1.1fr,0.9fr]">
          <Card className="mesh-card panel-glow overflow-hidden p-6">
            <div className="grid gap-6 lg:grid-cols-[0.92fr,1.08fr]">
              <div className="space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100/80">
                  Platform thesis
                </p>
                <h3 className="font-heading text-3xl font-semibold tracking-tight text-white">
                  Search, templates, and real tooling should feel like one system.
                </h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  The best version of this brand is not a pile of SEO pages. It is a database design
                  platform where each content route leads naturally into editor usage, schema iteration,
                  and future premium workflows.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {featureItems.slice(0, 4).map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div className="rounded-[1.15rem] border border-white/8 bg-black/18 p-4" key={feature.title}>
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-white/4">
                        <Icon className="h-4 w-4 text-cyan-300" />
                      </span>
                      <h4 className="mt-4 font-heading text-lg font-semibold text-white">{feature.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
            {featureItems.slice(4).map((feature) => {
              const Icon = feature.icon;

              return (
                <Card className="mesh-card p-6" key={feature.title}>
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
      </div>
    </section>
  );
}
