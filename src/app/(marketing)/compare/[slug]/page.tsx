import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check, Minus, Scale, Wrench } from "lucide-react";

import { AdPlaceholder } from "@/components/ads/ad-placeholder";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { comparePages, getComparePageBySlug } from "@/data/compare";
import { templateSummaries } from "@/data/templates";
import { relatedToolSummaries } from "@/data/tools";
import { buildBreadcrumbs } from "@/lib/seo/breadcrumbs";
import { createMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from "@/lib/seo/schema";

type ComparePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function MetaStrip({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
      {items.map((item) => (
        <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

export async function generateStaticParams() {
  return comparePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: ComparePageProps): Promise<Metadata> {
  const { slug } = await params;
  const compare = getComparePageBySlug(slug);

  if (!compare) {
    return createMetadata({
      title: "Comparison Not Found | SchemaForge",
      description: "The requested comparison page could not be found.",
      path: "/compare",
      noIndex: true,
    });
  }

  return createMetadata({
    title: compare.title,
    description: compare.description,
    path: compare.path,
    keywords: [
      compare.keyword,
      `${compare.leftName} vs ${compare.rightName}`,
      `which is better ${compare.leftName} or ${compare.rightName}`,
      "database comparison",
    ],
  });
}

export default async function CompareDetailPage({ params }: ComparePageProps) {
  const { slug } = await params;
  const compare = getComparePageBySlug(slug);

  if (!compare) {
    notFound();
  }

  const breadcrumbs = buildBreadcrumbs([
    { name: "Compare", href: "/compare" },
    { name: `${compare.leftName} vs ${compare.rightName}`, href: compare.path },
  ]);

  const relatedTools = relatedToolSummaries.filter((tool) =>
    compare.relatedToolSlugs.includes(tool.slug),
  );
  const relatedTemplates = templateSummaries.filter((template) =>
    compare.relatedTemplateSlugs.includes(template.slug),
  );

  const webPageSchema = buildWebPageSchema({
    name: `${compare.leftName} vs ${compare.rightName}`,
    description: compare.description,
    path: compare.path,
  });
  const faqSchema = buildFaqSchema(compare.faqs);
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="py-16 md:py-20">
        <div className="container-shell space-y-8">
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-8 xl:grid-cols-[1.02fr,0.98fr]">
            <div className="space-y-6">
              <Badge>
                <Scale className="h-3.5 w-3.5" />
                Comparison Page
              </Badge>
              <div className="space-y-4">
                <h1 className="text-balance font-heading text-4xl font-semibold tracking-tight text-white md:text-6xl">
                  {compare.h1}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">{compare.intro}</p>
              </div>
              <MetaStrip
                items={[
                  "Decision-stage search",
                  `${compare.leftName} vs ${compare.rightName}`,
                  "Internal link hub",
                ]}
              />
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/compare">Browse Comparisons</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/tools">Explore Related Tools</Link>
                </Button>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="mesh-card rounded-[1.5rem] border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Intent</p>
                  <p className="mt-2 text-sm leading-6 text-white">Which option fits a real workflow better?</p>
                </div>
                <div className="mesh-card rounded-[1.5rem] border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Reader stage</p>
                  <p className="mt-2 text-sm leading-6 text-white">Researching tradeoffs before selecting a stack.</p>
                </div>
                <div className="mesh-card rounded-[1.5rem] border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Output</p>
                  <p className="mt-2 text-sm leading-6 text-white">A clearer choice plus next-step links.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="mesh-card panel-glow overflow-hidden border-white/10">
                <CardHeader>
                  <Badge variant="blue">Decision Snapshot</Badge>
                  <CardTitle className="mt-4">
                    {compare.leftName} vs {compare.rightName}
                  </CardTitle>
                  <CardDescription>
                    Use this matrix to understand the practical difference quickly before reading the deeper breakdown.
                  </CardDescription>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-white/8">
                        <th className="px-4 py-3 text-muted-foreground">Criteria</th>
                        <th className="px-4 py-3 text-white">{compare.leftName}</th>
                        <th className="px-4 py-3 text-white">{compare.rightName}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {compare.table.map((row) => (
                        <tr className="border-b border-white/6 align-top last:border-b-0" key={row.label}>
                          <td className="px-4 py-4 font-medium text-white">{row.label}</td>
                          <td className="px-4 py-4 text-muted-foreground">{row.left}</td>
                          <td className="px-4 py-4 text-muted-foreground">{row.right}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
              <Card className="mesh-card rounded-[1.6rem] border border-white/10 p-6">
                <p className="font-heading text-xl font-semibold text-white">Quick answer</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{compare.decisionSummary}</p>
              </Card>
              <AdPlaceholder className="min-h-[150px]" label="Comparison Hero Ad Zone" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell grid gap-8 xl:grid-cols-2">
          <Card className="mesh-card border-white/10 p-6">
            <CardHeader className="px-0 pt-0">
              <CardTitle>{compare.leftName} strengths and constraints</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 px-0 pb-0">
              <div>
                <p className="mb-3 text-sm font-semibold text-white">Pros</p>
                <div className="space-y-3">
                  {compare.leftPros.map((item) => (
                    <div className="rounded-[1.25rem] border border-white/8 bg-black/25 p-4" key={item}>
                      <div className="flex gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                        <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold text-white">Cons</p>
                <div className="space-y-3">
                  {compare.leftCons.map((item) => (
                    <div className="rounded-[1.25rem] border border-white/8 bg-black/25 p-4" key={item}>
                      <div className="flex gap-3">
                        <Minus className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                        <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mesh-card border-white/10 p-6">
            <CardHeader className="px-0 pt-0">
              <CardTitle>{compare.rightName} strengths and constraints</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 px-0 pb-0">
              <div>
                <p className="mb-3 text-sm font-semibold text-white">Pros</p>
                <div className="space-y-3">
                  {compare.rightPros.map((item) => (
                    <div className="rounded-[1.25rem] border border-white/8 bg-black/25 p-4" key={item}>
                      <div className="flex gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                        <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold text-white">Cons</p>
                <div className="space-y-3">
                  {compare.rightCons.map((item) => (
                    <div className="rounded-[1.25rem] border border-white/8 bg-black/25 p-4" key={item}>
                      <div className="flex gap-3">
                        <Minus className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                        <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell grid gap-8 xl:grid-cols-[1.05fr,0.95fr]">
          <div className="space-y-8">
            <SectionHeading
              title={`When ${compare.leftName} makes more sense and when ${compare.rightName} makes more sense`}
              description="The goal is not to crown a universal winner. It is to match the option to the product, team, and workflow behind the query."
            />
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="mesh-card border-white/10 p-6">
                <CardTitle className="text-xl">{compare.leftName}</CardTitle>
                <div className="mt-4 space-y-3">
                  {compare.useCases.left.map((item) => (
                    <div
                      className="rounded-[1.25rem] border border-white/8 bg-black/25 px-4 py-3 text-sm leading-6 text-muted-foreground"
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="mesh-card border-white/10 p-6">
                <CardTitle className="text-xl">{compare.rightName}</CardTitle>
                <div className="mt-4 space-y-3">
                  {compare.useCases.right.map((item) => (
                    <div
                      className="rounded-[1.25rem] border border-white/8 bg-black/25 px-4 py-3 text-sm leading-6 text-muted-foreground"
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
          <div className="space-y-6">
            <AdPlaceholder className="min-h-[180px]" label="Use Cases Ad Zone" />
            <Card className="mesh-card rounded-[1.6rem] border border-white/10 p-6">
              <p className="font-heading text-xl font-semibold text-white">Why this section matters</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Searchers at this stage usually know both names already. What they need is fit: team shape, project
                complexity, and tradeoff tolerance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell space-y-10">
          <SectionHeading
            title={`What actually drives the ${compare.leftName} vs ${compare.rightName} decision`}
            description="This feature breakdown pushes beyond brand familiarity into the dimensions that typically decide the stack."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {compare.featureBreakdown.map((item) => (
              <Card className="mesh-card border-white/10 p-6" key={item.title}>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell grid gap-8 xl:grid-cols-[0.95fr,1.05fr]">
          <div className="space-y-6">
            <SectionHeading
              title={`Frequently asked questions about ${compare.leftName} vs ${compare.rightName}`}
              description="These FAQs support both comparison-stage search intent and FAQ structured data."
            />
            <AdPlaceholder className="min-h-[180px]" label="Compare FAQ Ad Zone" />
          </div>
          <Card className="mesh-card panel-glow border-white/10 p-6">
            <Accordion collapsible type="single">
              {compare.faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell grid gap-8 xl:grid-cols-2">
          <div className="space-y-8">
            <SectionHeading
              title="Related database tools for deeper research"
              description="Decision pages should move naturally into product workflows, not end at abstract comparison."
            />
            <div className="grid gap-6">
              {relatedTools.map((tool) => (
                <Card className="mesh-card border-white/10 p-6" key={tool.slug}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <Badge variant="muted">
                          <Wrench className="h-3.5 w-3.5" />
                          Tool
                        </Badge>
                      </div>
                      <h2 className="font-heading text-xl font-semibold text-white">{tool.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{tool.description}</p>
                    </div>
                    <Button asChild size="sm" variant="outline">
                      <Link href={tool.href}>View</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <SectionHeading
              title="Related schema templates to ground the decision"
              description="Template links keep the comparison practical by giving readers a concrete model to inspect next."
            />
            <div className="grid gap-6">
              {relatedTemplates.map((template) => (
                <Card className="mesh-card border-white/10 p-6" key={template.slug}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge className="mb-3" variant="muted">
                        {template.database}
                      </Badge>
                      <h2 className="font-heading text-xl font-semibold text-white">{template.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{template.description}</p>
                    </div>
                    <Button asChild size="sm" variant="outline">
                      <Link href={template.href}>Open</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
