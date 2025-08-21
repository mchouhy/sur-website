import MobileNavBar from "@/components/layout/mobile-navbar";
import "./globals.css";
import type { Metadata } from "next";
import PromoBar from "@/components/ui/promo-bar";

import { DesktopNavbar } from "@/components/layout/desktop-navbar";
import { SearchBar } from "@/components/layout/search-bar";
import { UserMenu } from "@/components/layout/user-menu";

export const metadata: Metadata = {
  title: "Sur",
  description:
    "Tienda online de muebles de microcemento para interior y exterior. Diseño minimalista, moderno y artesanal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`font-saira antialiased`}>
        <header>
          <PromoBar />
          <div className="mx-auto flex items-center justify-between gap-x-8 py-4 text-2xl md:max-w-6/12 md:justify-items-start md:py-5 lg:max-w-9/12">
            <MobileNavBar />
            <h1 className="text-center text-2xl text-nowrap">Luz & Mariano</h1>
            <SearchBar className="hidden md:flex md:w-full md:max-w-[70rem]" />
            <UserMenu />
          </div>
          <hr className="relative hidden border-0 border-b border-gray-200 md:block" />
          <SearchBar className="mx-2 flex md:hidden" />
          <DesktopNavbar />
        </header>
        {children}
      </body>
    </html>
  );
}
