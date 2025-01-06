import React from 'react'

export const NavBar = () => {
  return (
   <>
   
   <nav className="glass-nav absolute  left-0 right-0  z-10 mx-auto max-w-full overflow-hidden border border-gray/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur    dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900">
  <div className="flex  justify-between  px-5 py-2 ">
    <span className="pointer-events-none absolute z-0 grid h-[50px] w-[50px] origin-[0px_0px] place-content-center rounded-full bg-gradient-to-br from-indigo-600 from-40% to-indigo-400 text-2xl" style={{ opacity: 0, transform: 'scale(0) translateX(-50%) translateY(-50%)', top: '46px', left: '778px' }}>
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </span>
    <div className=" items-center gap-4 flex justify-center">
      <a href="#" className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95">
        <span className="relative z-10 text-white transition-colors group-hover:text-gray-300 dark:text-gray-300">Products</span>
        <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100"></span>
      </a>
      <a href="#" className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95">
        <span className="relative z-10 text-white transition-colors group-hover:text-gray-300 dark:text-gray-300">History</span>
        <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100"></span>
      </a>
      <a href="#" className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95">
        <span className="relative z-10 text-white transition-colors group-hover:text-gray-300 dark:text-gray-300">Contact</span>
        <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100"></span>
      </a>
    </div>
    
  </div>
  <div className="block overflow-hidden md:hidden" style={{ height: '0px' }}>
    <div className="flex items-center justify-between px-4 pb-4">
      <div className="flex items-center gap-4">
        <a href="#" className="text-white/90 transition-colors hover:text-white dark:text-gray-300">Products</a>
        <a href="#" className="text-white/90 transition-colors hover:text-white dark:text-gray-300">History</a>
        <a href="#" className="text-white/90 transition-colors hover:text-white dark:text-gray-300">Contact</a>
      </div>
      <button className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95">
        <span className="relative z-10 text-white/90 transition-colors group-hover:text-white dark:text-gray-300">Sign in</span>
        <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100"></span>
      </button>
    </div>
  </div>
</nav>
   
   
   </>
  )
}

export default NavBar
