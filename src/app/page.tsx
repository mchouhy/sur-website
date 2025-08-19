import PromoBar from "../components/ui/promo-bar";
import MobileNavBar from "../components/layout/mobile-navbar";
import { Input } from "@/components/ui/input";
import ShoppingBagSvgIcon from "@/components/icons/ShoppingBagSvgIcon";
import HeartSvgIcon from "@/components/icons/HeartSvgIcon";
import UserSvgIcon from "@/components/icons/UserSvgIcon";

export default function Home() {
  return (
    <main>
      <PromoBar />
      <header className="flex items-center justify-between gap-x-4 border-b border-gray-200 px-36 py-4 md:py-5">
        <MobileNavBar />
        {/* Add SVG logo here */}
        <h1 className="text-center text-2xl text-nowrap">Luz & Mariano</h1>
        <Input
          className="h-11 max-w-5xl border-transparent bg-[#EBEBEB] px-4 text-[#747474] focus-visible:ring-[2px] focus-visible:ring-gray-300"
          placeholder="Buscar mesas, sillas y más"
        />
        <ul className="flex items-center justify-center">
          <li className="inline-block px-2">
            <a href="/profile" className="text-gray-700 hover:text-gray-900">
              <UserSvgIcon width={28} />
            </a>
          </li>
          <li className="inline-block px-2">
            <a href="/favorites" className="text-gray-700 hover:text-gray-900">
              <HeartSvgIcon width={28} />
            </a>
          </li>
          <li className="inline-block px-2">
            <a href="/cart" className="text-gray-700 hover:text-gray-900">
              <ShoppingBagSvgIcon width={28} />
            </a>
          </li>
        </ul>
      </header>
    </main>
  );
}
