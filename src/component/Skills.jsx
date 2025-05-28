import React from 'react';
import { IconCloudDemo } from './ui/IconCloudDemo';

const Skills = () => {
  return (
    <div id='skills'>
      <section className="relative h-full bg-gradient-to-t to-[#1a1919] from-[#06060e] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className='container mx-auto px-4 py-16'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-12'>Skills</h1>
          <div className='flex flex-col lg:flex-row lg:justify-around items-center gap-10'>

            {/* FRONTEND */}
            <div className="w-full max-w-md [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border">
              <h2 className='text-2xl sm:text-3xl font-bold text-center p-5'>FRONTEND</h2>
              <div className="relative z-10 text-center px-6 sm:px-8 md:px-10 lg:px-12 py-10 rounded-2xl w-fit mx-auto bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/new-grid_ng16tf.png')]">
                <div className='grid grid-cols-2 sm:grid-cols-2 gap-6'>
                  <img src='/images/html5.svg' className='h-12 sm:h-14 md:h-16 lg:h-20' alt="HTML5" />
                  <img src='/images/css.svg' className='h-12 sm:h-14 md:h-16 lg:h-20' alt="CSS" />
                  <img src='/images/react-color.svg' className='h-12 sm:h-14 md:h-16 lg:h-20' alt="React" />
                  <img src='/images/javascript.svg' className='h-12 sm:h-14 md:h-16 lg:h-20' alt="JavaScript" />
                </div>
              </div>
            </div>

            {/* ICON CLOUD (Center) */}
            <div className='w-full max-w-lg flex justify-center items-center'>
              <IconCloudDemo />
            </div>

            {/* BACKEND */}
            <div className="w-full max-w-md [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border">
              <h2 className='text-2xl sm:text-3xl font-bold text-center p-5'>BACKEND</h2>
              <div className="relative z-10 text-center px-6 sm:px-8 md:px-10 lg:px-12 py-10 rounded-2xl w-fit mx-auto bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/new-grid_ng16tf.png')]">
                <div className='grid grid-cols-2 sm:grid-cols-2 gap-6'>
                  <img src='/images/mongodb.svg' className='h-12 sm:h-14 md:h-16 lg:h-20' alt="MongoDB" />
                  <img src='/images/nodedotjs.svg' className='h-12 sm:h-14 md:h-16 lg:h-20' alt="Node.js" />
                  <img src='/images/express.svg' className='h-12 sm:h-14 md:h-16 lg:h-20' alt="Express" />
                  <img src='/images/docker.svg' className='h-12 sm:h-14 md:h-16 lg:h-20' alt="Docker" />
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
