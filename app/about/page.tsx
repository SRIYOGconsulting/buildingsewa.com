'use client'
import ClapFunction from '../../components/ClappingFunction';
// import Ribbon from '../../components/Ribbon';
import Image from 'next/image';

const About = ()=> {

    return (
        <div className='about font-size'>
            {/* <Ribbon name="About" showfont={true}/> */}
           
            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8">

                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                     {/* Image on mobile - inserted here for better reading flow */}
                        <div className="md:hidden overflow-hidden px-5 sm:px-0">
                            <Image
                              src="/images/about/1.png"
                              alt="Logo"
                              width={800}        // any number, not the final size
                              height={600}       // any number
                              className="w-full h-auto object-cover"
                            />
                        </div>
                    {/* Left side - Text content */}
                    <div className="md:w-2/3 space-y-4 md:space-y-6 leading-relaxed ">
                        <p className="content-text ">
                            Established on June 14, 2018, SRIYOG Consulting Pvt. Ltd., based in Kamalpokhari,
                            Kathmandu, Nepal, is a leading provider of digital solutions dedicated to driving
                            digital transformation in the healthcare, employment, and tourism sectors. Our mission
                            is to empower organizations in these vital industries with innovative, scalable, technology-driven
                            services that enhance operational efficiency and support long-term growth.
                        </p>

                        <p className="content-text ">
                            At SRIYOG Consulting, we believe that smart technology is key to addressing sector-specific challenges.
                            Our diverse IT services include data processing, software and web application development, digital
                            marketing, database management, business process automation, and expert IT consultancy—each tailored
                            to the unique needs of agriculture, employment platforms, and tourism operations.
                        </p>

                       

                        <p className="content-text">
                            By optimizing digital infrastructure, we help our clients streamline services, engage users effectively,
                            and scale sustainably. We specialize in crafting robust, user-friendly web solutions with a focus on
                            modern UI/UX design, full-stack development, and industry-specific platforms—whether for agritech,
                            job-matching portals, or tourism management systems.
                        </p>

                        <p className="content-text ">
                            Our offerings include e-commerce platforms, CMS, SaaS-based solutions, and Progressive Web Applications
                            (PWAs) designed for mobile-first experiences with offline functionality.
                        </p>

                        <p className="content-text ">
                            Our comprehensive IT services are tailored to the unique demands of healthcare, employment platforms,
                            and tourism operations.
                        </p>
                    </div>

                    {/* Right side - Images (Desktop only) */}
                    <div className="hidden md:block md:w-1/3 space-y-6">
                        <div className="overflow-hidden">
                            <img
                                src="/about/1.png"
                                alt="About SRIYOG 1"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
                
                {/* Clap Button with better mobile spacing - aligned left */}
                <div className="mt-6 md:mt-8 flex justify-start">
                    <ClapFunction/>
                </div>
            </div>
        </div>
    );
}
export default About