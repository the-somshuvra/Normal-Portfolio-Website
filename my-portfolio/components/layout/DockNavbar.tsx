"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Folder, FileText, Mail } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: Folder },
  { name: "Resume", href: "/resume", icon: FileText },
  { name: "Contact", href: "/#contact", icon: Mail }
];

export default function DockNavbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]">
      <nav className="flex gap-4 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-soft">
        {navItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            item.href === "/#contact"
              ? pathname === "/"
              : pathname === item.href;

          return (
            <div key={item.name} className="relative group">
              {/* Tooltip */}
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md text-xs font-medium bg-black/80 text-white opacity-0 group-hover:opacity-100 transition pointer-events-none">
                {item.name}
              </div>

              {/* Button */}
              <Link href={item.href} scroll>
                <div
                  className={clsx(
                    "flex items-center justify-center w-12 h-12 rounded-xl cursor-pointer transition-all",
                    isActive
                      ? "bg-white text-black scale-110 shadow-md"
                      : "text-white/70 hover:text-white hover:scale-110"
                  )}
                >
                  <Icon size={22} />
                </div>
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
