import { TEAM_SOFTWARE } from "../constants/data";

export default function Team() {
  return (
    <section
      id="team"
      style={{ padding: "6rem 2rem", background: "#D6EAF8" }}
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
              marginBottom: "0.5rem",
              marginTop: 0,
            }}
          >
            Our Leadership Team
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#78909c",
              margin: 0,
            }}
          >
            Industry experts driving innovation
          </p>
        </div>

        {/* Profile card */}
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background: "linear-gradient(135deg, #0A1628, #0F2040)",
            borderRadius: "16px",
            padding: "2.5rem",
            display: "flex",
            gap: "2rem",
            alignItems: "flex-start",
            flexWrap: "wrap",
            border: "1px solid rgba(30,111,165,0.2)",
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1E6FA5, #FF6B2B)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "2rem",
              color: "#fff",
              flexShrink: 0,
              border: "3px solid rgba(255,255,255,0.1)",
            }}
          >
            SS
          </div>

          {/* Info */}
          <div style={{ flex: 1, minWidth: "200px" }}>
            <h3
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#fff",
                margin: "0 0 0.25rem",
              }}
            >
              Sunil Sharma
            </h3>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.72rem",
                color: "#FF6B2B",
                letterSpacing: "0.15em",
                marginBottom: "1rem",
              }}
            >
              LEAD CONSULTANT
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                color: "#B0BEC5",
                lineHeight: 1.7,
                margin: "0 0 1.5rem",
              }}
            >
              20+ years of expertise in multi-disciplinary engineering design,
              GIS mapping, and project management across Oil &amp; Gas, Power,
              and Infrastructure sectors. Served reputed national and
              international EPC clients.
            </p>

            {/* Software badges */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {TEAM_SOFTWARE.map((badge) => (
                <span
                  key={badge}
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.65rem",
                    background: "rgba(30,111,165,0.2)",
                    color: "#1E6FA5",
                    padding: "0.3rem 0.7rem",
                    borderRadius: "4px",
                    border: "1px solid rgba(30,111,165,0.3)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}