
import React, { useRef } from 'react';
import { RandomizedTextEffect } from './RandomizedTextEffect';

import { TimelineContent } from './TimelineContent';
import ButtonHover8 from './ButtonHover8';
function TimelineAnimation() {
  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  return (
    <>
      <section
        className="sm:grid grid-cols-2 gap-10 h-[650px] pt-10 px-4  dark:text-white"
        ref={heroRef}>
        <TimelineContent animationNum={0} timelineRef={heroRef}>
          <img
            src="/images/project1.png"
            className="w-full h-96  object-cover rounded-md "
            alt=""
          />
        </TimelineContent>
        <div className="space-y-2">
          {' '}
          <TimelineContent animationNum={1} timelineRef={heroRef}>
            <h1 className="text-5xl leading-[110%]">
              <RandomizedTextEffect text="ANIMEFLIX WEB APP"/>
            </h1>
          </TimelineContent>
          <TimelineContent animationNum={2} timelineRef={heroRef}>
          <p className="text-xl leading-[110%] mb-2">
             Technology Used : 
            </p>
            <div className="text-xl leading-[110%] gap-1  lg:flex  items-center  ">
            <ButtonHover8 text="ReactJs"/>
            <ButtonHover8 text="Framer Motion"/>
            <ButtonHover8 text="Tailwind "/>
            <ButtonHover8 text="React-Router"/>
            </div>
          </TimelineContent>
          <TimelineContent animationNum={3} timelineRef={heroRef}>
            <a
              className="flex gap-2 w-fit bg-gray-800 rounded-md p-2"
              href="https://animeflix3838.web.app/"
              target="_blank">
             
              Check Now
            </a>
          </TimelineContent>
        </div>
      </section>
      <section ref={aboutRef} className="sm:grid grid-cols-2 gap-10 pb-10 px-4">
        <div className="space-y-2">
          {' '}
          <TimelineContent animationNum={1} timelineRef={aboutRef}>
          <h1 className="text-5xl leading-[110%]">
              <RandomizedTextEffect text="DIGITAL HIPPO APP"/>
            </h1>
          </TimelineContent>
          <TimelineContent animationNum={2} timelineRef={aboutRef}>
          <p className="text-xl leading-[110%] mb-2">
             Technology Used : 
            </p>
            <div className="text-xl leading-[110%] gap-1  lg:flex  items-center  ">
            <ButtonHover8 text="NextJs"/>
            <ButtonHover8 text="Stripe API"/>
            <ButtonHover8 text="Tailwind "/>
            <ButtonHover8 text="MongoDb"/>
            </div>
          </TimelineContent>
          <TimelineContent animationNum={3} timelineRef={heroRef}>
            <a
              className="flex gap-2 w-fit bg-gray-800 rounded-md p-2"
              href="http://digital-market-app.onrender.com/"
              target="_blank">
             
              Check Now
            </a>
          </TimelineContent>
        </div>
        <TimelineContent animationNum={0} timelineRef={aboutRef}>
          <img
            src="/images/project2.png"
            className="w-full h-96  object-cover rounded-md "
            alt=""
          />
        </TimelineContent>
      </section>
    </>
  );
}
export default TimelineAnimation;
