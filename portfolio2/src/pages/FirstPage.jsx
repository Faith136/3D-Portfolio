/* eslint-disable react/no-unescaped-entities */
//import React from 'react'
import myimg from "../assets/myimg.jpg"

const FirstPage = () => {
  return (
    <div className="h-full">
<main className="h-full w-full bg-secondary page-shadow">
<div className="px-12 py-10 space-y-6">
    <div>
        <img src={myimg}  alt="" className="w-[300px] mx-auto "/>
    </div>
    <div>
      <div className="space-y-3">
        <p className="uppercase">Hello,</p>
        <p className="text-4xl md:text-6xl font-bold text-black/80">I'm Faith</p>
        <p className="text-black/75 text-left">A Frontend Developer</p>
        <p className="text-black/75"> I am dedicated to crafting solutions that blend creativity with functionality.  I bring user-focused designs to life through clean, 
        responsive code ensuring a seamless experience for users across all devices. Let’s build something amazing together!.</p>
      
      <a className="inline-block primary-btn" href="mailto:faithodongo9@gmail.com">Hire Me</a>
      </div>
    </div>
</div>
</main>
    </div>
  )
}

export default FirstPage