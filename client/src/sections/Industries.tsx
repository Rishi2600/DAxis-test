import { useState } from "react";
import { INDUSTRIES } from "../constants/data";
import {
  INDUSTRY_IMG_MANPOWER,
  INDUSTRY_IMG_MEP,
  INDUSTRY_IMG_SEWAGE,
  INDUSTRY_IMG_BUILDING,
  INDUSTRY_IMG_POWER_PLANT,
  INDUSTRY_IMG_PETROCHEMICAL,
  INDUSTRY_IMG_OIL_GAS,
} from "../constants/logo";

const INDUSTRY_IMAGES = [
  INDUSTRY_IMG_MANPOWER,
  INDUSTRY_IMG_MEP,
  INDUSTRY_IMG_SEWAGE,
  INDUSTRY_IMG_BUILDING,
  INDUSTRY_IMG_POWER_PLANT,
  INDUSTRY_IMG_PETROCHEMICAL,
  INDUSTRY_IMG_OIL_GAS,
];

export default function Industries() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="industries"
      style={{
        padding: "6rem 2rem",
        background: "linear-gradient(135deg, #0A1628 0%, #0F2040 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(30,111,165,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(30,111,165,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Faded background image — same as active card's image, large & visible-but-subtle */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${INDUSTRY_IMAGES[active]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.34,
          transition: "opacity 0.6s ease, background-image 0.6s ease",
          pointerEvents: "none",
        }}
      />
      {/* Darken overlay so text stays readable over the faded photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(10,22,40,0.75) 0%, rgba(15,32,64,0.8) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "1.1rem",
              color: "#FF6B2B",
              fontWeight: 700,
              letterSpacing: "0.15em",
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            WHAT WE COVER
          </span>
          <h2
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#fff",
              margin: 0,
            }}
          >
            Industries We Serve
          </h2>
          <div
            style={{
              width: "48px",
              height: "3px",
              background: "#1E6FA5",
              margin: "1rem auto 0",
            }}
          />
        </div>

        {/* Interactive panel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          {/* Image card — fixed size so every image is identical */}
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
              width: "380px",
              height: "260px",
              flexShrink: 0,
              background: "#0F2040",
            }}
          >
            <img
              src={INDUSTRY_IMAGES[active]}
              alt={INDUSTRIES[active].label}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                opacity: 0.6,
                transition: "opacity 0.4s",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background:
                  "linear-gradient(to top, rgba(10,22,40,0.95), transparent)",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.75rem",
                  color: "#B0BEC5",
                  marginBottom: "0.5rem",
                }}
              >
                {INDUSTRIES[active].num} OF {String(INDUSTRIES.length).padStart(2, "0")}
              </div>
              <h3
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2rem",
                  color: "#fff",
                  margin: 0,
                }}
              >
                {INDUSTRIES[active].label}
              </h3>
              <div
                style={{
                  width: "60px",
                  height: "2px",
                  background: "#FF6B2B",
                  marginTop: "0.5rem",
                }}
              />
            </div>
          </div>

          {/* List panel — no up/down buttons, just clickable rows */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              minWidth: "220px",
            }}
          >
            {INDUSTRIES.map((ind, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  background:
                    active === i ? "rgba(255,107,43,0.12)" : "transparent",
                  border: "1px solid",
                  borderColor:
                    active === i ? "#FF6B2B" : "rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  padding: "0.7rem 1rem",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  width: "100%",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9rem",
                    color: active === i ? "#fff" : "#B0BEC5",
                    fontWeight: active === i ? 600 : 400,
                  }}
                >
                  {ind.label}
                </span>
                {active === i && (
                  <span
                    style={{
                      marginLeft: "auto",
                      color: "#FF6B2B",
                      fontSize: "0.6rem",
                    }}
                  >
                    ●
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}