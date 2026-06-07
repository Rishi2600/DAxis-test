import { Link, useNavigate } from "react-router-dom";

const FOOTER_LINKS = {
  Services: [
    "Engineering Design",
    "GIS Mapping",
    "3D Modeling",
    "Technical Manpower",
  ],
  Company: ["About Us", "Our Team", "Industries", "Contact"],
};

// Maps Company links to scroll targets on Home
const SCROLL_MAP: Record<string, string> = {
  "About Us": "about",
  "Our Team": "team",
  Industries: "industries",
};

export default function Footer() {
  const navigate = useNavigate();

  const handleLink = (item: string) => {
    if (item === "Contact") {
      navigate("/contact");
      return;
    }
    const id = SCROLL_MAP[item];
    if (id) {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <footer
      style={{
        background: "#060f1e",
        padding: "3rem 2rem 1.5rem",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  background: "linear-gradient(135deg, #FF6B2B, #1E6FA5)",
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#fff",
                  letterSpacing: "0.05em",
                }}
              >
                DAXIS <span style={{ color: "#FF6B2B" }}>ENGINEERING</span>
              </span>
            </Link>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.87rem",
                color: "#546e7a",
                lineHeight: 1.7,
                maxWidth: "280px",
                margin: 0,
              }}
            >
              Multi-disciplinary engineering design, drafting, GIS mapping and
              technical manpower solutions for industrial and infrastructure
              projects.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([cat, items]) => (
            <div key={cat}>
              <h4
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                  marginBottom: "1rem",
                  marginTop: 0,
                }}
              >
                {cat.toUpperCase()}
              </h4>
              {items.map((item) => (
                <button
                  key={item}
                  onClick={() => handleLink(item)}
                  style={{
                    display: "block",
                    background: "none",
                    border: "none",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "#546e7a",
                    marginBottom: "0.5rem",
                    cursor: "pointer",
                    padding: 0,
                    textAlign: "left",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#FF6B2B")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "#546e7a")
                  }
                >
                  {item}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              color: "#37474f",
            }}
          >
            © {new Date().getFullYear()} DAxis Engineering Consultancy. All
            rights reserved.
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.7rem",
              color: "#37474f",
            }}
          >
            New Delhi, India
          </span>
        </div>
      </div>
    </footer>
  );
}