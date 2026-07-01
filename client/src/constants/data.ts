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
  { num: "01", label: "Manpower Services" },
  { num: "02", label: "Mechanical, Electrical & Plumbing" },
  { num: "03", label: "Sewage Treatment Plant" },
  { num: "04", label: "Building" },
  { num: "05", label: "Power Plant" },
  { num: "06", label: "Petrochemical Plants" },
  { num: "07", label: "Oil & Gas Plant" },
];

// Industry images are now imported directly from constants/logo.ts
// (INDUSTRY_IMG_MANPOWER, INDUSTRY_IMG_MEP, etc.) and referenced in Industries.tsx

export const CLIENTS = [
  "Ion Exchange",
  "Tractable",
  "SKB & RAD",
  "Triveni",
  "Shraddha Utilities Pvt. Ltd.",
  "OJASVEE INTELLIMATION",
  "MANJUGHOSH ENGINEERING SERVICE",
  "Equipment Pro",
  "Niox Energy",
  "Trupti Cement Products",
  "Veolia",
  "Maxwell",
  "Driplex Water Engineering Ltd",
  "Egis",
  "DJB",
  "L&T",
  "JJM",
  "NTPC",
  "Memrain India",
  "Pracon India",
  "Bonace Engineer Pvt Ltd",
  "Techbro",
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
    title: "Lead Consultant",
    experience: "20+ Years",
    linkedin: null,
  },
  {
    id: "himadri",
    name: "Himadri Chakraborty",
    title: "General Manager — Electrical, C&I Engineering",
    experience: "20+ Years",
    linkedin: null,
  },
  {
    id: "sompal",
    name: "Sompal Singh",
    title: "CAD Designer & Trainer",
    experience: "10+ Years",
    linkedin: null,
  },
  {
    id: "mukesh",
    name: "Mukesh Kala",
    title: "Pipeline Design & Development",
    experience: "15+ Years",
    linkedin: null,
  },
  {
    id: "hp_roy",
    name: "HP Roy",
    title: "Oil & Gas Expert",
    experience: "20+ Years",
    linkedin: null,
  },
  {
    id: "jagdish",
    name: "Jagdish Yadav",
    title: "Sr. Manager — Electrical & Instrumentation",
    experience: "20+ Years",
    linkedin: null,
  },
  {
    id: "sanjiv",
    name: "Sanjiv Sharma",
    title: "Contract Manager",
    experience: "15+ Years",
    linkedin: null,
  },
  {
    id: "gaurav",
    name: "Gaurav Bajaj",
    title: "P.Eng — Project Manager",
    experience: "17+ Years",
    linkedin: null,
  },
  {
    id: "muneshwer",
    name: "Muneshwer Sharma",
    title: "Plant Layout & Piping Professional",
    experience: "25+ Years",
    linkedin: null,
  },
  {
    id: "vm",
    name: "VM Madhusoodanan",
    title: "Sr. Lead Piping Designer",
    experience: "28+ Years",
    linkedin: null,
  },
];