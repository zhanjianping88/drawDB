const defaultAdsensePublisherId = "pub-9180363348442934";
const adsenseCertificationAuthorityId = "f08c47fec0942fa0";

function getAdsensePublisherId() {
  const value = process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim();

  if (!value) {
    return defaultAdsensePublisherId;
  }

  return value.startsWith("ca-") ? value.slice(3) : value;
}

export function GET() {
  const publisherId = getAdsensePublisherId();
  const body = `google.com, ${publisherId}, DIRECT, ${adsenseCertificationAuthorityId}\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
