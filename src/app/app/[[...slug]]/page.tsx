import Link from "next/link";
import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createMetadata } from "@/lib/seo/metadata";

type EditorShellPageProps = {
  params: Promise<{
    slug?: string[];
  }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata: Metadata = createMetadata({
  title: "drawDB Editor | Visual Database Design Workspace",
  description:
    "Open the real drawDB editor to create ER diagrams, load schema templates, and export SQL for PostgreSQL, MySQL, and SQLite workflows.",
  path: "/app",
});

function getFirst(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
}

export default async function EditorShellPage({ params, searchParams }: EditorShellPageProps) {
  const [{ slug }, resolvedSearchParams] = await Promise.all([params, searchParams]);

  const path = slug?.length ? `/${slug.join("/")}` : "/editor/templates/blank";
  const query = new URLSearchParams();

  for (const [key, value] of Object.entries(resolvedSearchParams)) {
    const first = getFirst(value);

    if (first) {
      query.set(key, first);
    }
  }

  const hashPath = query.size > 0 ? `${path}?${query.toString()}` : path;
  const editorSrc = `/drawdb-editor/index.html#${hashPath}`;

  return (
    <section className="py-8 md:py-10">
      <div className="container-shell space-y-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <Badge>Live Editor</Badge>
            <div>
              <h1 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Real drawDB editor workspace
              </h1>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
                This embedded workspace supports visual ERD editing plus SQL export workflows. Use
                template links from the marketing site to start with a prebuilt schema, then refine
                it inside the real editor.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="outline">
              <Link href="/templates">Browse Templates</Link>
            </Button>
            <Button asChild>
              <a href={editorSrc} rel="noreferrer" target="_blank">
                Open Full Editor
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden p-2 md:p-3">
          <iframe
            className="h-[calc(100vh-15rem)] min-h-[780px] w-full rounded-[1.25rem] border-0 bg-[#0d1117]"
            src={editorSrc}
            title="drawDB Editor"
          />
        </Card>
      </div>
    </section>
  );
}
