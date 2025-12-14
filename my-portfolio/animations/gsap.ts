// animations/gsap.ts

import gsap from "gsap";

export const fadeUpGsap = (
  element: HTMLElement,
  delay = 0
) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: "power3.out"
    }
  );
};

export const scaleInGsap = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    { opacity: 0, scale: 0.95 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "power3.out"
    }
  );
};
