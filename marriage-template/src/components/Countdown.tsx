import { useEffect, useState } from "react";
import { wedding } from "../data/weddingData";
import type { CountdownValue } from "../types/wedding";

function diff(target: string): CountdownValue {
  const d = new Date(target).getTime() - Date.now();
  if (d <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(d / 86_400_000),
    hours: Math.floor((d / 3_600_000) % 24),
    minutes: Math.floor((d / 60_000) % 60),
    seconds: Math.floor((d / 1000) % 60),
  };
}

export default function Countdown() {
  const [t, setT] = useState<CountdownValue>(diff(wedding.date));

  useEffect(() => {
    const id = setInterval(() => setT(diff(wedding.date)), 1000);
    return () => clearInterval(id);
  }, []);

  const cells = [
    ["Days", t.days],
    ["Hours", t.hours],
    ["Mins", t.minutes],
    ["Secs", t.seconds],
  ];

  return (
    <div className="flex items-center justify-center gap-4 md:gap-8">
      {cells.map(([label, value], i) => (
        <div key={label} className="flex items-center">
          <div className="flex flex-col items-center min-w-[50px] md:min-w-[70px]">
            <div className="font-editorial text-2xl md:text-4xl text-[#FDFBF7]">
              {String(value).padStart(2, "0")}
            </div>
            <div className="mt-1 font-sans text-[8px] uppercase tracking-[0.2em] text-[#C4A47A]">
              {label}
            </div>
          </div>
          {i !== cells.length - 1 && (
            <div className="w-px h-8 md:h-10 bg-[#C4A47A]/30 ml-4 md:ml-8" />
          )}
        </div>
      ))}
    </div>
  );
}
