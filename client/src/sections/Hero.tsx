import { LOGO_HERO_WATERMARK } from "../constants/logo";

export default function Hero() {

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #0A1628 0%, #0F2040 50%, #0A1628 100%)",
        overflow: "hidden",
      }}
    >
      {/* Blueprint grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(30,111,165,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(30,111,165,0.07) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />
      {/* Orange glow */}
      <div
        style={{
          position: "absolute",
          right: "10%",
          top: "20%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,43,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Blue glow */}
      <div
        style={{
          position: "absolute",
          left: "5%",
          bottom: "10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,111,165,0.10) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Watermark logo — very faint, right side background */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "2%",
          transform: "translateY(-50%)",
          width: "36%",
          maxWidth: "400px",
          opacity: 0.04,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <img
          src={LOGO_HERO_WATERMARK}
          alt=""
          style={{ width: "100%", height: "auto", filter: "brightness(10)" }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          paddingTop: "100px",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "1.5rem",
            animation: "fadeInUp 0.6s ease forwards",
          }}
        >
          <div style={{ width: "40px", height: "2px", background: "#FF6B2B" }} />
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.75rem",
              color: "#FF6B2B",
              letterSpacing: "0.3em",
            }}
          >
            ENGINEERING EXCELLENCE
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 0.95,
            color: "#fff",
            margin: "0 0 1.5rem",
            animation: "fadeInUp 0.6s 0.1s ease both",
          }}
        >
          DAxis <span style={{ color: "#FF6B2B" }}>Engineering</span>
          <br />
          Consultancy
        </h1>

        {/* Sub */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.1rem",
            color: "#B0BEC5",
            maxWidth: "520px",
            lineHeight: 1.7,
            marginBottom: "0",
            animation: "fadeInUp 0.6s 0.2s ease both",
          }}
        >
          Complete Solutions in Engineering Design, 3D Modeling &amp; Technical
          Manpower for Industrial and Infrastructure Projects.
        </p>

        {/* Stats bar */}
        <div
          style={{
            display: "flex",
            gap: 0,
            marginTop: "4rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "2rem",
            flexWrap: "wrap",
            animation: "fadeInUp 0.6s 0.45s ease both",
          }}
        >
          {[
            { val: "20+", label: "Years Experience" },
            { val: "100%", label: "Quality Delivery" },
            { val: "360°", label: "Solutions" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 120px",
                paddingRight: "2rem",
                borderRight:
                  i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
                marginRight: i < 2 ? "2rem" : 0,
              }}
            >
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2rem",
                  color: "#1E6FA5",
                  letterSpacing: "0.05em",
                }}
              >
                {s.val}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.8rem",
                  color: "#B0BEC5",
                  letterSpacing: "0.05em",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          animation: "bounce 2s infinite",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.65rem",
            color: "#B0BEC5",
            letterSpacing: "0.2em",
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, #FF6B2B, transparent)",
          }}
        />
      </div>
    </section>
  );
}