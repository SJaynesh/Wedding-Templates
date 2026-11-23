import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, CalendarDays, ChevronDown } from "lucide-react";
import Countdown from "./Countdown";
import { wedding } from "../data/weddingData";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect controlled
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] w-full flex-col overflow-hidden bg-[#0F1817]"
    >
      {/* 1. Fullscreen Video Background - Oversized to prevent any gaps */}
      <motion.div
        style={{ y: yBg }}
        className="absolute -top-[25%] left-0 z-0 w-full h-[150%]"
      >
        <video
          src="prewedding.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80"
          className="h-full w-full object-cover"
        />

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1817] via-[#0F1817]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1817]/40 via-transparent to-transparent" />
      </motion.div>

      {/* 2. Content Wrapper */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full w-full flex-col px-6 py-12 md:px-12 md:py-16"
      >
        {/* Top Spacer */}
        <div className="flex-1" />

        {/* Center Section: Names */}
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-sans text-[9px] md:text-xs uppercase tracking-[0.5em] text-[#C4A47A]"
          >
            The Wedding Celebration Of
          </motion.p>

          <div className="mt-8 flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-editorial text-6xl leading-none text-[#FDFBF7] md:text-[9rem] drop-shadow-2xl"
            >
              {wedding.bride}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="my-2 md:my-4"
            >
              <span className="font-serif italic text-3xl md:text-5xl text-[#C4A47A]">
                &
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-editorial text-6xl leading-none text-[#FDFBF7] md:text-[9rem] drop-shadow-2xl"
            >
              {wedding.groom}
            </motion.h1>
          </div>
        </div>

        {/* Bottom Spacer */}
        <div className="flex-1" />

        {/* Bottom Section: Countdown & Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex w-full flex-col items-center gap-8"
        >
          {/* Countdown Timer */}
          <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-black/20 px-6 py-5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] md:max-w-md">
            <Countdown />
          </div>

          {/* Date & Venue */}
          <div className="flex flex-col items-center gap-3 font-sans text-[10px] uppercase tracking-[0.2em] text-[#FDFBF7]/80 md:flex-row md:gap-6 md:text-xs">
            <span className="flex items-center gap-2">
              <CalendarDays size={14} className="text-[#C4A47A]" />{" "}
              {wedding.dateLabel}
            </span>
            <span className="hidden h-3 w-px bg-[#C4A47A]/40 md:block" />
            <span className="flex items-center gap-2 text-center">
              <MapPin size={14} className="text-[#C4A47A]" /> {wedding.venue}
            </span>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex cursor-pointer flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity"
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-[#C4A47A]">
              Scroll
            </span>
            <ChevronDown size={14} className="text-[#C4A47A]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
