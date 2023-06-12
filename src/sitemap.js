const sitemap = require("sitemap");
const hostname = "https://webcheek.com";

const urls = [
  { url: "/", changefreq: "monthly", priority: 1 },
  { url: "/quiz", changefreq: "monthly", priority: 0.8 },
  { url: "/results", changefreq: "monthly", priority: 0.5 },
  // Add additional pages here
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});

const fs = require("fs");

// Write sitemap to public directory
fs.writeFileSync("./public/sitemap.xml", sitemapInstance.toString());
