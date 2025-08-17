"use client";
import { useState } from "react";
import Link from "next/link";
export default function MobileNavBar() {
  const navbarLinks = [
    { href: "/", label: "Nuevo" },
    { href: "/productos", label: "Mesas" },
    { href: "/contacto", label: "Sillas" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        <div className="space-y-1.5">
          <span className="block h-[0.5] w-5 bg-gray-900"></span>
          <span className="block h-[0.5] w-5 bg-gray-900"></span>
          <span className="block h-[0.5] w-5 bg-gray-900"></span>
        </div>
      </button>
      <aside
        className={`absolute top-20 left-0 z-50 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-wrap border-t border-gray-200">
          {navbarLinks.map((link) => (
            <li
              key={link.href}
              className="w-full border-b border-gray-200 px-2 py-4"
            >
              <Link href={link.href} className="text-sm font-medium">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  );
}
