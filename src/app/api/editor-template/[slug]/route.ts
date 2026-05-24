import { notFound } from "next/navigation";

import { getDrawdbTemplateDiagram } from "@/lib/editor/drawdb-template-presets";

type RouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(_: Request, { params }: RouteProps) {
  const { slug } = await params;
  const diagram = getDrawdbTemplateDiagram(slug);

  if (!diagram) {
    notFound();
  }

  return Response.json(diagram, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
