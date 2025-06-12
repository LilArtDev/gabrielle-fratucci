"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PhotosSwiper() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 9); // Assuming there are 5 images
    }, 6000); // Change image every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <>
      <AnimatePresence mode="sync">
        <motion.img
          key={`background_${index + 1}`}
          src={`/assets/swiper/${index + 1}.JPEG`}
          alt="Background"
          className="object-cover absolute top-0 left-0 z-0  blur-xs w-[110%] h-[110%]"
          animate={{ opacity: [0, .4], y: [-20, 0] }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            delay: 0.3,
          }}
        />
      </AnimatePresence>
      <div className="relative flex flex-col items-center  w-full h-[300px] z-10">
        <AnimatePresence mode="sync">
          <motion.img
            key={`photo_${index + 1}`}
            id={`photo_${index + 1}`}
            src={`/assets/swiper/${index + 1}.JPEG`}
            alt={`Moment ${index + 1}`}
            animate={{ opacity: [0, 1], x: [-20, 0] }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className=" object-cover w-[300px] h-[300px] inset-shadow-xs border-15 border-amber-0 shadow-xl absolute"
          />
        </AnimatePresence>
      </div>
    </>
  );
}
