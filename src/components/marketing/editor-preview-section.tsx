import { CirclePlay, FileJson2, GitCompareArrows, PanelsTopLeft } from "lucide-react";

import { AdPlaceholder } from "@/components/ads/ad-placeholder";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/marketing/section-heading";

const previewItems = [
  { icon: PanelsTopLeft, label: "Schema canvas", copy: "Visual entity editing surface" },
  { icon: FileJson2, label: "Export pipeline", copy: "SQL, JSON, and shareable outputs" },
  { icon: GitCompareArrows, label: "Compare-ready", copy: "Great for migration and review pages" },
];

export function EditorPreviewSection() {
  return (
    <section className="py-20">
      <div className="container-shell grid gap-8 xl:grid-cols-[1.1fr,0.9fr]">
        <Card className="overflow-hidden p-6">
          <SectionHeading
            description="We are not building the editor yet, but the homepage still needs a product anchor that previews the future /app experience."
            eyebrow="Editor Preview"
            title="A product-first preview that signals the tool is real."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[220px,1fr,220px]">
            <div className="rounded-[1.25rem] border border-white/8 bg-white/4 p-4">
              <p className="mb-4 text-sm font-semibold text-white">Objects</p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="rounded-xl bg-blue-500/15 px-3 py-2 text-blue-100">users</div>
                <div className="rounded-xl bg-white/4 px-3 py-2">orders</div>
                <div className="rounded-xl bg-white/4 px-3 py-2">products</div>
                <div className="rounded-xl bg-white/4 px-3 py-2">invoices</div>
              </div>
            </div>
            <div className="surface-grid rounded-[1.5rem] border border-white/8 bg-[#0d1117] p-6">
              <div className="grid h-full min-h-[320px] place-items-center rounded-[1.25rem] border border-dashed border-cyan-400/20 bg-black/15">
                <div className="space-y-4 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/10">
                    <CirclePlay className="h-6 w-6 text-cyan-200" />
                  </span>
                  <div>
                    <p className="font-heading text-xl font-semibold text-white">Interactive ERD preview</p>
                    <p className="mt-2 max-w-sm text-sm leading-7 text-muted-foreground">
                      This surface becomes the live editor experience later. For now it anchors the
                      homepage with a clear product narrative.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[1.25rem] border border-white/8 bg-white/4 p-4">
              <p className="mb-4 text-sm font-semibold text-white">Properties</p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="rounded-xl border border-white/8 bg-black/20 px-3 py-2">primary key</div>
                <div className="rounded-xl border border-white/8 bg-black/20 px-3 py-2">foreign key</div>
                <div className="rounded-xl border border-white/8 bg-black/20 px-3 py-2">index</div>
                <div className="rounded-xl border border-white/8 bg-black/20 px-3 py-2">nullable</div>
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <Badge>Why this matters</Badge>
            <div className="mt-4 space-y-5">
              {previewItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="flex gap-4" key={item.label}>
                    <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/4">
                      <Icon className="h-4 w-4 text-blue-200" />
                    </span>
                    <div>
                      <p className="font-medium text-white">{item.label}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.copy}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
          <AdPlaceholder className="min-h-[180px]" label="Homepage Mid-Content Ad Zone" />
        </div>
      </div>
    </section>
  );
}
