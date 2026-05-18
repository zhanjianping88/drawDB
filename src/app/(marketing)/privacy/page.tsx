import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy | drawDB",
  description: "Read the drawDB privacy policy for information about analytics, cookies, and site usage handling.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <div className="max-w-3xl space-y-6">
        <h1 className="font-heading text-4xl font-semibold text-white md:text-5xl">Privacy Policy</h1>
        <p className="text-base leading-7 text-muted-foreground">
          drawDB may use basic analytics, performance monitoring, and search verification tooling to
          understand site usage and improve the product experience.
        </p>
        <p className="text-base leading-7 text-muted-foreground">
          This soft-launch version does not yet include account systems, payment processing, or
          production ad integrations. Update this policy before enabling those features.
        </p>
      </div>
    </div>
  );
}
