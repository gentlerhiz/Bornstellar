export interface Division {
  id: number;
  slug: string;
  name: string;
  businessName?: string;
  tagline: string;
  overview: string;
  approach?: string;
  howWeWork?: string;
  services: string[];
  sectorCategories?: string[];
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
      "Bornstellar's IT Services division helps African organizations design, build, and manage the digital systems that underpin modern institutions. We translate complex technology requirements into practical, scalable solutions suited to African regulatory and infrastructure realities.",
    howWeWork:
      "We align every technology roadmap with local business realities — prioritizing high availability, security, and interoperability over unnecessary complexity. Our teams combine local insight with global best practices to serve banks, governments, SMEs, and development projects.",
    services: [
      "IT strategy and architecture consultancy",
      "Custom software development and systems integration",
      "Cloud and infrastructure advisory",
      "Cybersecurity assessments and implementation support",
      "Technology training and capacity building",
      "Digital transformation roadmaps aligned with African regulatory environments",
    ],
    sectorCategories: [
      "Financial services",
      "Government & public sector",
      "Agriculture",
      "Education",
      "Healthcare",
      "Manufacturing",
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
      "The Agricultural Business division supports end-to-end food and agribusiness value chains — from primary production and input supply to market access and export linkages. We exist to help African farmers capture more value from the land.",
    howWeWork:
      "We aim to boost productivity, reduce post-harvest losses, and connect African farmers to regional and export markets under transparent, long-term arrangements that guarantee fair value.",
    services: [
      "Commercial farming operations and outgrower schemes",
      "Livestock rearing and dairy production",
      "Sourcing, aggregation, and trading of agri-produce",
      "Supply of agricultural inputs, equipment, and services",
      "Development of cold chain and logistics partnerships",
      "Market linkages for regional and export opportunities",
    ],
    sectorCategories: [
      "Farm inputs",
      "Mechanization",
      "Post-harvest handling",
      "Storage",
      "Processing",
      "Market access",
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
      "This division structures and delivers real estate and land development projects aligned with Africa's urbanization, industrialization, and infrastructure needs. We bring together regulatory knowledge, capital structuring, and execution capability to create bankable, community-conscious developments.",
    approach:
      "We emphasize transparent land processes, regulatory compliance, and sustainable design — ensuring every development is legally sound, financially viable, and beneficial to surrounding communities.",
    services: [
      "Real estate and land consultancy",
      "Development of residential, commercial, and industrial assets",
      "Land assembly, planning, and infrastructure provisioning",
      "Joint venture and PPP-based developments",
      "Property management and facility operations support",
    ],
    sectorCategories: [
      "Residential estates",
      "Commercial offices",
      "Retail developments",
      "Industrial parks",
      "Mixed-use developments",
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
      "The Machinery and Equipment Manufacturing division advances Africa's mechanization and industrialization agenda — designing and producing durable, context-appropriate equipment built to perform under local conditions and maintained by local technicians.",
    approach:
      "Every piece of equipment we build prioritizes durability and repairability over complexity — reducing downtime, cutting foreign exchange pressure, and empowering local technicians to keep production moving.",
    services: [
      "Design and manufacturing of farm machinery and equipment",
      "Production and assembly of auto-related machinery and tools",
      "Localization of spare parts and components",
      "After-sales service, maintenance, and technical support networks",
      "Technology transfer partnerships with international providers",
    ],
    sectorCategories: [
      "Tractors & tillage equipment",
      "Harvesters",
      "Irrigation systems",
      "Automotive tools",
      "Industrial machinery",
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
      "Bornstellar's Construction and Infrastructure division executes civil and infrastructure projects that are critical to economic connectivity and productivity. We bring disciplined project management, HSE compliance, and stakeholder engagement to every engagement.",
    approach:
      "We operate as principal contractor or subcontractor depending on project structure — always with rigorous HSE standards, transparent reporting, and active stakeholder engagement built into the delivery model.",
    services: [
      "Roads, bridges, and transportation infrastructure",
      "Industrial and commercial facilities",
      "Social infrastructure — schools, healthcare facilities, community centers",
      "Rehabilitation, maintenance, and infrastructure lifecycle services",
      "Project management, HSE compliance, and quality assurance",
    ],
    sectorCategories: [
      "Transport",
      "Energy",
      "Water & sanitation",
      "Education",
      "Healthcare",
      "Agriculture",
      "Industrial infrastructure",
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
      "This division manages Bornstellar's trading, distribution, and commerce activities — moving essential goods efficiently and transparently across African and international markets while building durable trade relationships.",
    howWeWork:
      "To move essential goods efficiently and transparently — supporting industrial, agricultural, and consumer markets while building reliable, cross-border trade relationships that generate lasting economic value.",
    services: [
      "Import and export of strategic goods and commodities",
      "Wholesale and retail distribution networks",
      "Supply-chain structuring, warehousing, and logistics partnerships",
      "Structured trade solutions with counterparties, financiers, and insurers",
      "Agency and brokerage services",
    ],
    sectorCategories: [
      "Agricultural commodities",
      "Industrial inputs",
      "Consumer goods",
      "Machinery",
      "Construction materials",
      "Energy products",
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
      "The Oil and Gas Services division supports operators and contractors across upstream, midstream, and downstream value chains — blending global technical standards with strong local participation to create lasting value in host communities.",
    approach:
      "We align global operational standards with Nigerian local content requirements — ensuring that host communities and local workforce benefit meaningfully from energy sector activity.",
    services: [
      "Technical and non-technical support services to oil and gas projects",
      "Project management support and logistics coordination",
      "Ancillary services aligned with local content regulations",
      "Support for integrity, safety, and environmental compliance",
      "Training and capacity building for local workforce",
    ],
    sectorCategories: [
      "Upstream support",
      "Midstream logistics & infrastructure",
      "Downstream distribution",
      "Compliance & regulatory support",
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
      "This division provides advisory and support services that strengthen institutions, professionalize operations, and improve sustainable performance — helping organizations build the structures that attract investment and sustain long-term growth.",
    howWeWork:
      "We help clients institutionalize structures, processes, and controls that sustain growth — professionalizing operations, building investor confidence, and supporting the transition from informal to formal governance.",
    services: [
      "Management and organizational consulting",
      "Office administration and business process outsourcing",
      "Business support for local and international investors",
      "Governance, risk, and compliance advisory",
      "Strategic planning and performance improvement",
      "Change management and institutional development",
    ],
    sectorCategories: [
      "Corporates",
      "SMEs",
      "Government agencies",
      "Development institutions",
      "Family businesses",
      "Foreign investors",
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
      "Bornstellar's Forensic Financial Services division supports the integrity of financial systems and corporate governance — combining deep accounting expertise with investigative rigor to serve regulators, lenders, investors, and legal teams in complex financial matters.",
    howWeWork:
      "Strong forensic and governance capabilities are essential for building investor confidence, supporting the rule of law, and enabling the transparent capital markets that African economies need to grow.",
    services: [
      "Forensic accounting and financial investigations",
      "Fraud risk assessments and internal controls design",
      "Litigation support, dispute analysis, and expert witness reporting",
      "Asset tracing and recovery support",
      "Due diligence for mergers, acquisitions, and investments",
      "Training for boards, regulators, and finance teams on financial integrity",
    ],
    sectorCategories: [
      "Regulators",
      "Corporate entities",
      "Lenders & investors",
      "Legal teams",
      "Development institutions",
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
      "This division addresses Africa's mobility needs — designing, assembling, and distributing vehicles and automotive components that are accessible, reliable, and suited to local road and economic conditions.",
    howWeWork:
      "We seek to deepen local value addition, create skilled jobs, and improve access to safe, reliable, and affordable mobility — contributing to both industrialization and the everyday economic lives of African communities.",
    services: [
      "Manufacture, fabrication, and assembly of vehicles and automotive parts",
      "Import, export, and distribution of vehicles and components",
      "Brokerage and marketing of automotive products",
      "Establishment of service, maintenance, and spares networks",
      "Support for local assembly and industrialization initiatives",
    ],
    sectorCategories: [
      "Commercial vehicles",
      "Passenger vehicles",
      "Motorcycles",
      "Automotive components",
      "Vehicle financing",
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
      "The Research and Development division is Bornstellar's innovation engine — ensuring that every strategic decision, product, and investment is grounded in evidence, data, and continuous experimentation rather than assumptions or imported models that may not fit African realities.",
    howWeWork:
      "We focus on agricultural technology and productivity, renewable energy and storage, manufacturing process innovation, digital platforms, infrastructure materials, and financial systems — all researched through the lens of what works for Africa.",
    services: [
      "Scientific, technical, economic, and industrial research",
      "Pilot projects, proof-of-concept initiatives, and technology localization",
      "Policy, market, and impact studies to inform investment and strategy",
      "Collaboration with universities, research institutes, and development partners",
      "Testing and validation of new technologies, processes, and business models",
    ],
    sectorCategories: [
      "Universities",
      "Research institutes",
      "Government agencies",
      "Development partners",
      "Private sector innovators",
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
      "The Renewable Energy Solutions division supports Africa's transition to cleaner, more reliable power — developing and deploying solar and hybrid energy systems that serve communities, businesses, and industrial operations across the continent.",
    howWeWork:
      "To expand access to affordable, clean power while supporting industrialization and reducing carbon intensity — reaching the households, farms, and businesses that the central grid has yet to serve.",
    services: [
      "Design, development, and deployment of solar energy solutions",
      "Manufacturing, assembly, and integration of renewable energy modules",
      "Hybrid and off-grid systems for communities, farms, SMEs, and industry",
      "Energy efficiency, storage, and smart systems advisory",
      "Public-private partnerships for rural electrification",
    ],
    sectorCategories: [
      "Solar home systems",
      "Mini-grids",
      "Commercial & industrial solar",
      "Agricultural solar",
      "Backup power",
    ],
    targetSectors:
      "Solar home systems, mini-grids, commercial/industrial solar, agricultural solar, and backup power.",
    icon: "☀️",
  },
  {
    id: 13,
    slug: "media-digital-management",
    name: "Media & Digital Management",
    businessName: "Zenith Multipurposes",
    tagline: "Shaping Africa's digital narrative",
    overview:
      "Operating under the Zenith Multipurposes brand, this division delivers end-to-end digital and media services for organizations that want to build compelling, credible, and commercially effective presences across digital platforms.",
    howWeWork:
      "We combine strategic thinking with creative production capability — helping organizations not just show up online, but build audiences, communicate value, and manage reputation with consistency and impact.",
    services: [
      "Social media strategy, management, and community engagement",
      "Content production — video, photography, copy, and creative assets",
      "Digital marketing — SEO, paid media, and performance campaigns",
      "Brand strategy, identity development, and creative direction",
      "Online reputation management and crisis communication",
      "Analytics, reporting, and digital performance advisory",
    ],
    sectorCategories: [
      "Corporates",
      "SMEs",
      "NGOs",
      "Government agencies",
      "Startups",
      "Personal brands",
    ],
    targetSectors:
      "Corporates, SMEs, government agencies, NGOs, startups, and consumer brands seeking digital growth across African markets.",
    icon: "📱",
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
  {
    title: "Media & Communications",
    description:
      "Digital presence, content production, and brand strategy that shape Africa's digital narrative.",
    href: "/divisions/media-digital-management",
    color: "from-pink-900/40 to-pink-950/20",
  },
];

export const stats = [
  { value: "13", label: "Core Divisions" },
  { value: "2025", label: "Year Incorporated" },
  { value: "5+", label: "African Regions" },
  { value: "1", label: "Unified Platform" },
];
