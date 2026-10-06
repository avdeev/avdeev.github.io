import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // Don't-touch files at repo root → output root
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("yandex_719c3d8a381534e7.html");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");

  // Static assets from source
  eleventyConfig.addPassthroughCopy("src/assets");

  // Watch CSS source for dev rebuilds
  eleventyConfig.addWatchTarget("src/styles/");

  // Human-readable date filter
  eleventyConfig.addFilter("ruDate", (value) => {
    if (!value) return "";
    const date = value instanceof Date ? value : new Date(value);
    return date.toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
    });
  });

  // ISO date filter for sitemap
  eleventyConfig.addFilter("isoDate", (value) => {
    if (!value) return "";
    const date = value instanceof Date ? value : new Date(value);
    return date.toISOString().split("T")[0];
  });

  // Basic Russian typography: tie short words (prepositions, particles) with nbsp
  eleventyConfig.addFilter("typo", (value) => {
    if (typeof value !== "string") return value;
    return value
      .replace(/(^|\s)([а-яё]{1,2})\s+(?=[а-яё])/gi, "$1$2\u00A0")
      .replace(/\s*—\s*/g, "\u00A0— ");
  });
  eleventyConfig.addFilter("isoDate", (value) => {
    if (!value) return "";
    const date = value instanceof Date ? value : new Date(value);
    return date.toISOString().split("T")[0];
  });
  eleventyConfig.addFilter("absoluteUrl", (path, base) => {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `${base.replace(/\/$/, "")}${cleanPath}`;
  });

  // Plugins
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
