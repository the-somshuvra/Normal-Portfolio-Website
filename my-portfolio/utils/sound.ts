export function playSound(src: string) {
  const audio = new Audio(src);
  audio.volume = 0.15;
  audio.play().catch(() => {});
}
