"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-4 left-0 right-0 z-[9998]">
      <nav className="mx-auto max-w-7xl px-6 md:px-20">
        <div className="flex items-center justify-between rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 shadow-soft">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-wide text-white"
          >
            AI Boss
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-hover
                className={clsx(
                  "text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

        </div>
      </nav>
    </header>
  );
}
