import Image from "next/image";

const activities = [
  {
    id: "01",
    title: "ASSIST FOR PLACEMENT",
    subtitle: "Fortune Computer Classes offers comprehensive placement assistance, including resume building, interview preparation, job portal access, and career guidance, ensuring students are well-equipped to secure their dream job in the IT industry.",
    image: "/activities/act1.jpg",
  },
  {
    id: "02",
    title: "AFFILIATED WITH VTU",
    subtitle: "At Fortune Computer Classes, <strong>we’re proud to support students \"Affiliated with Visvesvaraya Technological University\" (VTU)</strong>. Our dedicated doubt clearance sessions ensure personalized guidance, helping VTU learners tackle challenging concepts with confidence. Led by expert instructors, our approach enhances understanding and fosters academic success—making your journey through VTU smoother and more rewarding.",
    image: "/activities/act2.jpg",
  },
  {
    id: "03",
    title: "WE PROVIDE CSC GOVERNMENT CERTIFICATE",
    subtitle: "Fortune Computer Classes provides comprehensive, value-based education with a focus on technical skills, ethics, and problem-solving. Upon successful completion, <strong>students receive a certificate from the CSC Education and Training Academy approved by government</strong>, recognized for its quality and credibility.",
    image: "/activities/act3.jpg",
  },
];

const Activities = (id) => {
  return (
    <section id="addon" className="px-6 py-20 md:px-16 lg:px-32 bg-white text-black mt-2">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold">Add-Ons Provided By</h2>
        <p className="text-indigo-600 font-medium mt-2">Fortune Computer Classes</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
  {activities.map((item, idx) => (
    <div key={idx} className="flex flex-col gap-4">
      <span className="text-4xl font-bold text-gray-300">{item.id}</span>
      <div className="w-full h-[180px] relative overflow-hidden rounded-md">
        <Image
          src={item.image}
          alt={item.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="text-indigo-700 font-bold text-sm tracking-widest uppercase">
        {item.title}
      </h3>
      <p
        className="text-sm text-gray-700"
        dangerouslySetInnerHTML={{ __html: item.subtitle }}
      />
    </div>
  ))}
</div>
    </section>
  );
}

export default Activities