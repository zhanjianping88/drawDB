# drawDB SEO SaaS Blueprint

## 1. Product Direction

Transform `drawDB` into a dual-surface product:

- A marketing and SEO acquisition site built with Next.js 15.
- The original database editor preserved as the core interactive product under `/app`.

The website should behave like a modern SaaS property:

- fast first paint
- clear product positioning
- indexable landing pages
- structured internal linking
- semantic content clusters
- AdSense-safe content layouts
- clear upgrade paths for future premium features

Core positioning:

- `drawDB` = online database schema generator + ERD editor + schema visualization platform

Primary growth loops:

1. Programmatic SEO pages capture long-tail search intent.
2. Free tool usage converts users into repeat visitors.
3. Templates, examples, and comparisons broaden keyword coverage.
4. Blog content supports topical authority and internal linking.
5. AdSense monetizes informational traffic.

## 2. Information Architecture

Top-level route groups:

- `/` homepage
- `/features` product overview
- `/pricing` future monetization page
- `/app` embedded editor
- `/tools/*` SEO tool landing pages
- `/templates/*` database schema templates
- `/compare/*` comparison and alternative pages
- `/blog/*` editorial content
- `/guides/*` evergreen educational content
- `/examples/*` database diagram examples
- `/sql/*` SQL reference and cheatsheets

Recommended route hierarchy:

```text
/
/features
/pricing
/app
/tools
/tools/[category]
/tools/[slug]
/templates
/templates/[database]
/templates/[slug]
/compare
/compare/[slug]
/blog
/blog/[slug]
/guides
/guides/[slug]
/examples
/examples/[slug]
/sql
/sql/[slug]
```

## 3. Repository Structure

```text
src/
  app/
    (marketing)/
      page.tsx
      features/page.tsx
      pricing/page.tsx
      tools/
        page.tsx
        [category]/page.tsx
        [slug]/page.tsx
      templates/
        page.tsx
        [database]/page.tsx
        [slug]/page.tsx
      compare/
        page.tsx
        [slug]/page.tsx
      blog/
        page.tsx
        [slug]/page.tsx
      guides/
        page.tsx
        [slug]/page.tsx
      examples/
        page.tsx
        [slug]/page.tsx
      sql/
        page.tsx
        [slug]/page.tsx
    app/
      page.tsx
      layout.tsx
    sitemap.ts
    robots.ts
    manifest.ts
    layout.tsx
    globals.css
  components/
    layout/
    navigation/
    marketing/
    seo/
    ads/
    content/
    ui/
    app-shell/
  lib/
    seo/
      metadata.ts
      schema.ts
      breadcrumbs.ts
      sitemap.ts
      canonical.ts
    content/
      queries.ts
      related.ts
      blocks.ts
      faq.ts
    adsense/
      slots.ts
      visibility.ts
    analytics/
    utils/
  data/
    tools/
    templates/
    compare/
    faqs/
    taxonomy/
  types/
    seo.ts
    content.ts
    tool.ts
content/
  blog/
  guides/
  sql/
public/
  images/
    og/
    brand/
  icons/
```

## 4. Layout Strategy

Use route groups to separate UX and performance behavior:

- `(marketing)` for lightweight content pages with strong SEO and AdSense support.
- `/app` for the editor shell with a product-focused interface and reduced content chrome.

Recommended layout split:

- root layout: global metadata, fonts, theme, analytics, consent, header/footer shell
- marketing layout: breadcrumbs, TOC, related links, ad slots
- app layout: editor canvas, export/import actions, tool panels

## 5. SEO Metadata System

Build a typed metadata factory instead of page-level ad hoc metadata.

Recommended design:

- `lib/seo/metadata.ts`
- one shared function to build title, description, canonical, open graph, twitter, robots
- page-specific helpers for `tool`, `template`, `blog`, `compare`, `guide`

Example shape:

```ts
export type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};
```

Rules:

- titles under ~60 characters when possible
- descriptions around 140 to 160 characters
- one canonical per page
- no duplicate title patterns across tool pages
- use keyword modifiers naturally, not repetitively

Suggested title formulas:

- Tool page: `{keyword} | Free Online Tool | drawDB`
- Template page: `{templateName} Database Schema Template | drawDB`
- Compare page: `drawDB vs {competitor} | ERD Tool Comparison`
- Blog page: `{postTitle} | drawDB Blog`

## 6. Structured Data

Use JSON-LD helpers in `lib/seo/schema.ts`.

Schemas to support:

- `SoftwareApplication` for homepage and `/app`
- `WebSite` with search action
- `BreadcrumbList` for all hierarchical pages
- `FAQPage` for tool pages and selected blog/guides pages
- `Article` for blog posts
- `CollectionPage` for category hubs
- `HowTo` for tutorial pages where appropriate

Homepage schema:

- software name: drawDB
- application category: DeveloperApplication
- operating system: Web
- feature list: ERD editor, SQL schema generation, import/export, templates

## 7. Programmatic SEO Strategy

Programmatic SEO should target high-intent, low-competition modifiers around core database workflows.

Page clusters:

1. Tool intent
- `database schema generator`
- `sql schema generator`
- `online database designer`
- `database diagram maker`
- `schema visualization tool`

2. Database engine intent
- `postgres erd tool`
- `mysql er diagram`
- `sqlite schema generator`
- `mongodb schema visualizer` if product later supports it

3. Use case intent
- `ecommerce database schema generator`
- `blog database design template`
- `inventory management er diagram`
- `crm database schema example`

4. Comparison intent
- `drawdb vs dbdiagram`
- `drawdb vs lucidchart`
- `best erd tool for postgres`

5. Educational intent
- `how to design a relational database`
- `what is an er diagram`
- `sql normalization examples`

Recommended generation formula for `/tools/[slug]`:

- H1 tied to exact keyword
- intro paragraph matching search intent
- value proposition block
- embedded editor CTA
- FAQ block
- related tools block
- relevant templates block
- comparison links
- trust block with export/import support

## 8. Content Model

Use structured content objects instead of hardcoded JSX strings for scale.

Suggested entities:

- `ToolPage`
- `TemplatePage`
- `ComparePage`
- `BlogPost`
- `FAQItem`
- `Category`

Minimum `ToolPage` fields:

```ts
type ToolPage = {
  slug: string;
  category: string;
  keyword: string;
  title: string;
  description: string;
  intro: string;
  benefits: string[];
  faqs: FAQItem[];
  relatedToolSlugs: string[];
  relatedTemplateSlugs: string[];
  databaseEngines: string[];
  featureFlags?: string[];
};
```

## 9. Internal Linking System

Internal linking should be algorithmic, not manual.

Recommended linking dimensions:

- same topic cluster
- same database engine
- same search intent type
- same funnel stage
- same template/use case overlap

Sitewide linking modules:

- related tools
- related templates
- popular comparisons
- learn next
- SQL references
- featured examples

Rules:

- every indexable page should link to at least 3 relevant internal pages
- every new blog post should link to one tool, one template, one guide
- category hubs should link down; content pages should link sideways and up

## 10. Breadcrumbs

Breadcrumbs should exist in both HTML UI and `BreadcrumbList` schema.

Examples:

- `Home > Tools > PostgreSQL > Postgres ERD Tool`
- `Home > Templates > E-commerce Database Schema Template`
- `Home > Blog > SQL Normalization Explained`

## 11. FAQ System

Each high-intent tool page should include 4 to 6 FAQs.

FAQ sources:

- People Also Ask expansion
- product onboarding questions
- differences between databases
- export/import concerns
- pricing and browser usage concerns

Example FAQ angles:

- Is drawDB free to use?
- Can I export SQL from drawDB?
- Does this work for PostgreSQL/MySQL/SQLite?
- Can I import an existing schema?
- What is the difference between an ERD tool and a schema generator?

## 12. AdSense Placement Strategy

Design pages to remain useful first and monetized second.

Recommended placements:

- below hero intro on informational pages
- between major content sections on long-form pages
- below FAQ on long-tail pages
- sidebar on desktop for blog and guide content
- never above the fold on `/app`

Suggested ad-safe page templates:

- informational page: hero -> content -> inline ad -> FAQ -> related tools
- comparison page: comparison table -> analysis -> inline ad -> alternatives -> FAQ
- template page: preview -> CTA -> template details -> inline ad -> related templates

AdSense guardrails:

- avoid ad-heavy thin pages
- minimum unique content depth per page
- maintain clear separation between ads and navigation
- no deceptive CTA styling

## 13. UI and Branding Direction

Position the site as:

- clean
- technical
- credible
- modern
- not generic startup purple

Recommended design language:

- neutral base with one strong accent
- editorial marketing sections mixed with product screenshots
- subtle grid or diagram-inspired backgrounds
- strong database-themed iconography
- generous whitespace
- fast-loading static visuals

Reference direction:

- use the provided `SchemaForge` reference board as the visual benchmark
- dark-first interface for both marketing and product surfaces
- editor-inspired layout language across homepage, tool pages, templates, blog, and app UI
- restrained enterprise/SaaS aesthetic instead of consumer-startup gradients

Primary page modules:

- hero
- trust bar
- feature grid
- diagram preview
- keyword intro
- FAQ accordion
- related content rail
- CTA strip

Visual rules extracted from the reference:

- background: charcoal and near-black surfaces with subtle grid/dot textures
- accent: electric blue and cyan for actions, highlights, and active states
- cards: medium-contrast dark cards with soft borders and restrained glow
- typography: bold compact headlines paired with readable neutral body text
- chrome: thin top navigation, compact controls, data-dense sidebars
- imagery: real product screenshots, schema canvases, code snippets, template previews
- spacing: wide hero breathing room, tighter editorial sidebars, modular card gutters
- motion: subtle panel fade/slide reveals, not playful motion-heavy interactions

## 14. Performance and Core Web Vitals

Key tactics:

- prefer SSG for tool/template/compare pages
- SSR only where personalization or freshness matters
- partial prerendering where suitable
- optimize fonts and use `display: swap`
- use `next/image` for all marketing images
- lazy-load ad components and non-critical widgets
- defer heavy editor bundles until `/app`
- split editor bundle from marketing app shell
- minimize client components on content pages

Performance budget:

- homepage JS under tight control
- tool pages mostly server components
- ads loaded after primary content paint
- avoid shipping editor code to marketing routes

## 15. drawDB Editor Integration

The original editor should be treated as a product module, not the whole website shell.

Integration options:

1. Best option
- refactor editor into a mountable React module inside `src/app/app`

2. Transitional option
- host existing editor build inside a sub-app and proxy/embed it under `/app`

Migration rule:

- the editor bundle must not leak into SEO pages

## 16. Reusable Content Blocks

Create composable sections so programmatic pages remain consistent without duplicating code.

Recommended blocks:

- `KeywordHero`
- `FeatureChecklist`
- `DatabaseEngineBadgeRow`
- `ToolUseCases`
- `FAQSection`
- `RelatedTools`
- `RelatedTemplates`
- `CompareAlternatives`
- `InlineCTA`
- `AdSlot`
- `Breadcrumbs`

## 17. Route-Specific Templates

### `/tools/[slug]`

Purpose:

- capture high-intent commercial/informational keywords

Sections:

- hero
- intro
- feature/value bullets
- database engines supported
- editor CTA
- FAQs
- related tools
- related templates

### `/templates/[slug]`

Purpose:

- capture template and example intent

Sections:

- template preview
- use case explanation
- included tables/entities
- customize in drawDB CTA
- related templates

### `/compare/[slug]`

Purpose:

- capture alternative/comparison traffic

Sections:

- summary table
- key differences
- best for
- migration/usage recommendation
- FAQ

### `/blog/[slug]` and `/guides/[slug]`

Purpose:

- support topical authority and backlinks

Sections:

- article body
- TOC
- inline CTA
- related tools
- related guides

## 18. Content Generation System

Use a hybrid model:

- hand-written cornerstone pages
- structured data-driven programmatic pages
- MDX or content collections for editorial content

Content sources:

- manually curated keyword list
- database engine taxonomy
- use case taxonomy
- question taxonomy
- templates catalog

Recommended content layers:

1. Tier 1
- homepage
- features
- top 8 tool pages
- top 8 template pages
- top 5 comparison pages

2. Tier 2
- database-engine-specific tools
- industry/use-case schema pages
- SQL reference pages

3. Tier 3
- scaled long-tail combinations after GSC validation

## 19. Sitemap and Crawl Strategy

Use dynamic sitemap generation with segmented sitemap files when scale grows.

Suggested sitemap sets:

- sitemap-main.xml
- sitemap-tools.xml
- sitemap-templates.xml
- sitemap-blog.xml
- sitemap-guides.xml
- sitemap-compare.xml

Robots policy:

- allow all public content
- disallow internal-only utilities, preview routes, and private dashboards
- ensure canonical consistency

## 20. Suggested Page Inventory for MVP

Priority tool pages:

- `/tools/database-schema-generator`
- `/tools/erd-tool`
- `/tools/sql-schema-generator`
- `/tools/mysql-er-diagram`
- `/tools/postgres-erd-tool`
- `/tools/online-database-designer`
- `/tools/database-diagram-maker`
- `/tools/schema-visualization-tool`

Priority template pages:

- `/templates/ecommerce-database-schema`
- `/templates/blog-database-schema`
- `/templates/crm-database-schema`
- `/templates/inventory-management-database-schema`
- `/templates/hospital-management-database-schema`

Priority comparison pages:

- `/compare/drawdb-vs-dbdiagram`
- `/compare/drawdb-vs-lucidchart`
- `/compare/drawdb-vs-miro`

## 21. Deployment Strategy

Platform:

- Vercel

Environments:

- preview for PRs
- production for main

Recommended operational setup:

- ISR/SSG for programmatic pages
- analytics via Vercel Analytics + Search Console + GA4
- error tracking via Sentry
- image optimization via Next.js image pipeline
- caching headers for static assets

Launch phases:

1. Foundation
- Next.js shell
- branding
- homepage
- `/app` integration
- metadata system
- sitemap + robots

2. SEO Core
- top tool pages
- top templates
- comparison pages
- blog system
- FAQ schema

3. Scale
- programmatic long-tail expansion
- content ops workflow
- A/B testing for CTA and ad placements

## 22. Future Monetization

Monetization ladder:

1. AdSense on informational pages
2. affiliate placements on comparison and resource pages
3. premium templates
4. AI schema generator credits
5. team collaboration/export features

Premium candidate features:

- private projects
- team workspaces
- advanced export formats
- version history
- AI schema suggestions
- template packs

## 23. Recommended Build Order

1. Create the Next.js 15 app shell and route groups.
2. Integrate or isolate the current drawDB editor under `/app`.
3. Build shared SEO infrastructure.
4. Ship homepage, feature page, and 8 high-priority tool pages.
5. Add template, compare, and blog systems.
6. Add AdSense placements after content depth and traffic base are ready.
7. Scale programmatic SEO only after validating CTR, indexing, and content quality.

## 24. Key Risks

- importing the editor into Next.js without isolating bundle size
- publishing too many thin programmatic pages too early
- ad overload harming UX and search quality
- duplicate metadata/canonical issues across similar pages
- weak internal linking causing orphaned pages

## 25. Success Metrics

SEO:

- indexed pages
- impressions
- non-brand clicks
- top 20 keyword coverage

Product:

- `/app` CTR from SEO pages
- exports/imports started
- repeat visits

Monetization:

- RPM
- AdSense CTR
- revenue per indexed page
