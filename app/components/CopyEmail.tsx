"use client";

import { useState } from "react";

type Props = {
  style?: React.CSSProperties;
  iconWrapper?: React.CSSProperties;
};

export default function CopyEmail({ style, iconWrapper }: Props) {

  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("supply@seasoundrj.com.br");

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <a
        onClick={copy}
        style={{
          color: "#e5e7eb",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: 6,
          whiteSpace: "nowrap",
          fontSize: "clamp(11px,3vw,13px)",
          cursor: "pointer",
          ...style
        }}
      >
        <span style={{ color: "#ea4335", ...iconWrapper }}>
          {/* Gmail SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </span>

        supply@seasoundrj.com.br
      </a>

      {/* TOAST NOTIFICATION */}
      {copied && (
        <div style={toast}>
          Email copied ✔
        </div>
      )}
    </>
  );
}

/* ===== TOAST STYLE ===== */

const toast: React.CSSProperties = {
  position: "fixed",
  top: 20,
  right: 20,
  background: "#020617",
  color: "#ffffff",
  padding: "12px 18px",
  borderRadius: 12,
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  zIndex: 9999,
  fontSize: 14,
};
