import { useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE, SERVICE_OPTIONS } from "../constants/data";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceRequired: string;
  city: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const INITIAL: FormState = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  serviceRequired: "",
  city: "",
  message: "",
};

// ─── helpers ─────────────────────────────────────────────────────────────────

function validate(form: FormState): Partial<Record<keyof FormState, string>> {
  const e: Partial<Record<keyof FormState, string>> = {};
  if (!form.fullName || form.fullName.trim().length < 2)
    e.fullName = "Name must be at least 2 characters";
  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    e.email = "Valid email required";
  if (!form.phone || !/^[6-9]\d{9}$/.test(form.phone.trim()))
    e.phone = "Valid 10-digit Indian phone number required";
  if (!form.message || form.message.trim().length === 0)
    e.message = "Message is required";
  else if (form.message.length > 500)
    e.message = "Max 500 characters";
  return e;
}

// ─── sub-components ───────────────────────────────────────────────────────────

function FieldLabel({
  children,
  required,
  extra,
}: {
  children: React.ReactNode;
  required?: boolean;
  extra?: React.ReactNode;
}) {
  return (
    <label
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.85rem",
        color: "#B0BEC5",
        marginBottom: "0.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>
        {children}
        {required && <span style={{ color: "#FF6B2B", marginLeft: "3px" }}>*</span>}
      </span>
      {extra}
    </label>
  );
}

function ErrorMsg({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <span
      style={{
        color: "#EF4444",
        fontSize: "0.78rem",
        fontFamily: "'DM Sans', sans-serif",
        marginTop: "4px",
        display: "block",
      }}
    >
      {msg}
    </span>
  );
}

// ─── main component ───────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const inputStyle = (field: keyof FormState): React.CSSProperties => ({
    width: "100%",
    padding: "0.85rem 1rem",
    background: "rgba(255,255,255,0.05)",
    border: `1px solid ${errors[field] ? "#EF4444" : "rgba(255,255,255,0.12)"}`,
    borderRadius: "8px",
    color: "#fff",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  });

  const focusStyle = (e: React.FocusEvent<HTMLElement>) =>
    ((e.target as HTMLElement).style.borderColor = "#1E6FA5");
  const blurStyle =
    (field: keyof FormState) => (e: React.FocusEvent<HTMLElement>) =>
      ((e.target as HTMLElement).style.borderColor = errors[field]
        ? "#EF4444"
        : "rgba(255,255,255,0.12)");

  const handleSubmit = async () => {
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch(`${API_BASE}/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          companyName: form.companyName || undefined,
          serviceRequired: form.serviceRequired || undefined,
          city: form.city || undefined,
          message: form.message || undefined,
        }),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setForm(INITIAL);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0A1628 0%, #0F2040 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blueprint grid bg */}
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

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "860px",
          margin: "0 auto",
          padding: "120px 2rem 6rem",
        }}
      >
        {/* Back link */}
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.88rem",
            color: "#B0BEC5",
            textDecoration: "none",
            marginBottom: "2.5rem",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "#FF6B2B")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "#B0BEC5")
          }
        >
          ← Back to Home
        </Link>

        {/* Page header */}
        <div style={{ marginBottom: "3rem" }}>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.7rem",
              color: "#FF6B2B",
              letterSpacing: "0.3em",
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            GET IN TOUCH
          </span>
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "#fff",
              margin: "0 0 1rem",
              lineHeight: 1,
            }}
          >
            Send Us an Enquiry
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#B0BEC5",
              fontSize: "1rem",
              margin: 0,
              maxWidth: "520px",
              lineHeight: 1.7,
            }}
          >
            Fill in the form below and our team will get back to you within 24
            hours. All fields marked{" "}
            <span style={{ color: "#FF6B2B" }}>*</span> are required.
          </p>
        </div>

        {/* Card */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px",
            padding: "2.5rem",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* ── Success state ── */}
          {status === "success" ? (
            <div
              style={{
                textAlign: "center",
                padding: "3rem 1rem",
                background: "rgba(34,197,94,0.08)",
                borderRadius: "12px",
                border: "1px solid rgba(34,197,94,0.25)",
              }}
            >
              <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>✓</div>
              <h2
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  color: "#22C55E",
                  fontSize: "1.8rem",
                  margin: "0 0 0.5rem",
                }}
              >
                Thank you!
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#B0BEC5",
                  margin: "0 0 2rem",
                }}
              >
                We've received your enquiry and will get back to you within 24
                hours.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                    padding: "0.7rem 1.5rem",
                    borderRadius: "6px",
                    fontFamily: "'DM Sans', sans-serif",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                  }}
                >
                  Send Another
                </button>
                <Link
                  to="/"
                  style={{
                    background: "#FF6B2B",
                    border: "none",
                    color: "#fff",
                    padding: "0.7rem 1.5rem",
                    borderRadius: "6px",
                    fontFamily: "'DM Sans', sans-serif",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  Back to Home
                </Link>
              </div>
            </div>
          ) : (
            /* ── Form ── */
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {/* Server error banner */}
              {status === "error" && (
                <div
                  style={{
                    background: "rgba(239,68,68,0.1)",
                    border: "1px solid rgba(239,68,68,0.3)",
                    borderRadius: "8px",
                    padding: "1rem 1.25rem",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9rem",
                    color: "#EF4444",
                  }}
                >
                  Something went wrong. Please try again or call us directly at{" "}
                  <strong>+91-9910461833</strong>.
                </div>
              )}

              {/* Row 1 — Name + Email */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                <div>
                  <FieldLabel required>Full Name</FieldLabel>
                  <input
                    type="text"
                    placeholder="Rajesh Kumar"
                    value={form.fullName}
                    onChange={set("fullName")}
                    style={inputStyle("fullName")}
                    onFocus={focusStyle}
                    onBlur={blurStyle("fullName")}
                  />
                  <ErrorMsg msg={errors.fullName} />
                </div>
                <div>
                  <FieldLabel required>Email Address</FieldLabel>
                  <input
                    type="email"
                    placeholder="rajesh@company.com"
                    value={form.email}
                    onChange={set("email")}
                    style={inputStyle("email")}
                    onFocus={focusStyle}
                    onBlur={blurStyle("email")}
                  />
                  <ErrorMsg msg={errors.email} />
                </div>
              </div>

              {/* Row 2 — Phone + Company */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                <div>
                  <FieldLabel required>Phone Number</FieldLabel>
                  <input
                    type="tel"
                    placeholder="9910461833"
                    value={form.phone}
                    onChange={set("phone")}
                    style={inputStyle("phone")}
                    onFocus={focusStyle}
                    onBlur={blurStyle("phone")}
                  />
                  <ErrorMsg msg={errors.phone} />
                </div>
                <div>
                  <FieldLabel>Company Name</FieldLabel>
                  <input
                    type="text"
                    placeholder="Your Company Pvt. Ltd."
                    value={form.companyName}
                    onChange={set("companyName")}
                    style={inputStyle("companyName")}
                    onFocus={focusStyle}
                    onBlur={blurStyle("companyName")}
                  />
                </div>
              </div>

              {/* Row 3 — Service + City */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                <div>
                  <FieldLabel>Service Required</FieldLabel>
                  <select
                    value={form.serviceRequired}
                    onChange={set("serviceRequired")}
                    style={{ ...inputStyle("serviceRequired"), cursor: "pointer" }}
                    onFocus={focusStyle}
                    onBlur={blurStyle("serviceRequired")}
                  >
                    <option value="">Select a service…</option>
                    {SERVICE_OPTIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <FieldLabel>City</FieldLabel>
                  <input
                    type="text"
                    placeholder="New Delhi"
                    value={form.city}
                    onChange={set("city")}
                    style={inputStyle("city")}
                    onFocus={focusStyle}
                    onBlur={blurStyle("city")}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <FieldLabel
                  required
                  extra={
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: form.message.length > 450 ? "#EF4444" : "#546e7a",
                        transition: "color 0.2s",
                      }}
                    >
                      {form.message.length}/500
                    </span>
                  }
                >
                  Message / Requirements
                </FieldLabel>
                <textarea
                  placeholder="Describe your project requirements, timeline, or any other details…"
                  value={form.message}
                  rows={5}
                  onChange={set("message")}
                  style={{
                    ...inputStyle("message"),
                    resize: "vertical",
                    minHeight: "120px",
                  }}
                  onFocus={focusStyle}
                  onBlur={blurStyle("message")}
                />
                <ErrorMsg msg={errors.message} />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                style={{
                  background: status === "loading" ? "#546e7a" : "#FF6B2B",
                  border: "none",
                  color: "#fff",
                  padding: "1rem 2rem",
                  borderRadius: "8px",
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.12em",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  transition: "background 0.2s, transform 0.2s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  alignSelf: "flex-start",
                  minWidth: "180px",
                }}
                onMouseEnter={(e) => {
                  if (status !== "loading")
                    (e.currentTarget as HTMLElement).style.background = "#e55a1f";
                }}
                onMouseLeave={(e) => {
                  if (status !== "loading")
                    (e.currentTarget as HTMLElement).style.background = "#FF6B2B";
                }}
              >
                {status === "loading" ? (
                  <>
                    <span
                      style={{
                        display: "inline-block",
                        animation: "spin 0.8s linear infinite",
                      }}
                    >
                      ⟳
                    </span>
                    SENDING…
                  </>
                ) : (
                  "SEND ENQUIRY →"
                )}
              </button>
            </div>
          )}
        </div>

        {/* Contact info strip */}
        <div
          style={{
            display: "flex",
            gap: "2rem",
            marginTop: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: "📧", label: "daxis.engg@gmail.com" },
            { icon: "📞", label: "+91-9910461833" },
            { icon: "📍", label: "New Delhi, India" },
          ].map((c, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span>{c.icon}</span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  color: "#B0BEC5",
                }}
              >
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}