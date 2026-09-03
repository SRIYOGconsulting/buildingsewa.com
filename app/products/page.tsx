import Image from 'next/image';
import Link from 'next/link';

type Product = {
  name: string;
  category: string;
  description: string;
  img: string;
  href: string;
};

const products: Product[] = [
  {
    name: 'Building Sewa',
    category: 'Construction Management',
    description:
      'An end-to-end construction management platform connecting homeowners with architects, engineers, and contractors.',
    img: '/products/1.jpg',
    href: 'https://www.buildingsewa.com',
  },
  {
    name: 'SRIYOG App',
    category: 'Service Marketplace',
    description:
      'A platform connecting clients with verified professionals across plumbing, electrical, tutoring, beauty, and more. Now an independent company.',
    img: '/products/2.jpg',
    href: '#',
  },
  {
    name: 'GardenSewa',
    category: 'Agriculture & Training',
    description:
      'A platform connecting learners with training providers across agriculture and gardening service categories.',
    img: '/products/3.jpg',
    href: '#',
  },
  {
    name: 'Employment Solutions',
    category: 'Employment',
    description:
      'Digital platforms supporting employment-sector clients with hiring, onboarding, and workforce management tools.',
    img: '/products/4.jpg',
    href: '#',
  },
];

export default function ProductsPage() {
  return (
    <div className="relative">
      <div className="px-5 py-10 max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text2 text-center mb-2">
          Our Products
        </h1>
        <p className="text text-center text-sm mb-10 max-w-2xl mx-auto">
          Digital platforms built by SRIYOG Consulting across construction,
          services, and employment sectors.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              target={product.href.startsWith('http') ? '_blank' : undefined}
              rel={product.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="card rounded-lg shadow-md overflow-hidden w-full max-w-xs hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                height={600}
                width={800}
                src={product.img}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="px-4 py-5 card2">
                <p className="text-xs text uppercase tracking-wide mb-1">
                  {product.category}
                </p>
                <h2 className="text-lg font-medium text2">{product.name}</h2>
                <p className="text text-sm mt-2">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}   