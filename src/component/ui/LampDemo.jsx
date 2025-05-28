import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export function LampDemo() {
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-10 lg:p-16 xl:p-24">
      <div className="flex items-center justify-center relative">
        <h1
          className="absolute z-10 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mt-10 sm:mt-14 md:mt-20 lg:mt-24 font-bold"
          aria-label="About"
        >
          About
        </h1>
      </div>
      <LampContainer>
        <motion.h3
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent px-2 sm:px-4 pb-8 mt-12 sm:mt-6 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-16"
        >
          Hello! My name is Sagar Samal and I am from Dhanbad, Jharkhand.
          As a B.Tech graduate in Computer Science And Engineering from Meerut Institute Of Technology, Meerut in the Year 2024 and I also completed my Diploma in Computer Science And Engineering.
          I recently joined Jspider to complete my MERN Stack course. 
          I did an internship in BrizTechInfoSystem and CodeClause. 
          I started learning web development during the pandemic, through online courses to learn the basics and enhance my skills, ensuring I learned enough to move forward and try the latest technologies. I am always looking for new challenges and opportunities to apply and expand my knowledge.
        </motion.h3>
      </LampContainer>
    </div>
  );
}

export const LampContainer = ({ children, className }) => {
  return (
    <div>
      <div
        className={cn(
          "relative flex 2xl:min-h-screen 2xl:pb-24 flex-col items-center justify-center overflow-hidden bg-slate-950 w-full z-0",
          className
        )}
      >
        <div className="relative flex w-full flex-1 items-center justify-center isolate z-0">

          {/* Left conic gradient */}
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "20rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute right-1/2 h-56 w-full bg-gradient-conic from-blue-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] sm:w-[18rem] md:w-[24rem] lg:w-[30rem]"
          >
            <div className="absolute w-full left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute w-40 h-full left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>

          {/* Right conic gradient */}
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "20rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute left-1/2 h-56 w-full bg-gradient-conic from-transparent via-transparent to-blue-500 text-white [--conic-position:from_290deg_at_center_top] sm:w-[18rem] md:w-[24rem] lg:w-[30rem]"
          >
            <div className="absolute w-40 h-full right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute w-full right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top, white,transparent)]" />
          </motion.div>

          {/* Center Glow */}
          <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl" />
          <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
          <div className="absolute inset-auto z-50 h-16 w-64 sm:w-72 md:w-[20rem] lg:w-[28rem] -translate-y-1/2 rounded-full bg-blue-500 opacity-50 blur-3xl" />

          {/* Top Gradient Bar */}
          <motion.div
            initial={{ width: "16rem" }}
            whileInView={{ width: "16rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="absolute z-0 w-64 -translate-y-24 rounded-full bg-blue-500 blur-2xl sm:w-72 md:w-80 lg:w-96"
          />

          <motion.div
            initial={{ width: "15rem" }}
            whileInView={{ width: "30rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="absolute z-50 h-0.5 w-64 sm:w-72 md:w-[22rem] lg:w-[30rem] -translate-y-28 bg-blue-500"
          />

          <div className="absolute z-40 h-20 w-full -translate-y-52 bg-slate-950" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-50 flex flex-col items-center px-2 sm:px-4 lg:px-24 text-white">
          {children}
        </div>
      </div>
    </div>
  );
};
