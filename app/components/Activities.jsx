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
    title: "DOUBT CLEARANCE SELECTIONS",
    subtitle: "Fortune Computer Classes provides dedicated doubt clearance sessions, ensuring personalized attention for every student. Our expert instructors guide you through challenging concepts, enhancing understanding and boosting confidence for successful course completion.",
    image: "/activities/act2.jpg",
  },
  {
    id: "03",
    title: "VALUE-BASED EDUCATION",
    subtitle: "Fortune Computer Classes offers value-based education, focusing not just on technical skills but also on ethics, problem-solving, and critical thinking, ensuring students are well-rounded and prepared for real-world challenges.",
    image: "/activities/act3.jpg",
  },
];

const Activities = (id) => {
  return (
    <section id="addon" className="px-6 py-20 md:px-16 lg:px-32 bg-white text-black mt-2">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold">Add On Provided By</h2>
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
            <p className="text-sm text-gray-700">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Activities