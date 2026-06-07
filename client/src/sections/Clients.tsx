import { CLIENTS } from "../constants/data";

export default function Clients() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section
      style={{
        padding: "4rem 0",
        background: "#EBF3FA",
        overflow: "hidden",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "2.5rem", padding: "0 2rem" }}>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
            color: "#78909c",
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
          }}
        >
          Trusted by Leading Organizations
        </span>
      </div>

      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Fade edges */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to right, #fff, transparent)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to left, #fff, transparent)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            display: "flex",
            gap: "2rem",
            animation: "marquee 30s linear infinite",
            width: "max-content",
          }}
        >
          {doubled.map((c, i) => (
            <div
              key={i}
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                color: "#78909c",
                whiteSpace: "nowrap" as const,
                padding: "0.5rem 1.5rem",
                border: "1px solid rgba(10,22,40,0.1)",
                borderRadius: "6px",
                letterSpacing: "0.05em",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#0A1628";
                (e.currentTarget as HTMLElement).style.borderColor = "#1E6FA5";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#78909c";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(10,22,40,0.1)";
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}