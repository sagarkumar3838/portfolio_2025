
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
  className="sm:grid grid-cols-2 gap-10 pt-10 p-4 sm:p-10 text-center dark:text-white"
  ref={heroRef}
>
  <TimelineContent animationNum={0} timelineRef={heroRef}>
    <img
      src="/images/project1.png"
      className="w-full h-auto sm:h-40 md:h-full object-cover rounded-md mx-auto"
      alt="AnimeFlix Project"
    />
  </TimelineContent>

  <div className="space-y-6 flex flex-col items-center justify-center text-center">
    <TimelineContent animationNum={1} timelineRef={heroRef}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
        <RandomizedTextEffect text="ANIMEFLIX WEB APP" />
      </h1>
    </TimelineContent>

    <TimelineContent animationNum={2} timelineRef={heroRef}>
      <p className="text-lg sm:text-xl font-semibold mb-2">Technology Used:</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <ButtonHover8 text="ReactJs" />
        <ButtonHover8 text="Framer Motion" />
        <ButtonHover8 text="Tailwind" />
        <ButtonHover8 text="React-Router" />
      </div>
    </TimelineContent>

    <TimelineContent animationNum={3} timelineRef={heroRef}>
      <a
        className="inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors rounded-md px-4 py-2 text-white text-lg"
        href="https://animeflix3838.web.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check Now
      </a>
    </TimelineContent>
  </div>
</section>


<section
  ref={aboutRef}
  className="sm:grid grid-cols-2 gap-10 pb-10 px-4 sm:px-10 pt-10 text-center dark:text-white"
>
  <div className="space-y-6 flex flex-col items-center justify-center text-center">
    <TimelineContent animationNum={1} timelineRef={aboutRef}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
        <RandomizedTextEffect text="DIGITAL HIPPO APP" />
      </h1>
    </TimelineContent>

    <TimelineContent animationNum={2} timelineRef={aboutRef}>
      <p className="text-lg sm:text-xl font-semibold mb-2">Technology Used:</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <ButtonHover8 text="NextJs" />
        <ButtonHover8 text="Stripe API" />
        <ButtonHover8 text="Tailwind" />
        <ButtonHover8 text="MongoDb" />
      </div>
    </TimelineContent>

    <TimelineContent animationNum={3} timelineRef={aboutRef}>
      <a
        className=" mb-4 md:mb-0 inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors rounded-md px-4 py-2 text-white text-lg"
        href="http://digital-market-app.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check Now
      </a>
    </TimelineContent>
  </div>

  <TimelineContent animationNum={0} timelineRef={aboutRef}>
    <img
      src="/images/project2.png"
      className="w-full h-auto sm:h-40 md:h-full object-cover rounded-md mx-auto"
      alt="Digital Hippo Project"
    />
  </TimelineContent>
</section>

    </>
  );
}
export default TimelineAnimation;
