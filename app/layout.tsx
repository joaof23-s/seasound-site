import "./globals.css";
import CopyEmail from "./components/CopyEmail";

export const metadata = {
  title: "Seasound Ship Supply | Marine Supply for Cargo Vessels",
  description:
    "Seasound Ship Supply provides marine supply and provisions for cargo vessels at Rio de Janeiro and Itaguaí ports.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* TOP CONTACT BAR */}
        <div style={topBar}>
          <div style={topBarContent}>
            {/* WHATSAPP */}
            <a
              href="https://wa.me/5521988959016"
              target="_blank"
              style={topBarLink}
            >
              <span style={{ ...iconWrapper, color: "#22c55e" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.04 2C6.56 2 2.09 6.47 2.09 11.95c0 1.99.52 3.9 1.52 5.6L2 22l4.63-1.54a9.87 9.87 0 0 0 5.41 1.57h.01c5.48 0 9.95-4.47 9.95-9.95C22 6.47 17.53 2 12.04 2zm5.74 14.29c-.24.68-1.42 1.3-1.95 1.38-.5.07-1.12.1-1.81-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.16-4.94-4.36-.15-.2-1.17-1.56-1.17-2.98s.74-2.11 1-2.4c.26-.29.57-.36.76-.36.2 0 .38 0 .55.01.18.01.42-.07.66.5.24.57.83 1.98.9 2.12.07.14.12.31.02.51-.1.2-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.31.31-.13.61.18.3.79 1.3 1.7 2.11 1.17 1.04 2.16 1.37 2.46 1.53.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.26.1 1.66.78 1.94.92.28.14.46.2.53.31.07.11.07.68-.17 1.36z" />
                </svg>
              </span>
              +55 (21) 98895-9016
            </a>

            {/* GMAIL (COPIAR EMAIL) */}
            <CopyEmail
              style={topBarLink}
              iconWrapper={iconWrapper}
            />
          </div>
        </div>

        {/* HEADER */}
        <header style={header}>
          <a href="/" style={brand}>
            <img
              src="/seasound.png"
              alt="Seasound Ship Supply Logo"
              style={logoImage}
            />
            <span className="brand-text" style={brandText}>
              SEASOUND SHIP SUPPLY
            </span>
          </a>

          <nav style={nav}>
            <a href="/" className="nav-link">Home</a>
            <a href="/services" className="nav-link">Services</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/contact" className="nav-link">Contact</a>
          </nav>
        </header>

        <main>{children}</main>

        {/* FOOTER */}
        <footer style={footer}>
          <div style={footerBottom}>
            © {new Date().getFullYear()} Seasound Ship Supply · All rights reserved
          </div>
        </footer>
      </body>
    </html>
  );
}

/* ===== STYLES ===== */
const topBar: React.CSSProperties = {
  background: "#020617",
  padding: "6px clamp(12px,4vw,48px)",
};

const topBarContent: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "clamp(12px,3vw,24px)",
  fontSize: 13,
  flexWrap: "nowrap",
};

const topBarLink: React.CSSProperties = {
  color: "#e5e7eb",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: 6,
  whiteSpace: "nowrap",
  fontSize: "clamp(11px,3vw,13px)",
};

const iconWrapper = {
  display: "flex",
  alignItems: "center",
};

/* HEADER */
const header: React.CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 100,
  padding: "14px clamp(16px,4vw,48px)",
  background: "#1f2937",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const brand = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  textDecoration: "none",
};

const logoImage = {
  height: 42,
};

const brandText = {
  color: "#ffffff",
  fontWeight: 700,
  letterSpacing: 2,
  fontSize: 14,
};

const nav: React.CSSProperties = {
  display: "flex",
  gap: "clamp(12px,4vw,32px)",
  fontSize: 14,
  flexWrap: "wrap",
};

/* FOOTER */
const footer = {
  marginTop: 120,
  background: "#020617",
  color: "#94a3b8",
  padding: "32px",
  textAlign: "center" as const,
};

const footerBottom = {
  fontSize: 13,
};
