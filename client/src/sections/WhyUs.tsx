import { useInView } from "../hooks/useInView";
import { USPS } from "../constants/data";

export default function WhyUs() {
  const [ref, inView] = useInView();

  return (
    <section
      id="why"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ padding: "6rem 2rem", background: "#D6EAF8" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
            OUR EDGE
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
            Why Choose DAxis?
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {USPS.map((u, i) => (
            <div
              key={i}
              style={{
                background: "#EBF3FA",
                borderRadius: "12px",
                border: "1px solid rgba(10,22,40,0.08)",
                padding: "2rem",
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s, border-color 0.2s, box-shadow 0.2s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#1E6FA5";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 32px rgba(30,111,165,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(10,22,40,0.08)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "3px",
                  background: "linear-gradient(to right, #FF6B2B, #1E6FA5)",
                  borderRadius: "2px",
                  marginBottom: "1rem",
                }}
              />
              <h3
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#0A1628",
                  marginBottom: "0.5rem",
                  marginTop: 0,
                }}
              >
                {u.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.87rem",
                  color: "#546e7a",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {u.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}