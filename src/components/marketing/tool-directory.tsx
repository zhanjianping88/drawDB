"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { ToolPage } from "@/data/tools";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ToolDirectoryProps = {
  tools: ToolPage[];
};

export function ToolDirectory({ tools }: ToolDirectoryProps) {
  const categories = useMemo(
    () => [
      { key: "all", label: "All Tools" },
      ...Array.from(
        new Map(tools.map((tool) => [tool.category, tool.categoryLabel])).entries(),
      ).map(([key, label]) => ({ key, label })),
    ],
    [tools],
  );

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTools = useMemo(() => {
    if (activeCategory === "all") {
      return tools;
    }

    return tools.filter((tool) => tool.category === activeCategory);
  }, [activeCategory, tools]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              activeCategory === category.key
                ? "border-blue-400/25 bg-blue-500/15 text-blue-100"
                : "border-white/8 bg-white/4 text-muted-foreground hover:text-white",
            )}
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            type="button"
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredTools.map((tool) => (
          <Link href={tool.path} key={tool.slug}>
            <Card className="h-full transition-transform duration-200 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between gap-4">
                  <Badge variant="muted">{tool.database}</Badge>
                  <ArrowUpRight className="h-4 w-4 text-cyan-300" />
                </div>
                <CardTitle className="text-xl">{tool.shortTitle}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {tool.keywords.slice(0, 2).map((keyword) => (
                    <span
                      className="rounded-full border border-white/8 bg-white/3 px-3 py-1 text-xs text-muted-foreground"
                      key={keyword}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                <p className="text-sm leading-6 text-muted-foreground">{tool.intro}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
