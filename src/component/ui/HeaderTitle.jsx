import React from 'react';
import { Sparkles } from './sparkles';
import FlipWords from './FlipWords';

import InteractiveHoverButton from './InteractiveHoverButton';

import ScrollBaseAnimation from './ScrollBaseAnimation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



function HeaderTitle() {
  const words = ["FrontEnd Developer","BackEnd Developer","Full Stack Developer" , "Web Designer" ];
  return (
    <>
    <div className="  h-full w-full overflow-hidden bg-black">
      <div className="relative h-[26rem] md:h-[32rem] lg:h-[30rem] w-screen overflow-hidden [mask-image:radial-gradient(50% 50%, white, transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#369eff,transparent_90%)] before:opacity-100 after:absolute after:border-2 after:-left-1/2 after:top-1/2 after:aspect-[1/1.8] after:w-[200%] after:rounded-[50%] after:border-b after:border-[#7876c566] after:bg-zinc-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]"></div>
        <Sparkles
          density={700}
          size={1.2}
          direction="top"
          className="absolute inset-x-0 top-0 h-full w-full [mask-image:radial-gradient(50% 50%, green, transparent_85%)]"
        />
      </div>
      <div className="mx-auto -mt-[20rem] md:-mt-[24rem]  w-full max-w-2xl relative z-10">
        <div className=" bg-transparent backdrop-blur-lg border border-gray-800  w-[10rem] md:w-[12rem]  mx-auto grid place-content-center rounded-full bg-[#090923]">
        <img src='/images/logo2.png' className=' rounded-full  '/>
        </div>
      </div>
      <article className="text-white sm:pt-1 md:pt-[0.5px] mx-auto block text-center z-10 relative">
        <h1 className="text-center text-xl md:text-3xl lg:text-5xl font-medium py-3">
          -Hello
        </h1>
        <h2>I'm <span className='text-xl md:text-3xl lg:text-5xl text-sky-500'>Sagar Samal,</span></h2>
        <h1> <span> <FlipWords words={words}/></span></h1>
      </article>
     <div className='flex items-center justify-center  mt-[4rem] md:mt-[4rem] lg:mt-[2rem] '>
     <div className=' text-center gap-2 flex items-center justify-center  border rounded-full h-14 w-72 bg-white z-30 '>
        <InteractiveHoverButton className="bg-[#00FF00]"/>
        <InteractiveHoverButton className="bg-blue-500 text-white hover:bg-blue-600" text="Hire Me" />
        
      </div>
     </div>

     <div className='  mt-8 mb-8 md:mt-6 lg:mt-4 h-[3rem] md:h-[4rem] lg:h-[6rem] grid place-content-center bg-[#00FF00] text-black text-2xl md:text-4xl font-bold'>
        <ScrollBaseAnimation
          // delay={500}
          baseVelocity={3}
          scrollDependent={true}
          className=' font-bold tracking-[-0.07em] md:leading-[160%] lg:leading-[180%]  '
        >

         <h1>
        Web Development <FontAwesomeIcon icon={faStar} className="mx-12" />
        UI/UX Design <FontAwesomeIcon icon={faStar} className="mx-12" />
        App Designer <FontAwesomeIcon icon={faStar} className="mx-12" />
        Web Design <FontAwesomeIcon icon={faStar} className="mx-12" />
        Email Marketing <FontAwesomeIcon icon={faStar} className="mx-12" />
        Email Marketing <FontAwesomeIcon icon={faStar} className="mx-12" />
        Digital Marketing <FontAwesomeIcon icon={faStar} className="mx-12" />
        

      </h1>
        </ScrollBaseAnimation>
      </div>
      
    </div>
  </>
  );
}
export default HeaderTitle;
