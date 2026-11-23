import { motion } from "framer-motion";
import { useState } from "react";
import sealImage from "../assets/seal.png";

interface Props {
  onOpen: () => void;
  onPlayAudio: () => void;
}

export default function OpeningScreen({ onOpen, onPlayAudio }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);

    onPlayAudio();

    const sequence = async () => {
      await new Promise((r) => setTimeout(r, 600));
      await new Promise((r) => setTimeout(r, 3400));
      onOpen();
    };

    sequence();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#E8E4DB] overflow-visible"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(8px)" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent opacity-60" />

      {/* Envelope Wrapper - Mobile par taller (1.15/1), desktop par wide (1.4/1) */}
      <motion.div
        className="perspective-container relative w-[90vw] max-w-[600px] aspect-[1.15/1] md:aspect-[1.4/1]"
        animate={isOpen ? { y: "12vh" } : { y: 0 }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* 1. Envelope Back Panel */}
        <div className="absolute inset-0 paper-texture rounded-sm shadow-2xl" />

        {/* 2. The Letter */}
        <motion.div
          className="absolute left-[4%] right-[4%] top-[4%] bottom-[4%] bg-[#FDFBF7] rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-10 flex flex-col items-center justify-center border border-[#e0dcd3]"
          initial={{ y: 0 }}
          animate={
            isOpen
              ? { y: "-55%", scale: 1.02, zIndex: 15 }
              : { y: 0, scale: 1, zIndex: 10 }
          }
          transition={{ duration: 2.2, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />

          {/* Inner Content with py-8 for mobile top/bottom spacing */}
          <div className="relative z-10 text-center px-6 md:px-8 flex flex-col items-center justify-center w-full h-full py-8 md:py-0">
            <p className="font-sans text-[9px] md:text-[10px] tracking-[0.25em] md:tracking-[0.3em] uppercase text-[#C46D4E] mb-4 md:mb-6">
              Together with their families
            </p>
            <h1 className="font-editorial text-5xl md:text-6xl text-[#1C2C2B] leading-tight">
              Ishani <br />
              <span className="font-serif italic text-[#C4A47A] text-3xl md:text-4xl block my-1">
                &
              </span>
              Aarav
            </h1>
            <div className="w-12 h-px bg-[#C4A47A] mx-auto my-4 md:my-6" />
            <p className="font-serif italic text-[11px] md:text-sm text-[#1C2C2B]/70">
              Request the pleasure of your company
            </p>
          </div>
        </motion.div>

        {/* 3. Envelope Front Pocket */}
        <div
          className="absolute inset-0 z-20 rounded-sm pocket-gradient"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 25%, 50% 65%, 0 25%)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/[0.05] via-transparent to-black/[0.05]" />
          <div className="absolute top-[25%] left-0 w-full h-[40%] bg-gradient-to-b from-transparent to-black/[0.03]" />
        </div>

        {/* 4. Top Flap */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[75%] origin-top z-30"
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
          animate={
            isOpen ? { rotateX: -180, zIndex: 5 } : { rotateX: 0, zIndex: 30 }
          }
          transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
        >
          <div className="w-full h-full flap-gradient relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/[0.05] to-transparent" />
          </div>
          <div
            className="absolute inset-0 bg-[#EBE5D9] shadow-inner"
            style={{
              transform: "rotateX(180deg)",
              backfaceVisibility: "hidden",
            }}
          />
        </motion.div>

        {/* 5. Wax Seal */}
        <div
          className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-28 h-28 md:w-36 md:h-36 cursor-pointer"
          onClick={handleOpen}
        >
          <motion.img
            src={sealImage}
            alt="Seal Left"
            className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
            style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
            animate={
              isOpen
                ? { x: "-40%", y: "60%", rotate: -35, opacity: 0 }
                : { x: 0, y: 0, rotate: 0, opacity: 1 }
            }
            transition={{ duration: 1.0, ease: "easeIn" }}
          />

          <motion.img
            src={sealImage}
            alt="Seal Right"
            className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
            style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}
            animate={
              isOpen
                ? { x: "40%", y: "60%", rotate: 35, opacity: 0 }
                : { x: 0, y: 0, rotate: 0, opacity: 1 }
            }
            transition={{ duration: 1.0, ease: "easeIn" }}
          />
        </div>
      </motion.div>

      {/* Instruction Text */}
      {!isOpen && (
        <motion.p
          className="absolute bottom-16 md:bottom-24 font-serif italic text-lg md:text-xl text-[#C46D4E] tracking-wide"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, 5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Tap the seal to open
        </motion.p>
      )}
    </motion.div>
  );
}
