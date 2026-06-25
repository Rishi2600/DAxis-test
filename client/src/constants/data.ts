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
    title: "LEAD CONSULTANT",
    bio: "20+ years of expertise in multi-disciplinary engineering design, GIS mapping, and project management across Oil & Gas, Power, and Infrastructure sectors. Served reputed national and international EPC clients.",
    skills: ["AutoCAD", "Plant 3D", "E3D", "CadWorx", "GIS / ArcGIS", "PDS"],
    linkedin: null,
  },
  {
    id: "himadri",
    name: "Himadri Chakraborty",
    title: "GENERAL MANAGER — ELECTRICAL, C&I ENGINEERING",
    bio: "Senior engineering leader specialising in Electrical, Control & Instrumentation engineering across large-scale industrial and infrastructure projects.",
    skills: ["Electrical Engineering", "C&I Engineering", "General Management"],
    linkedin: null,
  },
  {
    id: "sompal",
    name: "Sompal Singh",
    title: "CAD DESIGNER & TRAINER",
    bio: "Proficiency in preparing drawings and generating views using AutoCAD 2D & 3D. Provides training of AutoCAD to diploma mechanical engineering students of JK Board.",
    skills: ["AutoCAD 2D", "AutoCAD 3D", "Drafting", "Training"],
    linkedin: null,
  },
  {
    id: "mukesh",
    name: "Mukesh Kala",
    title: "PIPELINE DESIGN & DEVELOPMENT",
    bio: "Specialist in pipelining, designing and development with extensive hands-on experience delivering pipeline engineering solutions across industrial projects.",
    skills: ["Pipeline Design", "Engineering Development", "Industrial Projects"],
    linkedin: null,
  },
  {
    id: "hp_roy",
    name: "HP Roy",
    title: "OIL & GAS EXPERT",
    bio: "Expert in Oil and Gas projects with deep technical knowledge across upstream and downstream operations, project execution and engineering design.",
    skills: ["Oil & Gas", "Project Engineering", "Upstream", "Downstream"],
    linkedin: null,
  },
  {
    id: "jagdish",
    name: "Jagdish Yadav",
    title: "SR. MANAGER — ELECTRICAL & INSTRUMENTATION",
    bio: "Senior Manager in Electrical and Instrumentation for oil and gas refineries, with proven expertise in complex E&I systems design and project delivery.",
    skills: ["Electrical", "Instrumentation", "Oil & Gas", "Refinery", "E&I Systems"],
    linkedin: null,
  },
  {
    id: "sanjiv",
    name: "Sanjiv Sharma",
    title: "CONTRACT MANAGER",
    bio: "Experienced Contract Manager overseeing engineering contracts and project agreements across infrastructure and industrial sectors with a focus on compliance and delivery.",
    skills: ["Contract Management", "Project Agreements", "Infrastructure", "Compliance"],
    linkedin: null,
  },
  {
    id: "gaurav",
    name: "Gaurav Bajaj",
    title: "P.ENG — PROJECT MANAGER",
    bio: "P. Eng. Designated Project Manager with 17+ years of experience delivering complex infrastructure and industrial projects across energy, transportation and regulated environments.",
    skills: ["Project Management", "Infrastructure", "Industrial Projects", "P.Eng"],
    linkedin: null,
  },
  {
    id: "muneshwer",
    name: "Muneshwer Sharma",
    title: "PLANT LAYOUT & PIPING PROFESSIONAL",
    bio: "Seasoned plant layout and piping professional with 25+ years of experience with companies providing engineering services to chemical, petrochemical, refineries and power plants.",
    skills: ["Plant Layout", "Piping Design", "Refineries", "Power Plants", "Petrochemical"],
    linkedin: null,
  },
  {
    id: "vm",
    name: "VM Madhusoodanan",
    title: "SR. LEAD PIPING DESIGNER",
    bio: "Sr. Lead Piping Designer/Engineer with 28+ years of experience in detailed engineering and design of refinery and oil & gas projects, offshore and onshore piping systems including 25 years in the Middle East.",
    skills: ["Piping Design", "Offshore", "Onshore", "Refinery", "Oil & Gas"],
    linkedin: null,
  },
];