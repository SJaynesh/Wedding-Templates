import { motion } from "framer-motion";
import { wedding } from "../data/weddingData";
import { Heart } from "lucide-react";

export default function Families() {
  return (
    <section className="relative bg-[#0F1817] py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-[#C4A47A] rounded-full blur-[250px] opacity-[0.03]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 rounded-full bg-[#C4A47A]/10 mb-6"
          >
            <Heart size={20} className="text-[#C4A47A]" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#C4A47A] mb-4"
          >
            With the blessings of
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-editorial text-5xl md:text-7xl text-[#FDFBF7]"
          >
            Our Families
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
          {/* Bride's Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:border-r border-[#C4A47A]/20 md:pr-16 flex flex-col items-center md:items-end text-center md:text-right"
          >
            <h3 className="font-serif italic text-3xl text-[#C4A47A] mb-8">
              The Bride's Side
            </h3>
            <div className="space-y-8">
              {wedding.brideFamily.map((fam, i) => (
                <div key={i}>
                  <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#FDFBF7]/40 mb-2">
                    {fam.relation}
                  </p>
                  {fam.names.map((name, j) => (
                    <p
                      key={j}
                      className="font-serif text-lg text-[#FDFBF7] mb-1"
                    >
                      {name}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ampersand Divider for Mobile */}
          <div className="md:hidden flex justify-center py-4">
            <span className="font-serif italic text-4xl text-[#C4A47A]/50">
              &
            </span>
          </div>

          {/* Groom's Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:pl-16 flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h3 className="font-serif italic text-3xl text-[#C4A47A] mb-8">
              The Groom's Side
            </h3>
            <div className="space-y-8">
              {wedding.groomFamily.map((fam, i) => (
                <div key={i}>
                  <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#FDFBF7]/40 mb-2">
                    {fam.relation}
                  </p>
                  {fam.names.map((name, j) => (
                    <p
                      key={j}
                      className="font-serif text-lg text-[#FDFBF7] mb-1"
                    >
                      {name}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C4A47A] to-transparent mx-auto mb-8" />
          <p className="font-serif italic text-xl text-[#FDFBF7]/70 max-w-2xl mx-auto">
            "A union of two souls is a union of two families. We are overjoyed
            to celebrate this new beginning with all of you."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
