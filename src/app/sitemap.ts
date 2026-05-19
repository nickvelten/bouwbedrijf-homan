import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { places } from "@/data/places";
import { services } from "@/data/services";

const BASE = "https://www.bouwbedrijfhoman.nl";
const STATIC_ROUTES = [
  "",
  "/diensten",
  "/projecten",
  "/werkgebied",
  "/over-ons",
  "/werken-bij",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceEntries = services.map((s) => ({
    url: `${BASE}/diensten/${s.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const placeEntries = places.map((p) => ({
    url: `${BASE}/werkgebied/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const projectEntries = projects.map((p) => ({
    url: `${BASE}/projecten/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [
    ...staticEntries,
    ...serviceEntries,
    ...placeEntries,
    ...projectEntries,
  ];
}
