import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";
import { wedding } from "../data/weddingData";

export default function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Total panels = 1 (Intro) + 4 (Cards) + 1 (Outro) = 6
  // Hum active index ko scroll ke hisaab se change karenge
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.15) {
      setActiveIndex(null); // Intro
    } else if (latest >= 0.15 && latest < 0.3) {
      setActiveIndex(0); // Card 1
    } else if (latest >= 0.3 && latest < 0.45) {
      setActiveIndex(1); // Card 2
    } else if (latest >= 0.45 && latest < 0.6) {
      setActiveIndex(2); // Card 3
    } else if (latest >= 0.6 && latest < 0.75) {
      setActiveIndex(3); // Card 4
    } else {
      setActiveIndex(null); // Outro (To be continued...)
    }
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-82%"]);

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-[#0F1817]">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        {/* Massive Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="font-editorial text-[30vw] leading-none text-[#C4A47A]/5 whitespace-nowrap">
            OUR STORY
          </h2>
        </div>

        {/* Horizontal Scrolling Content */}
        <motion.div
          style={{ x }}
          className="flex w-max gap-10 md:gap-24 px-6 md:px-32 relative z-10 items-center"
        >
          {/* Intro Panel (0) */}
          <div className="w-[85vw] md:w-[450px] shrink-0 flex flex-col justify-center min-h-[65vh]">
            <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#C4A47A] mb-6">
              The Journey
            </p>
            <h2 className="font-editorial text-5xl md:text-7xl text-[#FDFBF7] leading-tight mb-8">
              From the first
              <br />
              hello to
              <br />
              <span className="italic text-[#C4A47A]">forever.</span>
            </h2>
            <p className="font-serif italic text-[#FDFBF7]/60 max-w-sm">
              Scroll to move through time. A collection of moments that brought
              us here.
            </p>
          </div>

          {/* Story Cards (1 to 4) */}
          {wedding.story.map((item, i) => {
            const isActive = activeIndex === i;

            return (
              <div
                key={i}
                className={`w-[85vw] md:w-[450px] shrink-0 flex flex-col justify-center min-h-[65vh] transition-all duration-1000 ease-out ${
                  isActive ? "opacity-100 scale-100" : "opacity-30 scale-95"
                }`}
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                  {/* Golden Frame */}
                  <div
                    className={`absolute inset-0 border z-20 pointer-events-none transition-all duration-1000 ${
                      isActive
                        ? "border-[#C4A47A]/90 m-2"
                        : "border-[#C4A47A]/20 m-5"
                    }`}
                  />

                  {/* Image - Grayscale to Color */}
                  <img
                    src={wedding.gallery[i % wedding.gallery.length]}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-all duration-1000 ${
                      isActive ? "grayscale-0 scale-105" : "grayscale"
                    }`}
                  />

                  {/* Number Badge */}
                  <div
                    className={`absolute top-6 left-6 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-[#C4A47A] backdrop-blur-md transition-all duration-700 ${
                      isActive
                        ? "bg-[#0F1817]/80 opacity-100"
                        : "bg-[#0F1817]/20 opacity-50"
                    }`}
                  >
                    <span
                      className={`font-sans text-xs font-bold transition-colors duration-700 ${
                        isActive ? "text-[#C4A47A]" : "text-[#C4A47A]/50"
                      }`}
                    >
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="mt-8 relative z-10 flex flex-col w-full px-2">
                  <h3
                    className={`font-editorial text-3xl md:text-4xl mb-4 transition-colors duration-1000 ${
                      isActive ? "text-[#C4A47A]" : "text-[#C4A47A]/30"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`font-serif italic text-base md:text-lg leading-relaxed transition-colors duration-1000 ${
                      isActive ? "text-[#FDFBF7]/90" : "text-[#FDFBF7]/30"
                    }`}
                  >
                    "{item.text}"
                  </p>
                </div>
              </div>
            );
          })}

          {/* Outro Panel (To be continued...) */}
          <div
            className={`w-[85vw] md:w-[450px] shrink-0 flex flex-col items-center justify-center min-h-[65vh] transition-all duration-1000 ${
              activeIndex === null && scrollYProgress.get() > 0.75
                ? "opacity-100 scale-100"
                : "opacity-30 scale-95"
            }`}
          >
            <p className="font-editorial text-4xl md:text-6xl text-[#C4A47A] text-center leading-tight">
              To be
              <br />
              continued...
            </p>
          </div>
        </motion.div>

        {/* Horizontal Progress Bar */}
        <div className="absolute bottom-8 left-0 w-full px-6 md:px-32 z-20">
          <div className="h-[2px] w-full bg-white/10 relative">
            <motion.div
              style={{ scaleX: scrollYProgress, originX: 0 }}
              className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#C4A47A] to-[#C4A47A]/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
