
import React from "react";
import { Timeline } from "./Timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-300 dark:text-neutral-800 text-xs md:text-xl text-center font-semibold mb-2">
            BACHELOR OF COMPUTER SCIENCE AND ENGINEERING
          </p>
          <p className="text-neutral-300 dark:text-neutral-800 text-xs md:text-xl text-center font-normal ">
           Meerut Institute Of Technology , Meerut
          </p>
         
          

           <div className="grid grid-cols-1 mt-2">
            <img
              src="/images/btech.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-52 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset"
            />
          
          </div> 
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
         <p className="text-neutral-300 dark:text-neutral-800 text-xs md:text-3xl text-center font-semibold mb-2">
            DIPLOMA IN COMPUTER SCIENCE AND ENGINEERING
          </p>
          <p className="text-neutral-300 dark:text-neutral-800 text-xs md:text-xl text-center font-normal ">
           GOVT. Polytechnic , Bhaga
          </p>
          <div className="grid grid-cols-1 mt-2">
            <img
              src="/images/diploma.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-52 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset"
            />
          
          </div> 
          
        </div>
      ),
    },
    {
        title: "2014",
        content: (
          <div>
           <p className="text-neutral-300 dark:text-neutral-800 text-xs md:text-3xl text-center font-semibold mb-2">
              MATRICULATION DEGREE
            </p>
            <p className="text-neutral-300 dark:text-neutral-800 text-xs md:text-xl text-center font-normal ">
             D.A.V Public School , Mahuda
            </p>
            <div className="grid grid-cols-1 mt-2">
            <img
              src="/images/dav.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-52 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset"
            />
          
          </div> 
            
          </div>
        ),
      },
    
];
return (
<div className="w-full ">
  <Timeline data={data} />
</div>
);
}