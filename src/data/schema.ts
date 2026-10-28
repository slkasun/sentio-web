/**
 * Shared JSON-LD structured data.
 */
const SITE = "https://sentiologic.site";

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "SentioLogic",
  alternateName: "sentioLogic",
  url: `${SITE}/`,
  logo: `${SITE}/assets/logo-primary.png`,
  description:
    "Software engineering company building web, mobile, POS, fintech and enterprise platforms, and the maker of Sentio POS.",
};

export const posSoftwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE}/pos/#software`,
  name: "Sentio POS",
  url: `${SITE}/pos/`,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Restaurant point of sale",
  operatingSystem: "Web",
  description:
    "Restaurant POS terminal and Web Admin Portal for dine-in, takeaway, billing, outlet management and reporting.",
  image: `${SITE}/assets/pos-billing.webp`,
  publisher: { "@id": `${SITE}/#organization`, "@type": "Organization", name: "SentioLogic" },
};

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}
