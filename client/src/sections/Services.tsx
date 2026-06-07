import { SERVICES } from "../constants/data";

export default function Services() {
  // Split services into two columns for side-by-side infinite scroll
  const col1 = SERVICES.slice(0, 3);
  const col2 = SERVICES.slice(3, 6);

  const renderCard = (s: typeof SERVICES[0], i: number) => (
    <div
      key={i}
      style={{
        border: "1px solid rgba(30,111,165,0.18)",
        borderRadius: "12px",
        padding: "1.75rem 2rem",
        background: "#EBF3FA",  // light blue card bg
        marginBottom: "1.25rem",
        flexShrink: 0,
        transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#1E6FA5";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 32px rgba(30,111,165,0.15)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(30,111,165,0.18)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.transform = "none";
      }}
    >
      {/* Accent top bar */}
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
          fontSize: "1.15rem",
          color: "#0A1628",
          marginBottom: "0.85rem",
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
              color: "#37576e",
              padding: "0.28rem 0",
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <span
              style={{ color: "#FF6B2B", marginTop: "2px", flexShrink: 0 }}
            >
              •
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  const columnStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    minWidth: 0,
  };

  // Wrapper that holds the infinite scroll track
  const trackStyle = (pause: boolean): React.CSSProperties => ({
    display: "flex",
    flexDirection: "column",
    animation: `scrollUp 18s linear infinite`,
    animationPlayState: pause ? "paused" : "running",
  });

  return (
    <section
      id="services"
      style={{ padding: "6rem 2rem", background: "#D6EAF8" }}  // one shade deeper page bg
    >
      <style>{`
        @keyframes scrollUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .scroll-col:hover .scroll-track {
          animation-play-state: paused !important;
        }
        .scroll-col {
          overflow: hidden;
          height: 520px;
          mask-image: linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%);
        }
      `}</style>

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
              color: "#546e7a",
              marginTop: "0.75rem",
              marginBottom: 0,
            }}
          >
            Comprehensive engineering and geospatial solutions
          </p>
        </div>

        {/* Two-column infinite scroll */}
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {/* Column 1 */}
          <div className="scroll-col" style={columnStyle}>
            <div className="scroll-track" style={trackStyle(false)}>
              {/* Doubled for seamless loop */}
              <div style={columnStyle}>{col1.map(renderCard)}</div>
              <div style={columnStyle}>{col1.map(renderCard)}</div>
            </div>
          </div>

          {/* Column 2 — offset start so they're not in sync */}
          <div className="scroll-col" style={columnStyle}>
            <div
              className="scroll-track"
              style={{ ...trackStyle(false), animationDelay: "-9s" }}
            >
              <div style={columnStyle}>{col2.map(renderCard)}</div>
              <div style={columnStyle}>{col2.map(renderCard)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}