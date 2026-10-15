import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import Ribbon from "@/components/Ribbon";
import CtaBanner from "@/components/CtaBanner";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Building Sewa Blog | Construction & Property Guides in Nepal",
  description:
    "Practical construction, property, design, budgeting, materials, approval and maintenance guides for homeowners in Nepal.",
};

type BlogPageProps = {
  searchParams: Promise<{ category?: string; q?: string }>;
};

const AUTHOR_IMAGE = "/blog/1.png";

function AuthorLine({ author = "Sundar Shrestha" }: { author?: string }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <Image
        src={AUTHOR_IMAGE}
        alt={`${author} profile placeholder`}
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 rounded-full border border-[#0E4541]/15 object-cover"
      />
      <div className="min-w-0">
        <p className="text2 truncate text-sm font-semibold">{author}</p>
      </div>
    </div>
  );
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const selectedCategory = params.category ?? "All";
  const searchTerm = (params.q ?? "").trim();

  const categories = [
    "All",
    ...Array.from(new Set(blogPosts.map((post) => post.category))),
  ];
  const filteredPosts = blogPosts.filter((post) => {
    const categoryMatches =
      selectedCategory === "All" || post.category === selectedCategory;
    const searchable =
      `${post.title} ${post.excerpt} ${post.category} ${(post.tags ?? []).join(" ")}`.toLowerCase();
    return (
      categoryMatches &&
      (!searchTerm || searchable.includes(searchTerm.toLowerCase()))
    );
  });

  const showFeatured = selectedCategory === "All" && !searchTerm;
  const featuredPost = showFeatured ? filteredPosts[0] : null;
  const articlePosts = showFeatured ? filteredPosts.slice(1) : filteredPosts;

  return (
    <main>
      <Ribbon
        name="Blog"
        description="Practical construction and property knowledge for homeowners in Nepal."
      />

      <section className="mx-auto max-w-7xl px-5 py-12 md:py-16">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0E4541]">
              Construction Knowledge
            </p>
            <h1 className="text2 mt-3 text-3xl font-bold leading-tight md:text-5xl">
              Practical Guides for Building &amp; Property
            </h1>
            <p className="text mt-4 max-w-3xl text-base leading-7 md:text-lg">
              Explore useful advice on planning, construction, materials,
              approvals, budgeting, design and property maintenance in Nepal.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            const query = new URLSearchParams();
            if (category !== "All") query.set("category", category);
            if (searchTerm) query.set("q", searchTerm);
            const href = query.toString()
              ? `/blog?${query.toString()}`
              : "/blog";
            return (
              <Link
                key={category}
                href={href}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-[#0E4541] bg-[#0E4541] text-white"
                    : "border-theme bg-card text-[#0E4541] hover:border-[#0E4541] hover:bg-[#0E4541]/5"
                }`}
              >
                {category}
              </Link>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <div className="mt-12 rounded-xl border border-dashed border-gray-300 bg-card px-6 py-12 text-center">
            <h2 className="text2 text-2xl font-bold">No articles found</h2>
            <p className="text mt-3">Try a different keyword or category.</p>
            <Link
              href="/blog"
              className="mt-6 inline-flex rounded-lg bg-[#0E4541] px-6 py-3 font-semibold text-white"
            >
              View All Articles
            </Link>
          </div>
        )}

        {featuredPost && (
          <section className="mt-12">
            <div className="mb-5">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0E4541]">
                Popular Post
              </p>
            </div>
            <article className="grid overflow-hidden rounded-2xl border-theme bg-card shadow-sm md:grid-cols-2">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group relative block min-h-[260px] overflow-hidden sm:min-h-[340px] md:min-h-[440px]"
              >
                <Image
                  src={featuredPost.img}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>

              <div className="flex flex-col justify-center p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full bg-[#0E4541]/10 px-3 py-1 font-medium text-[#0E4541]">
                    {featuredPost.category}
                  </span>
                  <span className="text">•</span>
                  <span className="text">{featuredPost.publishedAt}</span>
                  <span className="text">•</span>
                  <span className="text">{featuredPost.readTime}</span>
                </div>

                <h2 className="text2 mt-4 text-2xl font-bold leading-tight md:text-3xl">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h2>

                <p className="text mt-4 leading-7">{featuredPost.excerpt}</p>

                <div className="mt-6 border-t border-theme pt-5">
                  <AuthorLine
                    author={featuredPost.author ?? "Sundar Shrestha"}
                  />
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0E4541] hover:underline"
                >
                  Read Article <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </section>
        )}

        {articlePosts.length > 0 && (
          <section className="mt-14">
            <div className="mb-7">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0E4541]">
                Explore More
              </p>
              <h2 className="text2 mt-2 text-3xl font-bold md:text-4xl">
                {searchTerm || selectedCategory !== "All"
                  ? "Matching Articles"
                  : "Recent Posts"}
              </h2>
            </div>
            <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articlePosts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border-theme bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative block h-52 shrink-0 overflow-hidden"
                  >
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="flex min-h-[330px] flex-1 flex-col p-5 sm:p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                      <span className="font-semibold text-[#0E4541]">
                        {post.category}
                      </span>
                      <span className="text2">•</span>
                      <span className="text2">{post.readTime}</span>
                    </div>
                    <h3 className="text2 mt-3 line-clamp-2 min-h-[3.5rem] text-xl font-bold leading-snug transition-colors group-hover:text-[#0E4541]">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-6">
                      {post.excerpt}
                    </p>
                    <div className="text2 mt-3 text-xs">{post.publishedAt}</div>
                    <div className="mt-5 border-t border-theme pt-4">
                      <AuthorLine author={post.author} />
                    </div>
                    <div className="mt-auto pt-5">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 font-semibold text-[#0E4541] hover:underline"
                      >
                        Read Article <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <div className="mt-16">
          <CtaBanner
            title="Planning a building project?"
            description="Explore Building Sewa services for planning, construction, approvals, design and other property needs."
            buttonText="Explore Services"
            buttonHref="/services"
            backgroundImage="/services/1.jpg"
          />
        </div>
      </section>
    </main>
  );
}
