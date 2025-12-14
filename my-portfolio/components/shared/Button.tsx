"use client";

import { ReactNode } from "react";
import MagneticWrapper from "./MagneticWrapper";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className
}: ButtonProps) {
  const baseClasses =
    "px-6 py-3 rounded-xl font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-grad-gold text-black shadow-glow hover:opacity-90",
    outline:
      "border border-white/20 text-white hover:border-white/40 backdrop-blur-md"
  };

  const content = (
    <button
      onClick={onClick}
      data-hover
      className={clsx(baseClasses, variants[variant], className)}
    >
      {children}
    </button>
  );

  if (href) {
    return (
      <MagneticWrapper>
        <a href={href}>{content}</a>
      </MagneticWrapper>
    );
  }

  return <MagneticWrapper>{content}</MagneticWrapper>;
}
