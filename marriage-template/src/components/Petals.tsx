import { useMemo } from "react";

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export default function Petals() {
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 12 + Math.random() * 15,
        size: 2 + Math.random() * 4,
      })),
    [],
  );

  return (
    <>
      {particles.map((p) => (
        <span
          key={p.id}
          className="gold-dust"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </>
  );
}
