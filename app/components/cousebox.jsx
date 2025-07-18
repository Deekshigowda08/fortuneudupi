'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCube, EffectCoverflow, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import Link from 'next/link';
import React from 'react';

export default function CourseBox({ image, title, link, description, id }) {
  return (
    <div
      className="bg-white rounded-md overflow-hidden shadow-2xl p-0 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg sticky md:static"
      style={{ top: `${100 + id * 30}px`, height: '300px' }}
    >
      {/* Image Container */}
      <div className="h-1/2 w-full relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover w-full h-full opacity-95"
          style={{
            filter: "blur(1px) brightness(0.5)"
          }}
        />
        
        {/* 50% OFF Badge */}
        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
          Limited Time Offer – Get 50% Off
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col h-1/2 relative z-10 bg-black">
        <h3 className="text-xs font-medium uppercase tracking-wider mb-2 text-white">{title}</h3>
        <p className="text-xs mb-4 flex-grow text-white">{description}</p>
        <div className="mt-auto">
          <Link
            href={link}
            className="inline-block bg-white text-black text-xs py-2 px-4 rounded-full hover:bg-gray-200 transition-colors"
          >
            Register →
          </Link>
        </div>
      </div>
    </div>
  );
}


{/* <Swiper
              modules={[Autoplay, EffectCube]}
              effect="cube"
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop
              cubeEffect={{
                shadow: true,
                slideShadows: false,
                shadowOffset: 10,
                shadowScale: 0.9,
              }}
              className="w-[220px] h-[220px] lg:w-[150px] lg:h-[150px] "
            >
              {programminglogos.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <div className="w-full h-full flex justify-center">
                    <Image
                      src={src}
                      alt={`Programming ${idx}`}
                      width={160}
                      height={160}
                      className="object-contain w-[69px] sm:w-[120px] "
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}