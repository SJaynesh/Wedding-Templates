import { motion } from "framer-motion";
import { wedding } from "../data/weddingData";
import { Camera, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative min-h-[90vh] flex flex-col justify-between bg-[#0F1817] overflow-hidden pt-32">
      {/* Background Image Layer with Deep Cinematic Vignette */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={wedding.gallery[4]}
          alt="Couple"
          className="w-full h-full object-cover object-top"
        />
        {/* Deep blending gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1817] via-[#0F1817]/70 to-[#0F1817]" />
        <div className="absolute inset-0 bg-[#0F1817]/20 mix-blend-overlay" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Top Minimal Monogram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#C4A47A] to-transparent mb-8" />
          <p className="font-sans text-[10px] uppercase tracking-[0.6em] text-[#C4A47A] mb-4">
            Save the Date
          </p>
          <h2 className="font-editorial text-4xl md:text-6xl text-[#FDFBF7]">
            {wedding.dateLabel}
          </h2>
          <p className="font-serif italic text-lg text-[#FDFBF7]/60 mt-2">
            {wedding.venue}
          </p>
        </motion.div>

        {/* The Main Names Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="my-24 relative"
        >
          {/* Subtle Glow behind names */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-[#C4A47A] blur-[100px] opacity-20 pointer-events-none" />

          <h1 className="relative font-editorial text-6xl md:text-[8rem] text-[#FDFBF7] leading-none drop-shadow-2xl">
            {wedding.bride}
            <span className="font-serif italic text-[#C4A47A] mx-4 md:mx-8 text-4xl md:text-7xl">
              &
            </span>
            {wedding.groom}
          </h1>
        </motion.div>

        {/* Middle Section: Hashtag & Share */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-32"
        >
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#C4A47A]">
            {wedding.hashtag}
          </p>

          <div className="hidden md:block w-1 h-1 rounded-full bg-[#C4A47A]/50" />

          <a
            href="#"
            className="group flex items-center gap-3 text-[#FDFBF7]/60 hover:text-[#C4A47A] transition-colors duration-300"
          >
            <Camera size={16} />
            <span className="font-sans text-[10px] tracking-widest uppercase border-b border-transparent group-hover:border-[#C4A47A] pb-0.5 transition-colors">
              Share your moments
            </span>
          </a>
        </motion.div>

        {/* Bottom Section: Clean Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full flex flex-col items-center gap-6 pb-10"
        >
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C4A47A]/20 to-transparent" />

          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#FDFBF7]/40">
                Made with
              </span>
              <Heart size={10} className="text-[#C4A47A]" fill="#C4A47A" />
              <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#FDFBF7]/40">
                for our forever
              </span>
            </div>

            {/* Client-friendly clean copyright */}
            <p className="font-sans text-[8px] uppercase tracking-[0.2em] text-[#FDFBF7]/20 mt-4">
              © {new Date().getFullYear()} {wedding.bride} & {wedding.groom}.
              All Rights Reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
