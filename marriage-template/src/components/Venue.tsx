import { motion } from "framer-motion";
import { MapPin, Navigation, Compass } from "lucide-react";

export default function Venue() {
  return (
    <section className="relative bg-[#0F1817] py-32 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#C4A47A] rounded-full blur-[200px] opacity-[0.05]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#C4A47A] rounded-full blur-[200px] opacity-[0.05]" />
      </div>

      {/* Decorative background text */}
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-editorial text-[25vw] text-[#C4A47A]/5 whitespace-nowrap pointer-events-none z-0">
        VENUE
      </h2>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
            viewport={{ once: true }}
            className="font-sans text-[10px] uppercase text-[#C4A47A] mb-4"
          >
            The Destination
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-editorial text-5xl md:text-8xl text-[#FDFBF7] drop-shadow-2xl"
          >
            Avlava Farm
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "150px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-px bg-gradient-to-r from-transparent via-[#C4A47A] to-transparent mx-auto mt-8"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side: Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-10"
          >
            <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#0b1412] to-[#0F1817] border border-[#C4A47A]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
              {/* Inner Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C4A47A] rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="p-4 rounded-full bg-[#C4A47A]/10 border border-[#C4A47A]/40 shadow-[0_0_15px_rgba(196,164,122,0.2)]">
                    <MapPin size={28} className="text-[#C4A47A]" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#FDFBF7]/50 mb-1">
                      Location
                    </p>
                    {/* Replaced Gujarati with elegant English */}
                    <h3 className="font-editorial text-3xl text-[#FDFBF7]">
                      Ceremony Venue
                    </h3>
                  </div>
                </div>

                <p className="font-serif text-2xl md:text-3xl text-[#FDFBF7]/90 leading-relaxed mb-2">
                  Silvarcote, Surat
                </p>
                <p className="font-sans text-sm text-[#FDFBF7]/50 mb-10 tracking-wider">
                  Gujarat, India
                </p>

                <a
                  href="https://maps.google.com/?q=Avlava+Farm+Silvarcote+Surat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 w-full md:w-auto border border-[#C4A47A] rounded-full text-[#C4A47A] font-sans text-xs uppercase tracking-[0.2em] hover:bg-[#C4A47A] hover:text-[#0F1817] transition-all duration-500 hover:shadow-[0_0_20px_rgba(196,164,122,0.4)]"
                >
                  <Navigation size={16} /> Get Directions
                </a>
              </div>
            </div>

            <div className="text-center lg:text-left px-4">
              <p className="font-serif italic text-2xl text-[#C4A47A]">
                "Aapshri Sada Padharo"
              </p>
              <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#FDFBF7]/40 mt-3">
                Your presence is our blessing
              </p>
            </div>
          </motion.div>

          {/* Right Side: Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-[#C4A47A]/30 rounded-2xl pointer-events-none transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute -inset-1 border border-[#C4A47A]/10 rounded-xl pointer-events-none" />

            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl bg-[#0b1412] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {/* Dark mode styled map embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.997511572378!2d72.8844!3d21.2049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEyJzE3LjYiTiA3MsKwNTMnMDMuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter:
                    "invert(90%) hue-rotate(180deg) grayscale(60%) contrast(110%)",
                  transform: "scale(1.05)", // Slight zoom to hide borders
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Map Overlay for blending */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(15,24,23,0.9)] bg-[#C4A47A]/5 mix-blend-overlay" />

              {/* Compass Icon overlay */}
              <div className="absolute top-6 right-6 pointer-events-none">
                <div className="p-3 bg-[#0F1817]/80 backdrop-blur-md rounded-full border border-[#C4A47A]/40 shadow-lg">
                  <Compass
                    size={24}
                    className="text-[#C4A47A] animate-[spin_10s_linear_infinite]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
