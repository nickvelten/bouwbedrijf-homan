import type { MetadataRoute } from "next";

const BASE = "https://www.bouwbedrijfhoman.nl";
const ROUTES = ["", "/diensten", "/projecten", "/over-ons", "/werken-bij", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
