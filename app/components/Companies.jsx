'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'

const teachers = [
  { 
    photo: '/companies/randomperson.jpg', 
    name: 'John Doe', 
    description: 'Experienced software engineer with expertise in full-stack development. Passionate about teaching and mentoring students in tech.',
    gradient: 'linear-gradient(135deg, #1e3c72, #2a5298)' 
  },
  { 
    photo: '/companies/randomperson.jpg', 
    name: 'Sarah Collins', 
    description: 'Senior consultant at Capgemini with over 15 years of experience in business transformation and strategic consulting.',
    gradient: 'linear-gradient(135deg, #000428, #004e92)' 
  },
  { 
    photo: '/companies/randomperson.jpg', 
    name: 'Arun Patel', 
    description: 'AI/ML specialist with a passion for delivering innovative solutions. Arun has worked with Wipro for over 10 years.',
    gradient: 'linear-gradient(135deg, #8e2de2, #4a00e0)' 
  },
  { 
    photo: '/companies/randomperson.jpg', 
    name: 'Clara Thompson', 
    description: 'A leader in cloud computing, Clara has spent over 12 years innovating with IBM. She’s an advocate for sustainable technology solutions.',
    gradient: 'linear-gradient(135deg, #0f0f0f, #1a1a1a)' 
  },
  { 
    photo: '/companies/randomperson.jpg', 
    name: 'Michael Johnson', 
    description: 'With a wealth of experience in management consulting, Michael specializes in finance and digital transformation.',
    gradient: 'linear-gradient(135deg, #000000, #43e97b)' 
  },
  { 
    photo: '/companies/randomperson.jpg', 
    name: 'Priya Sharma', 
    description: 'An expert in data science and analytics, Priya has helped multiple companies unlock insights from complex data at Genpact.',
    gradient: 'linear-gradient(135deg, #2c3e50, #4ca1af)' 
  },
  { 
    photo: '/companies/randomperson.jpg', 
    name: 'Vikram Singh', 
    description: 'A steel industry veteran, Vikram is a subject matter expert in industrial engineering and supply chain optimization.',
    gradient: 'linear-gradient(135deg, #000428, #004e92)' 
  },
  { 
    photo: '/companies/randomperson.jpg', 
    name: 'Emma Roberts', 
    description: 'Digital transformation consultant at Accenture, Emma specializes in the adoption of emerging technologies to streamline business operations.',
    gradient: 'linear-gradient(135deg, #654ea3, #eaafc8)' 
  },
  { 
    photo: '/companies/randomperson.jpg', 
    name: 'James Martinez', 
    description: 'James is a hospitality management expert with over 20 years of experience in the luxury hotel industry, working across global brands.',
    gradient: 'linear-gradient(135deg, #f7971e, #ffd200)' 
  },
  { 
    photo: '/companies/randomperson.jpg', 
    name: 'Ravi Desai', 
    description: 'Ravi has been instrumental in driving hospitality innovation and sustainable tourism practices at ITC Hotels.',
    gradient: 'linear-gradient(135deg, #dce35b, #45b649)' 
  },
  { 
    photo: '/companies/randomperson.jpg', 
    name: 'Sophia Zhang', 
    description: 'Sophia brings extensive expertise in hotel management and operations, ensuring Novotel stays at the forefront of guest experiences.',
    gradient: 'linear-gradient(135deg, #0575e6, #021b79)' 
  },
  { 
    photo: '/companies/randomperson.jpg', 
    name: 'Amit Kumar', 
    description: 'Amit has over 15 years of experience managing luxury hotel brands, with a focus on customer satisfaction and operational excellence.',
    gradient: 'linear-gradient(135deg, #8e0e00, #1f1c18)' 
  },
  { 
    photo: '/companies/randomperson.jpg', 
    name: 'Neha Bansal', 
    description: 'Neha is a seasoned IT consultant with deep expertise in business process outsourcing and customer relationship management.',
    gradient: 'linear-gradient(135deg, #ff4b1f, #1fddff)' 
  },
  { 
    photo: '/companies/randomperson.jpg', 
    name: 'Raghav Gupta', 
    description: 'A digital strategy expert with a passion for driving innovation at ITC Infotech, Raghav has worked on numerous global transformation projects.',
    gradient: 'linear-gradient(135deg, #ffe000, #799f0c)' 
  },
];

const Companies = () => {
  return (
    <>
    <section  id="faculty" className="w-[99vw] overflow-hidden h-full mx-auto hidden md:block mt-10 px-5">
      <h3 className="text-5xl mb-7 font-bold text-center">Our Faculty</h3>

      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start mb-10'>
        <div className='max-w-3xl sm:text-lg leading-relaxed sm:mt-30 mt-1  ml-10'>
          <span className="text-3xl  font-serif  leading-none">O</span>ur faculty members bring a wealth of experience and in-depth knowledge to every course they teach. Each instructor is an expert in their respective domain, possessing not only a comprehensive understanding of the subject matter but also a proven track record of excellence in teaching. With a passion for education, <strong>they have successfully mentored and guided over 500 students</strong>, helping them achieve their academic and professional goals. Our educators combine years of practical experience with a commitment to fostering an engaging, dynamic learning environment. Their ability to break down complex concepts and present them in a clear, approachable manner ensures that every student receives the highest quality of instruction. We take pride in our faculty's dedication to empowering students and driving success, making them some of the best in the industry.
        </div>

        <Swiper
          modules={[EffectCards, Autoplay]}
          effect="cards"
          grabCursor={true}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          className="h-[300px] w-full sm:h-[500px] sm:w-[300px] mx-auto"
        >
          {teachers.map(({ photo, name, description, gradient }, index) => (
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
              <div className="text-center p-4 bg-white bg-opacity-70 rounded-lg shadow-md">
                {/* Teacher Photo */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden">
                  <img
                    src={photo}
                    alt={name}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Teacher Name and Description */}
                <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mt-4">{name}</h3>
                <p className="text-sm sm:text-lg text-gray-600 mt-2">{description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

    {/* This is for phone */}
    <section  id="faculties" className="w-[100vw] overflow-hidden h-full mx-auto md:hidden block mt-10 px-5">
      <h3 className="text-3xl mb-7 font-bold text-center">About Faculty</h3>

      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start mb-10'>
        <div className='max-w-3xl sm:text-lg leading-relaxed sm:mt-30 mt-1  ml-6'>
          <span className="text-3xl  font-serif  leading-none">O</span>ur faculty members bring a wealth of experience and in-depth knowledge to every course they teach. Each instructor is an expert in their respective domain, possessing not only a comprehensive understanding of the subject matter but also a proven track record of excellence in teaching. With a passion for education, <strong>they have successfully mentored and guided over 500 students</strong>
        </div>

        <Swiper
          modules={[EffectCards, Autoplay]}
          effect="cards"
          grabCursor={true}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          className="h-[350px] w-[300px] mt-10 mx-auto overflow-hidden"
        >
          {teachers.map(({ photo, name, description, gradient }, index) => (
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
              <div className="text-center p-4 bg-white bg-opacity-70 rounded-lg shadow-md">
                {/* Teacher Photo */}
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden">
                  <img
                    src={photo}
                    alt={name}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Teacher Name and Description */}
                <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mt-4">{name}</h3>
                <p className="text-sm sm:text-lg text-gray-600 mt-2">{description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </>
  )
}

export default Companies;
