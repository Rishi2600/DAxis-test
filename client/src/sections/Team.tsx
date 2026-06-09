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

function MemberCard({ member }: { member: typeof TEAM_MEMBERS[0] }) {
  const photo = PHOTOS[member.id];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0A1628, #0F2040)",
        borderRadius: "14px",
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        border: "1px solid rgba(30,111,165,0.2)",
        width: "560px",
        flexShrink: 0,
        transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,107,43,0.4)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 32px rgba(255,107,43,0.1)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,111,165,0.2)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.transform = "none";
      }}
    >
      {/* Top row — avatar + name + title */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        {photo ? (
          <img
            src={photo}
            alt={member.name}
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              objectFit: "cover",
              flexShrink: 0,
              border: "2px solid rgba(255,107,43,0.45)",
            }}
          />
        ) : (
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1E6FA5, #0A1628)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.3rem",
              color: "#fff",
              flexShrink: 0,
              border: "2px solid rgba(30,111,165,0.35)",
            }}
          >
            {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </div>
        )}

        <div style={{ minWidth: 0 }}>
          <h3
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "#fff",
              margin: 0,
            }}
          >
            {member.name}
          </h3>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.58rem",
              color: "#FF6B2B",
              letterSpacing: "0.1em",
              marginTop: "0.25rem",
            }}
          >
            {member.title}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(to right, rgba(255,107,43,0.3), transparent)",
        }}
      />

      {/* Bio */}
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.82rem",
          color: "#B0BEC5",
          lineHeight: 1.65,
          margin: 0,
          flex: 1,
        }}
      >
        {member.bio}
      </p>

      {/* Skill badges */}
      <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
        {member.skills.map((s) => (
          <span
            key={s}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.58rem",
              background: "rgba(30,111,165,0.18)",
              color: "#1E6FA5",
              padding: "0.22rem 0.55rem",
              borderRadius: "4px",
              border: "1px solid rgba(30,111,165,0.25)",
              whiteSpace: "nowrap" as const,
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Team() {
  // Triple for a seamless loop (5 cards × 3 = 15, loop resets after first 5)
  const tripled = [...TEAM_MEMBERS, ...TEAM_MEMBERS, ...TEAM_MEMBERS];

  return (
    <section id="team" style={{ padding: "6rem 0", background: "#D6EAF8" }}>
      <style>{`
        @keyframes teamScrollRight {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-560px * 10 - 1.5rem * 10)); }
        }
        .team-track {
          display: flex;
          gap: 1.5rem;
          animation: teamScrollRight 55s linear infinite;
          width: max-content;
        }
        .team-marquee:hover .team-track {
          animation-play-state: paused !important;
        }
        .team-marquee {
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%);
        }
      `}</style>

      {/* Section header — padded separately since section has no horizontal padding */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
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
              color: "#546e7a",
              margin: 0,
            }}
          >
            Industry experts driving innovation
          </p>
        </div>
      </div>

      {/* Full-width marquee */}
      <div className="team-marquee">
        <div className="team-track">
          {tripled.map((m, i) => (
            <MemberCard key={i} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}