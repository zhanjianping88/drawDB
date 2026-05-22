type SiteAdsenseProps = {
  clientId?: string;
};

export function SiteAdsense({ clientId }: SiteAdsenseProps) {
  if (!clientId) {
    return null;
  }

  return (
    <script
      async
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
    />
  );
}
