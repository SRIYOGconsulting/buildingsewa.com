'use client';

import React from "react";
// import Ribbon from "../../components/Ribbon";

const videos = [
  {
    title: "4 Types of Team Members You Can Hire",
    embedUrl: "https://www.youtube.com/embed/O9_EHU5BKnQ?rel=0",
  },
  {
    title: "The Power Of Teamwork",
    embedUrl: "https://www.youtube.com/embed/4duPBWzf46E?rel=0" ,
  },
  {
    title: "Teamwork and Leadership",
    embedUrl: "https://www.youtube.com/embed/I1J2Z_Fgado?rel=0",
  },
  {
    title: "Employee engagement ",
    embedUrl: "https://www.youtube.com/embed/bXji0yjYObo?rel=0",
  },
  {
    title: "Employee engagement ",
    embedUrl: "https://www.youtube.com/embed/bXji0yjYObo?rel=0",
  },
  {
    title: "Employee engagement ",
    embedUrl: "https://www.youtube.com/embed/bXji0yjYObo?rel=0",
  },
  {
    title: "Employee engagement ",
    embedUrl: "https://www.youtube.com/embed/bXji0yjYObo?rel=0",
  },
  {
    title: "Employee engagement ",
    embedUrl: "https://www.youtube.com/embed/bXji0yjYObo?rel=0",
  },
  {
    title: "Employee engagement ",
    embedUrl: "https://www.youtube.com/embed/bXji0yjYObo?rel=0",
  },
];

function VideoPage() {
const featuredVideo = "https://www.youtube.com/embed/en3z928rwus?rel=0";
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Videos", path: "/videos" },
  ];

  return (
    <div className=" min-h-screen font-sans">
      {/* Header */}
      {/* <Ribbon name="Vidoes" showfont={false}/> */}

      {/* Featured Video Section */}
      <section className="max-w-7xl mx-auto  rounded-md px-4 sm:px-6 py-10 sm:py-12 md:py-10">
        <div className="text-center">
          <h2 className=" text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
            Featured Video
          </h2>

          <div className="flex justify-center">
            <div className="w-full max-w-7xl aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src={featuredVideo}
                title="Featured Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="max-w-7xl mx-auto py-14 px-4 sm:px-6 md:px-8">
        <h2 className="card2 text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-10">
          Sriyog Consulting Videos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {videos.map((video, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-t-md"
                  src={video.embedUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-[#0D5D59] text-sm sm:text-base mt-3 px-2 pb-4 font-medium">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default VideoPage;
