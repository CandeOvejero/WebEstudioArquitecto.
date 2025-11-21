"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-[var(--accent-dark)] border-b border-[var(--border-card)]">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border border-[var(--border-card)] flex items-center justify-center text-[var(--border-card)] font-semibold">O&B</div>
          <span className="uppercase tracking-[0.18em] text-xs text-[var(--border-card)]">
            Ovejero & Bicecci
          </span>
        </div>

        <nav className="flex gap-6 text-xs uppercase tracking-[0.16em]">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${
                  active
                    ? "text-white"
                    : "text-[var(--border-card)] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
