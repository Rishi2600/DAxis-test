//@ts-ignore
export const API_BASE = `${import.meta.env.VITE_API_URL || ""}/api`;

export const SERVICES = [
  {
    title: "Engineering Design & Drafting",
    items: [
      "2D Drafting & Detailing",
      "3D Modeling & Plant Design (Plant 3D, E3D, CadWorx)",
      "Equipment Layout & Plot Plan",
      "Shop & Fabrication Drawings",
      "As-Built Drawings",
    ],
  },
  {
    title: "Geospatial & Infrastructure Mapping",
    items: [
      "GIS Mapping & Data Digitization",
      "Infrastructure Mapping (Urban & Rural Projects)",
      "Utility Mapping (Water, Gas, Power & Telecom Networks)",
    ],
  },
  {
    title: "Multi-Disciplinary Engineering",
    items: [
      "Civil & Structural Engineering",
      "Piping & Mechanical Design",
      "Electrical & Instrumentation",
      "Cross-discipline coordination",
    ],
  },
  {
    title: "Fabrication & Shop Drawings",
    items: [
      "Structural Steel Detailing",
      "Pressure Vessel Drawings",
      "Custom Fabrication Packages",
      "Material Take-offs",
    ],
  },
  {
    title: "Project Management Consultancy",
    items: [
      "Project Scheduling & Planning",
      "Progress Monitoring",
      "Quality Assurance",
      "Risk Management",
    ],
  },
  {
    title: "Technical Manpower Supply",
    items: [
      "CAD Operators & Designers",
      "GIS Analysts",
      "Piping Engineers",
      "On-site & Remote Deployment",
    ],
  },
];

export const INDUSTRIES = [
  { num: "01", label: "Water & Utilities" },
  { num: "02", label: "Oil & Gas" },
  { num: "03", label: "Petrochemical" },
  { num: "04", label: "Power Plants" },
  { num: "05", label: "Infrastructure & Roads" },
  { num: "06", label: "Municipal & Urban Development" },
  { num: "07", label: "Industrial Facilities" },
  { num: "08", label: "Environmental & Wastewater" },
];

export const INDUSTRY_IMAGES = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=60", // Water & Utilities
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=60", // Oil & Gas
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=60", // Petrochemical
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=60", // Power Plants
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=60", // Infrastructure & Roads
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=60", // Municipal & Urban Development
  "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=60", // Industrial Facilities
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=60", // Environmental & Wastewater
];

export const CLIENTS = [
  "L&T Engineering",
  "NTPC Limited",
  "ONGC",
  "GAIL India",
  "BPCL",
  "Power Grid Corp",
  "Tata Projects",
  "Adani Group",
  "Shapoorji Pallonji",
  "HPCL",
  "Engineers India Ltd",
];

export const USPS = [
  {
    title: "20+ Years Expertise",
    desc: "Deep domain knowledge across oil & gas, power, and infrastructure sectors.",
  },
  {
    title: "100% Quality Delivery",
    desc: "ISO-aligned QA processes ensuring accuracy on every deliverable.",
  },
  {
    title: "On-Time Guarantee",
    desc: "Structured workflows and dedicated teams that never miss a deadline.",
  },
  {
    title: "360° Solutions",
    desc: "From concept to as-built — complete engineering lifecycle support.",
  },
  {
    title: "Cost-Effective Offshore",
    desc: "World-class engineering at highly competitive Indian pricing.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Their precision in 3D modeling and drafting has significantly improved our project execution timeline.",
    client: "Leading Infrastructure Developer",
    role: "Project Manager",
  },
  {
    quote:
      "DAxis delivered a complete GIS mapping package for our 500km pipeline project on time and within budget.",
    client: "Major Oil & Gas Company",
    role: "Engineering Head",
  },
  {
    quote:
      "Outstanding technical manpower — their CAD team integrated seamlessly with our in-house engineers.",
    client: "International EPC Contractor",
    role: "Operations Director",
  },
];

export const SERVICE_OPTIONS = [
  "Engineering Design & Drafting",
  "Geospatial & GIS Mapping",
  "Multi-Disciplinary Engineering",
  "Fabrication & Shop Drawings",
  "Project Management Consultancy (PMC)",
  "Technical Manpower Supply",
  "Other / Not Sure",
];

export const TEAM_SOFTWARE = [
  "AutoCAD",
  "Plant 3D",
  "E3D",
  "CadWorx",
  "GIS / ArcGIS",
  "PDS",
];

export const TEAM_MEMBERS = [
  {
    id: "sunil",
    name: "Sunil Sharma",
    title: "LEAD CONSULTANT",
    bio: "20+ years of expertise in multi-disciplinary engineering design, GIS mapping, and project management across Oil & Gas, Power, and Infrastructure sectors. Served reputed national and international EPC clients.",
    skills: ["AutoCAD", "Plant 3D", "E3D", "CadWorx", "GIS / ArcGIS", "PDS"],
    hasPhoto: true,
    linkedin: null,
  },
  {
    id: "gaurav",
    name: "Gaurav Bajaj",
    title: "P.ENG — PROJECT MANAGER",
    bio: "P. Eng. Designated Project Manager with 17+ years of experience delivering complex infrastructure and industrial projects across energy, transportation and regulated environments.",
    skills: ["Project Management", "Infrastructure", "Industrial Projects", "P.Eng"],
    hasPhoto: false,
    linkedin: null,
  },
  {
    id: "muneshwer",
    name: "Muneshwer Sharma",
    title: "PLANT LAYOUT & PIPING PROFESSIONAL",
    bio: "Seasoned plant layout and piping professional with detailed knowledge and proven experience of more than 25 years with companies providing engineering services to chemical, petrochemical, refineries and power plants.",
    skills: ["Plant Layout", "Piping Design", "Refineries", "Power Plants", "Petrochemical"],
    hasPhoto: false,
    linkedin: null,
  },
  {
    id: "vm",
    name: "VM Madhusoodanan",
    title: "SR. LEAD PIPING DESIGNER",
    bio: "Sr. Lead Piping Designer/Engineer with 28+ years of accomplished experience in detailed engineering and design of refinery and oil & gas projects, offshore and onshore piping systems including 25 years in the Middle East.",
    skills: ["Piping Design", "Offshore", "Onshore", "Refinery", "Oil & Gas", "Middle East"],
    hasPhoto: false,
    linkedin: null,
  },
  {
    id: "sompal",
    name: "Sompal Singh",
    title: "CAD DESIGNER & TRAINER",
    bio: "Proficiency in preparing drawings and generating views using AutoCAD 2D & 3D. Provides training of AutoCAD to diploma mechanical engineering students of JK Board.",
    skills: ["AutoCAD 2D", "AutoCAD 3D", "Drafting", "Training"],
    hasPhoto: false,
    linkedin: null,
  },
];