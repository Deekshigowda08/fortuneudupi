'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { motion } from 'framer-motion'
import Link from 'next/link'

const companies = [
  { logo: '/companies/tcs.png', gradient: 'linear-gradient(135deg, #1e3c72, #2a5298)' },
  { logo: '/companies/capgemini.webp', gradient: 'linear-gradient(135deg, #000428, #004e92)' }, // changed to dark blue
  { logo: '/companies/wipro.png', gradient: 'linear-gradient(135deg, #8e2de2, #4a00e0)' },
  { logo: '/companies/ibm.png', gradient: 'linear-gradient(135deg, #0f0f0f, #1a1a1a)' }, // changed to deep gray
  { logo: '/companies/deloitte.png', gradient: 'linear-gradient(135deg, #000000, #43e97b)' },
  { logo: '/companies/genpact.png', gradient: 'linear-gradient(135deg, #2c3e50, #4ca1af)' }, // ocean blue dark
  { logo: '/companies/tata-steel.webp', gradient: 'linear-gradient(135deg, #000428, #004e92)' },
  { logo: '/companies/accenture.png', gradient: 'linear-gradient(135deg, #654ea3, #eaafc8)' },
  { logo: '/companies/pride-hotels.png', gradient: 'linear-gradient(135deg, #f7971e, #ffd200)' },
  { logo: '/companies/itc-hotels.png', gradient: 'linear-gradient(135deg, #dce35b, #45b649)' },
  { logo: '/companies/novotel.png', gradient: 'linear-gradient(135deg, #0575e6, #021b79)' },
  { logo: '/companies/taj.png', gradient: 'linear-gradient(135deg, #8e0e00, #1f1c18)' },
  { logo: '/companies/tech-mahindra.png', gradient: 'linear-gradient(135deg, #ff4b1f, #1fddff)' },
  { logo: '/companies/itc-infotech.png', gradient: 'linear-gradient(135deg, #ffe000, #799f0c)' },
  { logo: '/companies/birlasoft.png', gradient: 'linear-gradient(135deg, #6a11cb, #2575fc)' },
  { logo: '/companies/marriott.png', gradient: 'linear-gradient(135deg, #c31432, #240b36)' },
  { logo: '/companies/the-oberoi.jpeg', gradient: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)' },
  { logo: '/companies/the-park.jpg', gradient: 'linear-gradient(135deg, #fc4a1a, #f7b733)' },
  { logo: '/companies/vedic-village.jpeg', gradient: 'linear-gradient(135deg, #56ab2f, #a8e063)' },
  { logo: '/companies/yash-technologies.jpeg', gradient: 'linear-gradient(135deg, #141e30, #243b55)' },
  { logo: '/companies/arodek.jpeg', gradient: 'linear-gradient(135deg, #373b44, #4286f4)' },
  { logo: '/companies/ntt-data.png', gradient: 'linear-gradient(135deg, #1d4350, #a43931)' },
  { logo: '/companies/patton.png', gradient: 'linear-gradient(135deg, #000000, #333333)' }, // changed to pure dark gray
  { logo: '/companies/visa-steel.jpg', gradient: 'linear-gradient(135deg, #7b4397, #dc2430)' },
]


const Companies = () => {
  return (
    <section id='companies' className="max-w-sm mx-auto mt-20">
      <h3 className="text-4xl mb-7 font-bold text-center">Partnered Companies</h3>

      <Swiper
        modules={[EffectCards, Autoplay]}
        effect="cards"
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="h-[300px] w-full"
      >
        {companies.map(({ logo, gradient }, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: gradient,
              borderRadius: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '1rem',
              boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            }}
          >
            <Image
              src={logo}
              alt={`Company ${index}`}
              width={200}
              height={100}
              className="object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper> 
      <div className="flex flex-col items-center justify-center mt-20 space-y-8 px-4 text-center">
      
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00095f] to-[#2599ff] animate-gradient-text"
      >
        Build your <span className="text-[#00ffff]">Fortune</span> with us
      </motion.p>

      <Link 
        href="/courses"
        className="px-6 smooth py-3 bg-gradient-to-br from-[#00ffff] to-[#00095f] border border-[#ffffff] text-black font-semibold rounded-xl backdrop-blur-lg shadow-xl transition duration-300 ease-in-out hover:scale-105 active:scale-95"
      >
        Register to a course
      </Link>
    </div>
    </section>
  )
}

export default Companies
