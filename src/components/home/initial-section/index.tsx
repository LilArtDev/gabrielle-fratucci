"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export function InitialSection(props: { onYesClick?: () => void }) {
  const [isAngry, setIsAngry] = useState(false);

  const handleNoClick = () => {
    setIsAngry(true);
    setTimeout(() => setIsAngry(false), 1000);
  };
  return (
    <section className="fixed flex flex-col items-center justify-around h-max min-h-screen w-full overflow-hidden">
      <motion.div
        className="absolute -z-5 w-full h-dvh bg-radial-[at_50%_40%] from-transparent to-red-900 to-80% size-24 opacity-0 "
        animate={{ opacity: isAngry ? 0.7 : 0 }}
        transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 100,
        }}
      />
      <Image
        src="/assets/IMG_0494.JPEG"
        alt="Meu amorzinho"
        width={720}
        height={1280}
        className="w-full h-dvh absolute top-0 left-0 object-cover -z-10 opacity-20"
      />
      <div className="mx-5 text-center">
        <motion.h1
          className="font-extrabold text-6xl h-fit "
          animate={{ y: [-20, 0], opacity: [0, 1] }}
          exit={{ y: [0, -20], opacity: [1, 0] }}
          transition={{
            duration: 0.2,
            stiffness: 100,
          }}
        >
          Será que
          <br />
          eu te <b className="text-amber-50">amo</b>?
        </motion.h1>
        <motion.p
          className="text-4xl font-medium text-pink-100 py-2 px-4 bg-[#9e3d56] mt-2 rounded-md w-fit mx-auto"
          animate={{ y: [20, 0], opacity: [0, 1] }}
          exit={{ y: [0, 20], opacity: [1, 0] }}
          transition={{ delay: 0.2, duration: 0.2 }}
        >
          Gabrielle Fratucci
        </motion.p>
      </div>
      <div className="w-max flex flex-col items-center justify-center">
        <motion.button
          className=" px-7 py-2 bg-amber-200 text-2xl font-bold text-center relative pb-5 rounded"
          animate={{ x: [-100, 0], opacity: [0, 1] }}
          exit={{ x: [0, 100], opacity: [1, 0] }}
          transition={{
            delay: 0.4,
            duration: 0.2,
            type: "spring",
            stiffness: 100,
          }}
          onClick={props.onYesClick}
        >
          SIMMMMMM
          <br />
          <span className="text-sm font-medium absolute bottom-2 whitespace-nowrap left-5">
            muito, muito, muito, muito
          </span>
        </motion.button>
        <motion.button
          className=" px-7 w-full mt-5 text-gray-500 text-2xl font-bold text-center relative pb-7 rounded opacity-70"
          animate={{ x: [-100, 0], opacity: [0, 1] }}
          exit={{ x: [0, 100], opacity: [1, 0] }}
          transition={{
            delay: 0.6,
            duration: 0.2,
            type: "spring",
            stiffness: 100,
          }}
          onClick={handleNoClick}
        >
          Não
          <br />
          <span className="text-sm font-medium absolute bottom-3 whitespace-nowrap -left-3">
            eu sou um psicopata sem sentimentos
          </span>
        </motion.button>
      </div>

      <motion.div
        className=" mx-auto relative"
        initial={{ rotateY: 0 }}
        animate={{ y: [100, 0], opacity: [0, 1] }}
        exit={{ y: [0, 100], opacity: [1, 0] }}
        transition={{
          delay: 0.8,
          duration: 0.2,
          type: "spring",
          stiffness: 100,
        }}
      >
        <motion.div
          animate={{ rotate: [15, -15, 15] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 4,
            stiffness: 100,
          }}
        >
          <motion.div
            className="w-30 h-30"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: isAngry ? 180 : 0 }}
            transition={{
              duration: 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            <Image
              src={
                isAngry
                  ? "/assets/angry_face_emoji.png"
                  : "/assets/thinking_face_emoji.png"
              }
              alt={isAngry ? "Bravo" : "Pensativo"}
              width={720}
              height={720}
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
