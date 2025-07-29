"use client"
import About from './components/About';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Activities from './components/Activities';
import Companies from './components/Companies';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import logo from '@/public/logo.png';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showBox, setShowBox] = useState(true);

    const [menuOpen, setMenuOpen] = useState(false); // For mobile menu toggle
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      console.log(section)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setMenuOpen(false); 
    };
    const images = [
      '/classroom/classroom2.jpg',
      '/classroom/classroom3.jpg',
      '/classroom/classroom5.jpg',
      '/classroom/classroom6.jpg',
    ];

    const links = [
    { id: 1, name: 'COURSES', path: 'course'},
    { id: 2, name: 'FACULTY', path: 'faculty'},
    { id: 3, name: 'ADD ON', path: 'addon'},
    { id: 4, name: 'CONTACT', path: 'contact'},
  ];
   const link = [
    { id: 1, name: 'COURSES', path: 'course'},
    { id: 2, name: 'FACULTY', path: 'faculties'},
    { id: 3, name: 'ADD ON', path: 'addon'},
    { id: 4, name: 'CONTACT', path: 'contact'},
  ];

    const slideContent = [
      { title: 'Inspire Young Minds', subtitle: 'Uplift the next generation of digital learners' },
      { title: 'Shape Your Career', subtitle: 'Get skilled. Get certified. Get hired.' },
      { title: 'Digital Literacy for All', subtitle: 'From beginners to pros — we teach them all' },
      { title: 'Excellence Since 15 Years', subtitle: '15+ Years of Excellence in Computer Education' },
    ];
  return (
    <main className="bg-[#101129] relative text-white">

       <header className='h-[480px] bg-[#101129]  hidden md:block '>
      {/* Navbar */}
      <div className={`sm:right-0 z-50 p-7 fixed top-0 left-0 bg-[#00000050] backdrop-blur-sm shadow-md`}>
        <nav className='flex items-center justify-between px-2 pr-7 sm:w-full absolute top-0 left-0 z-50 bg-[#00000000]'>

        <Link
  href="/"
  className="flex items-center  ml-2 font-bold text-white"
>
  <Image
    src={logo}
    alt="Logo"
    priority
    width={52}
    height={52}
    className="object-contain"
  />
  <div className="flex flex-col w-full leading-tight">
    <span className="text-xl font-serif font-extrabold">
      FORTUNE INSTITUTE OF COMPUTER EDUCATION
    </span>
    <span className="text-xs opacity-80">
      BUILD YOUR DIGITAL FUTURE WITH FORTUNE....
    </span>
  </div>
</Link>

          {/* Mobile Hamburger Menu */}
          <div className="sm:hidden flex items-center gap-5">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              <span className="text-3xl">&#9776;</span> {/* Hamburger Icon */}
            </button>
          </div>

          {/* Desktop Links (by default visible on larger screens) */}
          <div className={`gap-10 text-[#ffffff] hidden lg:flex`}>
            {links.map((item, index) => (
              <button onClick={() =>scrollToSection(item.path)} key={index}>
                <div className='flex flex-col'>
                  <span className='relative font-semibold underline text-[18px]'>
                    {item.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </nav>
      </div>
      {/* Hero Section with Swiper */}
      <section className="h-[62vh] mt-20  flex items-center justify-center bg-[#101129] relative">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, EffectCoverflow]}
          className="w-full h-full"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx} className="relative w-[85vw] max-w-4xl h-[75vh] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500">
              <Image src={src} alt={`Slide ${idx + 1}`} layout="fill" objectFit="cover" className="swiper-slide-image absolute inset-0 w-full h-full object-cover transition-all duration-500" />
              <div className="w-full h-full absolute flex flex-col items-center justify-center bg-opacity-50 bg-[#00000077] text-white z-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold">{slideContent[idx].title}</h2>
                <p className="text-sm md:text-lg opacity-90">{slideContent[idx].subtitle}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </header>
    {/*This is for phone*/}
    <header className='h-full bg-[#101129] md:hidden block '>
      {/* Navbar */}
      <div className={`right-0 z-50 p-7 fixed top-0 left-0 bg-[#00000050] backdrop-blur-sm shadow-md`}>
        <nav className='flex items-center justify-between px-2 pr-7 w-full absolute top-0 left-0 z-50 bg-[#00000000]'>

        <Link
  href="/"
  className="flex items-center  ml-2 font-bold text-white"
>
  <Image
    src={logo}
    alt="Logo"
    priority
    width={52}
    height={52}
    className="object-contain"
  />
  <div className="flex flex-col w-full leading-tight">
    <span className="text-[11px] font-serif font-extrabold">
      FORTUNE INSTITUTE OF COMPUTER EDUCATION
    </span>
    <span className="text-[8px] opacity-80">
      BUILD YOUR DIGITAL FUTURE WITH FORTUNE....
    </span>
  </div>
</Link>

          {/* Mobile Hamburger Menu */}
          <div className="sm:hidden flex items-center gap-5">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              <span className="text-3xl">&#9776;</span> {/* Hamburger Icon */}
            </button>
          </div>
        </nav>

        {/* Mobile Menu (visible only for small and medium screens) */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col items-center z-50 bg-[#101129] p-4 absolute top-16 left-0 w-full">
            {link.map((item, index) => (
              <button onClick={() =>scrollToSection(item.path)} key={index} className="py-2 text-white text-lg">
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Hero Section with Swiper */}
      <section className="h-[40vh] w-[90vw] mx-5 mt-15 flex items-center justify-center bg-[#101129] relative">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, EffectCoverflow]}
          className="w-full h-full"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx} className="relative w-[85vw] max-w-4xl h-[75vh] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500">
              <Image src={src} alt={`Slide ${idx + 1}`} layout="fill" objectFit="cover" className="swiper-slide-image absolute inset-0 w-full h-full object-cover transition-all duration-500" />
              <div className="w-full h-full absolute flex flex-col items-center justify-center bg-opacity-50 bg-[#00000077] text-white z-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold">{slideContent[idx].title}</h2>
                <p className="text-sm md:text-lg opacity-90">{slideContent[idx].subtitle}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </header>

{showBox && (
  <div className="course-offer-box">
    <button className="close-button " onClick={() => setShowBox(false)}>×</button>
    <h4 className="offer-title">We Are Offering:</h4>
    <ul className="offer-list">
      <li>Tally, Advance Excel</li>
      <li>SAP</li>
      <li>Python, JAVA</li>
      <li>Data Structure, Data Analytics</li>
      <li>Web Development, Web Designing</li>
      <li>Graphic Designing</li>
      <li>Tuition for BCA, MCA, Engineering (CSE)</li>
      <li>1st to 10th All Subjects</li>
      <li>Accounts, Statistics, Maths</li>
      <li>DCA, PGDCA, Spoken English</li>
      <li>Placement Assistance</li>
    </ul>
  </div>
)}

      <About />
      
      <Courses />

      <Companies />

<Activities />
      
      <Contact  />

    </main>
  );
}
