import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-shell py-24 md:py-32">
      <div className="mx-auto max-w-2xl space-y-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-200/80">404</p>
        <h1 className="font-heading text-4xl font-semibold text-white md:text-6xl">
          The page you were looking for does not exist.
        </h1>
        <p className="text-lg leading-8 text-muted-foreground">
          Try returning to the homepage, the tools library, or the template gallery.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">Go Home</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/tools">Browse Tools</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
