import Link from "next/link";

import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Contact drawDB | Database Tools Support",
  description: "Contact drawDB for feedback, partnerships, launch questions, or database tooling inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <div className="max-w-3xl space-y-6">
        <h1 className="font-heading text-4xl font-semibold text-white md:text-5xl">Contact</h1>
        <p className="text-lg leading-8 text-muted-foreground">
          For launch feedback, partnership requests, or database tooling questions, use the contact
          channel below.
        </p>
        <p className="text-base leading-7 text-muted-foreground">
          Email:{" "}
          <Link className="text-blue-200 hover:text-white" href="mailto:team@drawdb.example.com">
            team@drawdb.example.com
          </Link>
        </p>
      </div>
    </div>
  );
}
