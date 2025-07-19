'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCube, EffectCoverflow, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import CourseBox from './cousebox';

const Courses = () => {
  return (
    <section id="course" className="bg-white h-full text-black w-full px-10 py-4">
      <h3 className="md:text-5xl text-3xl sticky md:static  py-2 mb-2 font-extrabold text-center" style={{ top: `${70}px`}}>Offered Courses</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<CourseBox image='/courses/basic.png' title="BASIC COMPUTER APPLICATION" link="/register?course=BASIC_COMPUTER_APPLICATION" description="A basic computer application course that includes fundamentals of IT, Windows, Microsoft Word, PowerPoint, Excel, and Internet usage." id={1} />
 <CourseBox image='/courses/deploma.png' title="DIPLOMA COURSES" link="/register?course=DIPLOMA_COURSES" description="This course is designed for individuals seeking comprehensive expertise in the digital domain.We offer diploma programs across various fields." id={2} />
 <CourseBox image='/courses/pgc.png' title="post graduate course" link="/register?course=Post_graduate_course" description="We offer PG in Diploma in Computer Applications,IT, and Commercial Applications, which include modules in C, C++, Java, and presentation skills." id={3} /> 
 <CourseBox image='/courses/certi.png' title="certification course" link="/register?course=Certification_course" description="We offer certification courses in E-Office Management, E-Finance,Communication English and designed to enhance digital proficiency." id={4} />
 <CourseBox image='/courses/tution.png' title="tution classes" link="/register?course=Tution_classes" description="We offer tuition classes for students from 1st to 12th, covering a wide range of subjects with personalized attention and guidance to help in excel academically." id={5} />
 <CourseBox image='/courses/english.png' title="spoken english courses" link="/register?course=Spoken_english_courses" description="We offer Spoken English courses to improve fluency, pronunciation, confidence, and everyday communication skills" id={6} />  
 <CourseBox image='/courses/demanded.png' title="demanded technologies" link="/register?course=Demanded_technologies" description="We offer in-demand technology courses including SAP, Artificial Intelligence & Machine Learning, and Data Science" id={7} />      

      </div>
    </section>
  );
}

export default Courses