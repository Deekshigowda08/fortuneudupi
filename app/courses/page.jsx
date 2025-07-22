"use client"
import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';
import { useState } from 'react';
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
    image: "https://source.unsplash.com/400x300/?coreldraw,vector",
    highlights: ["Vector Design", "Illustrations", "Posters"],
    description: "Design logos, posters, and vector graphics using CorelDRAW effectively.",
    type: "IndividualCourse",
    duration: "N/A"
  },
  {
    title: "INDESIGN",
    image: "https://source.unsplash.com/400x300/?indesign,layout",
    highlights: ["Page Layout", "Publishing", "Magazines"],
    description: "Learn Adobe InDesign for layout design of brochures, magazines, and digital publications.",
    type: "IndividualCourse",
    duration: "N/A"
  },
  {
    title: "ILLUSTRATOR",
    image: "https://source.unsplash.com/400x300/?illustrator,design",
    highlights: ["Illustrations", "Logo Design", "Vector Art"],
    description: "Use Adobe Illustrator to create professional vector artwork and branding designs.",
    type: "IndividualCourse",
    duration: "N/A"
  },
  {
    title: "JAVA",
    image: "https://source.unsplash.com/400x300/?java,coding",
    highlights: ["OOP", "Cross-platform", "Enterprise Apps"],
    description: "Learn Java programming from basics to advanced, including OOP and application development.",
    type: "IndividualCourse",
    duration: "N/A"
  },
  {
    title: "PYTHON",
    image: "https://source.unsplash.com/400x300/?python,coding",
    highlights: ["Scripting", "Data Analysis", "Automation"],
    description: "Master Python programming for automation, data analysis, and backend development.",
    type: "IndividualCourse",
    duration: "N/A"
  },
  {
    title: "JAVASCRIPT",
    image: "https://source.unsplash.com/400x300/?javascript,web",
    highlights: ["Frontend", "Web Apps", "Interactivity"],
    description: "Understand JavaScript to build interactive and dynamic websites and applications.",
    type: "IndividualCourse",
    duration: "N/A"
  },
  {
    title: "VB SCRIPT",
    image: "https://source.unsplash.com/400x300/?vbscript,scripting",
    highlights: ["Automation", "Scripting", "Microsoft Environment"],
    description: "Learn VB Script for automation tasks within Microsoft environments and custom scripting.",
    type: "IndividualCourse",
    duration: "N/A"
  },
  {
    title: "Tuition Classes",
    image: "https://source.unsplash.com/400x300/?tuition,education",
    highlights: ["Personalized Attention", "Subject Coverage", "Academic Excellence"],
    description: "We offer tuition classes for students from 1st to 12th, covering a wide range of subjects with personalized attention and guidance to help in excel academically.",
    type: "tuition",
    duration: "N/A"
  }

  //inu 3 +
];
 const links = [
    { id: 1, name: 'COURSES', path: 'course'},
    { id: 2, name: 'FACULTY', path: 'faculty'},
    { id: 3, name: 'ADD ON', path: 'addon'},
    { id: 4, name: 'CONTACT', path: 'contact'},
  ];
   const link = [
    { id: 1, name: 'COURSES', path: 'course'},
    { id: 2, name: 'FACULTY', path: 'faculties'},
    { id: 3, name: 'ADD ON', path: 'addon'},
    { id: 4, name: 'CONTACT', path: 'contact'},
  ];
  


const CourseCard = ({ course }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",      // Replace with your EmailJS service ID
        "your_template_id",     // Replace with your EmailJS template ID
        form.current,
        "your_user_public_key"  // Replace with your EmailJS public key
      )
      .then(
        (error) => console.error("FAILED...", error.text)
      );
    setShowForm(false);
  };
  return (
    <div className="bg-[#101129] rounded-xl overflow-hidden shadow-lg max-w-xs mx-auto relative">
      <div className="p-4 text-white">
        <h2 className="text-lg text-center font-bold mb-2">{course.title}</h2>
        <h5 className="text-sm text-left text-green-600 font-bold mb-2">Duration: {course.duration}</h5>
        <div className="flex flex-wrap gap-2 mb-3">
          {course.highlights.map((item, index) => (
            <span
              key={index}
              className="bg-white text-black text-xs font-semibold px-2 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="text-sm mb-4">{course.description}</p>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full"
        >
          Reach out →
        </button>
      </div>

      {showForm && (
      <div className="reachout-form-container">
  <h3 className="reachout-title">Reach Out</h3>
  <form onSubmit={handleSubmit} className="reachout-form">
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Your Name"
      required
      className="reachout-input "
    />
    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="Phone Number"
      required
      className="reachout-input"
    />
    <div className="reachout-actions">
      <button type="submit" className="reachout-submit">Submit</button>
      <button type="button" className="reachout-cancel" onClick={() => setShowForm(false)}>Cancel</button>
    </div>
  </form>
</div>


      )}
    </div>
  );
};

const DiplomaCourses = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const searchParams = useSearchParams();
  const para = searchParams.get("course");
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      {/* Navbar */}
      <div className={`sm:right-0 z-50 p-7 fixed top-0 left-0 bg-[#00000050] backdrop-blur-sm hidden md:block shadow-md`}>
        <nav className='flex items-center justify-between p-2 pr-7 sm:w-full absolute top-0 left-0 z-50 bg-[#00000000]'>

          <Link href="/" className='flex items-center justify-between w-[10%] ml-2 gap-1 font-bold text-[#fff]'>
            {/* Add priority to the Image component */}
            <Image className='w-[50px] object-cover' src={logo} alt="Logo" priority width={100} height={100} />
            <div className='text-3xl text-white'>
              FORTUNE
            </div>
          </Link>

          {/* Desktop Links (by default visible on larger screens) */}
          <div className={"gap-10 text-[#ffffff] z-50 flex"}>
            {links.map((item, index) => (
              <button onClick={() =>{window.location.assign("/")}} key={index}>
                <div className='flex flex-col'>
                  <span className='relative font-semibold underline text-[18px]'>
                    {item.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </nav>
      </div>
    {/*This is for phone*/}
      {/* Navbar */}
      <div className={`right-0 z-50 p-7 fixed top-0 left-0 block md:hidden bg-[#00000050] backdrop-blur-sm shadow-md`}>
        <nav className='flex items-center justify-between p-2 pr-7 w-full absolute top-0 left-0 z-40  bg-[#00000000]'>

          <Link href="/" className='flex items-center justify-between w-[10%] ml-2 gap-1 font-bold text-[#fff]'>
            {/* Add priority to the Image component */}
            <Image className='w-[50px] object-cover' src={logo} alt="Logo" priority width={100} height={100} />
            <div className='text-3xl text-white'>
              FORTUNE
            </div>
          </Link>

          {/* Mobile Hamburger Menu */}
          <div className="sm:hidden flex items-center gap-5">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              <span className="text-3xl">&#9776;</span> {/* Hamburger Icon */}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="sm:hidden flex flex-col items-center z-50 bg-[#101129] p-4 absolute top-16 left-0 w-full">
            {link.map((item, index) => (
              <button onClick={() =>{window.location.assign("/")}} key={index} className="py-2 text-white text-lg">
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <h1 className="text-3xl font-bold text-center my-10">{para === "Diploma" ? "Diploma Courses" : para === "Professional" ? "Post Graduate Courses" : para === "Certificate" ? "Certification Courses" : para === "IndividualCourse" ? "Individual Courses" : para === "tuition" ? "Tuition Classes" : para === "BasicCourse" ? "Basic Computer Application" : "Other Courses"}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {coursesData.filter(course => course.type === para).map((course, idx) => (
  <CourseCard key={idx} course={course} />
))}

      </div>
    </div>
  );
};

export default DiplomaCourses;
