import { useState } from "react";
import { TEAM_MEMBERS } from "../constants/data";
import {
  PHOTO_SUNIL,
  PHOTO_HIMADRI,
  PHOTO_SOMPAL,
  PHOTO_MUKESH,
  PHOTO_HP_ROY,
  PHOTO_JAGDISH,
  PHOTO_SANJIV,
  PHOTO_GAURAV,
  PHOTO_MUNESHWER,
  PHOTO_VM,
} from "../constants/logo";

const PHOTOS: Record<string, string> = {
  sunil:     PHOTO_SUNIL,
  himadri:   PHOTO_HIMADRI,
  sompal:    PHOTO_SOMPAL,
  mukesh:    PHOTO_MUKESH,
  hp_roy:    PHOTO_HP_ROY,
  jagdish:   PHOTO_JAGDISH,
  sanjiv:    PHOTO_SANJIV,
  gaurav:    PHOTO_GAURAV,
  muneshwer: PHOTO_MUNESHWER,
  vm:        PHOTO_VM,
};

const CARDS_PER_PAGE = 4;

function MemberCard({ member }: { member: typeof TEAM_MEMBERS[0] }) {
  const photo = PHOTOS[member.id];

  return (
    <div
      style={{
        background: "linear-gradient(160deg, #0d1f3c, #0F2040)",
        borderRadius: "14px",
        border: "1px solid rgba(30,111,165,0.2)",
        overflow: "hidden",
        transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
        textAlign: "center",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,107,43,0.4)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(255,107,43,0.1)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,111,165,0.2)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.transform = "none";
      }}
    >
      {/* Image — full width, clean crop, NO fade mask */}
      <div
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          overflow: "hidden",
          background: "linear-gradient(135deg, #1E6FA5, #0A1628)",
          flexShrink: 0,
        }}
      >
        {photo ? (
          <img
            src={photo}
            alt={member.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "2.5rem",
              color: "#fff",
              opacity: 0.6,
            }}
          >
            {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </div>
        )}
      </div>

      {/* Details — flex column, designation area has a reserved 2-line height
          so cards with 1-line vs 2-line titles still end at the same total height */}
      <div
        style={{
          padding: "1.5rem 1.25rem 1.75rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: "1.3rem",
            color: "#fff",
            margin: "0 0 0.4rem",
            lineHeight: 1.2,
          }}
        >
          {member.name}
        </h3>

        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.4rem",
            color: "#FF6B2B",
            letterSpacing: "0.05em",
            marginBottom: "0.5rem",
          }}
        >
          {member.experience}
        </div>

        <div
          style={{
            width: "40px",
            height: "2px",
            background: "linear-gradient(to right, #FF6B2B, #1E6FA5)",
            borderRadius: "2px",
            margin: "0.5rem auto",
          }}
        />

        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
            color: "#B0BEC5",
            lineHeight: 1.4,
            minHeight: "2.4em", // reserves space for 2 lines regardless of actual line count
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          {member.title}
        </div>

        {/* Short description — reserved 3-line height so cards stay aligned
            regardless of how long each person's description is */}
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.78rem",
            color: "#8fa3b8",
            lineHeight: 1.5,
            marginTop: "0.6rem",
            paddingTop: "0.6rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            minHeight: "3.6em", // reserves space for 3 lines
          }}
        >
          {member.description}
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(TEAM_MEMBERS.length / CARDS_PER_PAGE);

  const goPrev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const goNext = () => setPage((p) => (p + 1) % totalPages);

  const visible = TEAM_MEMBERS.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  const edgeBtnStyle: React.CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    background: "rgba(10,22,40,0.25)",
    border: "1px solid rgba(10,22,40,0.15)",
    color: "rgba(10,22,40,0.55)",
    fontSize: "1.1rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    backdropFilter: "blur(4px)",
    transition: "opacity 0.25s ease, background 0.2s, color 0.2s, border-color 0.2s",
    zIndex: 5,
    outline: "none",
  };

  return (
    <section id="team" style={{ padding: "6rem 2rem", background: "#D6EAF8" }}>
      <style>{`
        /* Arrow only reveals when hovering its own card (first/last), not the whole row */
        .team-card-first:hover .team-arrow-left { opacity: 1 !important; }
        .team-card-last:hover .team-arrow-right { opacity: 1 !important; }
        .team-arrow-left:hover, .team-arrow-right:hover {
          background: rgba(255,107,43,0.16) !important;
          border-color: rgba(255,107,43,0.4) !important;
          color: #FF6B2B !important;
        }
      `}</style>

      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
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
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#546e7a", margin: 0 }}>
            Industry experts driving innovation
          </p>
        </div>

        {/* Cards row — fixed card width, centered, equal height via flex stretch */}
        <div
          key={page}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "stretch",
            gap: "1.5rem",
            animation: "fadeIn 0.35s ease",
          }}
        >
          {visible.map((m, i) => {
            const isFirst = i === 0;
            const isLast = i === visible.length - 1;
            const edgeClass = isFirst ? "team-card-first" : isLast ? "team-card-last" : "";

            return (
              <div
                key={m.id}
                className={edgeClass}
                style={{
                  width: "270px",
                  flexShrink: 0,
                  position: "relative",
                }}
              >
                <MemberCard member={m} />

                {/* Prev arrow — only rendered on the leftmost card, hover-triggered by that card alone */}
                {isFirst && (
                  <button
                    className="team-arrow-left"
                    onClick={goPrev}
                    style={{ ...edgeBtnStyle, left: "-22px" }}
                    aria-label="Previous team members"
                  >
                    ←
                  </button>
                )}

                {/* Next arrow — only rendered on the rightmost card, hover-triggered by that card alone */}
                {isLast && (
                  <button
                    className="team-arrow-right"
                    onClick={goNext}
                    style={{ ...edgeBtnStyle, right: "-22px" }}
                    aria-label="Next team members"
                  >
                    →
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Page dots */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              style={{
                width: i === page ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === page ? "#1E6FA5" : "rgba(10,22,40,0.18)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}