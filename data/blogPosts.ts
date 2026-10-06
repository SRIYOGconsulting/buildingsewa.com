export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  img: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  author?: string;
  serviceSlug?: string;
  tags?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-the-right-contractor",
    title: "Choosing the Right Contractor",
    excerpt:
      "What to check before signing with a construction contractor in Nepal.",
    img: "/blog/1.jpg",
    category: "Hiring & Professionals",
    publishedAt: "October 6, 2026",
    readTime: "5 min read",
    author: "Building Sewa Editorial Team",
    serviceSlug: "civil-construction",
    tags: ["contractor", "hiring", "construction", "contract", "BOQ"],
  },

  {
    slug: "interior-finishing-trends",
    title: "Interior Finishing Trends",
    excerpt:
      "Practical interior finishing ideas for modern homes, with choices that suit Nepal's climate and lifestyle.",
    img: "/blog/2.jpg",
    category: "Design",
    publishedAt: "October 3, 2026",
    readTime: "4 min read",
    author: "Building Sewa Editorial Team",
    serviceSlug: "interior-designing",
    tags: ["interior", "design", "finishing", "kitchen", "flooring"],
  },

  {
    slug: "post-construction-cleanup-tips",
    title: "Post-Construction Cleanup Tips",
    excerpt:
      "How to prepare a newly built property for a safe and organized move-in.",
    img: "/blog/3.jpg",
    category: "Maintenance",
    publishedAt: "September 30, 2026",
    readTime: "4 min read",
    author: "Building Sewa Editorial Team",
    serviceSlug: "annual-home-maintenance",
    tags: ["cleanup", "handover", "maintenance", "move-in"],
  },

  {
    slug: "budgeting-your-construction-project",
    title: "Budgeting Your Construction Project",
    excerpt:
      "A practical breakdown of construction costs and the expenses homeowners often overlook.",
    img: "/blog/4.jpg",
    category: "Cost & Budget",
    publishedAt: "September 27, 2026",
    readTime: "6 min read",
    author: "Building Sewa Editorial Team",
    serviceSlug: "project-management",
    tags: ["budget", "cost", "BOQ", "construction", "planning"],
  },

  {
    slug: "understanding-building-permits",
    title: "Understanding Building Permits in Nepal",
    excerpt:
      "Understand the main approvals, local rules, and documents needed before construction.",
    img: "/blog/5.jpg",
    category: "Legal & Permits",
    publishedAt: "September 24, 2026",
    readTime: "6 min read",
    author: "Building Sewa Editorial Team",
    serviceSlug: "building-approval-documentation",
    tags: ["permit", "approval", "municipality", "naksha", "legal"],
  },

  {
    slug: "sustainable-building-materials",
    title: "Sustainable Building Materials",
    excerpt:
      "Explore practical material choices that can reduce environmental impact without compromising durability.",
    img: "/blog/6.jpg",
    category: "Materials",
    publishedAt: "September 21, 2026",
    readTime: "5 min read",
    author: "Building Sewa Editorial Team",
    serviceSlug: "materials-supply",
    tags: ["materials", "sustainable", "AAC", "brick", "bamboo"],
  },

  {
    slug: "how-to-get-your-naksha-passed",
    title: "How to Get Your House Naksha Passed in Nepal",
    excerpt:
      "A practical guide to the naksha pass process, required documents, local approvals, and common problems.",
    img: "/blog/7.webp",
    category: "Legal & Permits",
    publishedAt: "September 18, 2026",
    readTime: "7 min read",
    author: "Building Sewa Editorial Team",
    serviceSlug: "building-approval-documentation",
    tags: ["naksha", "permit", "approval", "municipality", "documents"],
  },

  {
    slug: "construction-cost-per-square-foot-nepal",
    title: "How Much Does It Cost to Build a House in Nepal?",
    excerpt:
      "Understand what affects construction cost per square foot and how to compare contractor quotations.",
    img: "/blog/8.jpg",
    category: "Cost & Budget",
    publishedAt: "September 15, 2026",
    readTime: "7 min read",
    author: "Building Sewa Editorial Team",
    serviceSlug: "project-management",
    tags: ["construction cost", "square foot", "BOQ", "budget"],
  },

  {
    slug: "checking-land-before-you-build",
    title: "Checking Your Land Before You Build",
    excerpt:
      "What to verify about land documents, kitta details, road access, setbacks, and site conditions.",
    img: "/blog/9.jpg",
    category: "Land & Legal",
    publishedAt: "September 12, 2026",
    readTime: "6 min read",
    author: "Building Sewa Editorial Team",
    serviceSlug: "land-survey-site-inspection",
    tags: ["land", "kitta", "site", "survey", "road access"],
  },

  {
    slug: "earthquake-resistant-house-nepal",
    title: "Is Your House Really Earthquake Resistant?",
    excerpt:
      "Understand the structural details and building-code requirements that contribute to safer homes in Nepal.",
    img: "/blog/10.jpg",
    category: "Quality & Safety",
    publishedAt: "September 9, 2026",
    readTime: "6 min read",
    author: "Building Sewa Editorial Team",
    serviceSlug: "structural-engineering",
    tags: ["earthquake", "structural", "RCC", "safety", "building code"],
  },

  {
    slug: "how-long-does-it-take-to-build-a-house",
    title: "How Long Does It Take to Build a House in Nepal?",
    excerpt:
      "A realistic construction timeline from design and approval to finishing and handover.",
    img: "/blog/11.jpg",
    category: "Planning",
    publishedAt: "September 6, 2026",
    readTime: "6 min read",
    author: "Building Sewa Editorial Team",
    serviceSlug: "project-management",
    tags: ["timeline", "planning", "construction", "project management"],
  },

  {
    slug: "grey-structure-vs-turnkey",
    title: "Grey Structure vs Turnkey: Which Should You Choose?",
    excerpt:
      "Compare grey structure and turnkey construction based on scope, cost, flexibility, and involvement.",
    img: "/blog/12.png",
    category: "Construction",
    publishedAt: "September 3, 2026",
    readTime: "5 min read",
    author: "Building Sewa Editorial Team",
    serviceSlug: "civil-construction",
    tags: ["grey structure", "turnkey", "construction", "contractor"],
  },

  {
    slug: "building-a-house-in-nepal-from-abroad",
    title: "Building a House in Nepal While Living Abroad",
    excerpt:
      "How NRNs and overseas workers can manage construction remotely with proper documentation and supervision.",
    img: "/blog/13.jpg",
    category: "Planning",
    publishedAt: "August 31, 2026",
    readTime: "7 min read",
    author: "Building Sewa Editorial Team",
    serviceSlug: "project-management",
    tags: ["NRN", "abroad", "remote construction", "supervision"],
  },

  {
    slug: "choosing-cement-rebar-and-bricks",
    title: "Choosing Cement, Rebar and Bricks in Nepal",
    excerpt:
      "What to check when purchasing major construction materials and where quality should never be compromised.",
    img: "/blog/14.jpg",
    category: "Materials",
    publishedAt: "August 28, 2026",
    readTime: "6 min read",
    author: "Building Sewa Editorial Team",
    serviceSlug: "materials-supply",
    tags: ["cement", "rebar", "bricks", "materials", "quality"],
  },

  {
    slug: "house-completion-certificate-nepal",
    title: "House Completion Certificate: Why You Can't Skip It",
    excerpt:
      "Why a completion certificate matters after construction and what homeowners should know before applying.",
    img: "/blog/15.jpg",
    category: "Legal & Permits",
    publishedAt: "August 25, 2026",
    readTime: "5 min read",
    author: "Building Sewa Editorial Team",
    serviceSlug: "building-approval-documentation",
    tags: ["completion certificate", "permit", "approval", "handover"],
  },
];