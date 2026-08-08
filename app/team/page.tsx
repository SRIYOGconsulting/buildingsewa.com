'use client'
// import Ribbon from "../../components/Ribbon";

const teamMembers = [
  { id: 1, name: "Alisha", role: "MERN Stack", image: "/team/2.png" },
  { id: 2, name: "Bitika", role: "React.Js", image: "/team/3.png" },
  { id: 3, name: "Hammoud", role: "MERN Stack", image: "/team/4.png" },
  { id: 4, name: "Khaleed", role: "Full Stack", image: "/team/5.png" },
  { id: 5, name: "Samyog", role: "Full stack", image: "/team/6.png" },
  { id: 6, name: "Sanish", role: "Full stack", image: "/team/7.png" },
  { id: 7, name: "Smriti", role: "React.js", image: "/team/8.png" },
  { id: 8, name: "Sneha", role: "MERN Stack", image: "/team/9.png" },
];

const OurTeam = () => {
  return (
    <div className="about-w-full ">
      {/* Full-width Ribbon Header */}
      {/* <Ribbon name="Our Team" showfont={true}/> */}

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 md:py-10">

        {/* PRESIDENT SECTION */}
        <div className="rounded-lg  card  p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <div className="flex flex-col items-center">
              <img
                src="/team/1.png"
                className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg"
                alt="Pracas"
              />
              <h2 className="text-[1em] md:text-[1.7em] font-bold mt-4 text-center">
                Pracas
              </h2>
              <p className="text-[1em]  mt-1 text-center">C.T.O</p>
            </div>

            {/* Text */}
            <div className="flex-1 leading-relaxed space-y-7">
              <h1 className=" text-[1.8em]">About Pracas</h1>
              <p className="text-[1em]">
                Pracas Upreti's journey from a startup founder to a
                technology-driven change-maker in Biratnagar, Nepal, exemplifies
                the profound impact that individuals can have when they combine
                innovation with a commitment to social responsibility. Through
                his endeavors, Upreti has not only transformed his community but
                has also set a precedent for how technology can be harnessed to
                drive positive change and create a better future for all.
              </p>
              <p className="text-[1em]">Through his endeavors, Upreti has not only
                 transformed his community but has also set a precedent for how technology
                  can be harnessed to drive positive change and create a better future for all.</p>
              <p  className="text-[1em]">
                Upreti's journey into the realm of technology began over a
                decade ago when he founded his first IT startup in 2007 A.D. as
                PRACAS Infosys in Biratnagar. Recognizing the potential of
                technology to bridge gaps and catalyze progress, he embarked on
                a mission to leverage digital solutions to address local
                challenges and foster economic development. His vision was not
                merely to create successful businesses but to effect meaningful
                change in his community.
              </p>

              {/* Social icons */}
              <div className="mt-6">
                <p className="font-normal text-base md:text-[1em]">
                  Follow Pracas on social media:
                </p>

                <div className="flex gap-3 mt-2">
                  <img
                    src="/icons/x.svg"
                    className="w-5 h-5 cursor-pointer hover:opacity-75"
                  />
                  <img
                    src="/icons/linkedin.svg"
                    className="w-5 h-5 cursor-pointer hover:opacity-75"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className=" card  rounded-lg p-6  flex flex-col items-center hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 md:w-full md:h-full rounded-full object-cover shadow"
              />
              <h3 className=" font-semibold mt-5 text-[1.2em] ">{member.name}</h3>
              <p className=" text-sm mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
