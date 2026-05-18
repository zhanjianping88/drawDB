import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "drawDB Blog | Database Design and SQL Content",
  description: "Technical content for schema design, ERD workflows, and SQL architecture topics.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="container-shell py-24">
      <h1 className="font-heading text-4xl font-semibold text-white">Technical Blog</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
        Editorial content and long-form SEO pages will be added after the homepage and the first
        tool landing pages.
      </p>
    </div>
  );
}
