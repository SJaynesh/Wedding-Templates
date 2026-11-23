import { motion } from "framer-motion";
import { wedding } from "../data/weddingData";

export default function DressCode() {
  return (
    <section className="relative bg-[#0b1412] py-32 overflow-hidden">
      {/* Decorative background text */}
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-editorial text-[20vw] text-[#C4A47A]/5 whitespace-nowrap pointer-events-none z-0">
        COLORS
      </h2>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#C4A47A] mb-4"
          >
            What to Wear
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-editorial text-5xl md:text-7xl text-[#FDFBF7]"
          >
            Dress Code
          </motion.h2>
        </div>

        {/* Dress Code Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wedding.dressCode.map((dc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative p-8 rounded-2xl bg-[#0F1817] border border-[#C4A47A]/20 hover:border-[#C4A47A]/50 transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Card Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#C4A47A] rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

              {/* Color Circle */}
              <div className="relative mb-6">
                <div
                  className="w-20 h-20 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: dc.colorHex }}
                />
                {/* Inner Ring */}
                <div className="absolute inset-2 rounded-full border border-white/20" />
              </div>

              {/* Text Content */}
              <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#C4A47A] mb-2">
                {dc.event}
              </p>
              <h3 className="font-editorial text-2xl text-[#FDFBF7] mb-3">
                {dc.colorName}
              </h3>
              <p className="font-serif italic text-sm text-[#FDFBF7]/50">
                {dc.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
