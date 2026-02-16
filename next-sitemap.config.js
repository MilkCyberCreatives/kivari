/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.kivari.co.za").trim(),
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
      },
      {
        userAgent: "GPTBot",
        allow: "/"
      },
      {
        userAgent: "Google-Extended",
        allow: "/"
      },
      {
        userAgent: "CCBot",
        allow: "/"
      }
    ],
    additionalSitemaps: [
      "https://www.kivari.co.za/sitemap.xml"
    ]
  }
};

