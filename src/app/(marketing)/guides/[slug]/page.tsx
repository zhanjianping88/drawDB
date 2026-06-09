import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BookOpen, Link2, Scale, Wrench } from "lucide-react";

import { AdPlaceholder } from "@/components/ads/ad-placeholder";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { compareSummaries } from "@/data/compare";
import { getGuidePageBySlug, guidePages } from "@/data/guides";
import { templateSummaries } from "@/data/templates";
import { relatedToolSummaries } from "@/data/tools";
import { buildBreadcrumbs } from "@/lib/seo/breadcrumbs";
import { createMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo/schema";

type GuidePageProps = {
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
  return guidePages.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuidePageBySlug(slug);

  if (!guide) {
    return createMetadata({
      title: "Guide Not Found | drawDB",
      description: "The requested guide could not be found.",
      path: "/guides",
      noIndex: true,
    });
  }

  return createMetadata({
    title: guide.title,
    description: guide.description,
    path: guide.path,
    keywords: [
      guide.h1.toLowerCase(),
      "database design guide",
      "schema design guide",
      "database best practices",
    ],
    type: "article",
  });
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuidePageBySlug(slug);

  if (!guide) {
    notFound();
  }

  const breadcrumbs = buildBreadcrumbs([
    { name: "Guides", href: "/guides" },
    { name: guide.h1, href: guide.path },
  ]);

  const relatedTools = relatedToolSummaries.filter((tool) =>
    guide.relatedToolSlugs.includes(tool.slug),
  );
  const relatedTemplates = templateSummaries.filter((template) =>
    guide.relatedTemplateSlugs.includes(template.slug),
  );
  const relatedCompares = compareSummaries.filter((compare) =>
    guide.relatedCompareSlugs.includes(compare.slug),
  );

  const articleSchema = buildArticleSchema({
    headline: guide.h1,
    description: guide.description,
    path: guide.path,
  });
  const faqSchema = buildFaqSchema(guide.faqs);
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="py-16 md:py-20">
        <div className="container-shell space-y-8">
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-8 xl:grid-cols-[0.92fr,1.08fr]">
            <div className="space-y-6">
              <Badge>
                <BookOpen className="h-3.5 w-3.5" />
                {guide.category}
              </Badge>
              <div className="space-y-4">
                <h1 className="text-balance font-heading text-4xl font-semibold tracking-tight text-white md:text-6xl">
                  {guide.h1}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">{guide.intro}</p>
              </div>
              <MetaStrip
                items={[guide.readingTime, `${guide.sections.length} sections`, "Editorial guide system"]}
              />
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/guides">Browse Guides</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/tools">Explore Related Tools</Link>
                </Button>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="mesh-card rounded-[1.5rem] border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Intent</p>
                  <p className="mt-2 text-sm leading-6 text-white">Teach a topic and route readers into product pages.</p>
                </div>
                <div className="mesh-card rounded-[1.5rem] border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Format</p>
                  <p className="mt-2 text-sm leading-6 text-white">Structured sections, examples, tables, and checklists.</p>
                </div>
                <div className="mesh-card rounded-[1.5rem] border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Outcome</p>
                  <p className="mt-2 text-sm leading-6 text-white">Understanding with direct next steps into tools and templates.</p>
                </div>
              </div>
            </div>

            <Card className="mesh-card panel-glow border-white/10 p-6">
              <CardHeader className="px-0 pt-0">
                <Badge variant="blue">Table of Contents</Badge>
                <CardTitle className="mt-4">What this guide covers</CardTitle>
                <CardDescription>
                  Use the contents panel to move through sections, examples, tables, and checklists more quickly.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 px-0 pb-0">
                {guide.sections.map((section) => (
                  <a
                    className="flex items-start gap-3 rounded-[1.25rem] border border-white/8 bg-black/25 px-4 py-3 text-sm text-muted-foreground transition-colors hover:text-white"
                    href={`#${section.id}`}
                    key={section.id}
                  >
                    <Link2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <span>{section.title}</span>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell grid gap-8 xl:grid-cols-[0.92fr,1.08fr]">
          <div className="space-y-6">
            <AdPlaceholder className="min-h-[180px]" label="Guide Intro Ad Zone" />
            <Card className="mesh-card rounded-[1.6rem] border border-white/10 p-6">
              <p className="font-heading text-xl font-semibold text-white">Why this guide exists</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                This guide is designed to connect educational intent with a practical next click, so readers can move
                from theory into tools, templates, and comparison pages instead of stopping at a summary.
              </p>
            </Card>
          </div>

          <div className="space-y-8">
            {guide.sections.map((section) => (
              <article className="mesh-card rounded-[1.8rem] border border-white/10 p-6 md:p-7" id={section.id} key={section.id}>
                <div className="space-y-5">
                  <div className="space-y-3">
                    <h2 className="font-heading text-3xl font-semibold text-white">{section.title}</h2>
                    <p className="text-base leading-7 text-muted-foreground">{section.summary}</p>
                  </div>

                  <div className="space-y-3">
                    {section.points.map((point) => (
                      <p
                        className="rounded-[1.25rem] border border-white/8 bg-black/25 px-4 py-3 text-sm leading-7 text-muted-foreground"
                        key={point}
                      >
                        {point}
                      </p>
                    ))}
                  </div>

                  {section.table ? (
                    <div className="surface-grid overflow-x-auto rounded-[1.25rem] border border-white/8 bg-[#0d1117] p-4">
                      <table className="min-w-full text-left text-sm">
                        <thead>
                          <tr className="border-b border-white/8">
                            {section.table.headers.map((header) => (
                              <th className="px-4 py-3 text-white" key={header}>
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, index) => (
                            <tr className="border-b border-white/6 last:border-b-0" key={`${section.id}-${index}`}>
                              {row.map((cell) => (
                                <td className="px-4 py-4 text-muted-foreground" key={cell}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}

                  {section.example ? (
                    <Card className="mesh-card rounded-[1.25rem] border border-white/8 p-6">
                      <p className="font-medium text-white">Example</p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{section.example}</p>
                    </Card>
                  ) : null}

                  {section.checklist ? (
                    <Card className="mesh-card rounded-[1.25rem] border border-white/8 p-6">
                      <p className="font-medium text-white">Checklist</p>
                      <div className="mt-4 space-y-3">
                        {section.checklist.map((item) => (
                          <div
                            className="rounded-[1.1rem] border border-white/8 bg-black/25 px-4 py-3 text-sm leading-6 text-muted-foreground"
                            key={item}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </Card>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell grid gap-8 xl:grid-cols-[0.95fr,1.05fr]">
          <div className="space-y-6">
            <SectionHeading
              title={`Frequently asked questions about ${guide.h1.toLowerCase()}`}
              description="These FAQs support long-tail educational search intent and add structured data to the page."
            />
            <AdPlaceholder className="min-h-[180px]" label="Guide FAQ Ad Zone" />
          </div>
          <Card className="mesh-card panel-glow border-white/10 p-6">
            <Accordion collapsible type="single">
              {guide.faqs.map((faq, index) => (
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
        <div className="container-shell grid gap-8 xl:grid-cols-3">
          <div className="space-y-8">
            <SectionHeading
              title="Tools to apply this guide"
              description="Move from understanding into action with related schema and ERD tools."
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
              title="Templates that make the ideas concrete"
              description="Use real schema templates to turn the guide’s advice into something structural and reviewable."
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

          <div className="space-y-8">
            <SectionHeading
              title="Comparison pages that extend the topic cluster"
              description="These pages help readers move from learning a concept into choosing a database, tool, or workflow."
            />
            <div className="grid gap-6">
              {relatedCompares.map((compare) => (
                <Card className="mesh-card border-white/10 p-6" key={compare.slug}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <Badge variant="muted">
                          <Scale className="h-3.5 w-3.5" />
                          Compare
                        </Badge>
                      </div>
                      <h2 className="font-heading text-xl font-semibold text-white">
                        {compare.leftName} vs {compare.rightName}
                      </h2>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{compare.description}</p>
                    </div>
                    <Button asChild size="sm" variant="outline">
                      <Link href={compare.href}>Read</Link>
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
