import { useRef, useState } from "react";
import { TESTIMONIALS } from "../constants/data";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Drag/swipe state (mobile-friendly)
  const dragState = useRef({ startX: 0, dragging: false, deltaX: 0 });
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const clamp = (i: number) => (i + TESTIMONIALS.length) % TESTIMONIALS.length;

  const goPrev = () => setIdx((i) => clamp(i - 1));
  const goNext = () => setIdx((i) => clamp(i + 1));

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
    const threshold = 80;

    if (delta > threshold) goPrev();
    else if (delta < -threshold) goNext();

    dragState.current = { startX: 0, dragging: false, deltaX: 0 };
    setDragOffset(0);
    setIsDragging(false);
  };

  const t = TESTIMONIALS[idx];

  return (
    <section style={{ padding: "6rem 2rem", background: "#D6EAF8" }}>
      <style>{`
        .testimonial-hover-zone { position: relative; }
        .testimonial-hover-zone:hover .testimonial-arrow { opacity: 1; }
        .testimonial-arrow:hover { background: #1E6FA5 !important; color: #fff !important; }
        @media (max-width: 700px) {
          .testimonial-arrow { display: none !important; }
        }
      `}</style>

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#0A1628",
            textAlign: "center",
            marginBottom: "2.5rem",
            marginTop: 0,
          }}
        >
          Client Testimonials
        </h2>

        {/* Hover zone wraps the card — arrows only appear on hover, sitting on the card's edges */}
        <div className="testimonial-hover-zone">
          {/* Prev arrow — overlays left edge of card */}
          <button
            className="testimonial-arrow"
            onClick={goPrev}
            style={{
              position: "absolute",
              left: "-24px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "#EBF3FA",
              border: "1px solid rgba(10,22,40,0.1)",
              color: "#0A1628",
              fontSize: "1.2rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0,
              transition: "opacity 0.25s ease, background 0.2s, color 0.2s",
              zIndex: 5,
              boxShadow: "0 4px 16px rgba(10,22,40,0.15)",
            }}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          {/* Draggable / swipeable card */}
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

            <div style={{ pointerEvents: "none" }}>
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

          {/* Next arrow — overlays right edge of card */}
          <button
            className="testimonial-arrow"
            onClick={goNext}
            style={{
              position: "absolute",
              right: "-24px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "#EBF3FA",
              border: "1px solid rgba(10,22,40,0.1)",
              color: "#0A1628",
              fontSize: "1.2rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0,
              transition: "opacity 0.25s ease, background 0.2s, color 0.2s",
              zIndex: 5,
              boxShadow: "0 4px 16px rgba(10,22,40,0.15)",
            }}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>

        {/* Dots */}
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