'use client';
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { RandomizedTextEffect   } from './ui/RandomizedTextEffect';


const Footer = () => {
  const container = useRef(null);
  const [openPopup, setOpenPopUp] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const variants = {
    visible: (i) => ({
      translateY: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.4,
        delay: i * 0.03,
      },
    }),
    hidden: { translateY: 200 },
  };
  const handleNewsLetterData = (e) => {
    e.preventDefault();
    console.log(e);
    e.preventDefault();
    const target = e.target;
    const formData = new FormData(target);
    const clientEmail = formData.get('newsletter_email');
    setOpenPopUp(true);
    target.reset();
    if (setOpenPopUp) {
      setTimeout(() => {
        setOpenPopUp(false);
      }, 2000);
    }
  };
  return (
    <>
      <div
        className="relative h-full sm:pt-14 pt-8 bg-[#000] dark:bg-[#f7f7f7] text-gray-200 dark:text-white"
        ref={container}
       
        >
        <div className="sm:container  px-4 mx-auto">
          <div className="md:flex justify-between w-full">
            <div>
              <h1 className="md:text-4xl text-2xl font-semibold">
                Thank you for trusting me!
              </h1>
              
            </div>
            
           
          </div>
          <div className="mt-4 border-y-2 py-8 md:py-10 dark:border-gray-200">
         <h1 className="  leading-[110%] dark:text-gray-800 text-center ">
                      <RandomizedTextEffect text="/SagarSamal" className='sm:text-[4rem] md:text-[6rem] lg:text-[8rem]'/>
                    </h1>
         
          </div>
          <div className="flex md:flex-row flex-col-reverse gap-3 justify-between py-2">
            <span className="font-medium">
              &copy; 2025 Sagar Samal. All Rights Reserved.
            </span>
            <a href="#" className="font-semibold">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
