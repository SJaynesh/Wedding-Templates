import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Clock, MapPin } from "lucide-react"; // Map hata diya hai
import { wedding } from "../data/weddingData";

const EventCard = ({ ev, i, progress, range, targetScale }: any) => {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);
  const rotateX = useTransform(progress, range, [10, 0]);
  const yOffset = useTransform(progress, range, [50, 0]);

  return (
    <div
      ref={container}
      className="h-[85vh] md:h-[75vh] flex items-center justify-center sticky top-[8vh] md:top-[12vh]"
      style={{ perspective: "1200px", zIndex: i }}
    >
      <motion.div
        style={{ scale, rotateX, y: yOffset }}
        className="relative w-full max-w-5xl rounded-2xl bg-[#0b1412] shadow-[0_-10px_40px_rgba(0,0,0,0.8)] border border-[#C4A47A]/40 overflow-hidden origin-top transform-gpu flex flex-col md:flex-row h-full md:h-[500px]"
      >
        {/* Left Side: Image */}
        <div className="relative w-full md:w-[45%] h-64 md:h-full overflow-hidden">
          <img
            src={ev.image}
            alt={ev.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0b1412] via-[#0b1412]/40 to-transparent" />

          <div className="absolute top-4 left-4 md:top-6 md:left-6 text-6xl md:text-8xl font-editorial text-[#C4A47A] opacity-80 mix-blend-overlay">
            0{i + 1}
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="relative w-full md:w-[55%] p-8 md:p-12 flex flex-col justify-center bg-[#0b1412]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#C4A47A] rounded-full blur-[120px] opacity-10 pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full justify-center">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="px-3 py-1.5 rounded-full border border-[#C4A47A]/40 bg-[#C4A47A]/10">
                <span className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#C4A47A] font-semibold">
                  {ev.day}, {ev.date}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#FDFBF7]/80 px-2">
                <Clock size={14} className="text-[#C4A47A]" />
                <span className="font-sans text-[10px] md:text-xs tracking-widest uppercase">
                  {ev.time}
                </span>
              </div>
            </div>

            <h3 className="font-editorial text-4xl md:text-5xl lg:text-6xl text-[#FDFBF7] mb-8 leading-tight">
              {ev.name}
            </h3>

            <div className="space-y-6 mt-auto">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-full bg-[#C4A47A]/10 border border-[#C4A47A]/30 shrink-0">
                  <MapPin size={18} className="text-[#C4A47A]" />
                </div>
                <div>
                  <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#FDFBF7]/50 mb-1">
                    Venue
                  </p>
                  <p className="font-serif italic text-lg md:text-xl text-[#FDFBF7]">
                    {ev.venue}
                  </p>
                </div>
              </div>

              {ev.note && (
                <div className="border-l-2 border-[#C4A47A]/40 pl-4 md:pl-6 mt-4">
                  <p className="font-sans text-xs md:text-sm tracking-wide text-[#FDFBF7]/70 leading-relaxed">
                    {ev.note}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Events() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="events"
      ref={containerRef}
      className="relative bg-[#0F1817] overflow-clip"
    >
      <motion.div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[800px] bg-[#C4A47A] rounded-full blur-[200px] opacity-[0.05] pointer-events-none"
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "150%"]),
          scale: useTransform(scrollYProgress, [0, 1], [0.5, 1.2]),
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 pt-32 pb-24">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-32">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-sans text-[10px] uppercase text-[#C4A47A]"
          >
            The Celebrations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-editorial text-5xl md:text-8xl text-[#FDFBF7] drop-shadow-2xl"
          >
            Manglik Prasango
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "150px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-[#C4A47A] to-transparent mx-auto mt-10"
          />
        </div>

        {/* Events Stacking Cards */}
        <div className="relative pb-[20vh]">
          {wedding.events.map((ev, i) => {
            const targetScale = 1 - (wedding.events.length - i) * 0.05;
            return (
              <EventCard
                key={i}
                i={i}
                ev={ev}
                progress={scrollYProgress}
                range={[i * (1 / wedding.events.length), 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>

        {/* NEW: Elegant Quote Footer (Replaced Location) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 pb-12 text-center flex flex-col items-center gap-6 relative z-20"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C4A47A] to-transparent" />

          <h4 className="font-editorial text-3xl md:text-5xl text-[#FDFBF7] max-w-4xl leading-tight mt-4 px-4">
            “Two souls, with but a single thought,{" "}
            <br className="hidden md:block" /> two hearts that beat as one.”
          </h4>

          <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#C4A47A] mt-6">
            The Beginning of Forever
          </p>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C4A47A] to-transparent mt-4" />
        </motion.div>
      </div>
    </section>
  );
}
