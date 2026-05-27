import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Utkarsh Mittal — Software Engineer",
  description:
    "Software engineer with 5+ years building distributed systems, full-stack products, and AI pipelines. M.S. Computer Engineering, NYU 2026.",
  openGraph: {
    title: "Utkarsh Mittal — Software Engineer",
    description:
      "5+ years building at Dell, Locomex, and Nokia. Full-stack, distributed systems, AI. Currently building 4 production-grade portfolio projects.",
    type: "website",
    url: "https://utkarsh.dev",
  },
  twitter: {
    card: "summary",
    title: "Utkarsh Mittal — Software Engineer",
    description: "SDE with 5+ years across distributed systems, full-stack, and AI. M.S. NYU 2026.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div id="glow" />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const g = document.getElementById('glow');
              document.addEventListener('mousemove', e => {
                g.style.left = e.clientX + 'px';
                g.style.top = e.clientY + 'px';
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
