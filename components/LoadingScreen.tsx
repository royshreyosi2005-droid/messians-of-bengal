"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      exit={{
  opacity: 0,
  scale: 1.02,
}}
     transition={{
  duration: 0.55,
  ease: [0.4, 0, 0.2, 1],
}}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050B16]"
    >
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071321] via-[#050B16] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_70%)]" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative flex flex-col items-center justify-center scale-110 md:scale-125">

        {/* Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-cyan-400/25 blur-[60px]" />

          <Image
            src="/images/logo.jpg"
            alt="Messians of Bengal"
            width={180}
            height={180}
            className="relative rounded-full border-2 border-cyan-300/40 shadow-[0_0_60px_rgba(34,211,238,0.35)]"
          />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-10 text-6xl md:text-8xl font-black tracking-[14px] text-white uppercase"
        >
          MESSIANS
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="mt-4 text-3xl md:text-5xl font-extrabold tracking-[12px] uppercase text-cyan-300"
        >
          OF BENGAL
        </motion.h2>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15 }}
          className="mt-10 text-xl md:text-3xl font-semibold tracking-[4px] text-gray-300"
        >
          Preserving the Legacy of Bengal
        </motion.p>

        {/* Loading Bar */}
        <div className="mt-16 translate-y-16 h-[6px] w-96 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
            }}
            className="h-full w-full rounded-full bg-cyan-400"
          />
        </div>

      </div>
    </motion.div>
  );
}