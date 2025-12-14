export default function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-grad-gold bg-clip-text text-transparent select-none">
      {children}
    </span>
  );
}
