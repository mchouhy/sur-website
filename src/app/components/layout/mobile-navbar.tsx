"use client";
import { useState } from "react";
import Link from "next/link";
export default function MobileNavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        <div className="space-y-1">
          <span className="block w-4.5 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-3 h-0.5 bg-black"></span>
        </div>
      </button>
      <aside
        className={`absolute top-16 left-0 w-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-2">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/productos">Productos</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </aside>
    </nav>
  );
}
