import Link from "next/link";
import { ArrowUpRight, Scale } from "lucide-react";

import type { compareSummaries } from "@/data/compare";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type CompareSummary = (typeof compareSummaries)[number];

export function CompareGallery({ pages }: { pages: CompareSummary[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {pages.map((page) => (
        <Link href={page.href} key={page.slug}>
          <Card className="h-full transition-transform duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center justify-between gap-4">
                <Badge variant="muted">
                  <Scale className="h-3.5 w-3.5" />
                  Compare
                </Badge>
                <ArrowUpRight className="h-4 w-4 text-cyan-300" />
              </div>
              <CardTitle className="text-xl">{page.leftName} vs {page.rightName}</CardTitle>
              <CardDescription>{page.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-6 text-muted-foreground">{page.title}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
