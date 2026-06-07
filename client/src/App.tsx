// //@ts-nocheck

// import { useState, useEffect, useRef } from "react";

// // ─── CONSTANTS ───────────────────────────────────────────────────────────────
// const API_BASE = "/api";

// const SERVICES = [
//   {
//     icon: "⚙️",
//     title: "Engineering Design & Drafting",
//     items: ["2D Drafting & Detailing", "3D Modeling & Plant Design (Plant 3D, E3D, CadWorx)", "Equipment Layout & Plot Plan", "Shop & Fabrication Drawings", "As-Built Drawings"],
//   },
//   {
//     icon: "🗺️",
//     title: "Geospatial & Infrastructure Mapping",
//     items: ["GIS Mapping & Data Digitization", "Infrastructure Mapping (Urban & Rural Projects)", "Utility Mapping (Water, Gas, Power & Telecom Networks)"],
//   },
//   {
//     icon: "🏗️",
//     title: "Multi-Disciplinary Engineering",
//     items: ["Civil & Structural Engineering", "Piping & Mechanical Design", "Electrical & Instrumentation", "Cross-discipline coordination"],
//   },
//   {
//     icon: "🔧",
//     title: "Fabrication & Shop Drawings",
//     items: ["Structural Steel Detailing", "Pressure Vessel Drawings", "Custom Fabrication Packages", "Material Take-offs"],
//   },
//   {
//     icon: "📋",
//     title: "Project Management Consultancy",
//     items: ["Project Scheduling & Planning", "Progress Monitoring", "Quality Assurance", "Risk Management"],
//   },
//   {
//     icon: "👷",
//     title: "Technical Manpower Supply",
//     items: ["CAD Operators & Designers", "GIS Analysts", "Piping Engineers", "On-site & Remote Deployment"],
//   },
// ];

// const INDUSTRIES = [
//   { num: "01", label: "Oil & Gas" },
//   { num: "02", label: "Petrochemical" },
//   { num: "03", label: "Power Plants" },
//   { num: "04", label: "Infrastructure" },
//   { num: "05", label: "Water & Utilities" },
//   { num: "06", label: "Manufacturing" },
//   { num: "07", label: "Telecom Networks" },
//   { num: "08", label: "Urban Development" },
// ];

// const CLIENTS = [
//   "L&T Engineering", "NTPC Limited", "ONGC", "GAIL India", "BPCL",
//   "Power Grid Corp", "Tata Projects", "Adani Group", "Shapoorji Pallonji", "HPCL", "Engineers India Ltd",
// ];

// const USPS = [
//   { icon: "🎯", title: "20+ Years Expertise", desc: "Deep domain knowledge across oil & gas, power, and infrastructure sectors." },
//   { icon: "🏆", title: "100% Quality Delivery", desc: "ISO-aligned QA processes ensuring accuracy on every deliverable." },
//   { icon: "⏱️", title: "On-Time Guarantee", desc: "Structured workflows and dedicated teams that never miss a deadline." },
//   { icon: "🌐", title: "360° Solutions", desc: "From concept to as-built — complete engineering lifecycle support." },
//   { icon: "💰", title: "Cost-Effective Offshore", desc: "World-class engineering at highly competitive Indian pricing." },
// ];

// const TESTIMONIALS = [
//   { quote: "Their precision in 3D modeling and drafting has significantly improved our project execution timeline.", client: "Leading Infrastructure Developer", role: "Project Manager" },
//   { quote: "DAxis delivered a complete GIS mapping package for our 500km pipeline project on time and within budget.", client: "Major Oil & Gas Company", role: "Engineering Head" },
//   { quote: "Outstanding technical manpower — their CAD team integrated seamlessly with our in-house engineers.", client: "International EPC Contractor", role: "Operations Director" },
// ];

// const SERVICE_OPTIONS = [
//   "Engineering Design & Drafting",
//   "Geospatial & GIS Mapping",
//   "Multi-Disciplinary Engineering",
//   "Fabrication & Shop Drawings",
//   "Project Management Consultancy (PMC)",
//   "Technical Manpower Supply",
//   "Other / Not Sure",
// ];

// // ─── HOOKS ───────────────────────────────────────────────────────────────────
// function useInView(threshold = 0.15) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
//     }, { threshold });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, inView];
// }

// function useCountUp(target, duration = 1800, active = false) {
//   const [val, setVal] = useState(0);
//   useEffect(() => {
//     if (!active) return;
//     let start = null;
//     const step = (ts) => {
//       if (!start) start = ts;
//       const prog = Math.min((ts - start) / duration, 1);
//       setVal(Math.floor(prog * target));
//       if (prog < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [active, target, duration]);
//   return val;
// }

// // ─── COMPONENTS ──────────────────────────────────────────────────────────────

// function Nav({ active }) {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", fn);
//     return () => window.removeEventListener("scroll", fn);
//   }, []);

//   const links = ["Home", "About", "Services", "Industries", "Team", "Contact"];

//   const scroll = (id) => {
//     document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
//     setMenuOpen(false);
//   };

//   return (
//     <nav style={{
//       position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
//       background: scrolled ? "rgba(10,22,40,0.97)" : "rgba(10,22,40,0.7)",
//       backdropFilter: "blur(12px)",
//       borderBottom: scrolled ? "1px solid rgba(255,107,43,0.2)" : "1px solid transparent",
//       transition: "all 0.3s",
//       padding: "0 2rem",
//       display: "flex", alignItems: "center", justifyContent: "space-between",
//       height: "64px",
//     }}>
//       <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//         <div style={{
//           width: 32, height: 32, background: "linear-gradient(135deg, #FF6B2B, #1E6FA5)",
//           clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
//         }} />
//         <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#fff", letterSpacing: "0.05em" }}>
//           DAXIS <span style={{ color: "#FF6B2B" }}>ENGINEERING</span>
//         </span>
//       </div>

//       {/* Desktop links */}
//       <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="nav-desktop">
//         {links.map(l => (
//           <button key={l} onClick={() => scroll(l)} style={{
//             background: "none", border: "none", color: active === l.toLowerCase() ? "#FF6B2B" : "#B0BEC5",
//             fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", cursor: "pointer",
//             transition: "color 0.2s", letterSpacing: "0.03em",
//           }}
//             onMouseEnter={e => e.target.style.color = "#FF6B2B"}
//             onMouseLeave={e => e.target.style.color = active === l.toLowerCase() ? "#FF6B2B" : "#B0BEC5"}
//           >{l}</button>
//         ))}
//         <button onClick={() => scroll("Contact")} style={{
//           background: "#FF6B2B", border: "none", color: "#fff",
//           padding: "0.45rem 1.1rem", borderRadius: "4px",
//           fontFamily: "'DM Sans', sans-serif", fontWeight: 500, cursor: "pointer",
//           fontSize: "0.85rem", letterSpacing: "0.04em",
//           transition: "background 0.2s",
//         }}
//           onMouseEnter={e => e.target.style.background = "#e55a1f"}
//           onMouseLeave={e => e.target.style.background = "#FF6B2B"}
//         >Get a Quote</button>
//       </div>

//       {/* Hamburger */}
//       <button onClick={() => setMenuOpen(!menuOpen)} style={{
//         display: "none", background: "none", border: "none", color: "#fff", fontSize: "1.5rem", cursor: "pointer"
//       }} className="nav-burger">☰</button>

//       {/* Mobile menu */}
//       {menuOpen && (
//         <div style={{
//           position: "absolute", top: "64px", left: 0, right: 0,
//           background: "rgba(10,22,40,0.98)", padding: "1rem 2rem",
//           display: "flex", flexDirection: "column", gap: "1rem",
//         }}>
//           {links.map(l => (
//             <button key={l} onClick={() => scroll(l)} style={{
//               background: "none", border: "none", color: "#B0BEC5",
//               fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", cursor: "pointer", textAlign: "left",
//             }}>{l}</button>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }

// function Hero() {
//   return (
//     <section id="home" style={{
//       minHeight: "100vh", position: "relative", display: "flex", alignItems: "center",
//       background: "linear-gradient(135deg, #0A1628 0%, #0F2040 50%, #0A1628 100%)",
//       overflow: "hidden",
//     }}>
//       {/* Grid pattern */}
//       <div style={{
//         position: "absolute", inset: 0,
//         backgroundImage: "linear-gradient(rgba(30,111,165,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(30,111,165,0.07) 1px, transparent 1px)",
//         backgroundSize: "60px 60px",
//       }} />
//       {/* Accent glow */}
//       <div style={{
//         position: "absolute", right: "10%", top: "20%",
//         width: "500px", height: "500px", borderRadius: "50%",
//         background: "radial-gradient(circle, rgba(255,107,43,0.08) 0%, transparent 70%)",
//         pointerEvents: "none",
//       }} />
//       <div style={{
//         position: "absolute", left: "5%", bottom: "10%",
//         width: "400px", height: "400px", borderRadius: "50%",
//         background: "radial-gradient(circle, rgba(30,111,165,0.1) 0%, transparent 70%)",
//         pointerEvents: "none",
//       }} />

//       <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", paddingTop: "80px" }}>
//         <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
//           <div style={{ width: "40px", height: "2px", background: "#FF6B2B" }} />
//           <span style={{
//             fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", color: "#FF6B2B", letterSpacing: "0.3em"
//           }}>ENGINEERING EXCELLENCE</span>
//         </div>

//         <h1 style={{
//           fontFamily: "'Bebas Neue', sans-serif",
//           fontSize: "clamp(3rem, 8vw, 7rem)",
//           lineHeight: 0.95,
//           color: "#fff",
//           margin: "0 0 1.5rem",
//           animation: "fadeInUp 0.7s ease forwards",
//         }}>
//           DAxis <span style={{ color: "#FF6B2B" }}>Engineering</span><br />
//           Consultancy
//         </h1>

//         <p style={{
//           fontFamily: "'DM Sans', sans-serif",
//           fontSize: "1.1rem", color: "#B0BEC5", maxWidth: "520px",
//           lineHeight: 1.7, marginBottom: "2.5rem",
//           animation: "fadeInUp 0.7s 0.15s ease both",
//         }}>
//           Complete Solutions in Engineering Design, 3D Modeling &amp; Technical Manpower for Industrial and Infrastructure Projects.
//         </p>

//         <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animation: "fadeInUp 0.7s 0.3s ease both" }}>
//           <button
//             onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
//             style={{
//               background: "#FF6B2B", border: "none", color: "#fff",
//               padding: "0.85rem 2rem", borderRadius: "4px",
//               fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.95rem",
//               cursor: "pointer", letterSpacing: "0.04em",
//               transition: "transform 0.2s, background 0.2s",
//             }}
//             onMouseEnter={e => { e.target.style.background = "#e55a1f"; e.target.style.transform = "translateY(-2px)"; }}
//             onMouseLeave={e => { e.target.style.background = "#FF6B2B"; e.target.style.transform = "none"; }}
//           >Learn More</button>
//           <button
//             onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
//             style={{
//               background: "transparent", border: "1px solid rgba(255,255,255,0.3)", color: "#fff",
//               padding: "0.85rem 2rem", borderRadius: "4px",
//               fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.95rem",
//               cursor: "pointer", letterSpacing: "0.04em",
//               transition: "border-color 0.2s, transform 0.2s",
//             }}
//             onMouseEnter={e => { e.target.style.borderColor = "#FF6B2B"; e.target.style.transform = "translateY(-2px)"; }}
//             onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.3)"; e.target.style.transform = "none"; }}
//           >Contact Us →</button>
//         </div>

//         {/* Stats bar */}
//         <div style={{
//           display: "flex", gap: "0", marginTop: "4rem",
//           borderTop: "1px solid rgba(255,255,255,0.1)",
//           paddingTop: "2rem",
//           flexWrap: "wrap",
//           animation: "fadeInUp 0.7s 0.45s ease both",
//         }}>
//           {[
//             { val: "20+", label: "Years Experience" },
//             { val: "100%", label: "Quality Delivery" },
//             { val: "360°", label: "Solutions" },
//           ].map((s, i) => (
//             <div key={i} style={{
//               flex: "1 1 120px", paddingRight: "2rem",
//               borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
//               marginRight: i < 2 ? "2rem" : 0,
//             }}>
//               <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "#1E6FA5", letterSpacing: "0.05em" }}>{s.val}</div>
//               <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#B0BEC5", letterSpacing: "0.05em" }}>{s.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div style={{
//         position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
//         display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
//         animation: "bounce 2s infinite",
//       }}>
//         <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: "#B0BEC5", letterSpacing: "0.2em" }}>SCROLL</span>
//         <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #FF6B2B, transparent)" }} />
//       </div>
//     </section>
//   );
// }

// function About() {
//   const [ref, inView] = useInView();
//   const yrs = useCountUp(20, 1500, inView);
//   const clients = useCountUp(10, 1500, inView);

//   return (
//     <section id="about" ref={ref} style={{
//       padding: "6rem 2rem",
//       background: "#F4F6F9",
//     }}>
//       <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: "3rem" }}>
//           <h2 style={{
//             fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
//             fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0A1628", marginBottom: "1rem",
//           }}>About Us</h2>
//           <p style={{
//             fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", color: "#546e7a",
//             maxWidth: "720px", margin: "0 auto", lineHeight: 1.8,
//           }}>
//             We provide multi-disciplinary engineering design, drafting, GIS mapping and technical
//             manpower solutions for industrial and infrastructure projects. With 20+ years of
//             professional experience serving reputed national and international clients, we deliver
//             end-to-end engineering solutions from conceptual design to execution with a strong
//             focus on quality, accuracy and timely delivery.
//           </p>
//         </div>

//         <div style={{
//           display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem",
//           opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(30px)",
//           transition: "all 0.7s ease",
//         }}>
//           {[
//             { val: `${yrs}+`, label: "Years", sub: "Of professional experience" },
//             { val: "100%", label: "Quality", sub: "Accuracy and timely delivery" },
//             { val: "360°", label: "Solutions", sub: "Concept to execution support" },
//             { val: `${clients}+`, label: "Clients", sub: "National & international" },
//           ].map((s, i) => (
//             <div key={i} style={{
//               background: "#fff", borderRadius: "12px",
//               border: "1px solid rgba(10,22,40,0.08)",
//               padding: "2rem",
//               textAlign: "center",
//               boxShadow: "0 4px 20px rgba(10,22,40,0.06)",
//               transition: "transform 0.3s, box-shadow 0.3s",
//             }}
//               onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(10,22,40,0.12)"; }}
//               onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(10,22,40,0.06)"; }}
//             >
//               <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem", color: "#1E6FA5", lineHeight: 1 }}>{s.val}</div>
//               <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#0A1628", margin: "0.4rem 0 0.2rem" }}>{s.label}</div>
//               <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "#78909c" }}>{s.sub}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Services() {
//   const [ref, inView] = useInView();
//   return (
//     <section id="services" ref={ref} style={{ padding: "6rem 2rem", background: "#fff" }}>
//       <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
//           <span style={{
//             fontFamily: "'Space Mono', monospace", fontSize: "0.7rem",
//             color: "#FF6B2B", letterSpacing: "0.3em", display: "block", marginBottom: "0.75rem",
//           }}>WHAT WE DO</span>
//           <h2 style={{
//             fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
//             fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0A1628", margin: 0,
//           }}>Our Core Services</h2>
//           <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#78909c", marginTop: "0.75rem" }}>
//             Comprehensive engineering and geospatial solutions
//           </p>
//         </div>

//         <div style={{
//           display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem",
//         }}>
//           {SERVICES.map((s, i) => (
//             <div key={i} style={{
//               border: "1px solid rgba(10,22,40,0.1)", borderRadius: "12px",
//               padding: "2rem", background: "#fff",
//               opacity: inView ? 1 : 0,
//               transform: inView ? "none" : "translateY(30px)",
//               transition: `all 0.6s ease ${i * 0.08}s`,
//               cursor: "default",
//             }}
//               onMouseEnter={e => { e.currentTarget.style.borderColor = "#FF6B2B"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(255,107,43,0.12)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
//               onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(10,22,40,0.1)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
//             >
//               <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{s.icon}</div>
//               <h3 style={{
//                 fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
//                 fontSize: "1.2rem", color: "#0A1628", marginBottom: "1rem",
//               }}>{s.title}</h3>
//               <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//                 {s.items.map((item, j) => (
//                   <li key={j} style={{
//                     fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem",
//                     color: "#546e7a", padding: "0.3rem 0",
//                     display: "flex", alignItems: "flex-start", gap: "8px",
//                   }}>
//                     <span style={{ color: "#FF6B2B", marginTop: "2px", flexShrink: 0 }}>•</span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Industries() {
//   const [active, setActive] = useState(0);
//   const industryBgs = [
//     "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=60",
//     "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=60",
//     "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=60",
//     "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=60",
//     "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=60",
//     "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=60",
//     "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=60",
//     "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=60",
//   ];

//   return (
//     <section id="industries" style={{
//       padding: "6rem 2rem",
//       background: "linear-gradient(135deg, #0A1628 0%, #0F2040 100%)",
//       position: "relative", overflow: "hidden",
//     }}>
//       <div style={{
//         position: "absolute", inset: 0,
//         backgroundImage: "linear-gradient(rgba(30,111,165,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(30,111,165,0.05) 1px, transparent 1px)",
//         backgroundSize: "60px 60px",
//       }} />

//       <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: "3rem" }}>
//           <span style={{
//             fontFamily: "'Space Mono', monospace", fontSize: "0.7rem",
//             color: "#FF6B2B", letterSpacing: "0.3em", display: "block", marginBottom: "0.75rem",
//           }}>WHAT WE COVER</span>
//           <h2 style={{
//             fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
//             fontSize: "clamp(2rem, 4vw, 3rem)", color: "#fff", margin: 0,
//           }}>Industries We Serve</h2>
//           <div style={{ width: "48px", height: "3px", background: "#1E6FA5", margin: "1rem auto 0" }} />
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start" }}>
//           {/* Image card */}
//           <div style={{
//             borderRadius: "16px", overflow: "hidden",
//             position: "relative", aspectRatio: "4/3",
//             background: "#0F2040",
//           }}>
//             <img
//               src={industryBgs[active]}
//               alt={INDUSTRIES[active].label}
//               style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6, transition: "all 0.4s" }}
//             />
//             <div style={{
//               position: "absolute", bottom: 0, left: 0, right: 0,
//               background: "linear-gradient(to top, rgba(10,22,40,0.95), transparent)",
//               padding: "2rem",
//             }}>
//               <div style={{
//                 fontFamily: "'Space Mono', monospace", fontSize: "0.75rem",
//                 color: "#B0BEC5", marginBottom: "0.5rem",
//               }}>{INDUSTRIES[active].num} OF 08</div>
//               <h3 style={{
//                 fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "#fff", margin: 0,
//               }}>{INDUSTRIES[active].label}</h3>
//               <div style={{ width: "60px", height: "2px", background: "#FF6B2B", marginTop: "0.5rem" }} />
//             </div>
//           </div>

//           {/* List */}
//           <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", minWidth: "220px" }}>
//             <button
//               onClick={() => setActive(a => Math.max(0, a - 1))}
//               style={{
//                 background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
//                 color: "#fff", borderRadius: "50%", width: "40px", height: "40px",
//                 cursor: "pointer", marginBottom: "0.5rem", fontSize: "1rem",
//                 transition: "background 0.2s",
//               }}
//               onMouseEnter={e => e.target.style.background = "rgba(255,107,43,0.2)"}
//               onMouseLeave={e => e.target.style.background = "rgba(255,255,255,0.06)"}
//             >↑</button>

//             {INDUSTRIES.map((ind, i) => (
//               <button key={i} onClick={() => setActive(i)} style={{
//                 display: "flex", alignItems: "center", gap: "12px",
//                 background: active === i ? "rgba(255,107,43,0.12)" : "transparent",
//                 border: "1px solid",
//                 borderColor: active === i ? "#FF6B2B" : "rgba(255,255,255,0.08)",
//                 borderRadius: "8px", padding: "0.7rem 1rem",
//                 cursor: "pointer", transition: "all 0.2s",
//                 width: "100%",
//               }}>
//                 <span style={{
//                   fontFamily: "'Space Mono', monospace", fontSize: "0.65rem",
//                   color: active === i ? "#FF6B2B" : "#546e7a",
//                 }}>{ind.num}</span>
//                 <span style={{
//                   fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem",
//                   color: active === i ? "#fff" : "#B0BEC5", fontWeight: active === i ? 600 : 400,
//                 }}>{ind.label}</span>
//                 {active === i && <span style={{ marginLeft: "auto", color: "#FF6B2B", fontSize: "0.6rem" }}>●</span>}
//               </button>
//             ))}

//             <button
//               onClick={() => setActive(a => Math.min(INDUSTRIES.length - 1, a + 1))}
//               style={{
//                 background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
//                 color: "#fff", borderRadius: "50%", width: "40px", height: "40px",
//                 cursor: "pointer", marginTop: "0.5rem", fontSize: "1rem",
//                 transition: "background 0.2s",
//               }}
//               onMouseEnter={e => e.target.style.background = "rgba(255,107,43,0.2)"}
//               onMouseLeave={e => e.target.style.background = "rgba(255,255,255,0.06)"}
//             >↓</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function WhyUs() {
//   const [ref, inView] = useInView();
//   return (
//     <section id="why" ref={ref} style={{ padding: "6rem 2rem", background: "#F4F6F9" }}>
//       <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: "3rem" }}>
//           <span style={{
//             fontFamily: "'Space Mono', monospace", fontSize: "0.7rem",
//             color: "#FF6B2B", letterSpacing: "0.3em", display: "block", marginBottom: "0.75rem",
//           }}>OUR EDGE</span>
//           <h2 style={{
//             fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
//             fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0A1628", margin: 0,
//           }}>Why Choose DAxis?</h2>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
//           {USPS.map((u, i) => (
//             <div key={i} style={{
//               background: "#fff", borderRadius: "12px",
//               border: "1px solid rgba(10,22,40,0.08)",
//               padding: "2rem",
//               opacity: inView ? 1 : 0,
//               transform: inView ? "none" : "translateY(20px)",
//               transition: `all 0.5s ease ${i * 0.1}s`,
//             }}
//               onMouseEnter={e => { e.currentTarget.style.borderColor = "#1E6FA5"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(30,111,165,0.1)"; }}
//               onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(10,22,40,0.08)"; e.currentTarget.style.boxShadow = "none"; }}
//             >
//               <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{u.icon}</div>
//               <h3 style={{
//                 fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
//                 fontSize: "1.1rem", color: "#0A1628", marginBottom: "0.5rem",
//               }}>{u.title}</h3>
//               <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.87rem", color: "#546e7a", margin: 0, lineHeight: 1.6 }}>
//                 {u.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Clients() {
//   const doubled = [...CLIENTS, ...CLIENTS];
//   return (
//     <section style={{ padding: "4rem 0", background: "#fff", overflow: "hidden" }}>
//       <div style={{ textAlign: "center", marginBottom: "2.5rem", padding: "0 2rem" }}>
//         <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#78909c", letterSpacing: "0.1em", textTransform: "uppercase" }}>
//           Trusted by Leading Organizations
//         </span>
//       </div>
//       <div style={{ position: "relative", overflow: "hidden" }}>
//         <div style={{
//           display: "flex", gap: "3rem",
//           animation: "marquee 30s linear infinite",
//           width: "max-content",
//         }}>
//           {doubled.map((c, i) => (
//             <div key={i} style={{
//               fontFamily: "'Rajdhani', sans-serif", fontWeight: 600,
//               fontSize: "1rem", color: "#78909c", whiteSpace: "nowrap",
//               padding: "0.5rem 1.5rem",
//               border: "1px solid rgba(10,22,40,0.1)", borderRadius: "6px",
//               letterSpacing: "0.05em",
//             }}>{c}</div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Testimonials() {
//   const [idx, setIdx] = useState(0);
//   return (
//     <section style={{ padding: "6rem 2rem", background: "#F4F6F9" }}>
//       <div style={{ maxWidth: "900px", margin: "0 auto" }}>
//         <h2 style={{
//           fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
//           fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0A1628",
//           textAlign: "center", marginBottom: "3rem",
//         }}>Client Testimonials</h2>

//         <div style={{
//           background: "#fff", borderRadius: "16px",
//           border: "1px solid rgba(10,22,40,0.08)",
//           padding: "3rem",
//           boxShadow: "0 4px 30px rgba(10,22,40,0.06)",
//         }}>
//           <div style={{
//             fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem",
//             color: "#1E6FA5", lineHeight: 0.8, marginBottom: "1.5rem",
//           }}>"</div>

//           <p style={{
//             fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem",
//             color: "#546e7a", lineHeight: 1.8, fontStyle: "italic",
//             margin: "0 0 2rem",
//           }}>{TESTIMONIALS[idx].quote}</p>

//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
//             <div>
//               <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: "#0A1628", fontSize: "1rem" }}>
//                 {TESTIMONIALS[idx].client}
//               </div>
//               <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#78909c" }}>
//                 {TESTIMONIALS[idx].role}
//               </div>
//             </div>
//             <div style={{ display: "flex", gap: "0.5rem" }}>
//               {[0, 1].map(d => (
//                 <button key={d} onClick={() => setIdx(i => (i + (d === 0 ? -1 : 1) + TESTIMONIALS.length) % TESTIMONIALS.length)} style={{
//                   width: "40px", height: "40px", borderRadius: "50%",
//                   background: "#1E6FA5", border: "none", color: "#fff",
//                   cursor: "pointer", fontSize: "1rem",
//                   transition: "background 0.2s",
//                 }}
//                   onMouseEnter={e => e.target.style.background = "#FF6B2B"}
//                   onMouseLeave={e => e.target.style.background = "#1E6FA5"}
//                 >{d === 0 ? "←" : "→"}</button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Team() {
//   return (
//     <section id="team" style={{ padding: "6rem 2rem", background: "#fff" }}>
//       <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: "3rem" }}>
//           <h2 style={{
//             fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
//             fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0A1628", marginBottom: "0.5rem",
//           }}>Our Leadership Team</h2>
//           <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#78909c" }}>Industry experts driving innovation</p>
//         </div>

//         <div style={{
//           maxWidth: "700px", margin: "0 auto",
//           background: "linear-gradient(135deg, #0A1628, #0F2040)",
//           borderRadius: "16px", padding: "2.5rem",
//           display: "flex", gap: "2rem", alignItems: "flex-start",
//           flexWrap: "wrap",
//         }}>
//           <div style={{
//             width: "100px", height: "100px", borderRadius: "50%",
//             background: "linear-gradient(135deg, #1E6FA5, #FF6B2B)",
//             display: "flex", alignItems: "center", justifyContent: "center",
//             fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "#fff",
//             flexShrink: 0,
//           }}>SS</div>
//           <div style={{ flex: 1 }}>
//             <h3 style={{
//               fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
//               fontSize: "1.5rem", color: "#fff", margin: "0 0 0.25rem",
//             }}>Sunil Sharma</h3>
//             <div style={{
//               fontFamily: "'Space Mono', monospace", fontSize: "0.72rem",
//               color: "#FF6B2B", letterSpacing: "0.15em", marginBottom: "1rem",
//             }}>LEAD CONSULTANT</div>
//             <p style={{
//               fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem",
//               color: "#B0BEC5", lineHeight: 1.7, margin: "0 0 1.5rem",
//             }}>
//               20+ years of expertise in multi-disciplinary engineering design, GIS mapping,
//               and project management across Oil &amp; Gas, Power, and Infrastructure sectors.
//               Served reputed national and international EPC clients.
//             </p>
//             <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
//               {["AutoCAD", "Plant 3D", "E3D", "CadWorx", "GIS / ArcGIS", "PDS"].map(b => (
//                 <span key={b} style={{
//                   fontFamily: "'Space Mono', monospace", fontSize: "0.65rem",
//                   background: "rgba(30,111,165,0.2)", color: "#1E6FA5",
//                   padding: "0.3rem 0.7rem", borderRadius: "4px",
//                   border: "1px solid rgba(30,111,165,0.3)",
//                   letterSpacing: "0.05em",
//                 }}>{b}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ContactForm() {
//   const [form, setForm] = useState({
//     fullName: "", email: "", phone: "", companyName: "",
//     serviceRequired: "", city: "", message: "",
//   });
//   const [status, setStatus] = useState("idle"); // idle | loading | success | error
//   const [charCount, setCharCount] = useState(0);
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const e = {};
//     if (!form.fullName || form.fullName.trim().length < 2) e.fullName = "Name must be at least 2 characters";
//     if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
//     if (!form.phone || !/^[6-9]\d{9}$/.test(form.phone)) e.phone = "Valid 10-digit Indian phone number required";
//     if (form.message && form.message.length > 500) e.message = "Max 500 characters";
//     return e;
//   };

//   const handleSubmit = async () => {
//     const e = validate();
//     if (Object.keys(e).length > 0) { setErrors(e); return; }
//     setErrors({});
//     setStatus("loading");
//     try {
//       const res = await fetch(`${API_BASE}/enquiries`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           fullName: form.fullName,
//           email: form.email,
//           phone: form.phone,
//           companyName: form.companyName || undefined,
//           serviceRequired: form.serviceRequired || undefined,
//           city: form.city || undefined,
//           message: form.message || undefined,
//         }),
//       });
//       if (!res.ok) throw new Error("Server error");
//       setStatus("success");
//       setForm({ fullName: "", email: "", phone: "", companyName: "", serviceRequired: "", city: "", message: "" });
//       setCharCount(0);
//     } catch {
//       setStatus("error");
//     }
//   };

//   const inputStyle = (field) => ({
//     width: "100%", padding: "0.85rem 1rem",
//     background: "rgba(255,255,255,0.05)", border: "1px solid",
//     borderColor: errors[field] ? "#EF4444" : "rgba(255,255,255,0.12)",
//     borderRadius: "8px", color: "#fff",
//     fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem",
//     outline: "none", transition: "border-color 0.2s",
//     boxSizing: "border-box",
//   });

//   const labelStyle = {
//     fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem",
//     color: "#B0BEC5", marginBottom: "0.5rem", display: "block",
//   };

//   return (
//     <section id="contact" style={{
//       padding: "6rem 2rem",
//       background: "linear-gradient(135deg, #0A1628 0%, #0F2040 100%)",
//       position: "relative", overflow: "hidden",
//     }}>
//       <div style={{
//         position: "absolute", inset: 0,
//         backgroundImage: "linear-gradient(rgba(30,111,165,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(30,111,165,0.05) 1px, transparent 1px)",
//         backgroundSize: "60px 60px",
//       }} />

//       <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto" }}>
//         <div style={{ textAlign: "center", marginBottom: "3rem" }}>
//           <span style={{
//             fontFamily: "'Space Mono', monospace", fontSize: "0.7rem",
//             color: "#FF6B2B", letterSpacing: "0.3em", display: "block", marginBottom: "0.75rem",
//           }}>GET IN TOUCH</span>
//           <h2 style={{
//             fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
//             fontSize: "clamp(2rem, 4vw, 3rem)", color: "#fff", margin: 0,
//           }}>Send Us an Enquiry</h2>
//           <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#B0BEC5", marginTop: "0.75rem" }}>
//             We'll get back to you within 24 hours.
//           </p>
//         </div>

//         <div style={{
//           background: "rgba(255,255,255,0.04)",
//           border: "1px solid rgba(255,255,255,0.1)",
//           borderRadius: "16px", padding: "2.5rem",
//           backdropFilter: "blur(10px)",
//         }}>
//           {status === "success" ? (
//             <div style={{
//               textAlign: "center", padding: "3rem",
//               background: "rgba(34,197,94,0.1)", borderRadius: "12px",
//               border: "1px solid rgba(34,197,94,0.3)",
//             }}>
//               <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✓</div>
//               <h3 style={{ fontFamily: "'Rajdhani', sans-serif", color: "#22C55E", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
//                 Thank you!
//               </h3>
//               <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#B0BEC5" }}>
//                 We've received your enquiry and will get back to you within 24 hours.
//               </p>
//               <button onClick={() => setStatus("idle")} style={{
//                 marginTop: "1.5rem", background: "#22C55E", border: "none",
//                 color: "#fff", padding: "0.7rem 1.5rem", borderRadius: "6px",
//                 fontFamily: "'DM Sans', sans-serif", cursor: "pointer",
//               }}>Send Another</button>
//             </div>
//           ) : (
//             <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
//               {status === "error" && (
//                 <div style={{
//                   background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)",
//                   borderRadius: "8px", padding: "1rem",
//                   fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#EF4444",
//                 }}>
//                   Something went wrong. Please call us directly at +91-9910461833
//                 </div>
//               )}

//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
//                 {/* Full Name */}
//                 <div>
//                   <label style={labelStyle}>Full Name *</label>
//                   <input
//                     type="text" placeholder="Rajesh Kumar"
//                     value={form.fullName}
//                     onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))}
//                     style={inputStyle("fullName")}
//                     onFocus={e => e.target.style.borderColor = "#1E6FA5"}
//                     onBlur={e => e.target.style.borderColor = errors.fullName ? "#EF4444" : "rgba(255,255,255,0.12)"}
//                   />
//                   {errors.fullName && <span style={{ color: "#EF4444", fontSize: "0.78rem", fontFamily: "'DM Sans', sans-serif" }}>{errors.fullName}</span>}
//                 </div>
//                 {/* Email */}
//                 <div>
//                   <label style={labelStyle}>Email Address *</label>
//                   <input
//                     type="email" placeholder="rajesh@company.com"
//                     value={form.email}
//                     onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
//                     style={inputStyle("email")}
//                     onFocus={e => e.target.style.borderColor = "#1E6FA5"}
//                     onBlur={e => e.target.style.borderColor = errors.email ? "#EF4444" : "rgba(255,255,255,0.12)"}
//                   />
//                   {errors.email && <span style={{ color: "#EF4444", fontSize: "0.78rem", fontFamily: "'DM Sans', sans-serif" }}>{errors.email}</span>}
//                 </div>
//                 {/* Phone */}
//                 <div>
//                   <label style={labelStyle}>Phone Number *</label>
//                   <input
//                     type="tel" placeholder="9910461833"
//                     value={form.phone}
//                     onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
//                     style={inputStyle("phone")}
//                     onFocus={e => e.target.style.borderColor = "#1E6FA5"}
//                     onBlur={e => e.target.style.borderColor = errors.phone ? "#EF4444" : "rgba(255,255,255,0.12)"}
//                   />
//                   {errors.phone && <span style={{ color: "#EF4444", fontSize: "0.78rem", fontFamily: "'DM Sans', sans-serif" }}>{errors.phone}</span>}
//                 </div>
//                 {/* Company */}
//                 <div>
//                   <label style={labelStyle}>Company Name</label>
//                   <input
//                     type="text" placeholder="Your Company Pvt. Ltd."
//                     value={form.companyName}
//                     onChange={e => setForm(f => ({ ...f, companyName: e.target.value }))}
//                     style={inputStyle("companyName")}
//                     onFocus={e => e.target.style.borderColor = "#1E6FA5"}
//                     onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
//                   />
//                 </div>
//                 {/* Service */}
//                 <div>
//                   <label style={labelStyle}>Service Required</label>
//                   <select
//                     value={form.serviceRequired}
//                     onChange={e => setForm(f => ({ ...f, serviceRequired: e.target.value }))}
//                     style={{ ...inputStyle("serviceRequired"), cursor: "pointer" }}
//                     onFocus={e => e.target.style.borderColor = "#1E6FA5"}
//                     onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
//                   >
//                     <option value="">Select a service...</option>
//                     {SERVICE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
//                   </select>
//                 </div>
//                 {/* City */}
//                 <div>
//                   <label style={labelStyle}>City</label>
//                   <input
//                     type="text" placeholder="New Delhi"
//                     value={form.city}
//                     onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
//                     style={inputStyle("city")}
//                     onFocus={e => e.target.style.borderColor = "#1E6FA5"}
//                     onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
//                   />
//                 </div>
//               </div>

//               {/* Message */}
//               <div>
//                 <label style={{ ...labelStyle, display: "flex", justifyContent: "space-between" }}>
//                   <span>Message / Requirements</span>
//                   <span style={{ color: charCount > 450 ? "#EF4444" : "#546e7a", fontSize: "0.78rem" }}>{charCount}/500</span>
//                 </label>
//                 <textarea
//                   placeholder="Describe your project requirements..."
//                   value={form.message}
//                   rows={4}
//                   onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setCharCount(e.target.value.length); }}
//                   style={{ ...inputStyle("message"), resize: "vertical", minHeight: "100px" }}
//                   onFocus={e => e.target.style.borderColor = "#1E6FA5"}
//                   onBlur={e => e.target.style.borderColor = errors.message ? "#EF4444" : "rgba(255,255,255,0.12)"}
//                 />
//                 {errors.message && <span style={{ color: "#EF4444", fontSize: "0.78rem", fontFamily: "'DM Sans', sans-serif" }}>{errors.message}</span>}
//               </div>

//               <button
//                 onClick={handleSubmit}
//                 disabled={status === "loading"}
//                 style={{
//                   background: status === "loading" ? "#78909c" : "#FF6B2B",
//                   border: "none", color: "#fff",
//                   padding: "1rem 2rem", borderRadius: "8px",
//                   fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
//                   fontSize: "1rem", cursor: status === "loading" ? "not-allowed" : "pointer",
//                   letterSpacing: "0.1em", transition: "all 0.2s",
//                   display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
//                 }}
//                 onMouseEnter={e => { if (status !== "loading") e.currentTarget.style.background = "#e55a1f"; }}
//                 onMouseLeave={e => { if (status !== "loading") e.currentTarget.style.background = "#FF6B2B"; }}
//               >
//                 {status === "loading" ? (
//                   <><span style={{ animation: "spin 1s linear infinite", display: "inline-block" }}>⟳</span> SENDING...</>
//                 ) : "SEND ENQUIRY"}
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Contact info */}
//         <div style={{ display: "flex", gap: "2rem", marginTop: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
//           {[
//             { icon: "📧", label: "daxis.engg@gmail.com" },
//             { icon: "📞", label: "+91-9910461833" },
//             { icon: "📍", label: "New Delhi, India" },
//           ].map((c, i) => (
//             <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//               <span>{c.icon}</span>
//               <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#B0BEC5" }}>{c.label}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Footer() {
//   const links = { Services: ["Engineering Design", "GIS Mapping", "3D Modeling", "Technical Manpower"], Company: ["About Us", "Our Team", "Industries", "Contact"] };
//   return (
//     <footer style={{
//       background: "#060f1e", padding: "3rem 2rem 1.5rem",
//       borderTop: "1px solid rgba(255,255,255,0.06)",
//     }}>
//       <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
//         <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "3rem", marginBottom: "3rem", flexWrap: "wrap" }}>
//           <div>
//             <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
//               <div style={{ width: 28, height: 28, background: "linear-gradient(135deg, #FF6B2B, #1E6FA5)", clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
//               <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#fff", letterSpacing: "0.05em" }}>
//                 DAXIS <span style={{ color: "#FF6B2B" }}>ENGINEERING</span>
//               </span>
//             </div>
//             <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.87rem", color: "#546e7a", lineHeight: 1.7, maxWidth: "280px" }}>
//               Multi-disciplinary engineering design, drafting, GIS mapping and technical manpower solutions for industrial and infrastructure projects.
//             </p>
//           </div>
//           {Object.entries(links).map(([cat, items]) => (
//             <div key={cat}>
//               <h4 style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: "#fff", fontSize: "0.9rem", letterSpacing: "0.1em", marginBottom: "1rem" }}>
//                 {cat.toUpperCase()}
//               </h4>
//               {items.map(item => (
//                 <div key={item} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#546e7a", marginBottom: "0.5rem", cursor: "pointer" }}
//                   onMouseEnter={e => e.target.style.color = "#FF6B2B"}
//                   onMouseLeave={e => e.target.style.color = "#546e7a"}
//                 >{item}</div>
//               ))}
//             </div>
//           ))}
//         </div>
//         <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
//           <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "#37474f" }}>
//             © 2026 DAxis Engineering Consultancy. All rights reserved.
//           </span>
//           <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "#37474f" }}>
//             New Delhi, India
//           </span>
//         </div>
//       </div>
//     </footer>
//   );
// }

// // ─── APP ─────────────────────────────────────────────────────────────────────
// export default function App() {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@500;600;700&family=DM+Sans:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');
//         *, *::before, *::after { box-sizing: border-box; }
//         body { margin: 0; background: #0A1628; }
//         select option { background: #0A1628; color: #fff; }
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: none; }
//         }
//         @keyframes marquee {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }
//         @keyframes bounce {
//           0%, 100% { transform: translateX(-50%) translateY(0); }
//           50% { transform: translateX(-50%) translateY(8px); }
//         }
//         @keyframes spin { to { transform: rotate(360deg); } }
//         @media (max-width: 768px) {
//           .nav-desktop { display: none !important; }
//           .nav-burger { display: block !important; }
//         }
//         ::-webkit-scrollbar { width: 6px; }
//         ::-webkit-scrollbar-track { background: #0A1628; }
//         ::-webkit-scrollbar-thumb { background: #1E6FA5; border-radius: 3px; }
//       `}</style>

//       <Nav active="home" />
//       <Hero />
//       <About />
//       <Services />
//       <Industries />
//       <WhyUs />
//       <Clients />
//       <Testimonials />
//       <Team />
//       <ContactForm />
//       <Footer />
//     </>
//   );
// }


import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import globalStyles from "./constants/styles";

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Only jump to top when navigating to /contact (not when using in-page scroll)
    if (pathname === "/contact") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <style>{globalStyles}</style>
      <ScrollToTop />
      <Nav />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all — redirect anything unknown back home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}