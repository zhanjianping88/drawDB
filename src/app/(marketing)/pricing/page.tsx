import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "drawDB Pricing | Future Premium Surface",
  description: "Placeholder pricing route for future premium features and paid plans.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <div className="container-shell py-24">
      <h1 className="font-heading text-4xl font-semibold text-white">Pricing</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
        Premium exports, template packs, and AI-assisted schema workflows will live here in a later
        phase.
      </p>
    </div>
  );
}
