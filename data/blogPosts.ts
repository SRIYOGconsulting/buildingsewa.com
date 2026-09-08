export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  img: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'choosing-the-right-contractor',
    title: 'Choosing the Right Contractor',
    excerpt: 'What to check before signing with a construction contractor in Nepal.',
    img: '/blog/7.jpg',
  },
  {
    slug: 'interior-finishing-trends',
    title: 'Interior Finishing Trends',
    excerpt: 'Popular finishing styles homeowners are choosing this year.',
    img: '/blog/8.jpg',
  },
  {
    slug: 'post-construction-cleanup-tips',
    title: 'Post-Construction Cleanup Tips',
    excerpt: 'How to prepare a newly built space for move-in day.',
    img: '/blog/9.jpg',
  },
  {
    slug: 'budgeting-your-construction-project',
    title: 'Budgeting Your Construction Project',
    excerpt: 'A practical breakdown of where your construction budget actually goes.',
    img: '/blog/4.jpg',
  },
  {
    slug: 'understanding-building-permits',
    title: 'Understanding Building Permits in Nepal',
    excerpt: 'What permits you need before construction can legally begin.',
    img: '/blog/5.jpg',
  },
  {
    slug: 'sustainable-building-materials',
    title: 'Sustainable Building Materials',
    excerpt: 'Eco-friendly material choices that don\u2019t compromise on durability.',
    img: '/blog/6.jpg',
  },
];