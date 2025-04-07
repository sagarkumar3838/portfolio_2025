import React from 'react';
import { IconCloudDemo } from './ui/IconCloudDemo';

const Skills = () => {
  return (
    <div id='skills'>
      <section className="relative h-full  bg-gradient-to-t to-[#1a1919] from-[#06060e] text-white md:space-x-2 " >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className=' lg:flex items-center justify-center'>
          <div className=' text-center lg:p-10'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mt-[4rem]'>Skills</h1>
            <div className='flex flex-col sm:flex-row items-center justify-between px-8'>
              <div className=' sm:mb-4 lg:mb-2'>
                <div className="w-full max-w-[16rem] mx-auto [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border">
                  <h1 className='text-xl sm:text-3xl md:text-5xl font-bold'>FRONTEND</h1>
                  <div className="relative text-center z-10 px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24 lg:py-28 rounded-2xl w-fit bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/new-grid_ng16tf.png')] h-full mx-auto">
                    <div className='grid grid-cols-2 gap-4 sm:gap-6'>
                      <img src='/images/html5.svg' className='h-10 sm:h-12 md:h-14 lg:h-16' alt="HTML5" />
                      <img src='/images/css.svg' className='h-10 sm:h-12 md:h-14 lg:h-16' alt="CSS" />
                      <img src='/images/react-color.svg' className='h-10 sm:h-12 md:h-14 lg:h-16' alt="React" />
                      <img src='/images/javascript.svg' className='h-10 sm:h-12 md:h-14 lg:h-16' alt="JavaScript" />
                    </div>
                  </div>
                </div>
              </div>
            
            
             <div>
             <IconCloudDemo  />
             </div>
             
              <div className=' sm:mb-4'>
                <div className="w-full max-w-[16rem] mx-auto [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border">
                  <h1 className='text-xl sm:text-4xl md:text-5xl font-bold'>BACKEND</h1>
                  <div className="relative text-center z-10 px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24 lg:py-28 rounded-2xl w-fit bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/new-grid_ng16tf.png')] h-full mx-auto">
                    <div className='grid grid-cols-2 gap-4 sm:gap-6'>
                      <img src='/images/mongodb.svg' className='h -10 sm:h-12 md:h-14 lg:h-16' alt="MongoDB" />
                      <img src='/images/nodedotjs.svg' className='h-10 sm:h-12 md:h-14 lg:h-16' alt="Node.js" />
                      <img src='/images/express.svg' className='h-10 sm:h-12 md:h-14 lg:h-16' alt="Express" />
                      <img src='/images/docker.svg' className='h-10 sm:h-12 md:h-14 lg:h-16' alt="Docker" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;