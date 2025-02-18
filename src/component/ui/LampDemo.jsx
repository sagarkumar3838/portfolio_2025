
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export function LampDemo() {
  return (
    <div className="">
      <div className="flex items-center justify-center relative">
        <h1 className="absolute z-10 text-white text-4xl md:text-5xl lg:text-6xl text-center sm:mt-[4rem]  font-bold">
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
          className="-mt-32 md:-mt-[5rem]  bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-xl  lg:text-3xl xl:text-4xl"
        >
            Hello! My name is Sagar Samal and I am from Dhanbad , Jharkhand. As a B.Tech graduate in Computer Science And Engineering from Meerut Institute Of Technology , Meerut in the Year 2024 and i also completed my Diploma in Computer Science And Engineering. I recently join Jspider to complete my MERN Stack course. I did internship in BrizTechInfoSystem and CodeSoft. I started learning web development during the pandemic, through online courses to learn the basics and enhance my skills, ensuring I learned enough to move forward and try the latest technologies. I am always looking for new challenges and opportunities to apply and expand my knowledge.
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
        <div className="relative flex w-full flex-1 scale-y-150 items-center justify-center isolate z-0">
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
            className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-blue-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
          >
            <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
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
            className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-blue-500 text-white [--conic-position:from_290deg_at_center_top]"
          >
            <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top, white,transparent)]" />
          </motion.div>

          <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
          <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
          <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y -1/2 rounded-full bg-blue-500 opacity-50 blur-3xl"></div>
          <motion.div
            initial={{ width: "8rem" }}
            whileInView={{ width: "16rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute inset-auto z-0 w-64 -translate-y-[6rem] rounded-full bg-blue-500 blur-2xl"
          ></motion.div>
          <motion.div
            initial={{ width: "15rem" }}
            whileInView={{ width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-blue-500"
          ></motion.div>

          <div className="absolute inset-auto z-40 h-20 w-full -translate-y-[12.5rem] bg-slate-950"></div>
        </div>

        <div className="relative z-50 flex -translate-y-60 flex-col items-center px-5">
          {children}
        </div>
      </div>
    </div>
  );
};