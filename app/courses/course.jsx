"use client"
import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';
import React, { Suspense } from 'react';
import { useSearchParams } from "next/navigation";

const coursesData = [
  {
    title: "Diploma in Computer Applications (DCA)",
    image: "https://source.unsplash.com/400x300/?computer,office",
    highlights: ["Basic of IT","Windows","MS Office","Word","Power Pount","Excel","Acess","HTML", "Web Technology", "Tally Prime", "Printing","Presentation"],
    description: "We provide training and support in essential Information Technology areas, including Windows, Microsoft Office applications such as Word, PowerPoint, Excel, and Access; web technologies like HTML; accounting software Tally Prime; printing processes; presentation techniques; and overall computer fundamentals.",
    type: "Diploma",
    duration: "6 Months"
  },
  {
    title: "Diploma in Information Technology (DIT)",
    image: "https://source.unsplash.com/400x300/?technology,education",
    highlights: ["Basic of IT","Windows","MS Office","Word","Power Pount","Excel","Acess","HTML", "Web Technology", "Tally Prime", "Printing","Adobe Photoshop","Presentation"],
    description: "We provide comprehensive training in foundational and advanced Information Technology topics, including computer basics, Windows operating system, Microsoft Office tools such as Word, PowerPoint, Excel, and Access, web technologies like HTML and website development, Tally Prime for accounting, printing techniques, Adobe Photoshop for graphic design, and effective presentation skills",
    type: "Diploma",
    duration: "6 Months"
  },
  {
    title: "Diploma in Commercial Applications (DCOM)",
    image: "https://source.unsplash.com/400x300/?business,technology",
    highlights: ["Basic of IT","Windows","MS Office","Word","Power Pount","Excel","Acess","HTML", "Web Technology", "Tally Prime", "Printing","English and Kannada Typing","Presentation"],
    description: "We offer comprehensive training in a wide range of Information Technology topics, including basic computer skills, Windows operating system, Microsoft Office suite—Word, PowerPoint, Excel, and Access—web technologies such as HTML and website development, accounting software Tally Prime, printing processes, professional presentation techniques, and English and Kannada typing proficiency",
    type: "Diploma",
    duration: "6 Months"
  },
  {
    title: "Post Graduate Diploma in Computer Applications (PGDCA)",
    image: "https://source.unsplash.com/400x300/?coding,advanced",
    highlights: ["DCA/DIT/DCOM","C", "C++", "Java", "Presentation"],
    description: "We provide training in foundational and advanced IT courses such as DCA (Diploma in Computer Applications), DIT (Diploma in Information Technology), and DCOM (Diploma in Computer Operation & Management), along with programming languages including C, C++, and Java, as well as professional presentation skills for effective communication and public speaking.",
    type: "Professional",
    duration: "9 Months"
  },
  {
    title: "Diploma in E-Business",
    image: "https://source.unsplash.com/400x300/?ecommerce,business",
    highlights: ["Certificate in E-Office", "Certificate in E-Finance", "Presentation"],
    description: "The Certificate in E-Office equips individuals with essential skills in using digital office tools such as word processors, spreadsheets, and cloud-based collaboration platforms to enhance workplace productivity. The Certificate in E-Finance focuses on electronic financial systems, providing knowledge of online banking, digital transactions, and financial management software. A presentation is a structured method of delivering information to an audience, typically using visual aids like slides to explain concepts, share insights, or support decision-making.",
    type: "Diploma",
    duration: "4 Months"
  },
  {
    title: "Certificate in E-Office",
    image: "https://source.unsplash.com/400x300/?office,training",
    highlights: ["Basic of IT","Windows","MS Word", "Excel", "Access", "PowerPoint"],
    description: "This course provides comprehensive training in fundamental IT skills, covering essential topics such as the Basics of Information Technology, Windows operating system, and key Microsoft Office applications. Learners will gain hands-on experience with MS Word for document creation, Excel for data analysis and spreadsheet management, Access for database handling, and PowerPoint for creating impactful presentations. The curriculum is designed to build practical proficiency in everyday digital tools used across modern workplaces.",
    type: "Certificate",
    duration: "2 Months"
  },
  {
    title: "Certificate in E-Finance",
    image: "https://source.unsplash.com/400x300/?finance,tally",
    highlights: ["Tally Prime(GST)","Tally Prime(VAT)", "Tally Project", "Basic Excel", "MS Advance Excel"],
    description: "This course offers in-depth training in financial and accounting software, focusing on practical applications of Tally Prime with modules on both GST and VAT compliance. Participants will also engage in a Tally Project to apply their learning in real-world scenarios. In addition, the course covers Basic Excel for foundational spreadsheet skills and progresses to MS Advanced Excel, equipping learners with tools for complex data analysis, automation, and professional reporting.",
    type: "Certificate",
    duration: "2 Months"
  },
  {
    title: "Diploma in Desktop Publishing (DTP)",
    image: "https://source.unsplash.com/400x300/?photoshop,coreldraw",
    highlights: ["Photoshop", "CorelDRAW", "InDesign"],
    description: "This course provides hands-on training in professional graphic design tools, including Adobe Photoshop for image editing and retouching, CorelDRAW for vector illustration and layout design, and Adobe InDesign for creating visually compelling print and digital publications. Learners will develop practical skills in visualcomposition, branding, and design workflows used across creative industries ",
    type: "Diploma",
    duration: "3 Months"
  },
  {
    title: "Diploma in Graphic Designing",
    image: "https://source.unsplash.com/400x300/?graphic,design",
    highlights: ["Photoshop", "Illustrator", "Canva"],
    description: "This course offers practical training in modern graphic design tools, covering Adobe Photoshop for image editing, Adobe Illustrator for vector graphics and illustrations, and Canva for quick, user-friendly design creation. Learners will gain essential skills in visual storytelling, branding, and layout design suitable for both professional and personal projects.",
    type: "Diploma",
    duration: "6 Months"
  },
  {
    title: "Diploma in Web Designing",
    image: "https://source.unsplash.com/400x300/?webdesign,html",
    highlights: ["Internet Technology","HTML", "Illustrator", "Photoshop", "CorelDRAW", "InDesign"],
    description: "This course provides comprehensive training in web and graphic design, starting with Internet Technology and HTML to build foundational web development skills. It also includes hands-on learning with industry-standard design tools such as Adobe Illustrator for vector graphics, Adobe Photoshop for image editing, CorelDRAW for layout and illustration, and Adobe InDesign for professional publishing. The curriculum is designed to equip learners with both technical and creative skills for digitalcontent creation.",
    type: "Diploma",
    duration: "3 Months"
  },
  {
    title: "Data Analytics",
    image: "https://source.unsplash.com/400x300/?data,analytics",
    highlights: ["Advanced Python", "SQL", "Power BI", "Statistics", "Advanced Excel"],
    description: "This course delivers advanced training in data analysis and business intelligence, covering Advanced Python for data manipulation and automation, SQL for efficient database querying, and Power BI for interactive data visualization. Learners also gain a strong foundation in Statistics to support data-driven decision-making, along with mastery of Advanced Excel for complex calculations, modeling, and reporting.",
    type: "Professional",
    duration: "6 Months"
  },
  {
    title: "Diploma in Web Development",
    image: "https://source.unsplash.com/400x300/?html,css,code",
    highlights: ["HTML", "CSS", "JavaScript"],
    description: "This course provides foundational training in web development, covering HTML for structuring web content, CSS for styling and layout design, and JavaScript for adding interactivity and dynamic functionality to websites. Learners will develop the essential skills needed to build responsive and engaging web pages from scratch.",
    type: "Diploma",
    duration: "4 Months"
  },
  {
    title: "Certificate in Communicative English",
    image: "https://source.unsplash.com/400x300/?english,speaking",
    highlights: ["Basic English Grammer", "Spoken English"],
    description: "This course focuses on building essential language skills, covering Basic English Grammar to strengthen foundational understanding of sentence structure, tenses, and usage, along with Spoken English to enhance verbalcommunication, pronunciation, and conversational fluency for everyday and professional interactions.",
    type: "SoftSkill",
    duration: "2 Months"
  },
  {
    title: "Diploma in Financial Accounting (DFA)",
    image: "https://source.unsplash.com/400x300/?accounting,finance",
    highlights: [
  "Fundamental Principles of Accounting",
  "Financial Reports",
  "Accounting Software",
  "Applying Accounting Standards and Regulations",
  "Tax Deducted at Source (TDS)",
  "Tally Data - Printing, Import, and Export",
  "Finalisation of Accounts",
  "Voucher Transaction",
  "Create Company/Ledger/Items",
  "Sale/Purchase Bill with GST",
  "Advance Accounting and Inventory"
],
    description: "This course provides comprehensive training in core and advanced accounting practices, covering topics such as Fundamental Principles of Accounting, Financial Reports, and the use of Accounting Software. Learners will gain practical knowledge in Applying Accounting Standards and Regulations, handling Tax Deducted at Source (TDS), and managing Tally Data including printing, import, and export. The curriculum also includes Finalisation of Accounts, Voucher Transactions, and the creation of Company, Ledger, and Items. Additionally, students will learn to process Sale and Purchase Bills with GST and develop expertise in Advance Accounting and Inventory Management, preparing them for real-world financial operations.",
    type: "Diploma",
    duration: "3 Months"
  },
  {
    title: "skill Development Program",
    image: "https://source.unsplash.com/400x300/?c++,code",
    highlights: [
  "Certificate Course in C and C++ Programming",
  "Certificate Course in Oracle and RDBMS",
  "Certificate Course in OOPs in Java Programming",
  "Certificate Course in Python",
  "Certificate Course in R"
],
    description: "This course offers a robust foundation in programming and database management through a series of specialized modules, including the Certificate Course in C and C++ Programming for structured and object-oriented coding, the Certificate Course in Oracle and RDBMS for mastering relational database systems, and the Certificate Course in OOPs in Java Programming to develop scalable, object-oriented applications. Additionally, learners will gain proficiency in modern programming languages through the Certificate Course in Python and the Certificate Course in R, equipping them with versatile skills for data analysis, software development, and computational problem-solving.",
    type: "Professional",
    duration: "N/A"
  },
  {
    title: "Diploma in Computer & Office Management",
    image: "https://source.unsplash.com/400x300/?office,computer",
    highlights: ["Basic IT","Word","Powerpoint","MS Office", "Internet", "Kannada and English Typing", "Advance Excel"],
    description: "This course provides essential digital literacy and office productivity skills, covering Basic IT concepts, MS Word for document creation, PowerPoint for presentations, and the full suite of MS Office tools for professional tasks. Learners will also gain practical experience with Internet usage, develop typing proficiency in both Kannada and English, and advance their data handling capabilities through Advanced Excel training for complex spreadsheet operations and analysis.",
    type: "Diploma",
    duration: "4 Months"
  },
  {
    title: "Diploma in Computer Teacher Training",
    image: "https://source.unsplash.com/400x300/?teacher,computer",
    highlights: ["DCA", "Fast Master Typing", "Teaching Skills", "Programming Languages","Accounting Software"],
    description: "This course offers a diverse skill set designed for both technical and professional development, including **DCA (Diploma in Computer Applications)** for foundational IT knowledge, **Fast Master Typing** to improve speed and accuracy in keyboarding, and **Teaching Skills** to enhance instructional techniques. It also covers key **Programming Languages** for software development and **Accounting Software** to manage financial operations effectively, preparing learners for a wide range of career opportunities.",
    type: "Diploma",
    duration: "12 Months"
  },
  {
    title: "Diploma in Computer Science",
    image: "https://source.unsplash.com/400x300/?computer,science",
    highlights: ["C/C++", "Java", "Python", "R", "HTML"],
    description: "This course provides comprehensive programming training, covering foundational and advanced languages such as C/C++ for structured and object-oriented programming, Java for building robust applications, Python for versatile scripting and data analysis, and R for statisticalcomputing. Additionally, learners will gain essential web development skills through HTML, enabling them to create and structure web content effectively",
    type: "Diploma",
    duration: "12 Months"
  },
  {
    title: "Diploma in Marster Typing",
    image: "https://source.unsplash.com/400x300/?computer,science",
    highlights: ["Kannada Typing", "English Typing", "Fast Master Typing"],
    description: "This course focuses on enhancing typing proficiency across multiple languages and formats, offering training in Kannada Typing and English Typing to support bilingualcommunication. It also includes Fast Master Typing techniques to improve speed, accuracy, and overall efficiency in keyboarding for professional and personal use.",
    type: "Diploma",
    duration: "2 Months"
  },
  {
    title: "Basic Computer Applications",
    image: "https://source.unsplash.com/400x300/?computer,science",
    highlights: ["Basics of IT", "Windows", "MS Office", "Word", "PowerPoint", "Excel", "Internet"],
    description: "This course provides foundational training in digital skills, starting with the **Basics of IT** and **Windows** operating system to build core computer literacy. Learners will gain hands-on experience with **MS Office** applications, including **Word** for document creation, **PowerPoint** for presentations, and **Excel** for data management. The curriculum also covers effective **Internet** usage, equipping participants with essential tools for navigating and working in a modern digital environment.",
    type: "BasicCourse",
    duration: "2 Months"
  },
  {
    title: "MULTIMEDIA (Internet Printing Technology)",
    image: "https://source.unsplash.com/400x300/?multimedia,technology",
    highlights: ["Internet", "Printing", "Multimedia Skills"],
    description: "Learn the fundamentals of multimedia including internet usage and printing technology for practical digital skills.",
    type: "IndividualCourse",
    duration: "N/A"
  },
  {
    title: "POWERPOINT",
    image: "https://source.unsplash.com/400x300/?powerpoint,presentation",
    highlights: ["Presentation Design", "Slides", "Office Tools"],
    description: "Master Microsoft PowerPoint for creating engaging and impactful presentations.",
    type: "IndividualCourse",
    duration: "N/A"
  },
  {
    title: "FAST TYPING KANNADA",
    image: "https://source.unsplash.com/400x300/?kannada,typing",
    highlights: ["Kannada Typing", "Speed", "Accuracy"],
    description: "Develop typing speed and accuracy in the Kannada language for professional or academic use.",
    type: "IndividualCourse",
    duration: "N/A"
  },
  {
    title: "FAST TYPING ENGLISH",
    image: "https://source.unsplash.com/400x300/?english,typing",
    highlights: ["English Typing", "Keyboard Skills", "Speed"],
    description: "Enhance English typing skills with focus on speed, accuracy, and proper formatting.",
    type: "IndividualCourse",
    duration: "N/A"
  },
  {
    title: "WORD",
    image: "https://source.unsplash.com/400x300/?microsoft,word",
    highlights: ["Word Processing", "Document Editing", "MS Office"],
    description: "Learn to create, edit, and manage documents using Microsoft Word efficiently.",
    type: "IndividualCourse",
    duration: "N/A"
  },
  {
    title: "EXCEL",
    image: "https://source.unsplash.com/400x300/?excel,sheets",
    highlights: ["Spreadsheets", "Data Entry", "Formulas"],
    description: "Build foundational skills in Excel including formulas, data analysis, and chart creation.",
    type: "IndividualCourse",
    duration: "N/A"
  },
  {
    title: "Advance Excel",
    image: "https://source.unsplash.com/400x300/?excel,advanced",
    highlights: ["Data Analysis", "Pivot Tables", "Advanced Excel Tools"],
    description: "Master advanced Excel features like VLOOKUP, Pivot Tables, and data visualization tools.",
    type: "IndividualCourse",
    duration: "N/A"
  },
  {
    title: "POWER BI",
    image: "https://source.unsplash.com/400x300/?powerbi,data",
    highlights: ["Data Visualization", "Business Intelligence", "Dashboards"],
    description: "Get trained in Microsoft Power BI for creating dynamic dashboards and data reports.",
    type: "IndividualCourse",
    duration: "N/A"
  },
  {
    title: "CSS",
    image: "https://source.unsplash.com/400x300/?css,web",
    highlights: ["Styling", "Web Design", "Frontend"],
    description: "Learn to style websites using CSS for responsive and modern web design.",
    type: "IndividualCourse",
    duration: "N/A"
  },
  {
    title: "HTML",
    image: "https://source.unsplash.com/400x300/?html,website",
    highlights: ["Web Development", "HTML Tags", "Structure"],
    description: "Understand HTML to build the structure of websites and create semantic web content.",
    type: "IndividualCourse",
    duration: "N/A"
  },
  {
    title: "TALLY",
    image: "https://source.unsplash.com/400x300/?tally,accounting",
    highlights: ["Accounting", "GST", "Ledger Management"],
    description: "Learn TALLY for accounting, inventory management, and GST operations.",
    type: "IndividualCourse",
    duration: "N/A"
  },
  {
    title: "C",
    image: "https://source.unsplash.com/400x300/?c,programming",
    highlights: ["Procedural Programming", "Basics of C", "Logic Building"],
    description: "Understand the fundamentals of programming using the C language.",
    type: "IndividualCourse",
    duration: "N/A"
  },
  {
    title: "C++",
    image: "https://source.unsplash.com/400x300/?cpp,programming",
    highlights: ["OOP Concepts", "C++ Syntax", "Programming Skills"],
    description: "Learn object-oriented programming through hands-on C++ projects and concepts.",
    type: "IndividualCourse",
    duration: "N/A"
  },
  {
    title: "PHOTOSHOP",
    image: "https://source.unsplash.com/400x300/?photoshop,design",
    highlights: ["Photo Editing", "Graphic Design", "Image Retouching"],
    description: "Master Adobe Photoshop for image editing, graphics, and professional design work.",
    type: "IndividualCourse",
    duration: "N/A"
  },
  {
    title: "CORELRDRAW",
    image: "https://source.unsplash.com/400