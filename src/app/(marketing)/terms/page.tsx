import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Terms of Service | drawDB",
  description: "Read the drawDB terms of service for use of the website and future database tooling platform.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <div className="max-w-3xl space-y-6">
        <h1 className="font-heading text-4xl font-semibold text-white md:text-5xl">Terms of Service</h1>
        <p className="text-base leading-7 text-muted-foreground">
          By using drawDB, you agree to use the site responsibly and not interfere with service
          availability, content integrity, or future product workflows.
        </p>
        <p className="text-base leading-7 text-muted-foreground">
          These terms should be reviewed and expanded before enabling accounts, paid features,
          production editor workflows, or public user-generated content.
        </p>
      </div>
    </div>
  );
}
