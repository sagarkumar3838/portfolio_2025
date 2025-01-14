
import HeaderTitle from './ui/HeaderTitle';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { CardDemo } from './ui/CardDemo';
import {CardDemo1} from './ui/CardDemo1';
import {CardDemo3} from './ui/CardDemo3';


export default function index() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <>
      <main ref={container} className=" relative h-[200vh]   bg-black  ">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} id="services"/>
        
      </main>
    </>
  );
}
const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className="  font-semibold top-0 h-screen bg-gradient-to-t to-[#6c6c6c] from-[#626262] flex flex-col items-center justify-center dark:text-white text-gray-500 "
    >
 
 <HeaderTitle/>

      
    </motion.section>
  );
};
const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  
  return (
    <motion.section
    style={{ scale, rotate }}
    className="relative h-full sm:h-[40rem] bg-gradient-to-t to-[#1a1919] from-[#06060e] text-white"
    id='services'
    
  >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    <article className="container mx-auto relative z-10">
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[100%] py-3 font-semibold tracking-tight">
        <span className='text-xl'>- Services</span> <br /> My <span className='text-[#00FF00]'>Services</span>
      </h1>
      
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
       <CardDemo className="" />
      <CardDemo1 className="" />
      <CardDemo3 className="" />
</div>
    </article>
  </motion.section>
  );
};