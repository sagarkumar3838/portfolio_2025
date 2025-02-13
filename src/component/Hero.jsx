import HeaderTitle from './ui/HeaderTitle';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { CardDemo } from './ui/CardDemo';
import { CardDemo1 } from './ui/CardDemo1';
import { CardDemo3 } from './ui/CardDemo3';

export default function Index() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      <main ref={container} className="relative sm:h-[200vh] md:h-[210vh] lg:h-[200vh] bg-black">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} id="services" />
      </main>
    </>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -6]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="font-semibold top-0 h-screen bg-gradient-to-t to-[#6c6c6c] from-[#626262] flex flex-col items-center justify-center dark:text-white text-gray-500"
    >
      <HeaderTitle />
    </motion.section>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="relative sm:h-[40rem] md:h-[50rem] lg:h-[52rem] bg-gradient-to-t to-[#1a1919] from-[#06060e] text-white"
      id="services"
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <article className="container mx-auto relative z-10 ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl leading-[100%] sm:py-16 md:py-6  font-semibold tracking-tight">
          <span className="text-xl ">- Services</span> <br /> My <span className="text-[#00FF00]">Services</span>
        </h1>

        <div className="mt-3 md:mt-4 lg:mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-8">
          <CardDemo className="p-2 sm:p-6 md:p-8 lg:p-10 xl:p-12 " />
          <CardDemo1 className="p-2 sm:p-6 md:p-8 lg:p-10 xl:p-12" />
          <CardDemo3 className="p-2 sm:p-6 md:p-8 lg:p-10 xl:p-12" />
        </div>
      </article>
    </motion.section>
  );
};