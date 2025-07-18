import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import logo from '@/public/logo.png';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


const Navbar = () => {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = [
        // { id: 1, name: 'HOME', path: '/'},
        { id: 2, name: 'ABOUT US', path: '/about', to: '#about' },
        { id: 3, name: 'COURSES', path: '/courses', to: '#courses' },
        // { id: 4, name: 'ACTIVITIES', path: '/activities', to: '#activities' },
        { id: 4, name: 'COMPANIES', path: '/companies', to: '#companies' },
        { id: 5, name: 'CONTACT', path: '/contact', to: '#contact' },
    ];

    const images = [
        '/classroom/classroom1.jpg',
        '/classroom/classroom2.jpg',
        '/classroom/classroom3.jpg',
        '/classroom/classroom4.jpg',
        '/classroom/classroom5.jpg',
        '/classroom/classroom6.jpg',
    ];


    const slideContent = [
        {
            title: 'Empower with Education',
            subtitle: 'Hands-on training with real tools',
        },
        {
            title: 'Inspire Young Minds',
            subtitle: 'Uplift the next generation of digital learners',
        },
        {
            title: 'Shape Your Career',
            subtitle: 'Get skilled. Get certified. Get hired.',
        },
        {
            title: 'Learn by Doing',
            subtitle: 'Workshops, Labs, Projects, Guidance',
        },
        {
            title: 'Digital Literacy for All',
            subtitle: 'From beginners to pros — we teach them all',
        },
        {
            title: 'Build Your Future with Fortune',
            subtitle: '15+ Years of Excellence in Computer Education',
        },
    ];

    return (
        <header className='h-[550px]'>
            <div className={` sm:right-0 z-50 p-7 ${scrolled ? 'fixed top-0 left-0 bg-[#00000050] backdrop-blur-sm shadow-md' : ''}`}>
                <nav className='flex items-center justify-between p-2 pr-7 sm:w-full absolute top-0 left-0 z-50 bg-[#00000000] '>
                    <Link href="/" className='flex gap-5 font-bold text-[#fff]'>
                        {/* Add priority to the Image component */}
                        <Image
                            className='w-[50px] object-cover'
                            src={logo}
                            alt="Logo"
                            priority
                            width={100}
                            height={100}
                        />
                    </Link>

                    <div className='gap-10 text-[#ffffff] hidden sm:flex'>
                        {links.map((item, index) => (
                            <a href={item.to} key={index} >
                                <div className='flex flex-col'>
                                    <span className='befaft smooth relative font-semibold text-[18px]'>
                                        {item.name}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </nav>
            </div>

            {/* Hero Section with Swiper */}
            
            <section className="h-[50vh] sm:h-[75vh] flex items-center justify-center bg-[#000000] relative">
                <Swiper
                    effect="coverflow"
                    grabCursor
                    centeredSlides
                    slidesPerView="auto"
                    loop
                    autoplay={{
                        delay: 3000,
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
                        <SwiperSlide
                            key={idx}
                            className="relative w-[85vw] max-w-4xl h-[75vh]  rounded-2xl overflow-hidden shadow-2xl transition-all duration-500"
                        >
                            <Image
                                src={src}
                                alt={`Slide ${idx + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className="swiper-slide-image absolute inset-0 w-full h-full object-cover transition-all duration-500"
                            />

                            <div className="w-full h-full absolute flex flex-col items-center justify-center bg-opacity-50 bg-[#00000077] text-white z-10 text-center">
                                <h2 className="text-2xl md:text-3xl font-bold">{slideContent[idx].title}</h2>
                                <p className="text-sm md:text-lg opacity-90">{slideContent[idx].subtitle}</p>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </section>

        </header>

    )
}

export default Navbar
