import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

import type { guideSummaries } from "@/data/guides";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type GuideSummary = (typeof guideSummaries)[number];

export function GuideGallery({ guides }: { guides: GuideSummary[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {guides.map((guide) => (
        <Link href={guide.href} key={guide.slug}>
          <Card className="h-full transition-transform duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center justify-between gap-4">
                <Badge variant="muted">
                  <BookOpen className="h-3.5 w-3.5" />
                  Guide
                </Badge>
                <ArrowUpRight className="h-4 w-4 text-cyan-300" />
              </div>
              <CardTitle className="text-xl">{guide.title}</CardTitle>
              <CardDescription>{guide.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{guide.category}</span>
              <span>{guide.readingTime}</span>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
