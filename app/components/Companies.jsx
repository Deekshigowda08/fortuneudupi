'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'

const teachers = [
  { 
    name: 'Chinthan', 
    description: 'Fortune Institute is an excellent coaching center that provides top-notch computer education at a reasonable price. The faculty is highly knowledgeable and supportive, providing a conducive learning environment.',
    gradient: 'linear-gradient(135deg, #1e3c72, #2a5298)' 
  },
  { 
    name: 'Vaibhavi', 
    description: 'The faculty are well experienced & class has very well maintained computers. One thing i love is teachers give individual attention to everyone with patience.',
    gradient: 'linear-gradient(135deg, #000428, #004e92)' 
  },
  {  
    name: 'Shravya', 
    description: 'Lectures are friendly and helped me to clear the doubts whenever required and subjects are clearly understood',
    gradient: 'linear-gradient(135deg, #8e2de2, #4a00e0)' 
  },
  { 
    name: 'Kishor', 
    description: 'Fortune Institute Of Computer Education offers multiple facilities including well-equipped computer labs, a library with a vast collection of resources, and comfortable study areas. Excellent!',
    gradient: 'linear-gradient(135deg, #ffe000, #799f0c)'
  },
  { 
    name: 'Nayana shetty', 
    description: 'Fortune Institute of Computer Education has excellent faculty who are experts in their field. The coaching centre offers high-quality education at a reasonably priced. The faculty provides personalized attention and guidance to help students achieve their goals.',
    gradient: 'linear-gradient(135deg, #000000, #43e97b)' 
  },
  {  
    name: 'Rakesh', 
    description: 'Fortune Institute of Computer Education is an excellent coaching center that provides top-notch computer education without any extra fees. Their comprehensive courses and experienced instructors ensure that students receive the best quality education in the field of computer science.',
    gradient: 'linear-gradient(135deg, #2c3e50, #4ca1af)' 
  },
   { 
    name: 'Chinthan', 
    description: 'Fortune Institute is an excellent coaching center that provides top-notch computer education at a reasonable price. The faculty is highly knowledgeable and supportive, providing a conducive learning environment.',
    gradient: 'linear-gradient(135deg, #1e3c72, #2a5298)' 
  },
  { 
    name: 'Vaibhavi', 
    description: 'The faculty are well experienced & class has very well maintained computers. One thing i love is teachers give individual attention to everyone with patience.',
    gradient: 'linear-gradient(135deg, #000428, #004e92)' 
  },
  {  
    name: 'Shravya', 
    description: 'Lectures are friendly and helped me to clear the doubts whenever required and subjects are clearly understood',
    gradient: 'linear-gradient(135deg, #8e2de2, #4a00e0)' 
  },
  { 
    name: 'Kishor', 
    description: 'Fortune Institute Of Computer Education offers multiple facilities including well-equipped computer labs, a library with a vast collection of resources, and comfortable study areas. Excellent!',
    gradient: 'linear-gradient(135deg, #ffe000, #799f0c)'
  },
  { 
    name: 'Nayana shetty', 
    description: 'Fortune Institute of Computer Education has excellent faculty who are experts in their field. The coaching centre offers high-quality education at a reasonably priced. The faculty provides personalized attention and guidance to help students achieve their goals.',
    gradient: 'linear-gradient(135deg, #000000, #43e97b)' 
  },
  {  
    name: 'Rakesh', 
    description: 'Fortune Institute of Computer Education is an excellent coaching center that provides top-notch computer education without any extra fees. Their comprehensive courses and experienced instructors ensure that students receive the best quality education in the field of computer science.',
    gradient: 'linear-gradient(135deg, #2c3e50, #4ca1af)' 
  },
   { 
    name: 'Chinthan', 
    description: 'Fortune Institute is an excellent coaching center that provides top-notch computer education at a reasonable price. The faculty is highly knowledgeable and supportive, providing a conducive learning environment.',
    gradient: 'linear-gradient(135deg, #1e3c72, #2a5298)' 
  },
  { 
    name: 'Vaibhavi', 
    description: 'The faculty are well experienced & class has very well maintained computers. One thing i love is teachers give individual attention to everyone with patience.',
    gradient: 'linear-gradient(135deg, #000428, #004e92)' 
  },
  {  
    name: 'Shravya', 
    description: 'Lectures are friendly and helped me to clear the doubts whenever required and subjects are clearly understood',
    gradient: 'linear-gradient(135deg, #8e2de2, #4a00e0)' 
  },
  { 
    name: 'Kishor', 
    description: 'Fortune Institute Of Computer Education offers multiple facilities including well-equipped computer labs, a library with a vast collection of resources, and comfortable study areas. Excellent!',
    gradient: 'linear-gradient(135deg, #ffe000, #799f0c)'
  },
  { 
    name: 'Nayana shetty', 
    description: 'Fortune Institute of Computer Education has excellent faculty who are experts in their field. The coaching centre offers high-quality education at a reasonably priced. The faculty provides personalized attention and guidance to help students achieve their goals.',
    gradient: 'linear-gradient(135deg, #000000, #43e97b)' 
  },
  {  
    name: 'Rakesh', 
    description: 'Fortune Institute of Computer Education is an excellent coaching center that provides top-notch computer education without any extra fees. Their comprehensive courses and experienced instructors ensure that students receive the best quality education in the field of computer science.',
    gradient: 'linear-gradient(135deg, #2c3e50, #4ca1af)' 
  },
];

const Companies = () => {
  return (
    <section
      id="faculty"
      className="w-full overflow-hidden h-full mx-auto bg-[#101129] mt-10 px-5"
    >
      <h3 className="text-2xl sm:text-3xl md:text-4xl mb-7 font-bold text-center text-white">
        About Faculty And Students
      </h3>

      <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="text-white max-w-3xl text-base sm:text-lg leading-relaxed">
          <span className="text-2xl sm:text-3xl font-serif leading-none">O</span>
          ur faculty members bring a wealth of experience and in-depth knowledge to every course they teach. Each instructor is an expert in their respective domain, possessing not only a comprehensive understanding of the subject matter but also a proven track record of excellence in teaching. With a passion for education, <strong>they have successfully mentored and guided over 500 students</strong>, helping them achieve their academic and professional goals. Our educators combine years of practical experience with a commitment to fostering an engaging, dynamic learning environment. Their ability to break down complex concepts and present them in a clear, approachable manner ensures that every student receives the highest quality of instruction.
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[EffectCards, Autoplay]}
          effect="cards"
          grabCursor={true}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="h-[400px] w-[300px] sm:h-[400px] sm:w-[300px] md:h-[450px] md:w-[300px] mb-10"
        >
          {teachers.map(({ name, description, gradient }, index) => (
            <SwiperSlide
              key={index}
              style={{
                backgroundImage: gradient,
                borderRadius: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem",
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              <div className="text-center p-4 bg-white bg-opacity-70 rounded-lg shadow-md">
                <p className="text-md sm:text-lg font-semibold text-gray-600 mt-2">
                  "{description}"
                </p>
                <p className="text-sm sm:text-base text-right font-bold text-gray-800 mt-4">
                  - {name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Companies;
