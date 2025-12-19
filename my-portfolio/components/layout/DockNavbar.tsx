"use client";

import { useEffect, useState } from "react";
import { Home, Folder, FileText, Mail, BookOpenText, Boxes, DraftingCompass, Swords  } from "lucide-react";
import clsx from "clsx";

const items = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: BookOpenText  },
  { id: "skills", label: "Skills", icon: Swords },
  { id: "tools", label: "Tools", icon: DraftingCompass },
  { id: "projects", label: "Projects", icon: Boxes  },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "contact", label: "Contact", icon: Mail }
];

export default function DockNavbar() {
  const [active, setActive] = useState("hero");

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
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]">
      <nav className="flex gap-4 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 shadow-soft">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={clsx(
                "relative group flex items-center justify-center w-12 h-12 rounded-xl transition-all",
                isActive
                  ? "bg-white text-black scale-110 shadow-md"
                  : "text-white/60 hover:text-white hover:scale-110"
              )}
            >
              {/* Tooltip */}
              <span className="absolute -top-9 px-3 py-1 rounded-md text-xs bg-black/80 text-white opacity-0 group-hover:opacity-100 transition pointer-events-none">
                {item.label}
              </span>

              <Icon size={22} />
            </button>
          );
        })}
      </nav>
    </div>
  );
}
