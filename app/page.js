"use client"
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Activities from './components/Activities';
import Companies from './components/Companies';

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Navbar />

      <About />
      
      <div className='h-[2px] bg-[#ffffff69] w-full my-20'></div>
      
      <Courses />
      
      <div className='h-[2px] bg-[#ffffff69] w-full my-20'></div>

      {/* <Activities /> */}

      <Companies />

      <div className='h-[2px] bg-[#ffffff69] w-full my-20'></div>
      
      <Contact />

    </main>
  );
}
