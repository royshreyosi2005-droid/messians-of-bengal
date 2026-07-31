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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071321] via-[#050B16] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_70%)]" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative flex w-full max-w-5xl flex-col items-center justify-center px-6 md:scale-125">

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
            className="relative rounded-full border-2 border-cyan-300/40 shadow-[0_0_60px_rgba(34,211,238,0.35)] md:h-[180px] md:w-[180px]"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-8 text-center text-4xl font-black uppercase tracking-[6px] text-white sm:text-5xl md:mt-10 md:text-6xl lg:text-7xl md:tracking-[14px]"
        >
          MESSIANS
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="mt-3 text-center text-xl font-extrabold uppercase tracking-[5px] text-cyan-300 sm:text-2xl md:mt-4 md:text-4xl lg:text-5xl md:tracking-[12px]"
        >
          OF BENGAL
        </motion.h2>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15 }}
          className="mt-8 max-w-md text-center text-sm font-semibold tracking-[2px] text-gray-300 sm:text-base md:mt-10 md:max-w-none md:text-2xl md:tracking-[4px]"
        >
          Preserving the Legacy of Bengal
        </motion.p>

        {/* Loading Bar */}
        <div className="mt-10 h-[5px] w-64 translate-y-5 overflow-hidden rounded-full bg-white/10 sm:w-72 md:mt-14 md:h-[6px] md:w-96">
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