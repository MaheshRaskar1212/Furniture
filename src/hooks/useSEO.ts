import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
};

const defaultOgImage = "https://tenon.replit.app/og-image.svg";

export function useSEO({ title, description, canonical, ogImage }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("robots", "index, follow");

    setMeta("og:type", "website", true);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:locale", "en_IN", true);
    setMeta("og:site_name", "Tenon", true);
    setMeta("og:image", ogImage ?? defaultOgImage, true);
    if (canonical) {
      setMeta("og:url", canonical, true);
      let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage ?? defaultOgImage);
  }, [title, description, canonical, ogImage]);
}
