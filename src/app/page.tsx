"use client";
import { InitialSection } from "@/components/home/initial-section";
import { PhotosSection } from "@/components/home/photos-section";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";
export default function Home() {
  const [showPhotos, setShowPhotos] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleYesClick = () => {
    setShowPhotos(true);
  };

  return (
    <div
      ref={containerRef}
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <AnimatePresence mode="popLayout">
        {showPhotos ? (
          <motion.div
            key="photos"
            id="photos-section"
            animate={{ opacity: [0, 1], y: [-20, 0] }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5}}
          >
            <AnimatePresence propagate>
              <PhotosSection />
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="initial"
            id="initial-section"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5}}
          >
            <AnimatePresence propagate>
              <InitialSection onYesClick={handleYesClick} />
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
