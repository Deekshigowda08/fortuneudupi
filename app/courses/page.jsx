"use client";

import React from "react";
import { FaLaptopCode, FaCertificate, FaChalkboardTeacher } from "react-icons/fa";

const programmingCourses = [
  {
    name: "C Programming",
    description: "Master the fundamentals of C with hands-on coding sessions.",
    duration: "1.5 Months",
    price: "₹3,000",
  },
  {
    name: "C++ Programming",
    description:
      "Object-oriented programming from basics to advanced with projects.",
    duration: "2 Months",
    price: "₹3,500",
  },
  {
    name: "Java",
    description: "Core and Advanced Java for desktop and web app development.",
    duration: "2.5 Months",
    price: "₹4,000",
  },
  {
    name: "Python",
    description:
      "Industry-focused Python course including automation and basics of ML.",
    duration: "2 Months",
    price: "₹4,000",
  },
  {
    name: "Oracle DBMS",
    description:
      "SQL, PL/SQL and database management systems with practical exposure.",
    duration: "1.5 Months",
    price: "₹3,500",
  },
];

const diplomaCourses = [
  {
    name: "DCA (Diploma in Computer Applications)",
    description:
      "Covers basics to intermediate level software and tools: MS Office, Tally, Internet.",
    duration: "3 Months",
    price: "₹6,000",
  },
  {
    name: "PGDIT (Post Graduate Diploma in IT)",
    description:
      "Advanced level diploma for IT professionals: Networking, Software Engineering, DBMS.",
    duration: "6 Months",
    price: "₹10,000",
  },
  {
    name: "DFA (Diploma in Financial Accounting)",
    description:
      "Focus on accounting software: Tally, Busy, SAP (basic).",
    duration: "2 Months",
    price: "₹5,000",
  },
];

const skillCourses = [
  {
    name: "Computer Science Tuition",
    description:
      "Guided lessons for PUC & BSc/BCA Computer Science students.",
    duration: "Depends on syllabus",
    price: "₹1,500/month",
  },
  {
    name: "Fast Typing",
    description:
      "Professional typing skills with speed tests and certification.",
    duration: "1 Month",
    price: "₹2,000",
  },
  {
    name: "Spoken English",
    description:
      "Conversational English, interview skills and confidence building.",
    duration: "1.5 Months",
    price: "₹2,500",
  },
  {
    name: "Digital Marketing",
    description: "Social media, SEO, and content marketing fundamentals.",
    duration: "1.5 Months",
    price: "₹4,000",
  },
];

const Section = ({ title, icon, courses }) => (
  <section className="mb-20">
    <div className="flex items-center gap-4 mb-6">
      {icon}
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-200 rounded-xl shadow p-6 hover:shadow-lg transition-all duration-300"
        >
          <h3 className="text-xl font-semibold mb-2 text-blue-800">
            {course.name}
          </h3>
          <p className="text-sm mb-2 text-gray-600">{course.description}</p>
          <p className="text-sm font-medium">
            Duration: <span className="text-gray-700">{course.duration}</span>
          </p>
          <p className="text-sm font-medium">
            Price: <span className="text-green-700">{course.price}</span>
          </p>
          <p className="text-sm font-medium">
            Price: <span className="text-green-700">{course.price}</span>
          </p>
          <a href={`/register?course=${encodeURIComponent(course.name)}`}>
            <button className="mt-4 cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Register
            </button>
          </a>

        </div>
      ))}
    </div>
  </section>
);

const CoursesPage = () => {
  return (
    <main className="bg-gradient-to-br from-gray-100 to-white text-gray-800 font-sans min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Course Domains</h1>
        <Section
          title="Programming Languages"
          icon={<FaLaptopCode className="text-4xl text-blue-600 mb-1" />}
          courses={programmingCourses}
        />
        <Section
          title="Certified Diploma Programs"
          icon={<FaCertificate className="text-4xl text-green-600 mb-1" />}
          courses={diplomaCourses}
        />
        <Section
          title="Tuition & Skill Courses"
          icon={<FaChalkboardTeacher className="text-4xl text-purple-600 mb-1" />}
          courses={skillCourses}
        />
      </div>
    </main>
  );
};

export default CoursesPage;
