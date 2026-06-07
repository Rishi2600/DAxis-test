import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// All links including Contact — rendered in mobile menu and desktop center
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

  useEffect(() => setMenuOpen(false), [location.pathname]);

  const handleNavClick = (label: string) => {
    if (label === "Contact") {
      navigate("/contact");
      setMenuOpen(false);
      return;
    }
    const id = label.toLowerCase();
    if (!isHome) {
      navigate("/", { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const NAV_HEIGHT = "80px";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(10,22,40,0.97)" : "rgba(10,22,40,0.70)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,107,43,0.2)"
          : "1px solid transparent",
        transition: "all 0.3s",
        height: NAV_HEIGHT,
        display: "grid",
        // 3-column layout: logo | center links | right buttons
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        padding: "0 2.5rem",
      }}
    >
      {/* ── Left: Logo ── */}
      <Link
        to="/"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifySelf: "start",
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            background: "linear-gradient(135deg, #FF6B2B, #1E6FA5)",
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: "1.25rem",
            color: "#fff",
            letterSpacing: "0.05em",
          }}
        >
          DAXIS <span style={{ color: "#FF6B2B" }}>ENGINEERING</span>
        </span>
      </Link>

      {/* ── Center: Nav links (desktop) ── */}
      <div
        className="nav-desktop"
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        {NAV_LINKS.map((label) => (
          <button
            key={label}
            onClick={() => handleNavClick(label)}
            style={{
              background: "none",
              border: "none",
              color: "#B0BEC5",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.9rem",
              cursor: "pointer",
              transition: "color 0.2s",
              letterSpacing: "0.03em",
              padding: "0.25rem 0",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#FF6B2B")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "#B0BEC5")
            }
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── Right: Action buttons (desktop) ── */}
      <div
        className="nav-desktop"
        style={{
          display: "flex",
          gap: "0.75rem",
          alignItems: "center",
          justifySelf: "end",
        }}
      >
        {/* Learn More → scrolls to About */}
        <button
          onClick={() => handleNavClick("About")}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "#fff",
            padding: "0.5rem 1.2rem",
            borderRadius: "4px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            fontSize: "0.88rem",
            letterSpacing: "0.04em",
            cursor: "pointer",
            transition: "border-color 0.2s, color 0.2s",
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

        {/* Contact → /contact route */}
        <Link
          to="/contact"
          style={{
            background: "#FF6B2B",
            color: "#fff",
            padding: "0.5rem 1.2rem",
            borderRadius: "4px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: "0.88rem",
            letterSpacing: "0.04em",
            textDecoration: "none",
            transition: "background 0.2s",
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

      {/* ── Hamburger (mobile only) ── */}
      <button
        className="nav-burger"
        onClick={() => setMenuOpen((o) => !o)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: "1.5rem",
          cursor: "pointer",
          justifySelf: "end",
          padding: 0,
          lineHeight: 1,
        }}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: NAV_HEIGHT,
            left: 0,
            right: 0,
            background: "rgba(10,22,40,0.99)",
            borderBottom: "1px solid rgba(255,107,43,0.2)",
            padding: "0.5rem 0 1rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {NAV_LINKS.map((label) => (
            <button
              key={label}
              onClick={() => handleNavClick(label)}
              style={{
                background: "none",
                border: "none",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                color: "#B0BEC5",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                cursor: "pointer",
                textAlign: "left",
                padding: "1rem 2rem",
                transition: "background 0.15s, color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,107,43,0.06)";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "none";
                (e.currentTarget as HTMLElement).style.color = "#B0BEC5";
              }}
            >
              {label}
            </button>
          ))}

          {/* Action buttons row in mobile */}
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              padding: "1rem 2rem 0.5rem",
            }}
          >
            <button
              onClick={() => handleNavClick("About")}
              style={{
                flex: 1,
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
                padding: "0.7rem",
                borderRadius: "4px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
            >
              Learn More
            </button>
            <Link
              to="/contact"
              style={{
                flex: 1,
                background: "#FF6B2B",
                color: "#fff",
                padding: "0.7rem",
                borderRadius: "4px",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}