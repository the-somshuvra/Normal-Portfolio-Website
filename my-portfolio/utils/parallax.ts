export function parallax(
  mouseX: number,
  mouseY: number,
  strength = 30
) {
  const x = (mouseX - window.innerWidth / 2) / strength;
  const y = (mouseY - window.innerHeight / 2) / strength;

  return {
    transform: `translate(${x}px, ${y}px)`
  };
}
