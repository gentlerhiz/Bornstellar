import { readdir } from "node:fs/promises";
import path from "node:path";

const showcaseFolderBySlug: Record<string, string> = {
  "information-technology": "IT",
  "agricultural-business": "Agricultural Services",
  "real-estate": "Real Estate & Land Development",
  "machinery-manufacturing": "Machinery & Equipment Manufacturing",
  "construction-infrastructure": "Construction & Infrastructure Contracting",
  "general-trading": "General Trading & Commerce",
  "oil-gas-services": "Oil & Gas Services",
  "business-consulting": "Business & Management Consulting",
  "forensic-financial-services": "Forensic Financial Services",
  automotive: "Automotive Manufacturing & Distribution",
  "research-development": "Research & Development",
  "renewable-energy": "Renewable Energy Solutions",
  "media-digital-management": "Media & Digital Management",
};

function toPublicUrl(folder: string, fileName: string): string {
  const safeFolder = folder.split("/").map(encodeURIComponent).join("/");
  const safeName = encodeURIComponent(fileName);
  return `/divisionsImages/${safeFolder}/${safeName}`;
}

export async function getDivisionShowcaseImages(slug: string, limit = 3): Promise<string[]> {
  const folder = showcaseFolderBySlug[slug];
  if (!folder) return [];

  const targetDir = path.join(process.cwd(), "public", "divisionsImages", folder);

  try {
    const entries = await readdir(targetDir, { withFileTypes: true });
    const allImageFiles = entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => /\.(png|jpe?g|webp)$/i.test(name))
      .sort((a, b) => a.localeCompare(b));

    let imageFiles = allImageFiles.slice(0, limit);

    if (slug === "information-technology" && limit >= 3) {
      const preferredThird = allImageFiles.find((name) => /^aaa\.(jpe?g|png|webp)$/i.test(name));

      if (preferredThird) {
        const withoutPreferred = allImageFiles.filter((name) => name !== preferredThird);
        imageFiles = [...withoutPreferred.slice(0, 2), preferredThird];
      }
    }

    return imageFiles.map((name) => toPublicUrl(folder, name));
  } catch {
    return [];
  }
}
