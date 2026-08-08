'use client';
// import Ribbon from '../../components/Ribbon';

export default function Timeline() {

    const events = [
        {
            year: "2018",
            title: "Company Founded",
            description: "SRIYOG Consulting Pvt. Ltd. was established to provide smart digital solutions.",
        },
        {
            year: "2019",
            title: "Service Expansion",
            description: "Added data processing, digital marketing and automation services.",
        },
        {
            year: "2021",
            title: "Platform Launch",
            description: "Launched digital platforms for employment and healthcare sectors.",
        },
        {
            year: "2023",
            title: "Team Growth",
            description: "Company expanded with skilled developers, marketers, and support teams.",
        },
        {
            year: "2024",
            title: "Tech Modernization",
            description: "Adopted cloud-native, AI-driven, and scalable microservice architecture.",
        },
    ];

    
    return (
        <div>
            {/* Header */}
            {/* <Ribbon name="Timeline" showfont={false}/> */}

            {/* Timeline Container */}
            <div className="max-w-5xl mx-auto px-4 md:px-8 relative">

                {/* Vertical Center Line */}
                <div className="absolute left-1/2 top-18 bottom-18 transform -translate-x-1/2  w-1 bg-teal-600 rounded-full"></div>

                <div className="space-y-16 mt-24">
                    {events.map((event, index) => {
                        const isLeft = index % 2 === 0;  // alternate
                        
                        return (
                            <div key={index} className="relative flex items-center">

                                {/* Timeline dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5  border-2 header rounded-full shadow-md"></div>

                                {/* Card */}
                                <div className={`w-full md:w-1/2 px-6 md:px-0 
                                    ${isLeft ? "md:pr-12 md:mr-auto" : "md:pl-12 md:ml-auto"}`}
                                >
                                    <div className=" rounded-xl shadow-lg p-6 border card  hover:shadow-xl transition-all">
                                        <span className="text-sm font-semibold ">
                                            {event.year}
                                        </span>
                                        <h3 className="text-xl font-bold mt-1 ">
                                            {event.title}
                                        </h3>
                                        <p className="mt-2  leading-relaxed">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="h-24"></div>
        </div>
    );
}
