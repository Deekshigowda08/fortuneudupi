
'use client';
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="  max-w-12xl  bg-[#101129] text-white"
      initial={{ opacity: 0, y: 50 }}                  
      whileInView={{ opacity: 1, y: 0 }}               
      transition={{ duration: 0.8, ease: 'easeOut' }} 
      viewport={{ once: true, amount: 0.3 }}           
    >
      <div className="bg-[#101129] mt-4 text-white px-8 pb-8 ">
            <div className="max-w-8xl mx-auto">
              <p className="text-lg leading-relaxed ">
                <span className="text-3xl font-serif leading-none">E</span>
               stablished in 2009, <strong>Fortune Institute of Computer Education</strong> is a proud CSC Academy-authorized center, recognized and supported by the Government of India. We are committed to delivering accessible, high-quality computer education to students, professionals, and senior citizens alike.Our mission is to enrich learners with strong foundational and advanced skills in computer education by offering personalized learning experiences, modern curriculum, and practical hands-on training. We aim to cultivate a lifelong passion for learning, encourage academic and professional growth, and maintain the highest standards of integrity, inclusivity, and educational excellence.
               </p>             
               </div>
          </div>
    </motion.section>
  );
};

export default About;