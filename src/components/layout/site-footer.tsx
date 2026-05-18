import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/6 py-12">
      <div className="container-shell grid gap-8 md:grid-cols-[1.4fr,1fr,1fr]">
        <div className="space-y-3">
          <h2 className="font-heading text-xl font-semibold">{siteConfig.name}</h2>
          <p className="max-w-md text-sm leading-7 text-muted-foreground">
            A modern database tooling brand built for ER diagrams, schema generation, templates,
            and SEO-led growth.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-white">Platform</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <Link className="block hover:text-white" href="/tools">
              Tools
            </Link>
            <Link className="block hover:text-white" href="/templates">
              Templates
            </Link>
            <Link className="block hover:text-white" href="/features">
              Features
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-white">Growth</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <Link className="block hover:text-white" href="/blog">
              Blog
            </Link>
            <Link className="block hover:text-white" href="/about">
              About
            </Link>
            <Link className="block hover:text-white" href="/contact">
              Contact
            </Link>
            <Link className="block hover:text-white" href="/pricing">
              Pricing
            </Link>
            <Link className="block hover:text-white" href="/privacy">
              Privacy
            </Link>
            <Link className="block hover:text-white" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
