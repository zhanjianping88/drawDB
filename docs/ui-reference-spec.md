# UI Reference Spec

This document translates the provided reference board into a concrete UI system for `drawDB`.

Reference image:

- `/Users/jianping/Desktop/截屏2026-05-18 10.13.23.png`

## 1. Core Visual Direction

The target look is:

- dark technical SaaS
- premium but restrained
- product-led rather than illustration-led
- database-native rather than generic startup

The site should feel like a real tool used by engineers:

- dense where useful
- clean in hierarchy
- sharp in contrast
- minimal in decoration

## 2. Visual Language to Preserve

From the reference, the strongest reusable patterns are:

- near-black canvas backgrounds
- subtle grid or dotted textures reminiscent of schema canvases
- cool blue primary actions
- cyan/teal highlights for status or secondary emphasis
- thin borders and low-opacity panel separators
- modular content cards
- real app screenshots as hero and section anchors
- narrow top nav with compact utility actions

## 3. Brand Direction for drawDB

Recommended drawDB brand personality:

- precise
- fast
- trusted
- developer-first
- quietly premium

Brand message:

- `Design schemas faster. Visualize structure instantly. Export clean SQL.`

## 4. Color System

Recommended palette:

```text
Background Base:     #0B0D10
Background Raised:   #11151B
Background Panel:    #151A21
Border Subtle:       #232A34
Text Primary:        #F3F6FB
Text Secondary:      #A3ADBA
Text Muted:          #6D7785
Primary Blue:        #2F6BFF
Primary Blue Hover:  #2457D6
Cyan Accent:         #22D3EE
Success:             #22C55E
Warning:             #F59E0B
Danger:              #EF4444
```

Usage rules:

- blue is for main CTA, active tabs, selected nav, and important links
- cyan is for subtle emphasis, badges, stat accents, and diagram highlights
- avoid using too many bright accents in the same viewport

## 5. Typography

Recommended pairing:

- headings: `Space Grotesk`, `Sora`, or `Plus Jakarta Sans`
- body/UI: `Inter Tight`, `Inter`, or `Manrope`
- code: `JetBrains Mono`

Type scale direction:

- hero H1: bold, tight leading, 48-64px desktop
- landing H1: 36-48px desktop
- section headings: 24-32px
- body copy: 15-18px
- compact UI labels: 12-13px

Rules:

- keep headlines concise and technical
- use short supporting copy, especially above the fold
- prefer sentence case over excessive title case in body modules

## 6. Layout Patterns

### Homepage

Structure:

- compact nav
- hero with direct product value proposition
- primary CTA + secondary CTA
- embedded editor/product screenshot
- engine/use-case cards
- template gallery strip
- technical FAQ
- final CTA/footer

Homepage should feel like:

- part product page
- part search landing page
- part conversion hub

### Tool Landing Pages

Structure:

- breadcrumb
- keyword-led H1
- supporting intro copy
- CTA row
- main screenshot/editor preview
- sticky desktop right rail
- benefits grid
- FAQ
- related tools

The right rail can contain:

- start using tool CTA
- supported databases list
- email capture later
- one ad slot on longer pages

### Blog / Guides

Structure:

- left TOC
- central article column
- right rail with CTA, related resources, and optional ad

The editorial pages should look technical and curated, not magazine-like.

### Template Gallery

Structure:

- left filter rail
- grid of dark preview cards
- hover previews
- strong CTA per card

### App Editor

Structure:

- compact top toolbar
- left object navigation
- large central canvas
- right properties rail
- bottom status/action strip if needed

## 7. Component Direction

Key reusable components:

- `SiteHeader`
- `HeroConsole`
- `EditorPreviewFrame`
- `ToolHero`
- `RightRailCard`
- `DatabaseBadgeRow`
- `TemplateCard`
- `CompareTable`
- `FAQAccordion`
- `BreadcrumbBar`
- `InlineCodeBlock`
- `AdSlotCard`

Style rules:

- radius should be subtle, around 10-16px on marketing cards
- shadows should be soft and low spread
- borders should do more work than shadows
- avoid overly glassy translucent panels

## 8. Ads and Monetization UX

AdSense should inherit the product style rather than look bolted on.

Recommended ad container treatment:

- dark panel background
- labeled but unobtrusive
- clearly separated from primary actions
- never styled to mimic product buttons

Good placements in this visual system:

- below the first major content block
- inside the right rail on long desktop pages
- between FAQ and related tools

Avoid:

- ad directly beside primary CTA in hero
- ad inside the editor workflow
- multiple bright ad boxes stacked together

## 9. SEO Page Design Principles

Because we want programmatic SEO without thin-page signals, every long-tail page should still look intentionally designed.

Each SEO page should include:

- strong hero with keyword alignment
- product screenshot or diagram preview
- 3-4 practical value points
- database engine coverage
- FAQ with genuine specificity
- related tools and templates
- visible CTA into `/app`

This keeps pages:

- indexable
- useful
- monetizable
- internally connected

## 10. Frontend Implementation Notes

When we start building:

- use CSS variables for the full color system
- keep most marketing pages as server components
- create a shared `Surface` and `Panel` primitive to standardize dark cards
- build one screenshot frame component and reuse it everywhere
- use one consistent content width system across landing pages
- use editor-inspired background textures sparingly

## 11. Non-Goals

Avoid these directions:

- bright startup gradients
- oversized rounded blobs
- playful consumer illustrations
- heavy neumorphism
- overly minimal white-space-only layouts
- bright white documentation aesthetic

## 12. Immediate Design Translation

For the first implementation pass, we should mirror the reference at a system level, not clone it literally.

Keep:

- dark engineering aesthetic
- structure of homepage/tool/blog/template/editor surfaces
- compact header and product-first page composition

Adapt:

- rename and rebrand to `drawDB`
- make database diagram previews the hero signature
- reserve brighter blue accents for conversion-critical actions
- tune contrast for accessibility and Core Web Vitals-friendly rendering
