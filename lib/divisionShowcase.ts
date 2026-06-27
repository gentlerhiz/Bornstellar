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
  "media-digital-management": "Branding",
};

const showcaseImagesBySlug: Record<string, string[]> = {
  "information-technology": [
    "a33bfb7f-ab7c-4f5b-bf67-b75f9991441c_234136354.jpg",
    "a443ef6d-7aa0-419c-97c1-c31bbf7755d7_234244789.JPG",
    "aaa.jpg",
  ],
  "agricultural-business": [
    "1811b9d2-5e17-4293-81ae-4a49a5a7d7e4_235356671.jpg",
    "1fc8d145-f6a5-464a-b2a5-b8a2192a9b6c_235147814.jpg",
    "37a33319-933f-4a12-b4e1-709568feb4c6_235052967.jpg",
    "6ff97eab-a71c-4ae1-a463-a017dab71c61_23504425.jpg",
    "a405a3d3-1b49-4617-9ece-7e566801fef2_235114179.jpg",
    "Agric14.jpg",
    "Agric3.jpeg",
    "Agric3.JPG",
    "b75d5eb3-5657-4711-aebc-42e5a3c275e1_2351990.jpg",
    "Screenshot 2026-05-18 164737.jpg",
  ],
  "real-estate": [
    "9ec76799-ede9-4d3e-ba6b-678d839c6b83.jpg",
    "cityscape-wuxi.jpg",
    "engineer-team-portrait-smile-black-people-construction-site-with-coffee-low-angle-teamwork-architect-happy-african-man-woman-with-tea-collaboration-building-with-mockup.jpg",
    "images (1).jpg",
    "images.jpg",
    "low-angle-view-people-standing-against-blue-sky.jpg",
    "modern-country-houses-construction.jpg",
  ],
  "machinery-manufacturing": [
    "3d-rendering-industry-40-concept.jpg",
    "african-american-factory-worker-working-with-adept-robotic-arm.jpg",
    "car-assembly-line.jpg",
    "close-up-seeder-attached-tractor-field.jpg",
    "engineer-cooperation-male-female-technician-maintenance-control-relay-robot-arm-system-welding-with-tablet-laptop-control-quality-operate-process-work-heavy-industry-40-manufacturing-factory.jpg",
    "mechanic-examining-car-parts.jpg",
  ],
  "construction-infrastructure": [
    "construction-new-highway-aerial-view-viaduct-progress.jpg",
    "distant-shot-urban-area-with-cars-street-high-buildings.jpg",
    "high-angle-view-bridge.jpg",
    "october-2018-building-construction-skyscrapers-dubai.jpg",
    "warehouse-construction-process-with-metal-structures-roofs.jpg",
  ],
  "general-trading": [
    "construction-site.jpg",
    "construction-worker-carring-steel-wood.jpg",
    "images.jpg",
    "Screenshot 2026-05-18 171737.jpg",
  ],
  "oil-gas-services": [
    "large-oil-gas-plant-with-blue-sky-background.jpg",
    "metal-pipes-structures-with-clear-blue-sky.jpg",
    "metallurgical-industry-seen-from-drone.jpg",
    "modern-oil-factory-territory.jpg",
    "offshore-production-platform-sea-oil-gas-production.jpg",
    "petrol-filling-station-highway-fuel-price-petrol-cars-concept.jpg",
  ],
  "business-consulting": [
    "financial-advisor-sharing-his-expertise-regarding-pension-retirement-plans.jpg",
    "side-view-businesswoman-showing-analytical-charts-her-male-coworker.jpg",
  ],
  "forensic-financial-services": [
    "african-mask-documents.jpg",
    "financial-advisor-sharing-his-expertise-regarding-pension-retirement-plans.jpg",
    "general-director-employing-big-data-help-solving-tasks-control-room.jpg",
    "handcuffs-with-money-laptop-keyboard-top-view.jpg",
    "motivated-man-job-interview-interested-career-advancement-chatting.jpg",
    "side-view-businesswoman-showing-analytical-charts-her-male-coworker.jpg",
    "young-smiling-african-american-businessman-with-tablet-talking-coworker.jpg",
  ],
  "research-development": [
    "back-view-picture-african-man-sitting-office-coworking.jpg",
    "biologist-scientist-african-woman-researcher-taking-genetic-solution-from-test-tube.jpg",
    "medical-doctor-girl-working-with-microscope-young-female-scientist-doing-vaccine-research.jpg",
    "programmer-using-computer-home-artificial-intelligence-computing.jpg",
  ],
  "renewable-energy": [
    "engineer-charge-solar-panel-installation-installation-solar-energy.jpg",
    "man-working-environment-project-close-up.jpg",
    "photovoltaics-solar-power-station-energy-from-natural.jpg",
    "portrait-man-against-sky.jpg",
    "solar-panel-produces-green-environmentaly-friendly-energy-from-setting-sun-aerial-view-from-drone.jpg",
  ],
  "media-digital-management": [
    "b14.jpeg",
    "b18.jpeg",
    "b17.jpeg",
  ],
  automotive: [
    "africa-cars-industry.jpg",
    "auto-assembly-line.jpg",
    "images (1).jpg",
    "images (2).jpg",
    "images (3).jpg",
    "images (4).jpg",
    "robotic-arm-assembly.jpg",
  ],
};

function toPublicUrl(folder: string, fileName: string): string {
  const safeFolder = folder.split("/").map(encodeURIComponent).join("/");
  const safeName = encodeURIComponent(fileName);
  return `/divisionsImages/${safeFolder}/${safeName}`;
}

export async function getDivisionShowcaseImages(slug: string, limit = 3): Promise<string[]> {
  const folder = showcaseFolderBySlug[slug];
  const imageFiles = showcaseImagesBySlug[slug];

  if (!folder || !imageFiles) return [];

  return imageFiles.slice(0, limit).map((name) => toPublicUrl(folder, name));
}
