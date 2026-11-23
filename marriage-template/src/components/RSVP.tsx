import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Heart } from "lucide-react";
import { wedding } from "../data/weddingData";

export default function RSVP() {
  const [sent, setSent] = useState<boolean>(false);
  const [attend, setAttend] = useState<"yes" | "no">("yes");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="relative bg-[#0F1817] min-h-screen flex items-center justify-center px-4 py-32 overflow-hidden">
      {/* Decorative Background Text */}
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-editorial text-[25vw] text-[#C4A47A]/5 whitespace-nowrap pointer-events-none z-0">
        RSVP
      </h2>

      {/* Ambient Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#C4A47A] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C4A47A] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#0b1412] to-[#0F1817] border border-[#C4A47A]/30 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden"
            >
              {/* Inner Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C4A47A] rounded-full blur-[100px] opacity-10 pointer-events-none" />

              {/* Header */}
              <div className="text-center mb-12 relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center justify-center p-3 rounded-full bg-[#C4A47A]/10 mb-4 border border-[#C4A47A]/20"
                >
                  <Heart size={20} className="text-[#C4A47A]" />
                </motion.div>
                <h2 className="font-editorial text-4xl md:text-5xl text-[#FDFBF7] mb-3">
                  Kindly Reply
                </h2>
                <p className="font-serif italic text-[#FDFBF7]/50 text-sm">
                  We would be honored to have you with us.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                {/* Name Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      required
                      type="text"
                      placeholder="First Name"
                      className="w-full bg-transparent border-b border-[#C4A47A]/30 pb-3 font-sans text-sm text-[#FDFBF7] placeholder:text-[#FDFBF7]/30 focus:outline-none transition-colors"
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C4A47A] transition-all duration-500 group-focus-within:w-full" />
                  </div>
                  <div className="relative group">
                    <input
                      required
                      type="text"
                      placeholder="Last Name"
                      className="w-full bg-transparent border-b border-[#C4A47A]/30 pb-3 font-sans text-sm text-[#FDFBF7] placeholder:text-[#FDFBF7]/30 focus:outline-none transition-colors"
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C4A47A] transition-all duration-500 group-focus-within:w-full" />
                  </div>
                </div>

                {/* Email */}
                <div className="relative group">
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-[#C4A47A]/30 pb-3 font-sans text-sm text-[#FDFBF7] placeholder:text-[#FDFBF7]/30 focus:outline-none transition-colors"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C4A47A] transition-all duration-500 group-focus-within:w-full" />
                </div>

                {/* Attendance Toggle */}
                <div className="pt-4">
                  <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#C4A47A] mb-5">
                    Will you attend?
                  </p>
                  <div className="flex flex-col md:flex-row gap-4">
                    <button
                      type="button"
                      onClick={() => setAttend("yes")}
                      className={`flex-1 py-4 px-6 rounded-xl border font-sans text-xs uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-3 ${
                        attend === "yes"
                          ? "bg-[#C4A47A] text-[#0F1817] border-[#C4A47A] shadow-[0_0_20px_rgba(196,164,122,0.3)]"
                          : "bg-transparent text-[#FDFBF7]/60 border-[#C4A47A]/20 hover:border-[#C4A47A]/50"
                      }`}
                    >
                      {attend === "yes" && <CheckCircle2 size={16} />}
                      Joyfully Accepts
                    </button>
                    <button
                      type="button"
                      onClick={() => setAttend("no")}
                      className={`flex-1 py-4 px-6 rounded-xl border font-sans text-xs uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-3 ${
                        attend === "no"
                          ? "bg-[#C4A47A] text-[#0F1817] border-[#C4A47A] shadow-[0_0_20px_rgba(196,164,122,0.3)]"
                          : "bg-transparent text-[#FDFBF7]/60 border-[#C4A47A]/20 hover:border-[#C4A47A]/50"
                      }`}
                    >
                      {attend === "no" && <CheckCircle2 size={16} />}
                      Regretfully Declines
                    </button>
                  </div>
                </div>

                {/* Message */}
                <div className="relative group pt-2">
                  <textarea
                    rows={3}
                    placeholder="A note for the couple (optional)"
                    className="w-full bg-transparent border-b border-[#C4A47A]/30 pb-3 font-sans text-sm text-[#FDFBF7] placeholder:text-[#FDFBF7]/30 focus:outline-none transition-colors resize-none"
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C4A47A] transition-all duration-500 group-focus-within:w-full" />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-xl bg-[#C4A47A] py-5 mt-6 shadow-[0_10px_30px_rgba(196,164,122,0.2)] transition-all duration-500 hover:shadow-[0_10px_40px_rgba(196,164,122,0.4)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#0F1817]">
                    Send Response{" "}
                    <Send
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center p-12 md:p-20 rounded-3xl bg-[#0b1412] border border-[#C4A47A]/30 shadow-[0_0_80px_rgba(196,164,122,0.1)] relative overflow-hidden"
            >
              {/* Success Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#C4A47A] rounded-full blur-[100px] opacity-20" />

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#C4A47A]/10 border border-[#C4A47A]/30 mb-8 relative z-10"
              >
                <CheckCircle2 size={40} className="text-[#C4A47A]" />
              </motion.div>

              <h2 className="font-editorial text-5xl md:text-6xl text-[#FDFBF7] mb-6 relative z-10">
                Thank You.
              </h2>
              <p className="font-serif italic text-lg text-[#FDFBF7]/60 max-w-md mx-auto relative z-10">
                Your response has been saved. We cannot wait to celebrate the
                beginning of our forever with you.
              </p>

              <div className="mt-12 relative z-10">
                <p className="font-script text-4xl text-[#C4A47A]">
                  {wedding.bride} & {wedding.groom}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
