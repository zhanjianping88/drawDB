# Deployment Checklist

## Environment

- Set `NEXT_PUBLIC_SITE_URL` to the production domain.
- Add `NEXT_PUBLIC_GA_ID` if Google Analytics should be enabled at launch.
- Add `NEXT_PUBLIC_GSC_VERIFICATION` if Google Search Console verification should be injected through metadata.

## SEO

- Confirm canonical URLs use the production domain.
- Verify `robots.txt` points to the production sitemap.
- Submit the generated sitemap to Google Search Console.
- Spot-check homepage, `/tools`, `/templates`, tool detail pages, and template detail pages for correct metadata and JSON-LD.

## Content

- Review homepage copy, tool pages, and template pages for launch-quality wording.
- Verify all internal links resolve correctly.
- Check legal pages at `/privacy` and `/terms`.
- Confirm contact address and support details are real before launch.

## Analytics

- Verify GA loads only when `NEXT_PUBLIC_GA_ID` is set.
- Verify Search Console meta verification appears only when `NEXT_PUBLIC_GSC_VERIFICATION` is set.

## Quality

- Run `npm run typecheck`
- Run `npm run lint`
- Run `npm run build`
- Review the built routes for `/tools/[slug]` and `/templates/[slug]`.

## Launch

- Deploy preview build and review it on the production-like domain.
- Confirm Core Web Vitals and page weight on homepage and top SEO landing pages.
- Re-check sitemap accessibility after production deploy.
