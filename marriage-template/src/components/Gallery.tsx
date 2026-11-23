import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { wedding } from "../data/weddingData";
import { Sparkles, Unlock, Gift, Camera, Aperture } from "lucide-react";

// --- Falling Glitter Component ---
const FallingGlitter = ({
  delay,
  left,
  duration,
  size,
  drift,
}: {
  delay: number;
  left: string;
  duration: number;
  size: number;
  drift: number;
}) => (
  <motion.div
    initial={{ y: "-10vh", opacity: 0, rotate: 0 }}
    animate={{
      y: "110vh",
      opacity: [0, 1, 1, 0],
      rotate: 360,
      x: [0, drift, drift * 2],
    }}
    transition={{ duration, delay, ease: "linear" }}
    className="fixed z-[100] pointer-events-none top-0"
    style={{ left }}
  >
    <Sparkles size={size} className="text-[#C4A47A]" fill="#C4A47A" />
  </motion.div>
);

// --- Premium Gallery Item Component ---
const GalleryItem = ({
  src,
  index,
  isTall = false,
  isWide = false,
}: {
  src: string;
  index: number;
  isTall?: boolean;
  isWide?: boolean;
}) => {
  const ref = useRef(null);

  // Highlight when in center of screen
  const isInView = useInView(ref, { margin: "-15% 0px -15% 0px", once: false });

  // Parallax effect for the image inside the frame
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden rounded-sm transition-all duration-700 group cursor-pointer w-full ${
        isInView
          ? "scale-[1.02] shadow-[0_20px_50px_rgba(196,164,122,0.15)] z-10"
          : "scale-100 opacity-60 z-0"
      } ${isTall ? "aspect-[3/4] md:aspect-[2/3]" : isWide ? "aspect-[4/3] md:aspect-[16/9]" : "aspect-square md:aspect-[4/5]"}`}
    >
      {/* Golden Inner Border */}
      <div
        className={`absolute inset-0 border-2 z-20 pointer-events-none transition-all duration-700 rounded-sm ${
          isInView ? "border-[#C4A47A]/80 m-3" : "border-transparent m-0"
        }`}
      />

      {/* Parallax Image */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        <motion.img
          style={{ y }}
          src={src}
          alt={`Memory ${index + 1}`}
          className={`w-full h-[120%] object-cover absolute top-[-10%] left-0 transition-all duration-1000 ${
            isInView ? "grayscale-0" : "grayscale scale-100"
          }`}
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700 ${
          isInView ? "opacity-100" : "opacity-40"
        }`}
      />

      {/* Text Content (Slides up when active) */}
      <div
        className={`absolute bottom-0 left-0 w-full p-6 z-30 flex justify-between items-end transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div>
          <p className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#C4A47A] mb-1">
            The Memories
          </p>
          <h3 className="font-editorial text-3xl text-[#FDFBF7]">
            0{index + 1}
          </h3>
        </div>
        <div className="bg-black/40 backdrop-blur-md p-2.5 rounded-full border border-white/20">
          <Aperture size={18} className="text-[#C4A47A]" />
        </div>
      </div>
    </motion.div>
  );
};

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isRevealed, setIsRevealed] = useState(false);
  const [glitter, setGlitter] = useState<
    {
      id: number;
      left: string;
      delay: number;
      duration: number;
      size: number;
      drift: number;
    }[]
  >([]);

  const triggerReveal = useCallback(() => {
    if (isRevealed) return;
    setIsRevealed(true);

    const newGlitter = Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 1.5,
      duration: 2 + Math.random() * 2.5,
      size: 10 + Math.random() * 20,
      drift: (Math.random() - 0.5) * 150,
    }));
    setGlitter(newGlitter);

    setTimeout(() => setGlitter([]), 6000);
  }, [isRevealed]);

  // --- CANVAS SCRATCH LOGIC ---
  useEffect(() => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isDrawing = false;
    let lastPoint: { x: number; y: number } | null = null;

    const drawInitialCard = () => {
      const w = canvas.width;
      const h = canvas.height;

      const baseFontSize = Math.max(w * 0.06, 20);
      const subFontSize = Math.max(w * 0.02, 10);
      const borderOffset = Math.max(w * 0.05, 20);

      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, "#C4A47A");
      grad.addColorStop(0.3, "#F3E5AB");
      grad.addColorStop(0.5, "#D4AF37");
      grad.addColorStop(0.7, "#F3E5AB");
      grad.addColorStop(1, "#8B6508");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.lineWidth = 1;
      for (let i = -h; i < w + h; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i + h, h);
        ctx.stroke();
      }

      ctx.strokeStyle = "rgba(58, 37, 18, 0.4)";
      ctx.lineWidth = 2;
      ctx.strokeRect(
        borderOffset,
        borderOffset,
        w - borderOffset * 2,
        h - borderOffset * 2,
      );

      ctx.strokeStyle = "rgba(58, 37, 18, 0.15)";
      ctx.lineWidth = 1;
      ctx.strokeRect(
        borderOffset + 6,
        borderOffset + 6,
        w - (borderOffset + 6) * 2,
        h - (borderOffset + 6) * 2,
      );

      ctx.fillStyle = "#3A2512";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.font = `italic ${baseFontSize}px "Playfair Display", serif`;
      ctx.fillText("Scratch to Reveal", w / 2, h / 2 - baseFontSize * 0.3);

      ctx.font = `${subFontSize}px "Montserrat", sans-serif`;
      ctx.fillStyle = "rgba(58, 37, 18, 0.7)";
      ctx.fillText("THE MEMORIES", w / 2, h / 2 + baseFontSize * 0.8);

      ctx.strokeStyle = "#3A2512";
      ctx.lineWidth = 2;
      const s = Math.max(w * 0.03, 10);

      ctx.beginPath();
      ctx.moveTo(borderOffset + s, borderOffset + s * 1.5);
      ctx.lineTo(borderOffset + s, borderOffset + s);
      ctx.lineTo(borderOffset + s * 1.5, borderOffset + s);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(w - borderOffset - s, borderOffset + s * 1.5);
      ctx.lineTo(w - borderOffset - s, borderOffset + s);
      ctx.lineTo(w - borderOffset - s * 1.5, borderOffset + s);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(borderOffset + s, h - borderOffset - s * 1.5);
      ctx.lineTo(borderOffset + s, h - borderOffset - s);
      ctx.lineTo(borderOffset + s * 1.5, h - borderOffset - s);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(w - borderOffset - s, h - borderOffset - s * 1.5);
      ctx.lineTo(w - borderOffset - s, h - borderOffset - s);
      ctx.lineTo(w - borderOffset - s * 1.5, h - borderOffset - s);
      ctx.stroke();
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          canvas.width = width;
          canvas.height = height;
          drawInitialCard();
        }
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    const getPointerPos = (e: MouseEvent | Touch) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    };

    const scratch = (x: number, y: number) => {
      if (!isDrawing) return;
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.strokeStyle = "rgba(0,0,0,1)";
      ctx.beginPath();
      ctx.arc(x, y, 45, 0, Math.PI * 2);
      ctx.fill();
      if (lastPoint) {
        ctx.lineWidth = 90;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(lastPoint.x, lastPoint.y);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
      lastPoint = { x, y };
    };

    const checkPercentage = () => {
      try {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let cleared = 0;
        for (let i = 3; i < imageData.data.length; i += 32) {
          if (imageData.data[i] === 0) cleared++;
        }
        const total = imageData.data.length / 32;
        if (cleared / total > 0.35) {
          triggerReveal();
        }
      } catch (err) {
        console.error(err);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDrawing = true;
      lastPoint = getPointerPos(e);
      scratch(lastPoint.x, lastPoint.y);
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDrawing) return;
      const pos = getPointerPos(e);
      scratch(pos.x, pos.y);
    };
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      isDrawing = true;
      lastPoint = getPointerPos(e.touches[0]);
      scratch(lastPoint.x, lastPoint.y);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDrawing || e.touches.length === 0) return;
      if (e.cancelable) e.preventDefault();
      const pos = getPointerPos(e.touches[0]);
      scratch(pos.x, pos.y);
    };
    const handleUp = () => {
      if (!isDrawing) return;
      isDrawing = false;
      lastPoint = null;
      checkPercentage();
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleUp);
    canvas.addEventListener("touchstart", handleTouchStart, { passive: false });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleUp);

    return () => {
      resizeObserver.disconnect();
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleUp);
    };
  }, [isRevealed, triggerReveal]);

  return (
    <section
      id="gallery"
      className="relative bg-[#0F1817] min-h-screen flex flex-col justify-center py-24 px-4 md:px-12 overflow-hidden"
    >
      <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Header */}
        {!isRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#C4A47A]/10 mb-4 border border-[#C4A47A]/20">
              <Gift size={20} className="text-[#C4A47A]" />
            </div>
            <h2 className="font-editorial text-4xl md:text-6xl text-[#FDFBF7]">
              A Special Gift Awaits
            </h2>
          </motion.div>
        )}

        {/* Coupon Card Container */}
        <motion.div
          ref={containerRef}
          animate={{
            height: isRevealed ? "75vh" : "50vh",
            width: isRevealed ? "100%" : "85%",
            maxWidth: isRevealed ? "700px" : "100%",
          }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#C4A47A]/40 bg-[#0F1817]"
        >
          {/* Blurred Backdrop */}
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${isRevealed ? "opacity-40" : "opacity-0"}`}
            style={{
              backgroundImage: `url(${wedding.gallery[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(20px)",
              transform: "scale(1.1)",
            }}
          />

          {/* Main Image Container */}
          <div
            className={`absolute inset-0 transition-all duration-[2s] ease-out ${isRevealed ? "scale-100 opacity-100" : "scale-110 opacity-70"}`}
            style={{
              backgroundImage: `url(${wedding.gallery[0]})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1817]/90 via-transparent to-transparent" />

            {isRevealed && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-4 md:inset-6 border border-[#C4A47A]/50 rounded-lg pointer-events-none"
              >
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C4A47A] rounded-tl-lg -m-[1px]" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C4A47A] rounded-tr-lg -m-[1px]" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#C4A47A] rounded-bl-lg -m-[1px]" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C4A47A] rounded-br-lg -m-[1px]" />
              </motion.div>
            )}
          </div>

          {/* Canvas Overlay */}
          {!isRevealed && (
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full z-30 touch-none"
              style={{
                cursor:
                  'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="rgba(196,164,122,0.5)" stroke="%23C4A47A" stroke-width="2"/></svg>\') 16 16, crosshair',
              }}
            />
          )}

          {/* Revealed Message */}
          {isRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute inset-x-0 bottom-12 flex justify-center pointer-events-none z-40"
            >
              <p className="font-serif italic text-3xl md:text-5xl text-[#FDFBF7] drop-shadow-2xl tracking-wide">
                You found the memories!
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Instruction / Fallback Button */}
        {!isRevealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col items-center gap-4"
          >
            <p className="font-sans text-[10px] tracking-[0.3em] text-[#C4A47A]/70 uppercase">
              Scratch the gold card to unlock
            </p>
            <button
              onClick={triggerReveal}
              className="flex items-center gap-2 px-6 py-2 border border-[#C4A47A]/40 rounded-full text-[#C4A47A] text-[10px] uppercase tracking-widest hover:bg-[#C4A47A]/10 transition-colors z-50"
            >
              <Unlock size={12} /> Skip Scratch
            </button>
          </motion.div>
        )}
      </div>

      {/* Glitter */}
      <AnimatePresence>
        {glitter.map((g) => (
          <FallingGlitter key={g.id} {...g} />
        ))}
      </AnimatePresence>

      {/* --- PREMIUM BENTO & OVERLAP GALLERY --- */}
      <div
        className={`relative z-20 w-full max-w-7xl mx-auto transition-all duration-1000 mt-32 ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none h-0 overflow-hidden"}`}
      >
        <div className="text-center mb-20 relative">
          {/* Decorative background text for mobile */}
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-editorial text-[20vw] md:text-[15vw] text-[#C4A47A]/5 whitespace-nowrap pointer-events-none z-0">
            MEMORIES
          </h2>
          <p className="relative z-10 font-sans text-[10px] uppercase tracking-[0.5em] text-[#C4A47A] mb-4 flex items-center justify-center gap-3">
            <Camera size={14} /> The Memories
          </p>
          <h2 className="relative z-10 font-editorial text-5xl md:text-7xl text-[#FDFBF7]">
            Captured Moments
          </h2>
        </div>

        {/* Desktop Bento Box + Mobile Zig-Zag Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6">
          {/* Image 1 - Tall (Span 1 col, 2 rows on desktop) */}
          <div className="lg:col-span-1 lg:row-span-2 w-[90%] md:w-full mr-auto md:mr-0">
            <GalleryItem src={wedding.gallery[1]} index={0} isTall />
          </div>

          {/* Image 2 - Wide (Span 2 cols on desktop) */}
          <div className="lg:col-span-2 w-[90%] md:w-full ml-auto md:ml-0 mt-[-10%] md:mt-0">
            <GalleryItem src={wedding.gallery[2]} index={1} isWide />
          </div>

          {/* Image 3 - Square */}
          <div className="lg:col-span-1 w-[90%] md:w-full mr-auto md:mr-0 mt-[-10%] md:mt-0">
            <GalleryItem src={wedding.gallery[3]} index={2} />
          </div>

          {/* Image 4 - Square */}
          <div className="lg:col-span-1 w-[90%] md:w-full ml-auto md:ml-0 mt-[-10%] md:mt-0">
            <GalleryItem src={wedding.gallery[4]} index={3} />
          </div>

          {/* Image 5 - Wide (Span 2 cols, 1 row) */}
          <div className="lg:col-span-2 lg:row-span-1 w-[90%] md:w-full mr-auto md:mr-0 mt-[-10%] md:mt-0">
            <GalleryItem src={wedding.gallery[5]} index={4} isWide />
          </div>

          {/* Image 6 - Square */}
          <div className="lg:col-span-1 w-[90%] md:w-full ml-auto md:ml-0 mt-[-10%] md:mt-0">
            <GalleryItem src={wedding.gallery[0]} index={5} />
          </div>
        </div>
      </div>
    </section>
  );
}
