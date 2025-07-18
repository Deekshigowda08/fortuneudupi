// import React from 'react'

// const About = () => {
//   return (
//     <section id="about" className="pt-40 px-4 max-w-4xl mx-auto bg-black">
//         <h3 className="text-3xl font-bold mb-6 text-center">About Us</h3>
//         <p className="text-lg leading-relaxed text-center">
//           Established in 2009, Fortune Institute of Computer Education is a CSC Academy-authorized center committed to providing quality computer education to students, working professionals, and senior citizens. Our mission is to make digital skills accessible to everyone and create employment opportunities through practical training, certified programs, and project guidance.
//         </p>
//       </section>
//   )
// }

// export default About

'use client';
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="mt-20 px-4 max-w-4xl mx-auto bg-black text-white"
      initial={{ opacity: 0, y: 50 }}                  
      whileInView={{ opacity: 1, y: 0 }}               
      transition={{ duration: 0.8, ease: 'easeOut' }} 
      viewport={{ once: true, amount: 0.3 }}           
    >
      <h3 className="text-3xl font-bold mb-6 text-center">About Us</h3>
      <p className="text-lg leading-relaxed text-center">
        Established in 2009, Fortune Institute of Computer Education is a CSC Academy-authorized center committed to providing quality computer education to students, working professionals, and senior citizens. Our mission is to make digital skills accessible to everyone and create employment opportunities through practical training, certified programs, and project guidance.
      </p>
    </motion.section>
  );
};

export default About;
