
'use client';
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="mt-10  max-w-12xl  bg-black text-white"
      initial={{ opacity: 0, y: 50 }}                  
      whileInView={{ opacity: 1, y: 0 }}               
      transition={{ duration: 0.8, ease: 'easeOut' }} 
      viewport={{ once: true, amount: 0.3 }}           
    >
      <div className="bg-black text-white p-8 ">
            <div className="max-w-8xl mx-auto">
              <p className="text-lg leading-relaxed ">
                <span className="text-3xl font-serif leading-none">E</span>
               stablished in 2009, Fortune Institute of Computer Education is a proud CSC Academy-authorized center, dedicated to empowering students, professionals, and senior citizens through high-quality computer education.<strong>Our mission is to create exceptional value for our customers through high-quality products, personalized services, and cutting-edge solutions.</strong> We strive to foster long-term partnerships, drive continuous innovation, and uphold integrity in everything we do.
               </p>             
               </div>
          </div>
    </motion.section>
  );
};

export default About;