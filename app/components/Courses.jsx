// import React from 'react'
// import { FaLaptopCode, FaCertificate, FaChalkboardTeacher } from 'react-icons/fa';

// const Courses = () => {
//   return (
//     <section id="courses" className="bg-black py-16 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h3 className="text-3xl font-bold mb-8 text-center">Popular Courses</h3>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-zinc-800 p-6 rounded-2xl shadow hover:shadow-lg">
//               <FaLaptopCode className="text-4xl text-blue-600 mb-4" />
//               <h4 className="text-xl font-semibold mb-2">Programming Languages</h4>
//               <p>C, C++, Java, Python, Oracle DBMS, and more to boost your software skills.</p>
//             </div>
//             <div className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg">
//               <FaCertificate className="text-4xl text-green-600 mb-4" />
//               <h4 className="text-xl font-semibold mb-2">Certified Diploma Programs</h4>
//               <p>DCA, DIT, PGDIT, DFA with Microsoft, Tally, SAP & Busy Accounting certifications.</p>
//             </div>
//             <div className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg">
//               <FaChalkboardTeacher className="text-4xl text-purple-600 mb-4" />
//               <h4 className="text-xl font-semibold mb-2">Tuition & Skill Courses</h4>
//               <p>Computer science tuitions, fast typing, spoken English, and digital marketing.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//   )
// }

// export default Courses

'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCube, EffectCoverflow, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import Link from 'next/link';

const programmingLogos = [
  '/courses/c.png',
  '/courses/cpp.png',
  '/courses/java.png',
  '/courses/python.png',
  '/courses/r.png',
  '/courses/javascript.png',
  '/courses/sql.png',
  '/courses/oracle.jpg',
];

const designLogos = [
  '/courses/photoshop.png',
  '/courses/coreldraw.png',
  '/courses/indesign.png',
  '/courses/illustrator.png',
  '/courses/canva.png',
  '/courses/multimedia.jpg',
];

const businessLogos = [
  '/courses/word.webp',
  '/courses/excel.png',
  '/courses/powerpoint.png',
  '/courses/access.png',
  '/courses/tally.png',
  '/courses/typing.png',
  '/courses/eoffice.png',
];

const Courses = () => {
  return (
    <section id="courses" className="bg-black px-4">
      <h3 className="text-3xl sm:text-4xl font-bold text-center">Offered Courses</h3>

      <div className="lg:flex justify-evenly items-center gap-4">

        {/* Programming Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-4 tracking-wide">
            Programming Domain
          </h2>

          <Link href="/courses" className='flex bg-gradient-to-br from-[#ffffff] to-[#0035af] rounded-xl  items-center justify-center px-4 lg:max-w-[400px] lg:max-h-[400px] max-w-[700px] max-h-[300px] hover:scale-105 smooth cursor-pointer'>
            <Swiper
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
              {programmingLogos.map((src, idx) => (
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
            </Swiper>
            <div className='text-center p-2 text-lg text-[#2c2c2c] '>C, C++, Java, Python, Oracle DBMS, and more to boost your software skills. </div>
          </Link>


          <style jsx global>{`
    .swiper-cube-shadow {
      background: rgba(0, 0, 0, 0.2);
    }
  `}</style>
        </div>


        {/* Design Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-4 tracking-wide">
            Design & Multimedia
          </h2>

          <Link href="/courses" className='flex bg-gradient-to-br from-[#ffffff] to-[#6e94fd] rounded-xl  items-center justify-center px-4 lg:max-w-[400px] lg:max-h-[400px] max-w-[700px] max-h-[300px] hover:scale-105 smooth cursor-pointer'>
            <Swiper
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
              {designLogos.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <div className="w-full h-full flex justify-center">
                    <Image
                      src={src}
                      alt={`Design ${idx}`}
                      width={160}
                      height={160}
                      className="object-contain w-[69px] sm:w-[120px] "
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='text-center p-2 text-lg text-[#2c2c2c] '>DCA, DIT, PGDIT, DFA with Microsoft, Tally, SAP & Busy Accounting certifications.</div>
          </Link>


          <style jsx global>{`
    .swiper-cube-shadow {
      background: rgba(0, 0, 0, 0.2);
    }
  `}</style>
        </div>


        {/* Business Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-4 tracking-wide">
            Business & Office Tools
          </h2>

          <Link href="/courses" className='flex bg-gradient-to-br from-[#f7e6ff] to-[#b44cff] rounded-xl  items-center justify-center px-4 lg:max-w-[400px] lg:max-h-[400px] max-w-[700px] max-h-[300px] hover:scale-105 smooth cursor-pointer'>
            <Swiper
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
              {businessLogos.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <div className="w-full h-full flex justify-center">
                    <Image
                      src={src}
                      alt={`Business ${idx}`}
                      width={160}
                      height={160}
                      className="object-contain w-[69px] sm:w-[120px] "
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='text-center p-2 text-lg text-[#2c2c2c] '>Computer science tuitions, fast typing, spoken English, and digital marketing. </div>
          </Link>


          <style jsx global>{`
    .swiper-cube-shadow {
      background: rgba(0, 0, 0, 0.2);
    }
  `}</style>
        </div>

      </div>
    </section>
  );
}

export default Courses