"use client";

export default function About() {
  return (
    <>
      {/* INTRO */}
      <section style={intro}>
        <div style={introInner}>
          <span style={tag}>About Seasound</span>
          <h1 style={introTitle}>A Marine Supply Company Built on Reliability</h1>
          <p style={introText}>
            Seasound Ship Supply supports cargo vessels with structured marine
            supply solutions, developed to meet operational, regulatory and
            logistical demands.
          </p>
        </div>
      </section>

      {/* EDITORIAL */}
      <section style={editorial}>
        <div style={editorialText}>
          <h2>Experience is not measured in years.</h2>
          <p>
            It is measured in the ability to deliver accurately, under pressure
            and within strict port schedules. Seasound Ship Supply operates with
            a clear understanding of maritime risk and operational constraints.
          </p>
        </div>

        <img src="/services/deck-engine.jpg" style={editorialImage} />
      </section>

      {/* VALUES */}
      <section style={values}>
        <div style={value}>
          <h3>Operational Precision</h3>
          <p>
            Every supply operation is executed with strict attention to detail,
            minimizing risk and avoiding unnecessary delays.
          </p>
        </div>

        <div style={value}>
          <h3>Compliance Focus</h3>
          <p>
            All services are aligned with international maritime standards and
            local port regulations.
          </p>
        </div>

        <div style={value}>
          <h3>Port Expertise</h3>
          <p>
            Local knowledge of Brazilian ports allows efficient coordination
            and problem-solving during vessel calls.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={closing}>
        <h2>Structured support for serious marine operations</h2>
        <p>
          Learn more about our supply categories or contact our team to discuss
          your vessel requirements.
        </p>

        {/* 🔽 BOTÃO DESCIDO AQUI */}
        <a
          href="/contact"
          className="btn-primary"
          style={{ marginTop: 48 }}
        >
          Contact Us →
        </a>
      </section>
    </>
  );
}

/* ===== STYLES ===== */
const intro = {
  padding: "180px 24px 140px",
  background: "#020617",
  color: "#ffffff",
};

const introInner = {
  maxWidth: 900,
  margin: "0 auto",
};

const tag = {
  textTransform: "uppercase",
  letterSpacing: 3,
  fontSize: 12,
  color: "#93c5fd",
};

const introTitle: React.CSSProperties = {
  fontSize: "clamp(32px,6vw,60px)",
  margin: "24px 0",
  lineHeight: 1.15,
};

const introText: React.CSSProperties = {
  fontSize: "clamp(16px,2.5vw,20px)",
  maxWidth: 720,
  lineHeight: 1.6,
};

/* ===== EDITORIAL ===== */
const editorial: React.CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "clamp(80px,12vw,160px) 24px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
  gap: 48,
};

const editorialText: React.CSSProperties = {
  fontSize: "clamp(18px,4vw,22px)",
  lineHeight: 1.6,
  width: "100%",
};

const editorialImage = {
  width: "100%",
  borderRadius: 32,
};

/* ===== VALUES ===== */
const values: React.CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "clamp(80px,12vw,140px) 24px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
  gap: 40,
};

const value = {
  fontSize: 18,
  lineHeight: 1.7,
};

/* ===== CLOSING ===== */
const closing: React.CSSProperties = {
  padding: "clamp(100px,14vw,180px) 24px",
  background: "#020617",
  color: "#ffffff",
  textAlign: "center",
};
