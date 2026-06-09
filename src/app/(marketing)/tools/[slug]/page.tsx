import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, Database, LayoutTemplate, Sparkles } from "lucide-react";

import { AdPlaceholder } from "@/components/ads/ad-placeholder";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { templateSummaries } from "@/data/templates";
import { getToolPageBySlug, relatedToolSummaries, toolPages } from "@/data/tools";
import { getToolEditorHref } from "@/lib/editor/links";
import { buildBreadcrumbs } from "@/lib/seo/breadcrumbs";
import { createMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildFaqSchema, buildWebApplicationSchema } from "@/lib/seo/schema";

type ToolPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return toolPages.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolPageBySlug(slug);

  if (!tool) {
    return createMetadata({
      title: "Tool Not Found | drawDB",
      description: "The requested database tool page could not be found.",
      path: "/tools",
      noIndex: true,
    });
  }

  return createMetadata({
    title: tool.title,
    description: tool.description,
    path: tool.path,
    keywords: tool.keywords,
  });
}

function MetaStrip({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <div
          className="rounded-full border border-white/8 bg-black/18 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
          key={item}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function PreviewPanel({
  title,
  items,
  accent = false,
}: {
  title: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <div className="rounded-[1.25rem] border border-white/8 bg-black/18 p-4">
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100/80">{title}</p>
      <div className="space-y-3 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <div
            className={
              accent && index === 0
                ? "rounded-xl bg-blue-500/15 px-3 py-2 text-blue-100"
                : "rounded-xl border border-white/8 bg-white/4 px-3 py-2"
            }
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function SchemaEditorPreview() {
  return (
    <div className="grid gap-4 lg:grid-cols-[200px,1fr,220px]">
      <PreviewPanel accent items={["users", "products", "orders", "order_items"]} title="Schema objects" />
      <div className="surface-grid relative min-h-[340px] rounded-[1.5rem] border border-white/8 bg-[#0d1117] p-5">
        <div className="mesh-card panel-glow absolute left-7 top-10 w-44 rounded-2xl p-4">
          <p className="mb-3 text-sm font-semibold text-white">users</p>
          <div className="space-y-2 text-xs text-muted-foreground">
            <div className="rounded-lg bg-white/4 px-2.5 py-2">id</div>
            <div className="rounded-lg bg-white/4 px-2.5 py-2">email</div>
            <div className="rounded-lg bg-white/4 px-2.5 py-2">created_at</div>
          </div>
        </div>
        <div className="mesh-card panel-glow absolute right-8 top-16 w-44 rounded-2xl p-4">
          <p className="mb-3 text-sm font-semibold text-white">orders</p>
          <div className="space-y-2 text-xs text-muted-foreground">
            <div className="rounded-lg bg-white/4 px-2.5 py-2">id</div>
            <div className="rounded-lg bg-white/4 px-2.5 py-2">user_id</div>
            <div className="rounded-lg bg-white/4 px-2.5 py-2">total_cents</div>
          </div>
        </div>
        <div className="mesh-card panel-glow absolute bottom-10 left-[38%] w-44 rounded-2xl p-4">
          <p className="mb-3 text-sm font-semibold text-white">order_items</p>
          <div className="space-y-2 text-xs text-muted-foreground">
            <div className="rounded-lg bg-white/4 px-2.5 py-2">order_id</div>
            <div className="rounded-lg bg-white/4 px-2.5 py-2">product_id</div>
            <div className="rounded-lg bg-white/4 px-2.5 py-2">quantity</div>
          </div>
        </div>
        <svg className="pointer-events-none absolute inset-0 h-full w-full" fill="none">
          <path d="M178 118 C 250 118, 270 118, 392 132" stroke="rgba(34,211,238,0.7)" strokeWidth="2" />
          <path d="M392 164 C 392 220, 320 248, 292 272" stroke="rgba(47,107,255,0.8)" strokeWidth="2" />
        </svg>
      </div>
      <PreviewPanel
        items={["BIGSERIAL keys", "TIMESTAMPTZ audit fields", "Reference integrity", "Normalization review"]}
        title="Workflow focus"
      />
    </div>
  );
}

export default async function ToolDetailPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolPageBySlug(slug);

  if (!tool) {
    notFound();
  }

  const breadcrumbs = buildBreadcrumbs([
    { name: "Tools", href: "/tools" },
    { name: tool.categoryLabel, href: "/tools" },
    { name: tool.shortTitle, href: tool.path },
  ]);

  const relatedTemplates = templateSummaries.filter((template) =>
    tool.relatedTemplateSlugs.includes(template.slug),
  );
  const relatedTools = relatedToolSummaries.filter((item) => tool.relatedToolSlugs.includes(item.slug));
  const editorHref = getToolEditorHref(tool);

  const faqSchema = buildFaqSchema(tool.faqs);
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);
  const webAppSchema = buildWebApplicationSchema({
    name: `drawDB ${tool.shortTitle}`,
    description: tool.description,
    path: tool.path,
    keywords: tool.keywords,
    applicationSubCategory: tool.shortTitle,
  });

  return (
    <>
      <JsonLd data={webAppSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <section className="py-16 md:py-20">
        <div className="container-shell space-y-8">
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-8 xl:grid-cols-[1.02fr,0.98fr]">
            <div className="space-y-6">
              <Badge>
                <Sparkles className="h-3.5 w-3.5" />
                {tool.heroEyebrow}
              </Badge>
              <div className="space-y-4">
                <h1 className="text-balance font-heading text-4xl font-semibold tracking-tight text-white md:text-6xl">
                  {tool.h1}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">{tool.intro}</p>
              </div>
              <MetaStrip items={[tool.database, tool.categoryLabel, "Editor ready"]} />
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={editorHref}>
                    Open In Editor
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/templates">{tool.heroSecondaryLabel}</Link>
                </Button>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {tool.benefits.map((benefit) => (
                  <div className="mesh-card rounded-[1.15rem] p-4 text-sm leading-6 text-muted-foreground" key={benefit}>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="mesh-card panel-glow p-6">
                <div className="mb-5 grid gap-4 md:grid-cols-[1.05fr,0.95fr]">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100/80">Tool workspace</p>
                    <p className="mt-3 font-heading text-2xl font-semibold text-white">
                      Open a live schema session tuned for this search intent.
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Launch a real editor session with the database workflow pre-selected.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/8 bg-black/18 p-4">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-blue-100/80">Output</p>
                      <p className="mt-2 text-sm text-white">SQL export flow</p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-black/18 p-4">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-100/80">State</p>
                      <p className="mt-2 text-sm text-white">Editor live</p>
                    </div>
                  </div>
                </div>
                <SchemaEditorPreview />
              </Card>
              <AdPlaceholder className="min-h-[150px]" label="Tool Hero Ad Zone" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell grid gap-8 xl:grid-cols-[0.95fr,1.05fr]">
          <div className="space-y-8">
            <SectionHeading
              title={`How to use ${tool.shortTitle.toLowerCase()} effectively`}
              description="This content block is generated from the tool data system so future pages can stay specific without becoming thin."
            />
            <div className="space-y-4">
              {tool.steps.map((step, index) => (
                <Card className="mesh-card p-6" key={step.title}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-sm font-semibold text-blue-100">
                      {index + 1}
                    </div>
                    <div>
                      <h2 className="font-heading text-xl font-semibold text-white">{step.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <AdPlaceholder className="min-h-[180px]" label="How-To Sidebar Ad Zone" />
            <Card className="mesh-card p-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-100/80">Page logic</p>
              <p className="mt-3 font-heading text-xl font-semibold text-white">
                This page is designed to rank and convert into usage.
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                The goal is not only to rank for PostgreSQL ERD terms, but also to establish a
                scalable content and conversion pattern we can reuse across every future tool page.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell space-y-10">
          <SectionHeading
            title={`What makes ${tool.shortTitle.toLowerCase()} useful for this search intent`}
            description="Feature blocks should stay technically credible and tailored to the exact keyword, not reused as thin filler."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {tool.features.map((feature) => (
              <Card className="mesh-card h-full p-6" key={feature.title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/8 bg-white/4">
                  <Database className="h-5 w-5 text-cyan-300" />
                </span>
                <h2 className="mt-5 font-heading text-xl font-semibold text-white">{feature.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell grid gap-8 xl:grid-cols-[1.08fr,0.92fr]">
          <Card className="mesh-card panel-glow overflow-hidden">
            <CardHeader>
              <Badge variant="blue">PostgreSQL Schema Example</Badge>
              <CardTitle className="mt-4">{tool.schemaExample.title}</CardTitle>
              <CardDescription>
                Use SQL examples like this to anchor topical relevance and support practical user intent.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="surface-grid overflow-x-auto rounded-[1.25rem] border border-white/8 bg-[#0d1117] p-5 text-sm leading-7 text-blue-100">
                <code>{tool.schemaExample.sql}</code>
              </pre>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <AdPlaceholder className="min-h-[180px]" label="Schema Example Ad Zone" />
            <Card className="mesh-card p-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-blue-100/80">Implementation bridge</p>
              <p className="mt-3 font-heading text-xl font-semibold text-white">Why show SQL on the landing page?</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                It bridges informational search intent with implementation depth, and it helps the
                page feel closer to an engineer workflow than a generic marketing page.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell grid gap-8 xl:grid-cols-[0.95fr,1.05fr]">
          <div className="space-y-6">
            <SectionHeading
              title={`Frequently asked questions about ${tool.shortTitle.toLowerCase()}`}
              description="These answers are written to support both user trust and FAQ structured data."
            />
            <AdPlaceholder className="min-h-[180px]" label="FAQ Ad Zone" />
          </div>
          <Card className="mesh-card panel-glow p-6">
            <Accordion collapsible type="single">
              {tool.faqs.map((faq, index) => (
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
              title="Related database tools for deeper schema planning"
              description="Interlink engine pages, broad-intent tool pages, and schema utility pages to create a stronger SEO cluster."
            />
            <div className="grid gap-6">
              {relatedTools.map((item) => (
                <Card className="mesh-card p-6" key={item.slug}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-heading text-xl font-semibold text-white">{item.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
                    </div>
                    <Button asChild size="sm" variant="outline">
                      <Link href={item.href}>Open</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <SectionHeading
              title="Templates that match this tool's design intent"
              description="Template links help capture use-case demand and move users deeper into the product ecosystem."
            />
            <div className="grid gap-6">
              {relatedTemplates.map((template) => (
                <Card className="mesh-card p-6" key={template.slug}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <Badge variant="muted">
                          <LayoutTemplate className="h-3.5 w-3.5" />
                          {template.database}
                        </Badge>
                      </div>
                      <h2 className="font-heading text-xl font-semibold text-white">{template.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{template.description}</p>
                    </div>
                    <Button asChild size="sm" variant="outline">
                      <Link href={template.href}>View</Link>
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
