// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sentiologic.site",
  trailingSlash: "always",
  build: { format: "directory" },
});
