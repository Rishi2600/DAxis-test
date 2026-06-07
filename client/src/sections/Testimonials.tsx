import { useState } from "react";
import { TESTIMONIALS } from "../constants/data";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[idx];

  return (
    <section
      style={{ padding: "6rem 2rem", background: "#F4F6F9" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#0A1628",
            textAlign: "center",
            marginBottom: "3rem",
            marginTop: 0,
          }}
        >
          Client Testimonials
        </h2>

        <div
          style={{
            background: "#fff",
            borderRadius: "16px",
            border: "1px solid rgba(10,22,40,0.08)",
            padding: "3rem",
            boxShadow: "0 4px 30px rgba(10,22,40,0.06)",
          }}
        >
          {/* Quote mark */}
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "4rem",
              color: "#1E6FA5",
              lineHeight: 0.8,
              marginBottom: "1.5rem",
              opacity: 0.6,
            }}
          >
            "
          </div>

          {/* Quote text — keyed so it re-animates on change */}
          <p
            key={idx}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.05rem",
              color: "#546e7a",
              lineHeight: 1.8,
              fontStyle: "italic",
              margin: "0 0 2rem",
              animation: "fadeIn 0.4s ease",
            }}
          >
            {t.quote}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  color: "#0A1628",
                  fontSize: "1rem",
                }}
              >
                {t.client}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "#78909c",
                  marginTop: "0.2rem",
                }}
              >
                {t.role}
              </div>
            </div>

            {/* Navigation */}
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              {/* Dots */}
              <div style={{ display: "flex", gap: "6px", marginRight: "0.75rem" }}>
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    style={{
                      width: i === idx ? "20px" : "8px",
                      height: "8px",
                      borderRadius: "4px",
                      background: i === idx ? "#1E6FA5" : "rgba(10,22,40,0.15)",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.3s",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={prev}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#1E6FA5",
                  border: "none",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "1rem",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.background = "#FF6B2B")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.background = "#1E6FA5")
                }
              >
                ←
              </button>
              <button
                onClick={next}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#1E6FA5",
                  border: "none",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "1rem",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.background = "#FF6B2B")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.background = "#1E6FA5")
                }
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}