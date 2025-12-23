"use client";

import { useEffect, useState } from "react";
import {
  Home,
  Folder,
  FileText,
  Mail,
  BookOpenText,
  Boxes,
  DraftingCompass,
  Swords,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const items = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: BookOpenText },
  { id: "skills", label: "Skills", icon: Swords },
  { id: "tools", label: "Tools", icon: DraftingCompass },
  { id: "projects", label: "Projects", icon: Boxes },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function DockNavbar() {
  const [active, setActive] = useState("hero");

  /* ================= SCROLL OBSERVER ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]">
      <nav
        className="
          flex items-center gap-7 px-4 py-3
          rounded-full
          bg-black/40 backdrop-blur-xl
          border border-white/10
          shadow-[0_0_30px_rgba(0,255,136,0.15)]
        "
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative group"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={clsx(
                  "flex items-center gap-2 px-3 py-2 rounded-full",
                  isActive
                    ? "bg-emerald-400 text-black shadow-lg"
                    : "text-white/60 hover:text-white"
                )}
              >
                <Icon size={27} />

                {/* Label expands only when active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.05 }}
                      className="overflow-hidden whitespace-nowrap text-sm font-medium"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Hover tooltip (non-active items) */}
              {!isActive && (
                <span
                  className="
                    absolute -top-9 left-1/2 -translate-x-1/2
                    px-3 py-1 rounded-md text-xs
                    bg-black/80 text-white
                    opacity-0 group-hover:opacity-100
                    transition pointer-events-none
                  "
                >
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
