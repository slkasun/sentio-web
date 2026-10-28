/**
 * /sitemap.xml: every page in src/pages except the 404, as one flat sitemap.
 */
import type { APIRoute } from "astro";

const pages = Object.keys(import.meta.glob("./**/*.astro"))
  .filter((file) => !file.endsWith("/404.astro"))
  .map((file) => file.replace(/^\./, "").replace(/index\.astro$/, ""))
  .sort();

export const GET: APIRoute = ({ site }) => {
  const urls = pages.map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
