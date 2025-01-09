import React, { useState } from 'react';

export const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <>
      <nav className="relative flex w-full h-full justify-center items-center gap-6 border-[1px] border-neutral-700 bg-neutral-900 p-2 text-sm text-neutral-500">
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center p-1">
          <div className='flex justify-start mr-0 md:mr-20 lg:mr-40 xl:mr-60 2xl:mr-80'>
            <button className="
              relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg 
              border-neutral-700 px-4 py-1.5 font-medium
              text-neutral-300 transition-all duration-300
              before:absolute before:inset-0
              before:-z-10 before:translate-y-[200%]
              before:scale-[2.5]
              before:rounded-[100%] before:bg-neutral-50
              before:transition-transform before:duration-1000
              before:content-[&quot;&quot;]
              hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
              hover:before:translate-y-[0%]
              active:scale-100"
            >
              Portfolio
            </button>
          </div>

          <div className="flex items-center justify-between gap-4 ml-5 ">
            <button className="relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] border-neutral-700 px-4 py-1.5 font-medium text-neutral-300 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:scale-[2.5] before:rounded-[100%] before:bg-neutral-50 before:transition-transform before:duration-1000 before:content-[&quot;&quot;] hover:scale-105 hover:border-neutral-50 hover:text-neutral-900 hover:before:translate-y-[0%] active:scale-100">
              About
            </button>
            <button className="relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] border-neutral-700 px-4 py-1.5 font-medium text-neutral-300 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:scale-[2.5] before:rounded-[100%] before:bg-neutral-50 before:transition-transform before:duration-1000 before:content-[&quot;&quot;] hover:scale-105 hover:border-neutral-50 hover:text-neutral-900 hover:before:translate-y-[0%] active:scale-100">
              Projects
            </button>
            <button className="relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] border-neutral-700 px-4 py-1.5 font-medium text-neutral-300 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:scale-[2.5] before:rounded-[100%] before:bg-neutral-50 before:transition-transform before:duration-1000 before:content-[&quot;&quot;] hover:scale-105 hover:border-neutral-50 hover:text-neutral-900 hover:before:translate-y-[0%] active:scale-100">
              Blog
            </button>
            <button className="relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] border-neutral-700 px-4 py-1.5 font-medium text-neutral-300 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:scale-[2.5] before:rounded-[100%] before:bg-neutral-50 before:transition-transform before:duration-1000 before:content-[&quot;&quot;] hover:scale-105 hover:border-neutral-50 hover:text-neutral-900 hover:before:translate-y-[0%] active:scale-100">
              Contact
            </button>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;