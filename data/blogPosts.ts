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
  relatedSlugs?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-the-right-contractor",
    title: "Choosing the Right Contractor",
    excerpt:
      "Choosing a construction contractor is about more than finding the lowest quotation. Compare experience, site supervision, material specifications, timelines and written payment terms before committing to a team. These practical checks can help you avoid common misunderstandings and manage your project with greater confidence.",
    img: "/blog/1.jpg",
    category: "Hiring & Professionals",
    publishedAt: "October 6, 2026",
    readTime: "5 min read",
    author: "Sundar Shrestha",
    serviceSlug: "civil-construction",
    tags: ["contractor", "hiring", "construction", "contract", "BOQ"],
  },
  {
    slug: "interior-finishing-trends",
    title: "Interior Finishing Trends",
    excerpt:
      "Explore practical interior finishing ideas for modern homes, including warm textures, useful storage, durable flooring and thoughtful lighting. The right choices should fit your family's routines, local climate and maintenance needs—not just the latest design photos.",
    img: "/blog/2.jpg",
    category: "Design",
    publishedAt: "October 3, 2026",
    readTime: "4 min read",
    author: "Sundar Shrestha",
    serviceSlug: "interior-designing",
    tags: ["interior", "design", "finishing", "kitchen", "flooring"],
  },
  {
    slug: "post-construction-cleanup-tips",
    title: "Post-Construction Cleanup Tips",
    excerpt:
      "Before moving into a newly built home, inspect the finishes, remove construction dust carefully and check that key fittings work as expected. A planned cleanup helps you prepare each room safely and identify small issues before the final handover.",
    img: "/blog/3.jpg",
    category: "Maintenance",
    publishedAt: "September 30, 2026",
    readTime: "4 min read",
    author: "Sundar Shrestha",
    serviceSlug: "annual-home-maintenance",
    tags: ["cleanup", "handover", "maintenance", "move-in"],
  },
  {
    slug: "budgeting-your-construction-project",
    title: "Budgeting Your Construction Project",
    excerpt:
      "A realistic construction budget includes more than the main contractor's quotation. Learn how to organise estimates for materials, labour, approvals, utilities, finishing and a contingency so you can compare proposals and prepare for costs that may otherwise be overlooked.",
    img: "/blog/4.jpg",
    category: "Cost & Budget",
    publishedAt: "September 27, 2026",
    readTime: "6 min read",
    author: "Sundar Shrestha",
    serviceSlug: "project-management",
    tags: ["budget", "cost", "BOQ", "construction", "planning"],
  },
  {
    slug: "understanding-building-permits",
    title: "Understanding Building Permits in Nepal",
    excerpt:
      "Before construction begins, understand the role of municipal approvals, drawings and supporting documents. Requirements differ by local authority and project, so use this overview to prepare questions and confirm the current process with the relevant municipality.",
    img: "/blog/5.jpg",
    category: "Legal & Permits",
    publishedAt: "September 24, 2026",
    readTime: "6 min read",
    author: "Sundar Shrestha",
    serviceSlug: "building-approval-documentation",
    tags: ["permit", "approval", "municipality", "naksha", "legal"],
  },
  {
    slug: "sustainable-building-materials",
    title: "Sustainable Building Materials",
    excerpt:
      "Material selection affects durability, comfort, maintenance and environmental impact. Explore options to discuss with your architect or engineer, and learn why suitability, verified quality and correct installation matter as much as a product's sustainability claims.",
    img: "/blog/6.jpg",
    category: "Materials",
    publishedAt: "September 21, 2026",
    readTime: "5 min read",
    author: "Sundar Shrestha",
    serviceSlug: "materials-supply",
    tags: ["materials", "sustainable", "AAC", "brick", "bamboo"],
  },
  {
    slug: "how-to-get-your-naksha-passed",
    title: "How to Get Your House Naksha Passed in Nepal",
    excerpt:
      "The naksha pass process involves drawings, land documents and local authority checks. This guide outlines common preparation steps and issues to discuss with your registered designer or engineer before submitting an application.",
    img: "/blog/7.webp",
    category: "Legal & Permits",
    publishedAt: "September 18, 2026",
    readTime: "7 min read",
    author: "Sundar Shrestha",
    serviceSlug: "building-approval-documentation",
    tags: ["naksha", "permit", "approval", "municipality", "documents"],
  },
  {
    slug: "construction-cost-per-square-foot-nepal",
    title: "How Much Does It Cost to Build a House in Nepal?",
    excerpt:
      "Construction costs depend on location, design, ground conditions, material specifications, labour and finishing level. Learn how to read a per-square-foot estimate carefully and compare quotations on the same scope instead of relying on a single headline rate.",
    img: "/blog/8.jpg",
    category: "Cost & Budget",
    publishedAt: "September 15, 2026",
    readTime: "7 min read",
    author: "Sundar Shrestha",
    serviceSlug: "project-management",
    tags: ["construction cost", "square foot", "BOQ", "budget"],
  },
  {
    slug: "checking-land-before-you-build",
    title: "Checking Your Land Before You Build",
    excerpt:
      "Before finalising a house design, verify ownership documents, plot boundaries, road access, site levels and applicable setbacks. Early checks can reveal constraints that affect the design, approval process and overall project budget.",
    img: "/blog/9.jpg",
    category: "Land & Legal",
    publishedAt: "September 12, 2026",
    readTime: "6 min read",
    author: "Sundar Shrestha",
    serviceSlug: "land-survey-site-inspection",
    tags: ["land", "kitta", "site", "survey", "road access"],
  },
  {
    slug: "earthquake-resistant-house-nepal",
    title: "Is Your House Really Earthquake Resistant?",
    excerpt:
      "Safer construction depends on appropriate structural design, suitable materials, workmanship and compliance with applicable building requirements. Understand the questions to raise with a qualified structural engineer before and during construction.",
    img: "/blog/10.jpg",
    category: "Quality & Safety",
    publishedAt: "September 9, 2026",
    readTime: "6 min read",
    author: "Sundar Shrestha",
    serviceSlug: "structural-engineering",
    tags: ["earthquake", "structural", "RCC", "safety", "building code"],
  },
  {
    slug: "how-long-does-it-take-to-build-a-house",
    title: "How Long Does It Take to Build a House in Nepal?",
    excerpt:
      "A house-building schedule includes design, approvals, site preparation, structure, services, finishing and handover. Learn what can affect each stage and why weather, material availability, inspections and curing time should be included in realistic plans.",
    img: "/blog/11.jpg",
    category: "Planning",
    publishedAt: "September 6, 2026",
    readTime: "6 min read",
    author: "Sundar Shrestha",
    serviceSlug: "project-management",
    tags: ["timeline", "planning", "construction", "project management"],
  },
  {
    slug: "grey-structure-vs-turnkey",
    title: "Grey Structure vs Turnkey: Which Should You Choose?",
    excerpt:
      "Grey-structure and turnkey contracts offer different levels of scope, flexibility and owner involvement. Compare what is included, how finishing is managed and how payments are structured before deciding which approach fits your needs.",
    img: "/blog/12.png",
    category: "Construction",
    publishedAt: "September 3, 2026",
    readTime: "5 min read",
    author: "Sundar Shrestha",
    serviceSlug: "civil-construction",
    tags: ["grey structure", "turnkey", "construction", "contractor"],
  },
  {
    slug: "building-a-house-in-nepal-from-abroad",
    title: "Building a House in Nepal While Living Abroad",
    excerpt:
      "Managing construction from another country requires clear records, a trusted local representative and consistent progress checks. Consider how written approvals, milestone payments, site reports and independent inspections can reduce uncertainty when you cannot visit regularly.",
    img: "/blog/13.jpg",
    category: "Planning",
    publishedAt: "August 31, 2026",
    readTime: "7 min read",
    author: "Sundar Shrestha",
    serviceSlug: "project-management",
    tags: ["NRN", "abroad", "remote construction", "supervision"],
  },
  {
    slug: "choosing-cement-rebar-and-bricks",
    title: "Choosing Cement, Rebar and Bricks in Nepal",
    excerpt:
      "Construction materials should be selected against project specifications, recognised standards and professional advice. Learn what to ask suppliers, how to keep purchase records and why storage and handling can affect the quality of materials on site.",
    img: "/blog/14.jpg",
    category: "Materials",
    publishedAt: "August 28, 2026",
    readTime: "6 min read",
    author: "Sundar Shrestha",
    serviceSlug: "materials-supply",
    tags: ["cement", "rebar", "bricks", "materials", "quality"],
  },
  {
    slug: "house-completion-certificate-nepal",
    title: "House Completion Certificate: Why You Can't Skip It",
    excerpt:
      "A completion certificate is an important part of the building approval process. Learn why it matters after construction, which documents may be requested and why you should confirm the exact requirements with your municipality before applying.",
    img: "/blog/15.jpg",
    category: "Legal & Permits",
    publishedAt: "August 25, 2026",
    readTime: "5 min read",
    author: "Sundar Shrestha",
    serviceSlug: "building-approval-documentation",
    tags: ["completion certificate", "permit", "approval", "handover"],
  },
  {
    slug: "planning-your-house-construction-in-nepal",
    title: "Planning Your House Construction in Nepal: A Step-by-Step Guide",
    excerpt:
      "Building a house starts long before the first brick is laid. Learn how to plan your land, budget, design, approvals, contractor, materials and construction schedule so you can make informed decisions at every stage.",
    img: "/blog/16.jpg",
    category: "Planning",
    publishedAt: "October 15, 2026",
    readTime: "7 min read",
    author: "Sundar Shrestha",
    serviceSlug: "project-management",
    tags: [
      "house planning",
      "construction",
      "budget",
      "Nepal",
      "building permit",
    ],
    relatedSlugs: [
      "choosing-the-right-contractor",
      "budgeting-your-construction-project",
      "understanding-building-permits",
    ],
  },
];
