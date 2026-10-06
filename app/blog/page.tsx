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
  searchParams: Promise<{
    category?: string;
    q?: string;
  }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;

  const selectedCategory = params.category || "All";
  const searchQuery = params.q?.trim() || "";

  const categories = [
    "All",
    ...Array.from(new Set(blogPosts.map((post) => post.category))),
  ];

  const normalizedSearch = searchQuery.toLowerCase();

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    const matchesSearch =
      !normalizedSearch ||
      post.title.toLowerCase().includes(normalizedSearch) ||
      post.excerpt.toLowerCase().includes(normalizedSearch) ||
      post.category.toLowerCase().includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });

  const showFeatured = selectedCategory === "All" && !searchQuery;

  const featuredPost = showFeatured ? filteredPosts[0] : null;

  const articlePosts = showFeatured ? filteredPosts.slice(1) : filteredPosts;

  return (
    <main>
      {/* Page Header */}
      <Ribbon
        name="Blog"
        description="Practical construction and property knowledge for homeowners in Nepal."
      />

      <section className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        {/* Intro */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0E4541]">
              Construction Knowledge
            </p>

            <h1 className="text2 mt-3 text-3xl font-bold leading-tight md:text-5xl">
              Practical Guides for Building & Property
            </h1>

            <p className="text mt-5 max-w-3xl text-base leading-7 md:text-lg">
              Explore practical guides on planning, construction, materials,
              approvals, budgeting, design and maintaining your property in
              Nepal.
            </p>
          </div>
        </div>

        {/* Search */}
        <form
          method="GET"
          action="/blog"
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          {selectedCategory !== "All" && (
            <input type="hidden" name="category" value={selectedCategory} />
          )}

          <input
            type="search"
            name="q"
            defaultValue={searchQuery}
            placeholder="Search construction guides..."
            aria-label="Search blog articles"
            className="text w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-[#0E4541] focus:ring-2 focus:ring-[#0E4541]/10"
          />

          <button
            type="submit"
            className="rounded-lg bg-[#0E4541] px-7 py-3 font-semibold text-white transition hover:bg-[#0b3936]"
          >
            Search
          </button>
        </form>

        {/* Categories */}
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            const query = new URLSearchParams();

            if (category !== "All") {
              query.set("category", category);
            }

            if (searchQuery) {
              query.set("q", searchQuery);
            }

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
                    : "border-gray-300 bg-white text-[#0E4541] hover:border-[#0E4541] hover:bg-[#0E4541]/5"
                }`}
              >
                {category}
              </Link>
            );
          })}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="mt-12 rounded-xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
            <h2 className="text2 text-2xl font-bold">No articles found</h2>

            <p className="text mt-3">
              Try another search term or select a different category.
            </p>

            <Link
              href="/blog"
              className="mt-6 inline-flex rounded-lg bg-[#0E4541] px-6 py-3 font-semibold text-white"
            >
              View All Articles
            </Link>
          </div>
        )}

        {/* Featured Guide */}
        {featuredPost && (
          <section className="mt-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0E4541]">
              Featured Guide
            </p>

            <h2 className="text2 mt-2 text-3xl font-bold md:text-4xl">
              Start Here
            </h2>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group mt-7 grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg md:grid-cols-2"
            >
              {/* Image */}
              <div className="relative min-h-[320px] md:min-h-[430px]">
                <Image
                  src={featuredPost.img}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between bg-white p-8 md:p-10">
                <div>
                  <span className="inline-flex rounded-full bg-[#0E4541] px-4 py-2 text-sm font-semibold text-white">
                    {featuredPost.category}
                  </span>

                  <h3 className="text2 mt-6 text-2xl font-bold leading-tight md:text-4xl">
                    {featuredPost.title}
                  </h3>

                  <p className="text mt-5 leading-7">{featuredPost.excerpt}</p>

                  <div className="text mt-5 flex flex-wrap items-center gap-2 text-sm">
                    <span>{featuredPost.publishedAt}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <span className="mt-8 font-semibold text-[#0E4541]">
                  Read Full Guide →
                </span>
              </div>
            </Link>
          </section>
        )}

        {/* Article Grid */}
        {articlePosts.length > 0 && (
          <section className="mt-16">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0E4541]">
                Explore More
              </p>

              <h2 className="text2 mt-2 text-3xl font-bold md:text-4xl">
                Latest Articles
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {articlePosts.map((post) => (
                <article
                  key={post.slug}
                  className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Image */}
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={post.img}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="flex min-h-[310px] flex-col p-6">
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="font-semibold text-[#0E4541]">
                        {post.category}
                      </span>

                      <span className="text-gray-400">•</span>

                      <span className="text-gray-500">{post.readTime}</span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text2 mt-4 text-xl font-bold leading-snug transition-colors group-hover:text-[#0E4541]">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text mt-3 line-clamp-3 text-sm leading-6">
                      {post.excerpt}
                    </p>

                    <div className="text mt-4 text-sm">{post.publishedAt}</div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-auto pt-6 font-semibold text-[#0E4541]"
                    >
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
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
