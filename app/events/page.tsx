'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from '../../components/Lightbox';

type EventItem = {
  title: string;
  date: string;
  description: string;
  img: string;
};

const events: EventItem[] = [
  {
    title: 'Company Events',
    date: 'Upcoming',
    description:
      'Stay updated with upcoming events, programmes, and activities organized by SRIYOG.',
    img: '/events/1.jpg',
  },
  {
    title: 'Training & Workshops',
    date: 'Upcoming',
    description:
      'Information about upcoming training sessions, workshops, and learning programmes will be shared here.',
    img: '/events/2.jpg',
  },
  {
    title: 'Community Activities',
    date: 'Upcoming',
    description:
      'Updates about community activities and other organizational programmes will be added here.',
    img: '/events/3.jpg',
  },
];

export default function EventsPage() {
  const [lightbox, setLightbox] = useState(false);
  const [index, setIndex] = useState<number | null>(0);

  const lightboxData = events.map((event) => ({
    img: event.img,
    label: event.title,
  }));

  return (
    <main className="relative">
      <div className="px-5 py-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text2">
            Events
          </h1>

          <p className="text mt-3 max-w-2xl mx-auto">
            Explore upcoming events, programmes, workshops, and activities.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <article
              key={event.title}
              className="card rounded-lg shadow-md overflow-hidden w-full hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={event.img}
                alt={event.title}
                width={800}
                height={600}
                onClick={() => {
                  setLightbox(true);
                  setIndex(i);
                }}
                className="w-full h-56 object-cover cursor-pointer"
              />

              <div className="px-5 py-5 card2">
                <p className="text-sm text mb-2">{event.date}</p>

                <h2 className="text-lg font-semibold text2">
                  {event.title}
                </h2>

                <p className="text-sm text mt-2 leading-6">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          setLightbox={setLightbox}
          lightbox={lightbox}
          data={lightboxData}
          index={index}
          setIndex={setIndex}
        />
      )}
    </main>
  );
}