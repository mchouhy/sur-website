import HeartSvgIcon from "@/components/icons/HeartSvgIcon";
import ShoppingBagSvgIcon from "@/components/icons/ShoppingBagSvgIcon";
import UserSvgIcon from "@/components/icons/UserSvgIcon";
import MobileNavBar from "@/components/layout/mobile-navbar";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import "./globals.css";
import type { Metadata } from "next";
import { Saira, Yrsa } from "next/font/google";
import PromoBar from "@/components/ui/promo-bar";

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
      <body className={`font-saira antialiased`}>
        <PromoBar />
        <header className="mx-auto flex max-w-7/12 items-center justify-between gap-x-8 py-4 md:justify-items-start md:py-5">
          <MobileNavBar />
          {/* Add SVG logo here */}
          <h1 className="text-center text-2xl text-nowrap">Luz & Mariano</h1>
          <form
            action="submit"
            className="relative flex h-11 w-full max-w-5xl items-center rounded-md bg-[#EBEBEB]"
          >
            <Input
              className="h-full border-transparent px-6 text-[#747474] focus-visible:ring-[2px] focus-visible:ring-gray-300"
              placeholder="Buscar mesas, sillas y más"
            />
            <SearchIcon
              strokeWidth={1.5}
              size={20}
              className="absolute right-3"
            />
          </form>
          <ul className="flex items-center justify-center">
            <li className="inline-block px-2">
              <a href="/profile" className="text-gray-700 hover:text-gray-900">
                <UserSvgIcon width={28} />
              </a>
            </li>
            {/* <li className="inline-block px-2">
              <a
                href="/favorites"
                className="text-gray-700 hover:text-gray-900"
              >
                <HeartSvgIcon width={28} />
              </a>
            </li> */}
            <li className="inline-block px-2">
              <a href="/cart" className="text-gray-700 hover:text-gray-900">
                <ShoppingBagSvgIcon width={28} />
              </a>
            </li>
          </ul>
        </header>
        <hr className="border-0 border-b border-gray-200" />
        {children}
      </body>
    </html>
  );
}
