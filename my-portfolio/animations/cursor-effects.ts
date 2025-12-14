// animations/cursor-effects.ts

export const addCursorClass = (className: string) => {
  const cursor = document.getElementById("custom-cursor");
  if (cursor) cursor.classList.add(className);
};

export const removeCursorClass = (className: string) => {
  const cursor = document.getElementById("custom-cursor");
  if (cursor) cursor.classList.remove(className);
};
