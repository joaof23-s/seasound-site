"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

export default function Contact() {

  const [openQR, setOpenQR] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("supply@seasoundrj.com.br");

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <>

      {/* TOAST NOTIFICATION */}
      {showToast && (
        <div style={toast}>
          Email copied ✔
        </div>
      )}

      {/* INTRO */}
      <section style={intro}>
        <div style={introInner}>
          <span style={tag}>Contact</span>
          <h1 style={introTitle}>Let’s Discuss Your Vessel Requirements</h1>
          <p style={introText}>
            For quotations, operational coordination or marine supply inquiries,
            contact Seasound Ship Supply through the channels below.
          </p>
        </div>
      </section>

      {/* CONTACT MAIN */}
      <section style={contactBlock}>

        {/* WHATSAPP */}
        <div style={contactItem}>
          <h3>WhatsApp / Phone</h3>
          <div style={contactContent}>
            <a href="https://wa.me/5521988959016" className="btn-primary">
              +55 (21) 98895-9016
            </a>
          </div>
        </div>

        {/* WECHAT */}
        <div style={contactItem}>
          <h3>WeChat</h3>
          <div style={contactContent}>
            <button onClick={() => setOpenQR(true)} style={wechatLink}>
              Open WeChat QR Code
            </button>
          </div>
        </div>

        {/* EMAIL */}
        <div style={contactItem}>
          <h3>Email</h3>
          <div style={contactContent}>
            <button onClick={copyEmail} style={emailLink}>
              supply@seasoundrj.com.br
            </button>
          </div>
        </div>

      </section>

      {/* PORTS */}
      <section style={portsSection}>
        <h3 style={portsTitle}>Ports of Operation</h3>

        <ul style={portsList}>
          <li>Port of Rio de Janeiro</li>
          <li>Port of Itaguaí</li>
          <li>Port of Macaé</li>
          <li>Port of Sepetiba</li>
          <li>Port of Angra dos Reis</li>
          <li>Port of Gebig</li>
          <li>Port of Açu</li>
          <li>Port of Niterói</li>
          <li>Port of São Sebastião</li>
          <li>Port of Búzios</li>
        </ul>
      </section>

      {/* CTA */}
      <section style={closing}>
        <h2>Reliable marine supply starts with clear communication</h2>
        <p>
          Our team is prepared to respond efficiently to operational requests.
        </p>
      </section>

      {/* MODAL QR */}
      {openQR && (
        <div style={modalOverlay} onClick={() => setOpenQR(false)}>
          <div style={modalCard} onClick={(e)=>e.stopPropagation()}>
            <img src="/wechat-qr.png" style={qrImage} />
          </div>
        </div>
      )}

    </>
  );
}

/* ===== STYLES ===== */

const toast: CSSProperties = {
  position:"fixed",
  top:20,
  right:20,
  background:"#020617",
  color:"#fff",
  padding:"12px 18px",
  borderRadius:10,
  fontSize:14,
  zIndex:99999,
  boxShadow:"0 10px 25px rgba(0,0,0,0.3)"
};

const intro: CSSProperties = {
  padding: "180px 24px 140px",
  background: "#020617",
  color: "#ffffff",
};

const introInner: CSSProperties = {
  maxWidth: 900,
  margin: "0 auto",
};

const tag: CSSProperties = {
  textTransform: "uppercase",
  letterSpacing: 3,
  fontSize: 12,
  color: "#93c5fd",
};

const introTitle: CSSProperties = {
  fontSize: "clamp(32px,6vw,60px)",
  margin: "24px 0",
  lineHeight: 1.15,
};

const introText: CSSProperties = {
  fontSize: 20,
  maxWidth: 720,
  color: "#e5e7eb",
};

const contactBlock: CSSProperties = {
  maxWidth: 1000,
  margin: "0 auto",
  padding: "clamp(80px,12vw,160px) 24px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
  justifyItems: "center",
  alignItems: "start",
  textAlign: "center",
  gap: 40,
};

const contactItem: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 18,
};

const contactContent: CSSProperties = {
  minHeight: 60,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const wechatLink: CSSProperties = {
  background: "none",
  border: "none",
  fontSize: 18,
  fontWeight: 600,
  color: "#07C160",
  cursor: "pointer",
};

const emailLink: CSSProperties = {
  background: "none",
  border: "none",
  fontSize: 18,
  fontWeight: 600,
  color: "#1e40af",
  whiteSpace: "nowrap",
  cursor: "pointer",
};

const portsSection: CSSProperties = {
  maxWidth: 1000,
  margin: "0 auto",
  padding: "0 24px 160px",
  textAlign: "center",
};

const portsTitle: CSSProperties = {
  fontSize: 22,
  marginBottom: 32,
};

const portsList: CSSProperties = {
  listStyle: "none",
  padding: 0,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
  gap: 12,
  fontSize: 16,
};

const closing: CSSProperties = {
  padding: "160px 24px",
  background: "#f8fafc",
  textAlign: "center",
};

const modalOverlay: CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const modalCard: CSSProperties = {
  background: "#ffffff",
  padding: 40,
  borderRadius: 20,
};

const qrImage: CSSProperties = {
  width: "min(320px, 80vw)",
};
