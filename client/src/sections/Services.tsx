import { useInView } from "../hooks/useInView";
import { SERVICES } from "../constants/data";

export default function Services() {
  const [ref, inView] = useInView();

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ padding: "6rem 2rem", background: "#fff" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.7rem",
              color: "#FF6B2B",
              letterSpacing: "0.3em",
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            WHAT WE DO
          </span>
          <h2
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#0A1628",
              margin: 0,
            }}
          >
            Our Core Services
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#78909c",
              marginTop: "0.75rem",
            }}
          >
            Comprehensive engineering and geospatial solutions
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {SERVICES.map((s, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(10,22,40,0.1)",
                borderRadius: "12px",
                padding: "2rem",
                background: "#fff",
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(30px)",
                transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s, border-color 0.2s, box-shadow 0.2s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#FF6B2B";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 32px rgba(255,107,43,0.12)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(10,22,40,0.1)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "none";
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                {s.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#0A1628",
                  marginBottom: "1rem",
                  marginTop: 0,
                }}
              >
                {s.title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {s.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.88rem",
                      color: "#546e7a",
                      padding: "0.3rem 0",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        color: "#FF6B2B",
                        marginTop: "2px",
                        flexShrink: 0,
                      }}
                    >
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}