
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export function LampDemo() {
  return (
    <div className="container min-h-screen mx-auto p-4 md:p-6 lg:p-12   ">
      <div className="flex items-center justify-center ">
        <h1
          className="absolute z-10 text-white text-3xl md:text-4xl lg:text-5xl text-center mt-[6rem] md:mt-[8rem] lg:mt-[18rem] font-bold"
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
          className="text-center text-sm md:text-md lg:text-2xl xl:text-4xl bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent"
        >
          Hello! My name is Sagar Samal and I am from Dhanbad, Jharkhand. As a B.Tech graduate in Computer Science And Engineering from Meerut Institute Of Technology, Meerut in the Year 2024 and I also completed my Diploma in Computer Science And Engineering. I recently joined Jspider to complete my MERN Stack course. I did an internship in BrizTechInfoSystem and CodeClause. I started learning web development during the pandemic, through online courses to learn the basics and enhance my skills, ensuring I learned enough to move forward and try the latest technologies. I am always looking for new challenges and opportunities to apply and expand my knowledge.
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
          "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full z-0",
          className
        )}
      >
        <div className="relative flex w-full flex-1 scale-y-650 items-center justify-center isolate z-0">
          {/* Left conic gradient animation */}
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto right-1/2 h-56 overflow-visible w-full bg-gradient-conic from-blue-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] md:w-[20rem] lg:w-[30rem]"
          >
            <div className="absolute w-full left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute w-40 h-full left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-blue-500 text-white [--conic-position:from_290deg_at_center_top] md:w-[20rem] lg:w-[30rem]"
          >
            <div className="absolute w-40 h-full right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute w-full right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top, white,transparent)]" />
          </motion.div>

          <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
          <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
          <div className="absolute inset-auto z-50 h-16 w-[28rem] -translate-y-1/2 rounded-full bg-blue-500 opacity-50 blur-3xl md:w-[20rem] lg:w-[28rem]"></div>
          <motion.div
            initial={{ width: "16rem" }}
            whileInView={{ width: "16rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute inset-auto z-0 w-64 -translate-y-[6rem] rounded-full bg-blue-500 blur-2xl md:w-[20rem] lg:w-[64]"
          ></motion.div>
          <motion.div
            initial={{ width: "15rem" }}
            whileInView={{ width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-blue-500 md:w-[20rem] lg:w-[30rem]"
          ></motion.div>

          <div className="absolute inset-auto z-40 h-20 w-full -translate-y-[12.5rem] bg-slate-950"></div>
        </div>

        <div className="relative z-50 flex -translate-y-44 flex-col items-center px-5 md:px-10 lg:px-20">
          {children}
        </div>
      </div>
    </div>
  );
};