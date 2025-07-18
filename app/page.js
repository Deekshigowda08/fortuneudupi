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
      
      <Courses />

      <Companies />

<Activities/>
      
      <Contact />

    </main>
  );
}
