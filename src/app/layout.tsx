import "./globals.css";
import type { Metadata } from "next";
import { Saira, Yrsa } from "next/font/google";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sur",
  description:
    "Tienda online de muebles de microcemento artesanales y modernos. Diseño minimalista para interior y exterior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`font-saira antialiased`}>{children}</body>
    </html>
  );
}
