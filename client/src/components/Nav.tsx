import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NAV_LINKS = ["Home", "About", "Services", "Industries", "Team"];

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

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [location.pathname]);

  const handleNavClick = (label: string) => {
    const id = label.toLowerCase();
    if (!isHome) {
      // Navigate home then scroll after mount
      navigate("/", { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

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
        padding: "0 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "64px",
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: 32,
            height: 32,
            background: "linear-gradient(135deg, #FF6B2B, #1E6FA5)",
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: "1.2rem",
            color: "#fff",
            letterSpacing: "0.05em",
          }}
        >
          DAXIS <span style={{ color: "#FF6B2B" }}>ENGINEERING</span>
        </span>
      </Link>

      {/* Desktop links */}
      <div
        className="nav-desktop"
        style={{ display: "flex", gap: "2rem", alignItems: "center" }}
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
              padding: 0,
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

        <Link
          to="/contact"
          style={{
            background: "#FF6B2B",
            color: "#fff",
            padding: "0.45rem 1.1rem",
            borderRadius: "4px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            fontSize: "0.85rem",
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
          Get a Quote
        </Link>
      </div>

      {/* Hamburger */}
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
        }}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            background: "rgba(10,22,40,0.98)",
            padding: "1rem 2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            borderBottom: "1px solid rgba(255,107,43,0.2)",
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
                fontSize: "1rem",
                cursor: "pointer",
                textAlign: "left",
                padding: "0.25rem 0",
              }}
            >
              {label}
            </button>
          ))}
          <Link
            to="/contact"
            style={{
              background: "#FF6B2B",
              color: "#fff",
              padding: "0.7rem 1.1rem",
              borderRadius: "4px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}