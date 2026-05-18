import Link from "next/link";

import type { TemplateSummary } from "@/data/templates";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TemplateGallery({ templates }: { templates: TemplateSummary[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {templates.map((template) => (
        <Link href={template.href} key={template.slug}>
          <Card className="h-full overflow-hidden transition-transform duration-200 hover:-translate-y-1">
            <div className="surface-grid h-40 border-b border-white/8 bg-[#0d1117] p-4">
              <div className="grid h-full grid-cols-3 gap-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div className="rounded-lg border border-white/8 bg-white/4" key={index} />
                ))}
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center justify-between gap-4">
                <CardTitle className="text-lg">{template.title}</CardTitle>
                <Badge variant="muted">{template.tableCount} tables</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm leading-6 text-muted-foreground">{template.description}</p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-blue-100/80">
                <span>{template.database}</span>
                <span className="text-muted-foreground">/</span>
                <span>{template.category}</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
