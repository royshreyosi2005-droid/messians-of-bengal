import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap:
      "https://messians-of-bengal-k3u25pj4d-shree21.vercel.app/sitemap.xml",
  };
}