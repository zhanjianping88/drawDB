import Link from "next/link";
import { DatabaseZap } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/6 bg-[#0b0d10]/85 backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between gap-6">
        <Link className="flex items-center gap-3" href="/">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <DatabaseZap className="h-5 w-5 text-cyan-300" />
          </span>
          <div>
            <p className="font-heading text-lg font-semibold tracking-tight">drawDB</p>
            <p className="text-xs text-muted-foreground">Schema design, ERD, SQL tooling</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {siteConfig.nav.map((item) => (
            <Link className="transition-colors hover:text-white" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild size="sm" variant="ghost">
            <Link href="/blog">Read Strategy</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/tools">Explore Tools</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
