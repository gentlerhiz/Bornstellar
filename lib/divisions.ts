export interface Division {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  services: string[];
  targetSectors?: string;
  icon: string;
}

export const divisions: Division[] = [
  {
    id: 1,
    slug: "information-technology",
    name: "Information Technology Services",
    tagline: "Accelerating Africa's digital economy",
    overview:
      "Bornstellar's Information Technology Services division helps African organisations design, build, and manage the digital systems that underpin modern institutions. We align technology roadmaps with business and regulatory realities in African markets, focusing on high-availability, security, and interoperability.",
    services: [
      "IT strategy and architecture consultancy",
      "Custom software development and systems integration",
      "Cloud and infrastructure advisory",
      "Cybersecurity assessments and implementation support",
      "Technology training and capacity building",
      "Digital transformation roadmaps",
    ],
    targetSectors:
      "Financial services, government, agriculture, education, healthcare, and manufacturing.",
    icon: "💻",
  },
  {
    id: 2,
    slug: "agricultural-business",
    name: "Agricultural Business",
    tagline: "Strengthening Africa's food systems",
    overview:
      "The Agricultural Business division supports end-to-end food and agribusiness value chains, from primary production to market access. We aim to boost productivity, reduce post-harvest losses, and help African farmers capture more value by linking them to regional and export markets.",
    services: [
      "Commercial farming operations and outgrower schemes",
      "Livestock rearing and dairy production",
      "Sourcing, aggregation, and trading of agri-produce",
      "Supply of inputs, equipment, and services to farmers",
      "Development of cold chain and logistics partnerships",
      "Market linkages for regional and export opportunities",
    ],
    targetSectors: "Agriculture, agribusiness, food processing, and export trade.",
    icon: "🌾",
  },
  {
    id: 3,
    slug: "real-estate",
    name: "Real Estate & Land Development",
    tagline: "Building the spaces Africa calls home",
    overview:
      "This division structures and delivers real estate and land development projects that align with urbanisation, industrialisation, and infrastructure plans. We emphasise transparent land processes, regulatory compliance, and sustainable design principles.",
    services: [
      "Real estate and land consultancy",
      "Development of residential, commercial, and industrial assets",
      "Land assembly, planning, and infrastructure provisioning",
      "Joint venture and PPP-based developments",
      "Property management and facility operations support",
    ],
    targetSectors:
      "Residential estates, commercial offices, industrial parks, mixed-use developments.",
    icon: "🏗️",
  },
  {
    id: 4,
    slug: "machinery-manufacturing",
    name: "Machinery & Equipment Manufacturing",
    tagline: "Industrialising Africa from the ground up",
    overview:
      "The Machinery and Equipment Manufacturing division supports Africa's mechanisation and industrialisation agenda. We prioritise durable, context-appropriate equipment that can withstand local operating conditions and be maintained by local technicians.",
    services: [
      "Design and manufacturing of farm machinery and equipment",
      "Production and assembly of auto-related machinery and tools",
      "Localisation of spare parts and components",
      "After-sales service, maintenance, and technical support networks",
      "Partnerships with technology providers for knowledge transfer",
    ],
    targetSectors:
      "Agriculture, automotive, industrial manufacturing, and infrastructure.",
    icon: "⚙️",
  },
  {
    id: 5,
    slug: "construction-infrastructure",
    name: "Construction & Infrastructure Contracting",
    tagline: "Connecting people, markets, and industries",
    overview:
      "Bornstellar's Construction and Infrastructure Contracting division executes civil and infrastructure projects that are critical to connectivity and economic productivity. We work as principal contractor or subcontractor with disciplined project management and HSE standards.",
    services: [
      "Roads, bridges, and transportation infrastructure",
      "Industrial and commercial facilities",
      "Social infrastructure (schools, healthcare, community centers)",
      "Rehabilitation, maintenance, and lifecycle services",
      "Project management and HSE compliance",
    ],
    targetSectors:
      "Transport, energy, water & sanitation, education, healthcare, and industrial infrastructure.",
    icon: "🏛️",
  },
  {
    id: 6,
    slug: "general-trading",
    name: "General Trading & Commerce",
    tagline: "Moving essential goods across Africa",
    overview:
      "This division manages Bornstellar's trading, distribution, and commerce activities across African and international markets. We move essential goods efficiently and transparently, supporting industrial, agricultural, and consumer markets while building reliable trade relationships across borders.",
    services: [
      "Import and export of strategic goods and commodities",
      "Wholesale and retail distribution networks",
      "Supply-chain structuring, warehousing, and logistics",
      "Structured trade solutions with counterparties",
      "Agency and brokerage services",
    ],
    targetSectors:
      "Agricultural commodities, industrial inputs, consumer goods, machinery, construction materials, and energy products.",
    icon: "📦",
  },
  {
    id: 7,
    slug: "oil-gas-services",
    name: "Oil & Gas Services",
    tagline: "Safe, local, compliant energy support",
    overview:
      "The Oil and Gas Services division supports operators and contractors across the upstream, midstream, and downstream value chains. We blend global standards with strong local participation, creating lasting value in host communities and supporting African energy security.",
    services: [
      "Technical and non-technical support services",
      "Project management support and logistics coordination",
      "Ancillary services aligned with local content regulations",
      "Integrity, safety, and environmental compliance support",
      "Training and capacity building for local workforce",
    ],
    targetSectors:
      "Upstream support, midstream logistics, downstream distribution, and compliance/regulatory support.",
    icon: "🛢️",
  },
  {
    id: 8,
    slug: "business-consulting",
    name: "Business & Management Consulting",
    tagline: "Strengthening institutions, improving performance",
    overview:
      "This division provides advisory and support services that strengthen institutions and improve performance. We help clients institutionalise structures, processes, and controls that sustain long-term growth and build investor confidence.",
    services: [
      "Management and organisational consulting",
      "Office administration and business process outsourcing",
      "Business support services for local and international investors",
      "Governance, risk, and compliance advisory",
      "Strategic planning and performance improvement",
      "Change management and institutional development",
    ],
    targetSectors:
      "Corporates, SMEs, government agencies, development institutions, and foreign investors entering African markets.",
    icon: "📊",
  },
  {
    id: 9,
    slug: "forensic-financial-services",
    name: "Forensic Financial Services",
    tagline: "Protecting the integrity of financial systems",
    overview:
      "Bornstellar's Forensic Financial Services division supports the integrity of financial systems and corporate governance. We combine technical accounting expertise with investigative rigour to support regulators, corporates, lenders, investors, and legal teams in complex financial matters.",
    services: [
      "Forensic accounting and financial investigations",
      "Fraud risk assessments and internal controls design",
      "Litigation support, dispute analysis, and expert witness reporting",
      "Asset tracing and recovery support",
      "Training for boards, regulators, and finance teams",
      "Due diligence for mergers, acquisitions, and investments",
    ],
    targetSectors:
      "Financial services, regulators, legal, investment, and corporate governance.",
    icon: "🔍",
  },
  {
    id: 10,
    slug: "automotive",
    name: "Automotive Manufacturing & Distribution",
    tagline: "Driving Africa's mobility revolution",
    overview:
      "This division focuses on vehicles and automotive components tailored to African mobility needs. We seek to deepen local value addition, create skilled jobs, and improve access to safe, reliable, and affordable mobility solutions across Africa.",
    services: [
      "Manufacture, fabrication, and assembly of vehicles and parts",
      "Import, export, and distribution of vehicles and components",
      "Brokerage and marketing of automotive products",
      "Establishment of service, maintenance, and spares networks",
      "Support for local assembly and industrialisation initiatives",
    ],
    targetSectors:
      "Commercial vehicles, passenger vehicles, motorcycles, automotive components, and vehicle financing.",
    icon: "🚗",
  },
  {
    id: 11,
    slug: "research-development",
    name: "Research & Development",
    tagline: "Africa's innovation engine",
    overview:
      "The Research and Development division is Bornstellar's innovation engine. We ensure that Bornstellar's growth is grounded in evidence, data, and continuous experimentation rather than assumptions or imported solutions that may not fit African contexts.",
    services: [
      "Scientific, technical, economic, and industrial research",
      "Pilot projects, proof-of-concept initiatives",
      "Policy, market, and impact studies",
      "Collaboration with universities, research institutes, and development partners",
      "Testing and validation of new technologies and business models",
    ],
    targetSectors:
      "Agricultural technology, renewable energy and storage, manufacturing, digital platforms, and financial systems innovation.",
    icon: "🔬",
  },
  {
    id: 12,
    slug: "renewable-energy",
    name: "Renewable Energy Solutions",
    tagline: "Clean power for Africa's future",
    overview:
      "The Renewable Energy Solutions division supports Africa's transition to cleaner, reliable energy. We expand access to affordable, clean power while complementing existing energy systems, supporting industrialisation, and reducing carbon intensity.",
    services: [
      "Design, development, and deployment of solar energy solutions",
      "Manufacturing and integration of renewable energy modules",
      "Hybrid and off-grid systems for communities, farms, and SMEs",
      "Energy efficiency, storage, and smart systems advisory",
      "Public-private partnerships for rural electrification",
    ],
    targetSectors:
      "Solar home systems, mini-grids, commercial/industrial solar, agricultural solar, and backup power.",
    icon: "☀️",
  },
];

export const thematicBlocks = [
  {
    title: "Technology & Digital Infrastructure",
    description:
      "Future-proof IT services, platforms, and training that accelerate Africa's digital economy.",
    href: "/divisions/information-technology",
    color: "from-blue-900/40 to-blue-950/20",
  },
  {
    title: "Food & Agricultural Systems",
    description:
      "Integrated agriculture, livestock, and agro-trade capabilities that enhance food security and export competitiveness.",
    href: "/divisions/agricultural-business",
    color: "from-green-900/40 to-green-950/20",
  },
  {
    title: "Built Environment & Mobility",
    description:
      "Real estate, construction, machinery, and automotive solutions that connect people, markets, and industries.",
    href: "/divisions/construction-infrastructure",
    color: "from-stone-800/40 to-stone-900/20",
  },
  {
    title: "Energy & Natural Resources",
    description:
      "Renewables and oil & gas services that support a just and pragmatic energy transition in Africa.",
    href: "/divisions/renewable-energy",
    color: "from-orange-900/40 to-orange-950/20",
  },
  {
    title: "Capital, Governance & Assurance",
    description:
      "Business consulting and forensic financial services that strengthen institutions and investor confidence.",
    href: "/divisions/business-consulting",
    color: "from-purple-900/40 to-purple-950/20",
  },
];

export const stats = [
  { value: "12", label: "Core Divisions" },
  { value: "2025", label: "Year Incorporated" },
  { value: "5+", label: "African Regions" },
  { value: "1", label: "Unified Platform" },
];
