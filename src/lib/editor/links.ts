import type { TemplatePage } from "@/data/templates";
import type { ToolPage } from "@/data/tools";

function normalizeDatabase(database: string, slug: string): string {
  const value = `${database} ${slug}`.toLowerCase();

  if (value.includes("mysql")) return "mysql";
  if (value.includes("sqlite")) return "sqlite";
  if (value.includes("postgres") || value.includes("supabase") || value.includes("prisma")) {
    return "postgresql";
  }

  return "generic";
}

export function getTemplateEditorHref(template: Pick<TemplatePage, "slug">) {
  return `/app/editor/templates/blank?templateSlug=${encodeURIComponent(template.slug)}`;
}

export function getToolEditorHref(tool: Pick<ToolPage, "slug" | "database">) {
  const database = normalizeDatabase(tool.database, tool.slug);

  return `/app/editor/templates/blank?mode=blank&database=${encodeURIComponent(database)}`;
}
