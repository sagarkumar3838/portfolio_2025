import HeaderTitle from "./ui/HeaderTitle";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef } from "react";
import { CardDemo } from "./ui/CardDemo";
import { CardDemo1 } from "./ui/CardDemo1";
import { CardDemo3 } from "./ui/CardDemo3";

const Hero = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
<main ref={container} className="relative w-full bg-[#0a0909]">



    {/* // <main
    //   ref={container}
    //   className="relative w-full min-h-full bg-[#0a0909]  overflow-hidden"
    // > */}
      <Section scrollYProgress={scrollYProgress} />
      <Section scrollYProgress={scrollYProgress} id="services" />
    </main>
  );
};

const Section = ({ scrollYProgress, id }) => {
  const { scale, rotate } = useSpring({
    scale: useTransform(scrollYProgress, [0, 1], [1, 0.8]),
    rotate: useTransform(scrollYProgress, [0, 1], [0, -6]),
  });

  return (
    <motion.section
      style={{ scale, rotate }}
      className="font-semibold top-0  bg-gradient-to-t to-[#090808] from-[#0a0909] flex flex-col items-center justify-center dark:text-white text-gray-500"
      id={id}
    >
      {id === "services" ? (
        <article className="container mx-auto relative z-30">
          <div className="z-[-1] absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl 2xl:text-7xl leading-[100%] sm:py-16 md:py-6 font-semibold tracking-tight">
            <span className="text-xl">- Services</span> <br /> My{" "}
            <span className="text-[#00FF00]">Services</span>
          </h1>

          <div
            className="mt-3 mb-8 
                md:mt-4 
                lg:mt-16 
                xl:mt-20 
                2xl:mt-24 
                grid grid-cols-1 
                sm:grid-cols-1 
                md:grid-cols-1 
                lg:grid-cols-3 
                xl:grid-cols-3 
                2xl:grid-cols-3 
                gap-4 
                md:gap-[2rem] 
                lg:gap-[1rem] 
                xl:gap-[8rem]
                2xl:gap-[8rem]
                
                
                "
          >
            {" "}
            {/* 2xl gap set to 8rem (equal to gap-32) */}
            <CardDemo className="p-2 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14 " />
            <CardDemo1 className="p-2 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14" />
            <CardDemo3 className="p-2 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14" />
          </div>
        </article>
      ) : (
        <HeaderTitle />
      )}
    </motion.section>
  );
};
export default Hero;
