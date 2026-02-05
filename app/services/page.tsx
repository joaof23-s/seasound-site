"use client";

export default function Services() {
  return (
    <>
      {/* INTRO */}
      <section style={intro}>
        <div style={introInner}>
          <span style={tag}>Seasound Ship Supply</span>
          <h1 style={introTitle}>Marine Supply Categories</h1>
          <p style={introText}>
            Structured marine supply solutions developed to support cargo
            vessel operations with precision, compliance and reliability.
          </p>
        </div>
      </section>

      {/* EDITORIAL BLOCK */}
      <section style={editorial}>
        <div style={editorialText}>
          <h2>Supplying vessels is not about products.</h2>
          <p>
            It is about understanding operational risk, port constraints and
            compliance requirements. Our supply categories are designed to
            reduce friction and ensure continuity during port calls.
          </p>
        </div>

        <img src="/services/cargo.jpg" style={editorialImage} />
      </section>

      {/* CATEGORIES */}
      <section style={categories}>
        {categoriesData.map((c, i) => (
          <div
            key={c.title}
            className="service-row"
            style={{
              ...categoryRow,
              flexDirection: i % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            <img src={c.image} style={categoryImage} />

            <div style={categoryText}>
              <span style={categoryTag}>{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.description}</p>

              <ul>
                {c.items.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* CLOSING */}
      <section style={closing}>
        <h2>Designed for serious marine operations</h2>
        <p>
          Seasound Ship Supply supports vessels calling Brazilian ports with
          structured supply solutions aligned with international maritime
          standards.
        </p>
      </section>
    </>
  );
}

/* ===== INTRO ===== */
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

const introTitle = {
  fontSize: 64,
  margin: "24px 0",
};

const introText = {
  fontSize: 20,
  maxWidth: 700,
  color: "#e5e7eb",
};

/* ===== EDITORIAL ===== */
const editorial = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "160px 24px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
  gap: 80,
};

const editorialText: React.CSSProperties = {
  fontSize: "clamp(18px,4vw,22px)",
  lineHeight: 1.6,
  maxWidth: 700,
  width: "100%",
};

const editorialImage = {
  width: "100%",
  borderRadius: 32,
};

/* ===== CATEGORIES ===== */
const categories = {
  padding: "180px 24px",
};

const categoryRow: React.CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto 96px",
  display: "flex",
  alignItems: "center",
  gap: 48,
  flexWrap: "wrap",
};

const categoryImage: React.CSSProperties = {
  width: "100%",
  maxWidth: 520,
  borderRadius: 24,
};

const categoryText: React.CSSProperties = {
  flex: 1,
  minWidth: 280,
  fontSize: 17,
  lineHeight: 1.7,
};

const categoryTag = {
  textTransform: "uppercase",
  letterSpacing: 2,
  fontSize: 12,
  color: "#2563eb",
};

/* ===== CLOSING ===== */
const closing = {
  padding: "180px 24px",
  background: "#020617",
  color: "#ffffff",
  textAlign: "center" as const,
};

/* ===== DATA ===== */
const categoriesData = [
  {
    tag: "Bonded",
    title: "Bonded Stores",
    image: "/services/bonded.jpg",
    description:
      "Bonded products supplied under customs control, ensuring compliance and secure delivery.",
    items: ["Cigarettes", "Alcohol", "Confectionery", "Bonded consumables"],
  },
  {
    tag: "Provisioning",
    title: "Fresh & Dry Provisions",
    image: "/services/fresh-dry.jpg",
    description:
      "Fresh, frozen and dry provisions supplied according to vessel requirements.",
    items: ["Fresh produce", "Meat & poultry", "Frozen goods", "Dry stores"],
  },
  {
    tag: "Crew",
    title: "Cabin & Crew Supplies",
    image: "/services/cabin.jpg",
    description:
      "Supplies supporting crew welfare and onboard living conditions.",
    items: ["Amenities", "Cleaning products", "Personal care items"],
  },
  {
    tag: "Safety",
    title: "Safety Equipment",
    image: "/services/safety.jpg",
    description:
      "Safety-related supplies aligned with international maritime regulations.",
    items: ["PPE", "Firefighting gear", "Emergency supplies"],
  },
];
