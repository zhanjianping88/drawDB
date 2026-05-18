import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "About drawDB | Database Tooling Platform",
  description: "Learn about drawDB, its SEO-led database tooling strategy, and the product direction behind the platform.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <div className="max-w-3xl space-y-6">
        <h1 className="font-heading text-4xl font-semibold text-white md:text-5xl">About drawDB</h1>
        <p className="text-lg leading-8 text-muted-foreground">
          drawDB is being developed as a database tooling platform focused on schema generation,
          ER diagrams, template discovery, and search-led product growth.
        </p>
        <p className="text-base leading-7 text-muted-foreground">
          The current launch surface is a production-ready marketing website designed to attract
          high-intent database search traffic while the future editor experience is prepared under
          a separate product workflow.
        </p>
      </div>
    </div>
  );
}
