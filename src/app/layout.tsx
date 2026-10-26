import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OffboardPro Enterprise - Comprehensive User Manual & Operations Guide",
  description: "Official interactive user guide and operational manual for OffboardPro Access Governance & Identity Lifecycle Management Console.",
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
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
