import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  article?: {
    category: string;
    tags?: string[];
  };
  structuredData?: object;
}

export const SEO = ({
  title,
  description,
  image,
  url,
  type = "website",
  keywords,
  author = "Ваш Пријател АД",
  publishedTime,
  modifiedTime,
  article,
  structuredData,
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isName = false) => {
      const attribute = isName ? "name" : "property";
      let element = document.querySelector(`meta[${attribute}="${property}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Basic SEO Meta Tags
    updateMetaTag("description", description, true);
    updateMetaTag("author", author, true);

    if (keywords) {
      updateMetaTag("keywords", keywords, true);
    }

    // Open Graph tags
    updateMetaTag("og:title", title);
    updateMetaTag("og:description", description);
    updateMetaTag("og:type", type);
    updateMetaTag("og:locale", "mk_MK");
    updateMetaTag("og:site_name", "Ваш Пријател АД - Осигурување Прилеп");

    if (image) {
      updateMetaTag("og:image", image);
      updateMetaTag("og:image:width", "1200");
      updateMetaTag("og:image:height", "630");
      updateMetaTag("og:image:alt", title);
    }

    if (url) {
      updateMetaTag("og:url", url);
    }

    // Article-specific tags
    if (type === "article") {
      if (publishedTime) {
        updateMetaTag("article:published_time", publishedTime);
      }
      if (modifiedTime) {
        updateMetaTag("article:modified_time", modifiedTime);
      }
      if (article?.category) {
        updateMetaTag("article:section", article.category);
      }
      if (article?.tags) {
        article.tags.forEach(tag => {
          updateMetaTag("article:tag", tag);
        });
      }
      updateMetaTag("article:author", author);
    }

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image", true);
    updateMetaTag("twitter:title", title, true);
    updateMetaTag("twitter:description", description, true);

    if (image) {
      updateMetaTag("twitter:image", image, true);
      updateMetaTag("twitter:image:alt", title, true);
    }

    // Robots meta
    updateMetaTag("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1", true);

    // Add canonical link
    if (url) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', url);
    }

    // Add Structured Data (JSON-LD)
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function
    return () => {
      // Optional: Clean up structured data on unmount
    };
  }, [title, description, image, url, type, keywords, author, publishedTime, modifiedTime, article, structuredData]);

  return null;
};
