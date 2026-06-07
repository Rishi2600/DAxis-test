import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";

export default function About() {
  const [ref, inView] = useInView();
  const yrs = useCountUp(20, 1500, inView);
  const clients = useCountUp(10, 1500, inView);

  const stats = [
    { val: `${yrs}+`, label: "Years", sub: "Of professional experience" },
    { val: "100%", label: "Quality", sub: "Accuracy and timely delivery" },
    { val: "360°", label: "Solutions", sub: "Concept to execution support" },
    { val: `${clients}+`, label: "Clients", sub: "National & international" },
  ];

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ padding: "6rem 2rem", background: "#F4F6F9" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#0A1628",
              marginBottom: "1rem",
              marginTop: 0,
            }}
          >
            About Us
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              color: "#546e7a",
              maxWidth: "720px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            We provide multi-disciplinary engineering design, drafting, GIS
            mapping and technical manpower solutions for industrial and
            infrastructure projects. With 20+ years of professional experience
            serving reputed national and international clients, we deliver
            end-to-end engineering solutions from conceptual design to execution
            with a strong focus on quality, accuracy and timely delivery.
          </p>
        </div>

        {/* Stat cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "12px",
                border: "1px solid rgba(10,22,40,0.08)",
                padding: "2rem",
                textAlign: "center",
                boxShadow: "0 4px 20px rgba(10,22,40,0.06)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 12px 40px rgba(10,22,40,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "none";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 20px rgba(10,22,40,0.06)";
              }}
            >
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "3rem",
                  color: "#1E6FA5",
                  lineHeight: 1,
                }}
              >
                {s.val}
              </div>
              <div
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#0A1628",
                  margin: "0.4rem 0 0.2rem",
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem",
                  color: "#78909c",
                }}
              >
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}