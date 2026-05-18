# Suggested Starter Scaffold

This scaffold is designed for a Next.js 15 App Router project that separates:

- marketing and SEO acquisition routes
- the core drawDB editor
- structured content and taxonomy data

```text
drawDB/
  content/
    blog/
    guides/
    sql/
  docs/
    repo-scaffold.md
    seo-platform-blueprint.md
  public/
    icons/
    images/
      brand/
      og/
  src/
    app/
      (marketing)/
        blog/
          [slug]/
        compare/
          [slug]/
        examples/
          [slug]/
        features/
        guides/
          [slug]/
        pricing/
        sql/
          [slug]/
        templates/
          [database]/
          [slug]/
        tools/
          [category]/
          [slug]/
      app/
      globals.css
      layout.tsx
      manifest.ts
      robots.ts
      sitemap.ts
    components/
      ads/
      app-shell/
      content/
      layout/
      marketing/
      navigation/
      seo/
      ui/
    data/
      compare/
      faqs/
      taxonomy/
      templates/
      tools/
    lib/
      adsense/
      analytics/
      content/
      seo/
      utils/
    types/
  tailwind.config.ts
  next.config.ts
  package.json
  tsconfig.json
```

## Notes

- `src/app/(marketing)` contains all public SEO-focused pages.
- `src/app/app` contains the editor experience.
- `src/data/*` stores programmatic page records and taxonomy.
- `content/*` stores editorial MDX content.
- `lib/seo/*` centralizes metadata, schema, canonical, breadcrumbs, and sitemap logic.
