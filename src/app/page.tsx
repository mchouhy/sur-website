import PromoBar from "../components/ui/promo-bar";
import MobileNavBar from "../components/layout/mobile-navbar";

export default function Home() {
  return (
    <main>
      <PromoBar />
      <header className="flex items-center py-2">
        <MobileNavBar />
        {/* Add SVG logo here */}
        <h1 className="text-2xl font-bold text-center">Sur</h1>
      </header>
    </main>
  );
}
