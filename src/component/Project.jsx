import React from 'react'
import TimelineAnimation from './ui/TimelineAnimation'

const Project = () => {
  return (
    <>
         <section className="relative  bg-gradient-to-t to-[#1a1919] from-[#06060e] text-white" id='project'>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div><h1 className='font-bold text-4xl md:text-6xl lg:text-7xl text-white  pt-[8rem] pb-[2rem]'>Project</h1></div>
      <TimelineAnimation/>
      </section>
    </>
  )
}

export default Project
