/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.kivari.co.za",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://www.kivari.co.za/sitemap.xml"],
  },
};
