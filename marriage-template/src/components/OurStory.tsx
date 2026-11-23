import { motion } from "framer-motion";
import { wedding } from "../data/weddingData";

export default function OurStory() {
  return (
    <section className="relative bg-white px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="font-sans text-xs uppercase tracking-widest2 text-gold">
            Our Journey
          </p>
          <h2 className="mt-4 font-royal text-4xl text-wine md:text-5xl uppercase tracking-wider">
            How It Began
          </h2>
          <div className="ornament-divider mt-6">
            <span className="text-gold">❖</span>
          </div>
        </div>

        <div className="relative mt-24">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold to-transparent md:block" />

          {wedding.story.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative mb-20 flex flex-col gap-4 md:mb-32 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-16 md:text-right" : "md:ml-auto md:pl-16"
              }`}
            >
              {/* Gold Diamond Marker */}
              <div
                className={`absolute top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-gold bg-white md:block ${
                  i % 2 === 0 ? "right-[-8px]" : "left-[-8px]"
                }`}
              />

              <span className="font-script text-3xl text-gold">
                {item.year}
              </span>
              <h3 className="font-royal text-2xl font-semibold text-wine">
                {item.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-wine/70">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
