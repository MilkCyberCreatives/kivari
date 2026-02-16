/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.kivari.co.za",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    additionalSitemaps: [
      "https://www.kivari.co.za/sitemap.xml"
    ]
  }
};
