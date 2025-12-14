"use client";

import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Smooth lag cursor
    const followCursor = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";
      requestAnimationFrame(followCursor);
    };
    followCursor();

    // Track actual mouse
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Hover effects
    const hoverables = document.querySelectorAll(
      "a, button, [data-hover], input, textarea"
    );

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-hover");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-hover");
      });
    });

    // Click ripple
    window.addEventListener("mousedown", () => {
      cursor.classList.add("cursor-click");
    });
    window.addEventListener("mouseup", () => {
      cursor.classList.remove("cursor-click");
    });

    return () => {
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
}
