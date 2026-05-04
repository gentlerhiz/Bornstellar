---
inclusion: manual
---

# Division Image Guidelines — Bornstellar

This steering file defines the required image direction for all 13 Bornstellar division cards and the /divisions page hero. Follow these rules whenever updating, replacing, or adding images to division components.

## Core Principle

**Prioritize authentic African context over generic stock photography.** Every image should reinforce Bornstellar's African-first identity.

---

## Hero / Banner (Top of /divisions Page)

- A wide aerial shot of an African city skyline or industrial zone at golden hour
- Overlay with a subtle dark gradient so white text sits cleanly on top
- Current image: `/africa1.jpeg` (local public asset)

---

## Per-Division Image Requirements

| Division | Required Image Direction |
|---|---|
| **Information Technology Services** | A Nigerian or African professional working on a laptop or dual monitors in a clean modern office. Avoid generic Western tech imagery. Prefer African tech hub settings (e.g. Co-Creation Hub Lagos aesthetic). |
| **Agricultural Business** | An overhead drone shot of lush farmland, or a ground-level photo of African farmers harvesting produce. Should feel productive and real — not decorative. |
| **Real Estate & Land Development** | A construction site with a modern building frame rising in an urban African setting, or a newly completed commercial/residential structure. |
| **Machinery & Equipment Manufacturing** | A factory floor with workers operating industrial machinery, welding, or assembling equipment. Warm tones, safety gear visible — human-centered. |
| **Construction & Infrastructure** | A road, bridge, or large-scale infrastructure project mid-construction. Workers and heavy equipment in frame. |
| **General Trading & Commerce** | A busy African market or warehouse with goods stacked and movement visible. Can also use a container port scene. |
| **Oil & Gas Services** | Industrial pipelines, gas flares, or offshore rig imagery in an African context. Prefer Nigerian Delta imagery if available. |
| **Business & Management Consulting** | A professional meeting or boardroom discussion with diverse African professionals. Clean, corporate, and confident in feel. |
| **Forensic Financial Services** | A close-up of financial documents, a calculator, or someone reviewing data on a screen — calm, precise, analytical tone. |
| **Automotive Manufacturing & Distribution** | A vehicle assembly line or showroom floor with African technicians. Alternatively, a fleet of commercial vehicles. |
| **Research & Development** | A laboratory setting with scientists or researchers at work — modern equipment, clean environment. |
| **Renewable Energy Solutions** | Solar panels installed on rooftops or open land in Africa, with blue skies. Ideally a rural electrification scene to reinforce social impact. |
| **Media & Digital Management (Zenith Multipurposes)** | A creative studio or content production setup — camera equipment, editing screens, social media dashboards. Young African creatives in a branded workspace. |

---

## General Photography Rules

1. **African faces and settings** — this reinforces the African-first brand identity
2. **Warm, natural lighting** — avoid cold, clinical stock photo aesthetics
3. **Visual consistency** — same color treatment, crop style, and overlay opacity across all division images
4. **Aspect ratio** — 16:9 or 3:2 with a subtle dark overlay for readability of overlaid text
5. **Avoid** images that feel generic, Western, or overly staged

---

## Image Source Rules

- Prefer **local images** in `/public` when available (e.g. `/agriculture.jpeg`, `/africa1.jpeg`, `/Information.jpeg`)
- When using Unsplash, **always verify the image is free** (not Unsplash+ / Getty) before using it
  - Free images show "Download free" on the photo page
  - Paid images show "Download — Upgrade to Unsplash+" and use `plus.unsplash.com` CDN URLs
  - Only `images.unsplash.com` CDN URLs (not `plus.unsplash.com`) are freely servable
- Get the **numeric CDN photo ID** from the rendered photo page (e.g. `photo-1700469919563-ef267d459da5`) — do not guess IDs from slug URLs
- Always verify a new Unsplash URL resolves before committing it to code

---

## Image Map Locations in Code

Division images are defined in two components — both must be updated together:

- `components/sections/DivisionsCategoriesSection.tsx` — `/divisions` page grid
- `components/sections/DivisionsSection.tsx` — homepage carousel

The image map key is the division `slug` from `lib/divisions.ts`.

---

## Current Image Map (Reference)

```ts
"information-technology"    → photo-1547658719-da2b51169166  (African professional, laptop)
"agricultural-business"     → /agriculture.jpeg               (local)
"real-estate"               → photo-1700469919563-ef267d459da5 (building + crane, Johannesburg)
"machinery-manufacturing"   → photo-1764114903065-4cc137dd303b (factory workers, machinery)
"construction-infrastructure" → photo-1504307651254-35680f356dfd (construction site)
"general-trading"           → photo-1578575437130-527eed3abbec  (shipping containers)
"oil-gas-services"          → photo-1678984236460-2ed63ae1c983  (oil refinery tower)
"business-consulting"       → photo-1573164574511-73c773193279  (diverse meeting room)
"forensic-financial-services" → photo-1611974789855-9c2a0a7236a3 (financial data screen)
"automotive"                → photo-1492144534655-ae79c964c9d7  (car)
"research-development"      → photo-1507413245164-6160d8298b31  (laboratory)
"renewable-energy"          → photo-1509391366360-2e959784a276  (solar panels)
"media-digital-management"  → photo-1611162617213-7d7a39e9b1d7  (social/content setup)
```
