import Image from "next/image";

const activities = [
  {
    id: "01",
    title: "FUTURE-TALK",
    subtitle: "Forums and lectures facilitated by Dean Charles Hudson",
    image: "/activities/act1.jpg",
  },
  {
    id: "02",
    title: "INNOVATION ROUNDTABLE",
    subtitle: "Insight and foresight sharing through digital room discussions",
    image: "/activities/act2.jpg",
  },
  {
    id: "03",
    title: "SUMMIT AWARDING",
    subtitle: "Awarding and recognition of excellence in education",
    image: "/activities/act3.jpg",
  },
];

const Activities = () => {
  return (
    <section id="activities" className="px-6 py-12 md:px-16 lg:px-32 bg-white text-black mt-2">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold">Activity Lineup</h2>
        <p className="text-indigo-600 font-medium mt-2">Fortune <span className="text-black">Education</span></p>
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