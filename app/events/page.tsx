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
    title: 'Company Foundation Anniversary',
    date: 'June 14, 2026',
    description: 'Celebrating another year of growth with the full SRIYOG team.',
    img: '/events/1.jpg',
  },
  {
    title: 'Internship Orientation Day',
    date: 'September 1, 2026',
    description: 'Welcoming the new batch of interns for the September intake.',
    img: '/events/2.jpg',
  },
  {
    title: 'Client Appreciation Meet',
    date: 'August 15, 2026',
    description: 'An evening with long-term clients across construction and IT services.',
    img: '/events/3.jpg',
  },
  {
    title: 'Site Safety Workshop',
    date: 'July 10, 2026',
    description: 'On-site training covering safety standards for active construction sites.',
    img: '/events/4.jpg',
  },
  {
    title: 'Tech & Construction Meetup',
    date: 'May 22, 2026',
    description: 'A joint session bridging our software and construction management teams.',
    img: '/events/5.jpg',
  },
  {
    title: 'Annual Team Retreat',
    date: 'December 20, 2025',
    description: 'A day away from the office to celebrate the year\u2019s milestones together.',
    img: '/events/6.jpg',
  },
];

export default function EventsPage() {
  const [lightbox, setLightbox] = useState(false);
  const [index, setIndex] = useState<number | null>(0);

  return (
    <div className="relative">
      <div className="px-5 py-10 max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text2 text-center mb-8">
          Events
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {events.map((event, i) => (
            <div
              key={event.title}
              className="card rounded-lg shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                height={600}
                width={800}
                src={event.img}
                alt={event.title}
                onClick={() => {
                  setLightbox(true);
                  setIndex(i);
                }}
                className="w-full h-56 object-cover cursor-pointer"
              />
              <div className="px-4 py-5 card2">
                <h2 className="text-lg font-medium text2">{event.title}</h2>
                <p className="text-sm text mt-1">{event.date}</p>
                <p className="text text-sm mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox
          setLightbox={setLightbox}
          lightbox={lightbox}
          data={events.map((e) => ({ img: e.img, label: e.title }))}
          index={index}
          setIndex={setIndex}
        />
      )}
    </div>
  );
}