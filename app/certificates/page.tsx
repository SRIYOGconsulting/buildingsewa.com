'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import Lightbox from '../../components/Lightbox';

const certificates = [
    {
        id: 1,
        title: 'Certificate 1',
        img: '/certificates/1.jpg',
        description: 'Professional certification and recognition.',
    },
    {
        id: 2,
        title: 'Certificate 2',
        img: '/certificates/2.jpg',
        description: 'Professional certification and recognition.',
    },
    {
        id: 3,
        title: 'Certificate 3',
        img: '/certificates/3.jpg',
        description: 'Professional certification and recognition.',
    },
    {
        id: 4,
        title: 'Certificate 4',
        img: '/certificates/4.jpg',
        description: 'Professional certification and recognition.',
    },
    {
        id: 5,
        title: 'Certificate 5',
        img: '/certificates/5.jpg',
        description: 'Professional certification and recognition.',
    },
    {
        id: 6,
        title: 'Certificate 6',
        img: '/certificates/6.jpg',
        description: 'Professional certification and recognition.',
    },
];

export default function Certificate() {
    const [lightbox, setLightbox] = useState(false);
    const [index, setIndex] = useState<number | null>(0);

    useEffect(() => {
        if (lightbox) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [lightbox]);

    const openLightbox = (certificateIndex: number) => {
        setIndex(certificateIndex);
        setLightbox(true);
    };

    return (
        <main className="relative">
            {/* Header */}
            <section className="px-5 pt-12 pb-8 text-center">
                <h1 className="text-3xl md:text-4xl font-bold">
                    Certificates
                </h1>

                <p className="max-w-2xl mx-auto mt-4 leading-relaxed">
                    Explore our collection of certificates and professional
                    recognitions.
                </p>
            </section>

            {/* Certificates */}
            <section className="px-5 pb-16 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                    {certificates.map((cert, certificateIndex) => (
                        <article
                            key={cert.id}
                            className="card rounded-lg shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow duration-300"
                        >
                            <button
                                type="button"
                                onClick={() => openLightbox(certificateIndex)}
                                className="block w-full cursor-pointer"
                                aria-label={`View ${cert.title}`}
                            >
                                <Image
                                    height={600}
                                    width={800}
                                    src={cert.img}
                                    alt={cert.title}
                                    className="w-full h-56 object-cover"
                                />
                            </button>

                            <div className="px-4 py-5 card2">
                                <h2 className="text-lg font-medium">
                                    {cert.title}
                                </h2>

                                <p className="text-sm mt-2">
                                    {cert.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Lightbox */}
            {lightbox && (
                <Lightbox
                    setLightbox={setLightbox}
                    lightbox={lightbox}
                    data={certificates}
                    index={index}
                    setIndex={setIndex}
                />
            )}
        </main>
    );
}