import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, Database, LayoutTemplate, Sparkles, Wrench } from "lucide-react";

import { AdPlaceholder } from "@/components/ads/ad-placeholder";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getTemplatePageBySlug, templatePages, templateSummaries } from "@/data/templates";
import { relatedToolSummaries } from "@/data/tools";
import { getTemplateEditorHref } from "@/lib/editor/links";
import { buildBreadcrumbs } from "@/lib/seo/breadcrumbs";
import { createMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema, buildFaqSchema, buildWebPageSchema } from "@/lib/seo/schema";

type TemplatePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return templatePages.map((template) => ({ slug: template.slug }));
}

export async function generateMetadata({ params }: TemplatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplatePageBySlug(slug);

  if (!template) {
    return createMetadata({
      title: "Template Not Found | SchemaForge",
      description: "The requested database schema template could not be found.",
      path: "/templates",
      noIndex: true,
    });
  }

  return createMetadata({
    title: template.title,
    description: template.description,
    path: template.path,
    keywords: [
      template.keyword,
      `${template.shortTitle.toLowerCase()} template`,
      "database schema template",
      "database design example",
      "sql schema example",
    ],
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

function TemplatePreview({ tableNames }: { tableNames: string[] }) {
  const nodes = tableNames.slice(0, 6);

  return (
    <div className="grid gap-4 lg:grid-cols-[200px,1fr,220px]">
      <div className="rounded-[1.25rem] border border-white/8 bg-black/18 p-4">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100/80">Tables</p>
        <div className="space-y-3 text-sm text-muted-foreground">
          {nodes.slice(0, 4).map((node, index) => (
            <div
              className={
                index === 0
                  ? "rounded-xl bg-blue-500/15 px-3 py-2 text-blue-100"
                  : "rounded-xl border border-white/8 bg-white/4 px-3 py-2"
              }
              key={node}
            >
              {node}
            </div>
          ))}
        </div>
      </div>
      <div className="surface-grid relative min-h-[340px] rounded-[1.5rem] border border-white/8 bg-[#0d1117] p-5">
        {nodes.slice(0, 3).map((node, index) => (
          <div
            className="mesh-card panel-glow absolute w-40 rounded-2xl p-4"
            key={node}
            style={{
              left: `${12 + index * 26}%`,
              top: `${index % 2 === 0 ? 12 : 42}%`,
            }}
          >
            <p className="mb-3 text-sm font-semibold text-white">{node}</p>
            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="rounded-lg bg-white/4 px-2.5 py-2">id</div>
              <div className="rounded-lg bg-white/4 px-2.5 py-2">name</div>
              <div className="rounded-lg bg-white/4 px-2.5 py-2">created_at</div>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-[1.25rem] border border-white/8 bg-black/18 p-4">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-100/80">Intent</p>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="rounded-xl border border-white/8 bg-black/20 px-3 py-2">Schema planning</div>
          <div className="rounded-xl border border-white/8 bg-black/20 px-3 py-2">Use-case SEO</div>
          <div className="rounded-xl border border-white/8 bg-black/20 px-3 py-2">SQL reference</div>
          <div className="rounded-xl border border-white/8 bg-black/20 px-3 py-2">Future editor import</div>
        </div>
      </div>
    </div>
  );
}

export default async function TemplateDetailPage({ params }: TemplatePageProps) {
  const { slug } = await params;
  const template = getTemplatePageBySlug(slug);

  if (!template) {
    notFound();
  }

  const breadcrumbs = buildBreadcrumbs([
    { name: "Templates", href: "/templates" },
    { name: template.database, href: "/templates" },
    { name: template.shortTitle, href: template.path },
  ]);

  const relatedTemplates = templateSummaries.filter((item) =>
    template.relatedTemplateSlugs.includes(item.slug),
  );
  const relatedTools = relatedToolSummaries.filter((item) =>
    template.relatedToolSlugs.includes(item.slug),
  );
  const editorHref = getTemplateEditorHref(template);

  const webPageSchema = buildWebPageSchema({
    name: template.shortTitle,
    description: template.description,
    path: template.path,
  });
  const faqSchema = buildFaqSchema(template.faqs);
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
                <Sparkles className="h-3.5 w-3.5" />
                {template.heroEyebrow}
              </Badge>
              <div className="space-y-4">
                <h1 className="text-balance font-heading text-4xl font-semibold tracking-tight text-white md:text-6xl">
                  {template.shortTitle} template for faster schema planning.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">{template.heroDescription}</p>
              </div>
              <MetaStrip items={[template.database, template.category, "Editor ready"]} />
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href={editorHref}>
                    Open In Editor
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/tools">View Related Tools</Link>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <Card className="mesh-card p-5">
                  <p className="font-heading text-2xl font-semibold text-white">{template.tableCount}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Suggested core tables</p>
                </Card>
                <Card className="mesh-card p-5">
                  <p className="font-heading text-2xl font-semibold text-white">{template.database}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Primary template engine</p>
                </Card>
                <Card className="mesh-card p-5">
                  <p className="font-heading text-2xl font-semibold text-white">{template.category}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">Search intent cluster</p>
                </Card>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="mesh-card panel-glow p-6">
                <div className="mb-5 grid gap-4 md:grid-cols-[1.05fr,0.95fr]">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100/80">Template workspace</p>
                    <p className="mt-3 font-heading text-2xl font-semibold text-white">
                      Move from research to a real editable schema in one click.
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Load this schema into the live SchemaForge editor and keep editing from there.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/8 bg-black/18 p-4">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-blue-100/80">Flow</p>
                      <p className="mt-2 text-sm text-white">Open and customize</p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-black/18 p-4">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-100/80">State</p>
                      <p className="mt-2 text-sm text-white">Live template</p>
                    </div>
                  </div>
                </div>
                <TemplatePreview tableNames={template.tables.map((table) => table.name)} />
              </Card>
              <AdPlaceholder className="min-h-[150px]" label="Template Hero Ad Zone" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell grid gap-8 xl:grid-cols-[1.04fr,0.96fr]">
          <Card className="mesh-card panel-glow p-6">
            <CardHeader className="px-0 pt-0">
              <Badge variant="blue">Table List</Badge>
              <CardTitle className="mt-4">Core tables in this template</CardTitle>
              <CardDescription>
                A credible template page should explain what tables exist and why they matter.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 px-0 pb-0 md:grid-cols-2">
              {template.tables.map((table) => (
                <div className="rounded-[1rem] border border-white/8 bg-black/18 p-4" key={table.name}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/8 bg-white/4">
                      <Database className="h-4 w-4 text-cyan-300" />
                    </span>
                    <div>
                      <p className="font-medium text-white">{table.name}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{table.purpose}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <div className="space-y-6">
            <AdPlaceholder className="min-h-[180px]" label="Table List Ad Zone" />
            <Card className="mesh-card p-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-100/80">Summary</p>
              <p className="mt-3 font-heading text-xl font-semibold text-white">
                Why this template is a strong starting point
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{template.summary}</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell grid gap-8 xl:grid-cols-[1.08fr,0.92fr]">
          <Card className="mesh-card panel-glow overflow-hidden">
            <CardHeader>
              <Badge variant="blue">SQL Schema Example</Badge>
              <CardTitle className="mt-4">{template.shortTitle}</CardTitle>
              <CardDescription>
                Use code snippets to align template pages with real developer expectations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="surface-grid overflow-x-auto rounded-[1.25rem] border border-white/8 bg-[#0d1117] p-5 text-sm leading-7 text-blue-100">
                <code>{template.sqlExample}</code>
              </pre>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card className="mesh-card p-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-blue-100/80">Use cases</p>
              <p className="mt-3 font-heading text-xl font-semibold text-white">
                Teams and products this structure fits best
              </p>
              <div className="mt-4 space-y-3">
                {template.useCases.map((useCase) => (
                  <div
                    className="rounded-2xl border border-white/8 bg-white/3 px-4 py-3 text-sm leading-6 text-muted-foreground"
                    key={useCase}
                  >
                    {useCase}
                  </div>
                ))}
              </div>
            </Card>
            <AdPlaceholder className="min-h-[180px]" label="SQL Example Ad Zone" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell grid gap-8 xl:grid-cols-[0.95fr,1.05fr]">
          <div className="space-y-8">
            <SectionHeading
              title="How to use this database schema template"
              description="These steps make the page useful for real evaluation while staying static-generation friendly."
            />
            <div className="space-y-4">
              {template.howToUse.map((step, index) => (
                <Card className="mesh-card p-6" key={step}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-sm font-semibold text-blue-100">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-7 text-muted-foreground">{step}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <Card className="mesh-card p-6">
              <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-100/80">System design</p>
              <p className="mt-3 font-heading text-xl font-semibold text-white">Why this page format scales</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Each template page combines search-intent targeting, table-level detail, SQL
                examples, and internal links, which makes it reusable for a programmatic SEO system.
              </p>
            </Card>
            <AdPlaceholder className="min-h-[180px]" label="How-To Ad Zone" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell grid gap-8 xl:grid-cols-2">
          <div className="space-y-8">
            <SectionHeading
              title="More templates in adjacent database design clusters"
              description="These links help distribute authority and keep template pages meaningfully connected."
            />
            <div className="grid gap-6">
              {relatedTemplates.map((item) => (
                <Card className="mesh-card p-6" key={item.slug}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <Badge variant="muted">
                          <LayoutTemplate className="h-3.5 w-3.5" />
                          {item.database}
                        </Badge>
                      </div>
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
              title="Tools that pair with this template research workflow"
              description="Template pages should not be isolated content islands. They should push users into adjacent tools and schema workflows."
            />
            <div className="grid gap-6">
              {relatedTools.map((item) => (
                <Card className="mesh-card p-6" key={item.slug}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <Badge variant="muted">
                          <Wrench className="h-3.5 w-3.5" />
                          Tool
                        </Badge>
                      </div>
                      <h2 className="font-heading text-xl font-semibold text-white">{item.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
                    </div>
                    <Button asChild size="sm" variant="outline">
                      <Link href={item.href}>View</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell grid gap-8 xl:grid-cols-[0.95fr,1.05fr]">
          <div className="space-y-6">
            <SectionHeading
              title={`Frequently asked questions about ${template.shortTitle.toLowerCase()}`}
              description="These answers support both user trust and FAQ structured data."
            />
            <AdPlaceholder className="min-h-[180px]" label="Template FAQ Ad Zone" />
          </div>
          <Card className="mesh-card panel-glow p-6">
            <Accordion collapsible type="single">
              {template.faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </section>
    </>
  );
}
