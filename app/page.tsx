"use client";
import { useEffect, useState } from "react";

export default function Home() {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    const els = document.querySelectorAll(".fade-up");

    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
          }
        }),
      { threshold: 0.2 }
    );

    els.forEach((el) => obs.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      obs.disconnect();
    };

  }, []);

  return (
    <>
      {/* ===== HERO ELITE CINEMATIC ===== */}
      <section
        className="fade-up"
        style={{
          ...hero,
          backgroundPositionY: `${scrollY * 0.3}px`
        }}
      >
        <div style={overlay}></div>

        <div style={heroContent}>
          <img src="/seasound.png" alt="Seasound Ship Supply" style={heroLogo} />

          <h1 style={heroTitle}>
            Premium Marine Supply Solutions
          </h1>

          <p style={heroText}>
            Operational precision. Maritime compliance. Reliable ship supply.
          </p>

          <div style={buttonWrapper}>
            <a href="/services" className="btn-primary">
              Explore Services →
            </a>
          </div>
        </div>
      </section>

      {/* ===== BLOCK 1 ===== */}
      <section style={block} className="fade-up">
        <img src="/supply.jpg" style={image} />
        <div style={text}>
          <h2>Marine Supply with Precision</h2>
          <p>
            Seasound Ship Supply provides essential supplies for cargo vessels,
            ensuring each delivery meets operational requirements and
            international maritime standards.
          </p>
        </div>
      </section>

      {/* ===== BLOCK 2 ===== */}
      <section
        style={{ ...block, flexDirection: "row-reverse" }}
        className="fade-up"
      >
        <img src="/operation.jpg" style={image} />
        <div style={text}>
          <h2>Operational Reliability & Compliance</h2>
          <p>
            Our operations focus on minimizing risk, preventing delays and
            maintaining smooth port operations for vessels calling Brazilian
            ports.
          </p>
        </div>
      </section>

      {/* ===== BLOCK 3 ===== */}
      <section style={block} className="fade-up">
        <img src="/ports.jpg" style={image} />
        <div style={text}>
          <h2>Strategic Port Coverage</h2>
          <p>
            With local expertise, Seasound Ship Supply operates at the main
            ports of Rio de Janeiro state, offering fast and efficient marine
            logistics.
          </p>
          <strong>Port of Rio de Janeiro • Port of Itaguaí • Port of Macaé • Port of Sepetiba • Port of Angra dos Reis • Port of Gebig • Port of Açu • Port of Niterói • Port of São Sebastião • Port of Búzios</strong>
        </div>
      </section>

      {/* ===== DARK CONTINUOUS SECTION ===== */}
      <section style={darkSection}>
        <div style={marqueeSection}>
          <div style={marqueeTrack}>
            <div style={marqueeContent}>
              GENERAL SHIP SUPPLY • PROVISIONS • BONDED STORES • 
              SAFETY EQUIPMENT • PORT OPERATIONS • MARINE LOGISTICS •
            </div>

            <div style={marqueeContent}>
              GENERAL SHIP SUPPLY • PROVISIONS • BONDED STORES • 
              SAFETY EQUIPMENT • PORT OPERATIONS • MARINE LOGISTICS •
            </div>
          </div>
        </div>

        <div style={finalCta}>
          <h2>Your trusted marine supply partner</h2>

          <p>
            Contact us to coordinate reliable marine supply for your next port call.
          </p>

          <div style={buttonWrapper}>
            <a href="/contact" className="btn-primary">
              Contact Us →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ===== STYLES ===== */

const hero = {
  position:"relative" as const,
  minHeight:"100vh",
  backgroundImage:"url('/hero.jpg')",
  backgroundSize:"cover",
  backgroundPosition:"center",
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
};

const overlay = {
  position:"absolute" as const,
  inset:0,
  background:"linear-gradient(rgba(2,6,23,.85), rgba(2,6,23,.95))"
};

const heroContent = {
  position:"relative" as const,
  color:"#ffffff",
  textAlign:"center" as const,
  maxWidth:900,
  padding:"0 24px"
};

const heroLogo = {
  height:90,
  marginBottom:32
};

const heroTitle = {
  fontSize:60,
  marginBottom:20
};

const heroText = {
  fontSize:20,
  marginBottom:40,
  color:"#e5e7eb"
};

const buttonWrapper = {
  marginTop:40
};

const block: React.CSSProperties = {
  display:"flex",
  alignItems:"center",
  gap:40,
  padding:"100px 24px",
  maxWidth:1200,
  margin:"0 auto",
  flexWrap:"wrap"
};

const image: React.CSSProperties = {
  flex:1,
  minWidth:280,
  maxWidth:500,
  width:"100%",
  borderRadius:20,
};

const text: React.CSSProperties = {
  flex:1,
  minWidth:280,
  fontSize:18,
  lineHeight:1.7
};

const darkSection = {
  background:"#020617",
  marginTop:0
};

const marqueeSection = {
  background:"#0b2a6f",
  overflow:"hidden",
  padding:"28px 0"
};

const marqueeTrack: React.CSSProperties = {
  display:"flex",
  animation:"marquee 20s linear infinite"
};

const marqueeContent: React.CSSProperties = {
  whiteSpace:"nowrap",
  fontSize:14,
  letterSpacing:3,
  fontWeight:600,
  color:"#ffffff"
};

const finalCta = {
  padding:"140px 24px 180px",
  color:"#ffffff",
  textAlign:"center" as const
};
