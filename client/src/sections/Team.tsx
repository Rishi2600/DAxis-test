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
        background: "linear-gradient(160deg, #0d1f3c, #0F2040)",
        borderRadius: "14px",
        border: "1px solid rgba(30,111,165,0.2)",
        width: "220px",
        flexShrink: 0,
        overflow: "hidden",
        transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
        textAlign: "center",
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
      {/* Image — full width, square crop */}
      <div
        style={{
          width: "100%",
          height: "200px",
          overflow: "hidden",
          background: "linear-gradient(135deg, #1E6FA5, #0A1628)",
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

      {/* Details */}
      <div style={{ padding: "1.1rem 1rem 1.25rem" }}>
        {/* Name */}
        <h3
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            color: "#fff",
            margin: "0 0 0.3rem",
            lineHeight: 1.2,
          }}
        >
          {member.name}
        </h3>

        {/* Experience */}
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.1rem",
            color: "#FF6B2B",
            letterSpacing: "0.05em",
            marginBottom: "0.35rem",
          }}
        >
          {member.experience}
        </div>

        {/* Divider */}
        <div
          style={{
            width: "32px",
            height: "2px",
            background: "linear-gradient(to right, #FF6B2B, #1E6FA5)",
            borderRadius: "2px",
            margin: "0.4rem auto",
          }}
        />

        {/* Designation */}
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem",
            color: "#B0BEC5",
            lineHeight: 1.4,
            marginTop: "0.35rem",
          }}
        >
          {member.title}
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const tripled = [...TEAM_MEMBERS, ...TEAM_MEMBERS, ...TEAM_MEMBERS];

  return (
    <section id="team" style={{ padding: "6rem 0", background: "#D6EAF8" }}>
      <style>{`
        @keyframes teamScrollRight {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-220px * 10 - 1.25rem * 10)); }
        }
        .team-track {
          display: flex;
          gap: 1.25rem;
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

      {/* Header */}
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
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#546e7a", margin: 0 }}>
            Industry experts driving innovation
          </p>
        </div>
      </div>

      {/* Horizontal marquee */}
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