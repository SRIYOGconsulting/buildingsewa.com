import Image from "next/image";
import Ribbon from "@/components/Ribbon";

const overview = [
  { id: "vision", label: "Vision", icon: "/vmgo/vision.png" },
  { id: "mission", label: "Mission", icon: "/vmgo/mission.png" },
  { id: "goals", label: "Goals", icon: "/vmgo/goal.png" },
  { id: "objectives", label: "Objectives", icon: "/vmgo/objective.png" },
];

const goals = [
  "Enable transparent and efficient interactions between professionals and businesses through our platform's tools and features.",
  "Ensure trust through robust verification processes and accurate listings for all users.",
  "Provide equal access to opportunities for professionals from all backgrounds.",
  "Continuously enhance our platform with new technologies to deliver the best user experience.",
];

const objectives = [
  "Expand our reach to new markets and demographics, ensuring that individuals and businesses from all backgrounds have access to our platform.",
  "Continuously improve the user experience on our platform, making it easier and more intuitive for users to find what they're looking for.",
  "Foster a strong community of professionals and businesses.",
  "Maintain high standards of security and privacy.",
];

export default function Vmgo() {
  return (
    <div className="min-h-screen">
      <Ribbon
        name="Vision, Mission & Goals"
        description="What drives Building Sewa forward, and where we're headed next."
      />

      {/* Quick nav overview */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-content-center place-items-center">
          {overview.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex flex-col justify-center items-center gap-3 group"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full card transition-transform group-hover:scale-105">
                <Image
                  height={48}
                  width={48}
                  src={item.icon}
                  alt={item.label}
                  className="w-12 h-12"
                />
              </div>
              <p className="text2 font-medium">{item.label}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section
        id="vision"
        className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12 py-8 max-w-5xl mx-auto px-6"
      >
        <div className="hidden md:flex items-center flex-shrink-0">
          <Image
            height={600}
            width={800}
            src="/vmgo/vision.png"
            alt=""
            className="w-auto h-40"
          />
        </div>
        <div className="p-8 md:p-16 card space-y-4 max-w-3xl rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold text2">Vision</h2>
          <p className="text text-md leading-relaxed">
            Our vision at Building Sewa is to create a future where every
            individual has access to opportunities that match their skills and
            aspirations.
          </p>
          <p className="text text-md leading-relaxed">
            We envision a world where people searching for any service can
            easily connect with skilled professionals rather than hiring hefty
            commission from any service marketplace, and where an individual can
            have his/her digital profile showcasing their expertise.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section
        id="mission"
        className="flex flex-col md:flex-row-reverse justify-between items-center gap-12 mb-12 max-w-5xl mx-auto px-6"
      >
        <div className="hidden md:flex items-center flex-shrink-0">
          <Image
            height={600}
            width={800}
            src="/vmgo/mission.png"
            alt=""
            className="w-auto h-40"
          />
        </div>
        <div
          className="p-8 md:p-16 text-white space-y-4 max-w-3xl rounded-xl shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: "#0E4541" }}
        >
          <h2 className="text-3xl font-bold">Mission</h2>
          <p className="text-md leading-relaxed">
            At Building Sewa, our mission is to revolutionize the way work is
            connected with workers. We strive to provide a seamless platform
            that empowers individuals and businesses to find the perfect match
            for their needs, fostering opportunities for growth, collaboration,
            and success.
          </p>
        </div>
      </section>

      {/* Goals */}
      <section
        id="goals"
        className="flex flex-col md:flex-row justify-between items-center gap-12 py-8 max-w-5xl mx-auto px-6"
      >
        <div className="hidden md:flex items-center flex-shrink-0">
          <Image
            height={600}
            width={800}
            src="/vmgo/goal.png"
            alt=""
            className="w-60 h-40"
          />
        </div>
        <div className="p-8 md:p-16 card space-y-4 rounded-xl shadow-sm hover:shadow-md transition-shadow max-w-3xl">
          <h2 className="text-3xl font-bold text2">Our Goals</h2>
          <ul className="list-disc space-y-2 pl-5 text">
            {goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Objectives */}
      <section
        id="objectives"
        className="flex flex-col md:flex-row-reverse justify-between items-center gap-12 mb-12 py-8 max-w-5xl mx-auto px-6"
      >
        <div className="hidden md:flex items-center flex-shrink-0">
          <Image
            height={600}
            width={800}
            src="/vmgo/objective.png"
            alt=""
            className="w-auto h-44"
          />
        </div>
        <div
          className="p-8 md:p-16 space-y-4 text-white max-w-3xl rounded-xl shadow-sm hover:shadow-md transition-shadow"
          style={{ backgroundColor: "#0E4541" }}
        >
          <h2 className="text-3xl font-bold">Objectives</h2>
          <ul className="list-disc space-y-2 pl-5">
            {objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
