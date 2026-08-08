import Image from 'next/image';

export default function ServicesPage() {
    const services = [
        'Land Survey & Site Inspection',
        'Soil Testing',
        'Architecture & House Design',
        'Structural Engineering',
        'Building Approval & Documentation',
        'Project Management',
        'Vaastu Consultation',
        'Fencing',
        'Bhumi Pooja',
        'Civil Construction',
        'Water Boring',
        'Plumbing',
        'Electrical Services',
        'Truss Roofing',
        'Waterproofing',
        'uPVC Doors & Windows',
        'Grill / Iron Works',
        'Glass Works',
        'Tiling',
        'Parqueting',
        'Painting',
        'Woodwork',
        'Custom Furniture',
        'Modular Kitchen',
        'Bathroom Setup',
        'Interior Designing',
        'Wall Decoration',
        'Gardening & Landscaping',
        'RO Water Purification',
        'Water Filter Setup',
        'AC Services',
        'Electronics Setup (TV / Geyser / Fridge)',
        'CCTV Camera Installation',
        'Home Automation',
        'Wi-Fi Access Point Installation',
        'Solar Panel Installation',
        'EV Charger Installation',
        'Lift & Elevator Installation',
        'Fire Safety Systems',
        'Post-Construction Cleaning',
        'Griha Pravesh Puja',
        'Packing & Moving',
        'Annual Home Maintenance',
    ];

    return (
        <div className="relative">
            <div className="px-5 py-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                    {services.map((service, index) => (
                        <div
                            key={service}
                            className="card rounded-lg shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow duration-300"
                        >
                            <Image
                                height={600}
                                width={800}
                                src={`/certificates/${(index % 6) + 1}.jpg`}
                                alt={service}
                                className="w-full h-56 object-cover"
                            />
                            <div className="px-4 py-5 card2">
                                <h2 className="text-lg font-medium">{service}</h2>
                                <p className="card2 text-sm mt-2">
                                    Complete support for your residential and commercial property needs.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
