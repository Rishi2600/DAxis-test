import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LOGO_NAV } from "../constants/logo";

const NAV_LINKS = ["Home", "About", "Services", "Industries", "Team", "Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close drawer on route change
  useEffect(() => setMenuOpen(false), [location.pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (label: string) => {
    if (label === "Contact") {
      navigate("/contact");
    } else {
      const id = label.toLowerCase();
      if (!isHome) {
        navigate("/", { state: { scrollTo: id } });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  const NAV_HEIGHT = "80px";

  return (
    <>
      {/* ── Nav bar ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          background: scrolled ? "rgba(10,22,40,0.97)" : "rgba(10,22,40,0.75)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,107,43,0.2)"
            : "1px solid transparent",
          transition: "background 0.3s, border-color 0.3s",
          height: NAV_HEIGHT,
          display: "grid",
          gridTemplateColumns: "80px 1fr 80px",
          alignItems: "center",
          padding: "0 2rem",
        }}
      >
        {/* ── Left: Hamburger (always visible) ── */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "6px",
            color: "#fff",
            width: "40px",
            height: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            cursor: "pointer",
            padding: 0,
            transition: "border-color 0.2s",
            justifySelf: "start",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.borderColor = "#FF6B2B")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.borderColor =
              "rgba(255,255,255,0.15)")
          }
        >
          {/* Three lines → X when open */}
          <span
            style={{
              display: "block",
              width: "18px",
              height: "2px",
              background: "#fff",
              borderRadius: "2px",
              transition: "transform 0.3s, opacity 0.3s",
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "18px",
              height: "2px",
              background: "#fff",
              borderRadius: "2px",
              transition: "opacity 0.3s",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "18px",
              height: "2px",
              background: "#fff",
              borderRadius: "2px",
              transition: "transform 0.3s, opacity 0.3s",
              transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>

        {/* ── Center column: Logo, shifted toward left ── */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: "1.5rem",
          }}
        >
          <img
            src={LOGO_NAV}
            alt="DAxis Engineering logo"
            style={{ width: 52, height: 52, objectFit: "contain", flexShrink: 0 }}
          />
        </Link>

        {/* ── Right: Action buttons ── */}
        <div
          style={{
            display: "flex",
            gap: "0.6rem",
            alignItems: "center",
            justifySelf: "end",
          }}
        >
          <button
            onClick={() => handleNavClick("About")}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#fff",
              padding: "0.45rem 1rem",
              borderRadius: "4px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              fontSize: "0.85rem",
              letterSpacing: "0.03em",
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#FF6B2B";
              (e.currentTarget as HTMLElement).style.color = "#FF6B2B";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.25)";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
          >
            Learn More
          </button>

          <Link
            to="/contact"
            style={{
              background: "#FF6B2B",
              color: "#fff",
              padding: "0.45rem 1rem",
              borderRadius: "4px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.85rem",
              letterSpacing: "0.03em",
              textDecoration: "none",
              transition: "background 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#e55a1f")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#FF6B2B")
            }
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* ── Backdrop ── */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 198,
          background: "rgba(6,15,30,0.65)",
          backdropFilter: "blur(3px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* ── Left drawer ── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 199,
          width: "300px",
          background: "#060f1e",
          borderRight: "1px solid rgba(255,107,43,0.15)",
          transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        {/* Drawer header */}
        <div
          style={{
            height: "80px",
            display: "flex",
            alignItems: "center",
            padding: "0 1.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            flexShrink: 0,
          }}
        >
          <img
            src={LOGO_NAV}
            alt="DAxis logo"
            style={{ width: 40, height: 40, objectFit: "contain", marginRight: "10px", flexShrink: 0 }}
          />
          <span
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#fff",
              letterSpacing: "0.05em",
            }}
          >
            DAXIS <span style={{ color: "#FF6B2B" }}>ENGINEERING</span>
          </span>
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1, padding: "1rem 0" }}>
          {NAV_LINKS.map((label, i) => (
            <button
              key={label}
              onClick={() => handleNavClick(label)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                width: "100%",
                background: "none",
                border: "none",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                color: "#B0BEC5",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 500,
                cursor: "pointer",
                padding: "1rem 1.5rem",
                textAlign: "left",
                transition: "background 0.15s, color 0.15s, padding-left 0.15s",
                // Stagger slide-in when menu opens
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(-12px)",
                transitionDelay: menuOpen ? `${i * 0.04 + 0.1}s` : "0s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,107,43,0.07)";
                (e.currentTarget as HTMLElement).style.color = "#fff";
                (e.currentTarget as HTMLElement).style.paddingLeft = "2rem";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "none";
                (e.currentTarget as HTMLElement).style.color = "#B0BEC5";
                (e.currentTarget as HTMLElement).style.paddingLeft = "1.5rem";
              }}
            >
              {/* Index number */}
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.65rem",
                  color: "#FF6B2B",
                  opacity: 0.7,
                  flexShrink: 0,
                  width: "20px",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {label}
            </button>
          ))}
        </nav>

        {/* Drawer footer */}
        <div
          style={{
            padding: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            flexShrink: 0,
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              color: "#37474f",
              margin: "0 0 0.4rem",
            }}
          >
            daxis.engg@gmail.com
          </p>
          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.7rem",
              color: "#37474f",
              margin: 0,
            }}
          >
            +91-9910461833 · New Delhi
          </p>
        </div>
      </div>
    </>
  );
}