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
  audiences?: {
    label: string;
    description: string;
  }[];
  whyItMatters?: string;
  sectorCategories?: string[];
  targetSectors?: string;
  brandLogoSrc?: string;
  brandLink?: string;
  icon: string;
}

export const divisions: Division[] = [
  {
    id: 1,
    slug: "information-technology",
    name: "Information Technology Services",
    tagline: "Building secure digital systems that perform at scale",
    overview:
      "As a division of Bornstellar, the Information Technology Services division designs, builds, and manages digital systems that help clients run more efficiently, securely, and at scale. The division focuses on practical technology implementation, business continuity, and long-term digital capability for organisations that need reliable systems rather than abstract transformation language.",
    services: [
      "Design and implementation of ERP, CRM, HR, accounting, workflow automation, and business intelligence systems",
      "Custom software development for web platforms, mobile applications, portals, and digital service delivery products",
      "Systems integration across payment platforms, identity systems, databases, APIs, and enterprise software environments",
      "Cloud and infrastructure deployment, including servers, backup systems, migration projects, disaster recovery, and managed hosting",
      "Cybersecurity services including vulnerability assessments, endpoint protection, access control, network hardening, and security reviews",
      "IT procurement advisory, workplace technology deployment, structured cabling coordination, device rollout, and managed support",
      "Technology training, digital onboarding, and capacity-building programmes for staff, administrators, and technical teams",
    ],
    audiences: [
      {
        label: "Individuals",
        description:
          "Professionals, founders, and independent operators who need secure digital tools, websites, data protection, or tailored business systems.",
      },
      {
        label: "Businesses",
        description:
          "SMEs, corporates, financial institutions, and operational teams seeking technology infrastructure, software, and stronger internal systems.",
      },
      {
        label: "Investors",
        description:
          "Institutions and project sponsors looking for technology partners that can support bankable digital infrastructure, operational efficiency, and scalable deployment.",
      },
    ],
    whyItMatters:
      "The division helps clients reduce inefficiency, improve visibility over operations, and build stronger digital foundations for growth. For investors and institutional stakeholders, it also represents a service line positioned around recurring demand, digital modernization, and defensible operational relevance.",
    icon: "💻",
  },
  {
    id: 2,
    slug: "agricultural-business",
    name: "Agricultural Services",
    tagline: "Organising production, aggregation, and market access",
    overview:
      "As a division of Bornstellar, the Agricultural Services division operates across production, supply, aggregation, and market access within the agricultural value chain. The division is structured to turn agricultural activity into more organised, commercially viable operations that create value for producers, buyers, and capital partners.",
    services: [
      "Commercial crop farming operations for grains, vegetables, staple crops, and other high-demand produce",
      "Outgrower scheme development and management, including farmer onboarding, extension coordination, input support, and produce collection frameworks",
      "Livestock and dairy operations covering breeding support, feed systems, production management, and commercial supply arrangements",
      "Sourcing, aggregation, grading, and trading of agricultural produce for processors, distributors, and export-oriented off-takers",
      "Supply of agricultural inputs including seeds, fertilizers, agrochemicals, irrigation tools, and mechanized farming support",
      "Farm mechanization services such as land clearing, ploughing, harrowing, planting, harvesting, and basic equipment leasing",
      "Post-harvest handling, storage coordination, cold-chain support, and early-stage processing partnerships",
      "Market linkage arrangements connecting farms and producer groups to institutional buyers, retailers, processors, and exporters",
    ],
    audiences: [
      {
        label: "Individuals",
        description:
          "Farmers, landowners, agripreneurs, and cooperatives seeking inputs, mechanization, market access, or production support.",
      },
      {
        label: "Businesses",
        description:
          "Processors, food distributors, retailers, hospitality operators, and export buyers needing reliable supply channels.",
      },
      {
        label: "Investors",
        description:
          "Parties interested in structured agribusiness opportunities, scalable production models, commodity access, and value-chain participation.",
      },
    ],
    whyItMatters:
      "The division creates commercial pathways around food production, agricultural trade, and supply-chain coordination. For investors, it opens exposure to productive assets and recurring demand in a sector tied to essential consumption and long-term economic value.",
    icon: "🌾",
  },
  {
    id: 3,
    slug: "real-estate",
    name: "Real Estate & Land Development",
    tagline: "Converting land and assets into commercially sound developments",
    overview:
      "As a division of Bornstellar, the Real Estate and Land Development division structures, develops, and manages property opportunities across residential, commercial, and industrial use cases. The division is designed to convert land and built assets into organised, legally sound, and commercially attractive developments.",
    services: [
      "Construction and development of houses, apartments, residential estates, terraces, duplexes, and serviced living projects",
      "Development of commercial buildings, office spaces, retail facilities, hospitality assets, and mixed-use properties",
      "Industrial property development, including warehouses, logistics facilities, yard spaces, and light industrial sites",
      "Land sourcing, acquisition support, title verification, due diligence, regularization, and documentation support",
      "Site planning, estate layout preparation, access road coordination, drainage planning, and utility infrastructure support",
      "Joint-venture development arrangements with landowners, institutional investors, and project finance partners",
      "Property sales coordination, leasing support, tenant placement, and occupancy management",
      "Property and facility management services, including maintenance oversight, service charge administration, and operational support",
    ],
    audiences: [
      {
        label: "Individuals",
        description:
          "Homebuyers, private landowners, families, and professionals seeking housing, land verification, or managed property opportunities.",
      },
      {
        label: "Businesses",
        description:
          "Developers, retailers, office users, manufacturers, logistics operators, and commercial tenants.",
      },
      {
        label: "Investors",
        description:
          "Partners seeking real asset exposure, structured developments, land-backed ventures, or cashflow-generating property assets.",
      },
    ],
    whyItMatters:
      "The division combines asset creation with legal and commercial discipline, making it relevant to both end-users and capital partners. It also provides Bornstellar with a division anchored in tangible assets, project execution, and long-term value retention.",
    icon: "🏗️",
  },
  {
    id: 4,
    slug: "machinery-manufacturing",
    name: "Machinery & Equipment Manufacturing",
    tagline: "Designing usable machinery for real operating environments",
    overview:
      "As a division of Bornstellar, the Machinery and Equipment Manufacturing division designs, fabricates, assembles, sells, and maintains equipment for agricultural, industrial, and technical use. The division is positioned to deliver practical machinery solutions for clients who need equipment that is usable, serviceable, and aligned with real operating requirements.",
    services: [
      "Design and fabrication of agricultural machinery such as ploughs, planters, tillage tools, threshers, shellers, and small-scale processing machines",
      "Manufacturing and assembly of workshop machinery, industrial tools, fabrication units, and production support equipment",
      "Selling of robotics systems, automation units, and smart mechanical solutions for industrial, agricultural, and institutional clients",
      "Manufacturing and customization of drones for surveillance, mapping, agricultural spraying, inspection, monitoring, and enterprise operations",
      "Production of specialized machines for client-specific use cases, including custom-built equipment for factories, farms, workshops, and technical projects",
      "Local production and supply of spare parts, metal components, machine accessories, and replacement items",
      "Equipment installation, after-sales servicing, preventive maintenance, repairs, and technical support agreements",
      "Technical partnership implementation, localized assembly support, and product adaptation for third-party manufacturers entering the market",
    ],
    audiences: [
      {
        label: "Individuals",
        description:
          "Farm owners, workshop operators, technical entrepreneurs, and buyers looking for usable machinery or specialised equipment.",
      },
      {
        label: "Businesses",
        description:
          "Agricultural companies, factories, engineering firms, service workshops, security providers, and industrial operators.",
      },
      {
        label: "Investors",
        description:
          "Stakeholders looking at manufacturing, equipment sales, spare-parts demand, and local industrial capability as investable opportunities.",
      },
    ],
    whyItMatters:
      "The division creates value through physical products, maintenance revenue, technical capability, and localised production potential. It positions Bornstellar within sectors tied to mechanisation, industrial supply, and long-term equipment demand.",
    icon: "⚙️",
  },
  {
    id: 5,
    slug: "construction-infrastructure",
    name: "Construction & Infrastructure Contracting",
    tagline: "Executing physical infrastructure with discipline and control",
    overview:
      "As a division of Bornstellar, the Construction and Infrastructure Contracting division delivers built projects across transport, industrial, commercial, and public-use categories. The division is focused on execution, site management, compliance, and the delivery of physical infrastructure that clients can use, operate, and expand over time.",
    services: [
      "Construction of roads, bridges, culverts, drains, and access routes for public and private sector clients",
      "Building of residential projects, commercial facilities, industrial buildings, warehouses, and operational sites",
      "Construction of schools, clinics, healthcare facilities, community centres, and other social infrastructure",
      "Civil works, earthworks, structural concrete works, site preparation, and utility-related construction support",
      "Rehabilitation, maintenance, expansion, and upgrade works for aging or incomplete infrastructure assets",
      "General contracting and subcontracting for public projects, private developments, and sector-specific assignments",
      "Project management services covering planning, scheduling, procurement coordination, reporting, quality control, and HSE implementation",
      "Material sourcing support, site mobilization, contractor coordination, and delivery supervision",
    ],
    audiences: [
      {
        label: "Individuals",
        description:
          "Private developers, landowners, and clients building homes or small-scale projects.",
      },
      {
        label: "Businesses",
        description:
          "Manufacturers, institutions, developers, facility owners, and organisations requiring construction capability.",
      },
      {
        label: "Investors",
        description:
          "Project sponsors, infrastructure capital providers, and partners seeking disciplined contractors for tangible asset deployment.",
      },
    ],
    whyItMatters:
      "The division provides direct participation in physical asset delivery and infrastructure execution. It supports revenue through project contracts while reinforcing Bornstellar’s presence in long-duration, capital-relevant sectors.",
    icon: "🏛️",
  },
  {
    id: 6,
    slug: "general-trading",
    name: "General Trading & Commerce",
    tagline: "Moving goods through structured trade relationships",
    overview:
      "As a division of Bornstellar, the General Trading and Commerce division manages the buying, selling, movement, and distribution of goods across selected markets. The division operates as a commercial platform for products, supply relationships, warehousing, logistics coordination, and structured trade transactions.",
    services: [
      "Import and export of commodities, industrial materials, agricultural goods, machinery, and selected consumer products",
      "Wholesale and bulk distribution of products to dealers, institutional buyers, retailers, and sector-focused customers",
      "Sourcing and supply of construction materials, production inputs, equipment, and commercial inventory",
      "Warehousing coordination, storage arrangements, stock movement planning, and distribution support",
      "Structured trade deals involving supply agreements, off-take structures, financed trade, and cross-border commercial transactions",
      "Agency and brokerage services for manufacturers, suppliers, and foreign counterparties seeking representation or market access",
      "Product routing, logistics coordination, and channel-building for regional distribution networks",
    ],
    audiences: [
      {
        label: "Individuals",
        description:
          "Merchants, dealers, contractors, and buyers seeking direct access to goods or commercial supply.",
      },
      {
        label: "Businesses",
        description:
          "Manufacturers, distributors, retailers, and institutions looking for dependable trade and supply-chain execution.",
      },
      {
        label: "Investors",
        description:
          "Parties interested in inventory-backed trade, distribution businesses, and scalable commerce platforms.",
      },
    ],
    whyItMatters:
      "The division creates value through movement, margins, and commercial relationships rather than asset-heavy production alone. It adds liquidity, market access, and transaction-driven relevance to Bornstellar’s portfolio.",
    icon: "📦",
  },
  {
    id: 7,
    slug: "oil-gas-services",
    name: "Oil & Gas Services",
    tagline: "Operational support for energy projects",
    overview:
      "As a division of Bornstellar, the Oil and Gas Services division provides operational services to projects across upstream, midstream, and downstream environments. The division is focused on logistics, manpower, compliance-related services, and contract-based engagement within the energy sector.",
    services: [
      "Supply of technical and non-technical manpower for field operations, site activities, and project-based assignments",
      "Logistics coordination covering transport, materials movement, marine support interfaces, and project-site delivery requirements",
      "Ancillary oil and gas services aligned with local content obligations, subcontracting structures, and operational support needs",
      "Field support for safety programmes, integrity-related services, environmental monitoring coordination, and compliance documentation",
      "Training and workforce development for personnel participating in operational and community-linked energy projects",
      "Procurement coordination and support sourcing for approved vendors, local contractors, and project operators",
    ],
    audiences: [
      {
        label: "Individuals",
        description:
          "Trained workers, technical personnel, and service professionals seeking project-linked opportunities.",
      },
      {
        label: "Businesses",
        description:
          "Operators, EPC contractors, service companies, and subcontractors needing support capacity and local execution.",
      },
      {
        label: "Investors",
        description:
          "Stakeholders seeking exposure to oil and gas service contracts, energy-linked support businesses, and local participation models.",
      },
    ],
    whyItMatters:
      "The division gives Bornstellar a route into contract-driven activity in the energy sector without depending solely on asset ownership. It is relevant where operational support, local participation, and sector access create recurring service demand.",
    icon: "🛢️",
  },
  {
    id: 8,
    slug: "business-consulting",
    name: "Business & Management Consulting",
    tagline: "Helping organisations build discipline, structure, and credibility",
    overview:
      "As a division of Bornstellar, the Business and Management Consulting division helps clients structure operations, improve governance, and build stronger execution systems. The division is designed for organisations that need clearer internal processes, stronger management discipline, and more credible operating frameworks.",
    services: [
      "Organisational design, reporting-line structuring, role clarification, and operating model reviews",
      "Business process design for finance, procurement, administration, HR, and internal reporting systems",
      "Governance, risk, and compliance frameworks, including policy drafting, controls documentation, and oversight structures",
      "Strategic planning support, implementation roadmaps, performance reviews, and management scorecards",
      "Change management and institutional development programmes for growing organisations and transitioning businesses",
      "Business support services for local and foreign investors, including market-entry guidance, local setup coordination, and administrative support",
      "Business process outsourcing and back-office administration under defined service arrangements",
    ],
    audiences: [
      {
        label: "Individuals",
        description:
          "Founders, executives, family business leaders, and professionals building more structured enterprises.",
      },
      {
        label: "Businesses",
        description:
          "SMEs, corporates, institutions, and operating companies seeking process improvement and stronger management systems.",
      },
      {
        label: "Investors",
        description:
          "Firms and sponsors that require governance discipline, reporting structures, and operating visibility in portfolio or partner businesses.",
      },
    ],
    whyItMatters:
      "The division turns ambition into structure by helping clients organise how decisions, controls, and operations work in practice. For Bornstellar, it adds a service line tied to organisational maturity, institutional confidence, and strategic execution.",
    icon: "📊",
  },
  {
    id: 9,
    slug: "forensic-financial-services",
    name: "Forensic Financial Services",
    tagline: "Investigative accounting and evidence-based financial review",
    overview:
      "As a division of Bornstellar, the Forensic Financial Services division handles financially sensitive matters that require investigative accounting, control review, and evidence-based analysis. The division is built for clients dealing with fraud risk, disputes, due diligence needs, or governance-related financial concerns.",
    services: [
      "Forensic accounting reviews, transaction analysis, and reconstruction of disputed or unclear financial records",
      "Financial investigations into suspected irregularities, control failures, undocumented exposures, and misuse of funds",
      "Fraud risk assessments and internal control design for institutions seeking stronger prevention and oversight systems",
      "Litigation support, dispute analysis, damages review, and expert financial reporting",
      "Asset tracing support and recovery-oriented financial review in coordination with legal or regulatory processes",
      "Due diligence services for mergers, acquisitions, investment decisions, lending transactions, and strategic partnerships",
      "Training programmes for boards, executives, finance teams, and regulators on financial integrity, fraud prevention, and control culture",
    ],
    audiences: [
      {
        label: "Individuals",
        description:
          "High-net-worth clients, business owners, shareholders, and parties involved in disputes or financial reviews.",
      },
      {
        label: "Businesses",
        description:
          "Companies, lenders, legal teams, boards, and regulated institutions with exposure to fraud, disputes, or transaction risk.",
      },
      {
        label: "Investors",
        description:
          "Acquirers, lenders, funds, and transaction sponsors requiring clean financial insight and risk visibility before committing capital.",
      },
    ],
    whyItMatters:
      "The division helps clients defend trust, uncover risk, and make better-informed financial decisions. It also reinforces Bornstellar’s broader positioning around governance, accountability, and commercially relevant advisory depth.",
    icon: "🔍",
  },
  {
    id: 10,
    slug: "automotive",
    name: "Automotive Manufacturing & Distribution",
    tagline: "Combining assembly, supply, sales, and service networks",
    overview:
      "As a division of Bornstellar, the Automotive Manufacturing and Distribution division participates in vehicle assembly, component supply, automotive sales, and service network development. The division is structured to address both vehicle supply and the wider commercial ecosystem that keeps mobility operating effectively.",
    services: [
      "Assembly and fabrication of selected vehicles, body structures, utility vehicles, and commercial-use automotive units",
      "Manufacturing and supply of automotive parts, body components, workshop tools, and related mechanical items",
      "Importation, stocking, sales, and distribution of passenger vehicles, commercial vehicles, motorcycles, and spare parts",
      "Vehicle brokerage and fleet sourcing services for institutions, transport operators, and bulk buyers",
      "Establishment of maintenance centres, service workshops, diagnostics support, and scheduled repair networks",
      "Spare-parts distribution systems and after-sales support for dealers, fleet owners, and operational clients",
      "Partnership support for local assembly, product localisation, dealership rollout, and industrial automotive initiatives",
    ],
    audiences: [
      {
        label: "Individuals",
        description:
          "Vehicle buyers, transport entrepreneurs, fleet operators, and private clients seeking sales or maintenance services.",
      },
      {
        label: "Businesses",
        description:
          "Logistics firms, mobility operators, corporate fleets, dealerships, and workshop networks.",
      },
      {
        label: "Investors",
        description:
          "Partners interested in automotive assembly, distribution channels, mobility commerce, and service-network growth.",
      },
    ],
    whyItMatters:
      "The division combines product sales, service infrastructure, and industrial participation in a sector tied to movement, logistics, and recurring maintenance demand. It provides Bornstellar with a commercially visible entry point into mobility-linked markets.",
    icon: "🚗",
  },
  {
    id: 11,
    slug: "research-development",
    name: "Research & Development",
    tagline: "Testing ideas, validating solutions, and de-risking decisions",
    overview:
      "As a division of Bornstellar, the Research and Development division provides structured inquiry, testing, and validation across products, sectors, and strategic opportunities. The division exists to generate decision-grade insight, test commercial ideas, and support evidence-based development across the wider group and selected clients.",
    services: [
      "Scientific, technical, industrial, and commercial research assignments tied to identified business opportunities or sector needs",
      "Market studies, policy studies, feasibility reviews, and impact assessments to support strategy and investment decisions",
      "Pilot projects and proof-of-concept development for products, services, and operating models",
      "Technology testing, adaptation, and localisation for digital systems, machinery, materials, and applied solutions",
      "Product validation, field trials, and operational performance review before larger-scale deployment",
      "Research collaboration with universities, institutes, development partners, government entities, and private-sector innovators",
    ],
    audiences: [
      {
        label: "Individuals",
        description:
          "Innovators, founders, researchers, and technical entrepreneurs seeking validation, pilots, or market insight.",
      },
      {
        label: "Businesses",
        description:
          "Operating companies, manufacturers, developers, and institutions requiring research-backed decisions.",
      },
      {
        label: "Investors",
        description:
          "Parties seeking feasibility evidence, risk reduction, market studies, or pilot-stage intelligence before funding deployment.",
      },
    ],
    whyItMatters:
      "The division creates disciplined learning and improves the quality of commercial decision-making. It also strengthens Bornstellar’s ability to build, invest, and expand based on tested assumptions rather than unchecked opportunity claims.",
    icon: "🔬",
  },
  {
    id: 12,
    slug: "renewable-energy",
    name: "Renewable Energy Solutions",
    tagline: "Deploying dependable solar and hybrid power systems",
    overview:
      "As a division of Bornstellar, the Renewable Energy Solutions division develops and delivers solar and hybrid power systems for residential, commercial, institutional, and community use. The division is focused on deployable energy solutions that reduce dependence on unstable power supply and create more reliable operating environments for clients.",
    services: [
      "Design and installation of solar home systems for households, private clients, and small property users",
      "Delivery of hybrid and off-grid systems for estates, communities, farms, clinics, schools, and operational sites",
      "Commercial and industrial solar solutions for offices, factories, warehouses, retail operations, and business campuses",
      "Supply, assembly, and integration of solar panels, batteries, inverters, charge controllers, and supporting electrical components",
      "Backup power systems, storage integration, and energy optimisation support for clients reducing generator dependence",
      "Energy audits, efficiency recommendations, load assessment, and technical advisory for new and existing power systems",
      "Partnership delivery for rural electrification projects, donor-linked programmes, and public-private energy initiatives",
    ],
    audiences: [
      {
        label: "Individuals",
        description:
          "Homeowners, landlords, household users, and private customers seeking more reliable power.",
      },
      {
        label: "Businesses",
        description:
          "SMEs, factories, farms, schools, clinics, and corporate users needing cost-conscious energy solutions.",
      },
      {
        label: "Investors",
        description:
          "Sponsors interested in distributed energy, infrastructure-linked clean power, and utility-adjacent energy deployment opportunities.",
      },
    ],
    whyItMatters:
      "The division addresses a direct operating need for homes and businesses while also sitting within a globally relevant energy transition space. For Bornstellar, it combines product delivery, technical installation, and long-term infrastructure value.",
    icon: "☀️",
  },
  {
    id: 13,
    slug: "media-digital-management",
    name: "Media & Digital Management",
    businessName: "Zenith Multipurposes",
    tagline: "Creating digital visibility through strategy and execution",
    overview:
      "As a division of Bornstellar operating under the Zenith Multipurposes brand, the Media and Digital Management division provides digital communication, content production, and brand execution services for organisations and public-facing businesses. The division is structured around audience development, brand clarity, digital visibility, and managed online presence.",
    services: [
      "Social media management including planning, account management, publishing, moderation, and audience engagement",
      "Content production for video, photography, design, copywriting, campaign assets, and platform-ready creative materials",
      "Digital marketing services covering SEO, paid advertising, campaign execution, lead-generation support, and performance optimisation",
      "Brand strategy and identity development, including naming, positioning, visual identity, messaging, and brand system support",
      "Online reputation management, issue monitoring, public response support, and crisis communication handling",
      "Analytics, reporting, platform reviews, and digital performance advisory for brands and institutions",
      "Additional corporate branding services including profiles, brochures, catalogues, flyers, visual collateral, and digital business presentation assets",
    ],
    audiences: [
      {
        label: "Individuals",
        description:
          "Founders, professionals, creators, and public-facing personalities seeking stronger brand and digital presence.",
      },
      {
        label: "Businesses",
        description:
          "SMEs, corporates, NGOs, institutions, startups, and service providers needing media, branding, and digital growth support.",
      },
      {
        label: "Investors",
        description:
          "Portfolio companies, market-entry ventures, and brands that require communication infrastructure and reputation-ready positioning.",
      },
    ],
    whyItMatters:
      "The division turns visibility into structured brand value through content, strategy, and ongoing digital execution. It reflects existing service strengths already associated with Zenith Multipurposes and gives Bornstellar a commercially relevant presence in media and communications.",
    brandLogoSrc: "/zenithlogo.jpeg",
    brandLink: "https://www.zenithservices.com.ng/",
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
