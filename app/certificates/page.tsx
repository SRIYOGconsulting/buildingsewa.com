'use client'
import { useEffect, useState } from 'react';

import Lightbox from '../../components/Lightbox';
import Image from 'next/image';

export default function Certificate() {
    
    const [lightbox,setLightbox] = useState(false);
    const [index, setIndex] = useState<number | null>(0);

    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        
        if (lightbox) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = originalStyle;
        }

        // Cleanup on unmount or when lightbox changes
        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, [lightbox]);
    const certificates = [
        { title: 'Certificate 1', img: '/certificates/1.jpg' },
        { title: 'Certificate 2', img: '/certificates/2.jpg' },
        { title: 'Certificate 3', img: '/certificates/3.jpg' },
        { title: 'Certificate 4', img: '/certificates/4.jpg' },
        { title: 'Certificate 5', img: '/certificates/5.jpg' },
        { title: 'Certificate 6', img: '/certificates/6.jpg' },
    ];

    return (
        <div className='relative '>
            {/* Header */}
            {/* <Ribbon name="Certificates" showfont={false}/> */}
            <div className="px-5 py-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="card rounded-lg shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow duration-300"
                        >
                            <Image height={600} width={800}
                                src={cert.img}
                                alt={cert.title}
                                onClick={()=>{setLightbox(true);setIndex(index)}}
                                className="w-full h-56 object-cover cursor-pointer"
                            />
                            <div className="px-4 py-5 card2">
                                <h2 className="text-lg font-medium ">{cert.title}</h2>
                                <p className="card2 text-sm mt-2">
                                    Short description about the certificate.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {lightbox && (
            <>
            <Lightbox setLightbox={setLightbox} lightbox={lightbox} data={certificates} index={index} setIndex={setIndex}/>
            </>
            )}
        </div>
    );
}
