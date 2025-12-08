import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mouad Bakhchane | Business Data Analyst & Financial Expert",
  description: "Portfolio of Mouad Bakhchane - Specialized in Data Engineering, Financial Modeling, and Business Intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={outfit.className}>{children}</body>
    </html >
  );
}
