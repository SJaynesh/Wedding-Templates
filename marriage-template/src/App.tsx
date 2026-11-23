import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OpeningScreen from "./components/OpeningScreen";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Venue from "./components/Venue";
import Families from "./components/Families";
import DressCode from "./components/DressCode";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer"; // <-- Import kiya

export default function App() {
  const [opened, setOpened] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch((e) => console.log("Audio blocked", e));
    }
  };

  return (
    <div className="relative min-h-screen bg-sand selection:bg-terracotta selection:text-sand">
      <audio ref={audioRef} src="/wedding-song.mp3" preload="auto" />

      <AnimatePresence>
        {!opened && (
          <OpeningScreen
            onOpen={() => setOpened(true)}
            onPlayAudio={handlePlayAudio}
          />
        )}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: opened ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        className={opened ? "block" : "hidden"}
      >
        <Hero />
        <Story />
        <Events />
        <Gallery />
        <Venue />
        <Families />
        <DressCode />
        <RSVP />
        <Footer />
      </motion.main>
    </div>
  );
}
