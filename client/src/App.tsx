import { EnquiryForm } from "./components/EnquiryForm";

export default function App() {
  return (
    <main>
      <header
        style={{
          background: "var(--primary)",
          color: "var(--text-primary)",
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <strong style={{ fontSize: 18, letterSpacing: "0.04em" }}>
          DAxis Engineering
        </strong>
        <a
          href="#contact"
          style={{
            color: "var(--text-primary)",
            background: "var(--accent)",
            padding: "8px 16px",
            borderRadius: 8,
            fontWeight: 600,
            textDecoration: "none",
            fontSize: 14,
          }}
        >
          Get a Quote
        </a>
      </header>

      <section
        style={{
          padding: "80px 32px",
          maxWidth: 1100,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 52,
            lineHeight: 1.1,
            color: "var(--primary)",
            fontWeight: 400,
            maxWidth: 760,
            margin: "0 auto 20px",
          }}
        >
          Engineering Consultancy Built on Precision &amp; Trust
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "var(--text-muted)",
            maxWidth: 620,
            margin: "0 auto",
          }}
        >
          20+ years of multi-disciplinary engineering, design, drafting and
          project management for EPC companies, PSUs and offshore clients.
        </p>
      </section>

      <EnquiryForm />

      <footer
        style={{
          padding: "32px",
          textAlign: "center",
          color: "var(--text-muted)",
          fontSize: 13,
          borderTop: "1px solid var(--line-soft)",
          marginTop: 40,
        }}
      >
        © 2026 DAxis Engineering Consultancy · New Delhi, India · +91-9910461833
      </footer>
    </main>
  );
}
