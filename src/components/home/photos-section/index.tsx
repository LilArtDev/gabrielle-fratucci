"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { PhotosSwiper } from "./components/photos-swiper";
import { ElapsedTimer } from "./components/elapsed-time";

export function PhotosSection() {
  return (
    <>
      <motion.section
        className="relative flex flex-col items-center h-screen min-h-[750px] w-full px-5 overflow-hidden"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/assets/61a68500-480e-4617-a99e-7868fe54c54d.JPEG"
          alt="Fundo nossa foto no espelho"
          width={720}
          height={1280}
          className="w-full h-dvh min-h-[750px] absolute top-0 left-0 object-cover -z-10 opacity-40 blur-xs"
        />
        <motion.img
          src="/assets/61a68500-480e-4617-a99e-7868fe54c54d.png"
          alt="Nossa foto no espelho"
          className="w-[38vh] h-auto absolute bottom-0 right-5 object-contain"
          animate={{ scale: [1, 1.05], rotate: [0, 5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            type: "spring",
            repeatType: "reverse",
          }}
        />
        <div className=" text-left  mt-20">
          <motion.h1
            className="font-extrabold text-5xl h-fit "
            animate={{ y: [-30, 0], opacity: [0, 1] }}
            transition={{
              duration: 0.3,
              stiffness: 100,
            }}
          >
            <b className="text-amber-50">SIM!</b> <br /> Eu te amo
          </motion.h1>
          <motion.h3
            className="font-bold text-6xl text-amber-50 rounded-md w-fit"
            animate={{ x: [-30, 0], opacity: [0, 1] }}
            transition={{
              duration: 0.5,
              stiffness: 100,
              delay: 0.6,
              type: "spring",
            }}
          >
            DEMAIS
          </motion.h3>
          <motion.p
            className="text-xl mt-5 font-normal"
            animate={{ y: [-30, 0], opacity: [0, 1] }}
            transition={{
              duration: 0.5,
              stiffness: 100,
              delay: 0.3,
            }}
          >
            Você é a <b className="text-amber-50">felicidade</b> do meu dia, a
            mulher mais <b className="text-amber-50">fofa</b> e{" "}
            <b className="text-amber-50">amorosa</b> que eu já vi. Sempre me
            fazendo <b className="text-amber-50">sorrir</b>, te{" "}
            <b className="text-amber-50">amando</b> cada vez mais. Você é o{" "}
            <b className="text-amber-50">caos da minha paz</b> mas o{" "}
            <b className="text-amber-50">caos necessário!</b>
          </motion.p>
        </div>
      </motion.section>
      <section className="relative flex flex-col h-fit min-h-[620px] w-full -top-5  rounded-t-4xl bg-[#d8b4a6] text-amber-50 pt-10  overflow-hidden overflow-x-hidden">
        <div className="px-5 text-left relative z-5 pb-10">
          <motion.h2
            className=" text-4xl h-fit font-bold text-[#5c1135]"
            whileInView={{ y: [-20, 0], opacity: [0, 1] }}
            transition={{
              duration: 0.2,
              stiffness: 100,
            }}
          >
            Nossos <b className="text-pink-700">Momentos</b>
          </motion.h2>
        </div>
        <PhotosSwiper />
        <div
          className="pointer-events-none absolute inset-0 h-full w-full -z-10"
          style={{
            background:
              "linear-gradient(to bottom, #5c1135 0%, transparent 40%, transparent 60%, #d8b4a6 100%)",
            opacity: 1,
          }}
        />
        <p className="relative z-5 mb-auto mt-10 px-5 text-xl text-[#5c1135] ">
          Cada momento ao seu lado é sempre <b className="text-pink-700">único</b> e <b className="text-pink-700">especial</b>. Sou grato todos os dias por fazer
          parte da sua história e compartilhar a vida com você. <b className="text-pink-700">Eu te amo
          indefinidamente</b>
        </p>
      </section>
      <div className="w-full h-30 bg-[#9e3d56] absolute -bottom-[620px] -z-5" />
      <section className="h-fit min-h-[620px] bg-amber-50  relative -z-10 pt-15 pb-10">
        <Image
          src={"/assets/IMG-20250612-WA0004.jpg"}
          alt="Foto do casal"
          className="object-cover w-full h-full absolute top-0 left-0 -z-5  blur-xs opacity-20"
          fill
          priority
        />
        <div className="px-5 text-[#5c1135] font-normal">
          <p className="text-xl">
            Pra um casal que se conheceu de uma forma{" "}
            <b className="text-pink-700">tão peculiar</b>, eu sou suspeito em
            falar isso mas eu acho que a gente forma um casal{" "}
            <b className="text-pink-700">muito foda!</b>
          </p>
          <p className="text-xl mt-5">
            Enfim, espero que nossa história continue a ser escrita com
            <b className="text-pink-700"> amor</b>,{" "}
            <b className="text-pink-700">alegria</b> e muitas{" "}
            <b className="text-pink-700">aventuras</b>. Que possamos continuar
            a nos apoiar, a nos amar e a crescer juntos. Sempre vou dar valor a{" "}
            <b className="text-pink-700">cada segundo</b> desde o momento que
            você me disse o primeiro{" "}
            <b className="text-pink-700">&quot;sim&quot;</b>
          </p>
          <h2 className="text-2xl font-bold mt-5">
            Te amo minha <b className="text-pink-700">princesa!</b>
          </h2>
        </div>

        <div>
          <ElapsedTimer />
        </div>
      </section>
    </>
  );
}
