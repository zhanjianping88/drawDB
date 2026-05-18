import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "drawDB Features | Marketing Platform Foundation",
  description: "Overview of the first-launch marketing platform for drawDB.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <div className="container-shell py-24">
      <h1 className="font-heading text-4xl font-semibold text-white">Features</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
        The feature detail pages will expand next. For now this route exists so the marketing shell
        feels coherent while we focus on the homepage launch.
      </p>
    </div>
  );
}
