'use client'
// import Ribbon from "../../components/Ribbon";

const cardData = [
  {
    id: 1,
    title: "Payment QR",
    image: "/qr/1.jpg",
    link: "#payment",
    description: "Scan this QR code to make secure payments for services.",
  },
  {
    id: 2,
    title: "Facebook",
    image: "/qr/2.jpg",
    link: "https://www.facebook.com/sriyogconsulting",
    description: "Follow our latest updates and technology solutions.",
  },
  {
    id: 3,
    title: "Google Reviews",
    image: "/qr/3.jpg",
    link: "tel:+9779852024365",
    description: "Get in touch with our team for consultations and support.",
  },
  {
    id: 4,
    title: "Appointment",
    image: "/qr/4.jpg",
    link: "mailto:info@sriyogconsulting.com",
    description: "Reach out via email for inquiries and project discussions.",
  },
  {
    id: 5,
    title: "Instagram",
    image: "/qr/5.jpg",
    link: "https://dashboard.sriyogconsulting.com",
    description: "Access your personalized dashboard for project updates.",
  },
  {
    id: 6,
    title: "Location",
    image: "/qr/6.jpg",
    link: "https://www.google.com/maps/place/Sriyog+Consulting/",
    description: "Find our office location on Google Maps for visits.",
  },
];

function Qr() {
  return (
    <div>

      {/* Page Header */}
      {/* <Ribbon name= "QR Codes" showfont={false}/> */}

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-8">
          {cardData.map((card) => (
            <a
              key={card.id}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card rounded-lg border border-gray-200 overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className=" flex flex-col ">
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-auto object-contain mb-4 border border-gray-200 rounded-t-md "
                  />
                )}
                <h3 className="text-2xl font-semibold px-4 mb-2">
                  {card.title}
                </h3>
                <p className=" text-sm px-4 pb-4 pt-3">{card.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Qr;
