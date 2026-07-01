import { useRef, useState } from "react";
import { TESTIMONIALS } from "../constants/data";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Drag/swipe state
  const dragState = useRef({ startX: 0, dragging: false, deltaX: 0 });
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const clamp = (i: number) => (i + TESTIMONIALS.length) % TESTIMONIALS.length;

  const onPointerDown = (clientX: number) => {
    dragState.current = { startX: clientX, dragging: true, deltaX: 0 };
    setIsDragging(true);
  };

  const onPointerMove = (clientX: number) => {
    if (!dragState.current.dragging) return;
    const delta = clientX - dragState.current.startX;
    dragState.current.deltaX = delta;
    setDragOffset(delta);
  };

  const onPointerUp = () => {
    if (!dragState.current.dragging) return;
    const delta = dragState.current.deltaX;
    const threshold = 80; // px needed to trigger a slide change

    if (delta > threshold) {
      setIdx((i) => clamp(i - 1)); // dragged right → show previous
    } else if (delta < -threshold) {
      setIdx((i) => clamp(i + 1)); // dragged left → show next
    }

    dragState.current = { startX: 0, dragging: false, deltaX: 0 };
    setDragOffset(0);
    setIsDragging(false);
  };

  const t = TESTIMONIALS[idx];

  return (
    <section style={{ padding: "6rem 2rem", background: "#D6EAF8" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#0A1628",
            textAlign: "center",
            marginBottom: "0.75rem",
            marginTop: 0,
          }}
        >
          Client Testimonials
        </h2>
        <p
          style={{
            textAlign: "center",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
            color: "#78909c",
            marginBottom: "2.5rem",
          }}
        >
          Drag the card to browse →
        </p>

        {/* Draggable card */}
        <div
          ref={trackRef}
          onMouseDown={(e) => onPointerDown(e.clientX)}
          onMouseMove={(e) => onPointerMove(e.clientX)}
          onMouseUp={onPointerUp}
          onMouseLeave={() => isDragging && onPointerUp()}
          onTouchStart={(e) => onPointerDown(e.touches[0].clientX)}
          onTouchMove={(e) => onPointerMove(e.touches[0].clientX)}
          onTouchEnd={onPointerUp}
          style={{
            background: "#EBF3FA",
            borderRadius: "16px",
            border: "1px solid rgba(10,22,40,0.08)",
            padding: "3rem",
            boxShadow: isDragging
              ? "0 12px 40px rgba(10,22,40,0.14)"
              : "0 4px 30px rgba(10,22,40,0.06)",
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
            transform: `translateX(${dragOffset * 0.4}px) rotate(${dragOffset * 0.01}deg)`,
            transition: isDragging ? "none" : "transform 0.3s ease, box-shadow 0.2s",
            touchAction: "pan-y",
          }}
        >
          {/* Quote mark */}
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "4rem",
              color: "#1E6FA5",
              lineHeight: 0.8,
              marginBottom: "1.5rem",
              opacity: 0.6,
              pointerEvents: "none",
            }}
          >
            "
          </div>

          {/* Quote text — keyed so it re-animates on change */}
          <p
            key={idx}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.05rem",
              color: "#546e7a",
              lineHeight: 1.8,
              fontStyle: "italic",
              margin: "0 0 2rem",
              animation: "fadeIn 0.4s ease",
              pointerEvents: "none",
            }}
          >
            {t.quote}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
              pointerEvents: "none",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  color: "#0A1628",
                  fontSize: "1rem",
                }}
              >
                {t.client}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "#78909c",
                  marginTop: "0.2rem",
                }}
              >
                {t.role}
              </div>
            </div>
          </div>
        </div>

        {/* Dots — only navigation control left, sits below the card */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            justifyContent: "center",
            marginTop: "1.5rem",
          }}
        >
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              style={{
                width: i === idx ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === idx ? "#1E6FA5" : "rgba(10,22,40,0.18)",
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