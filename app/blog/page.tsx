import Image from "next/image";
import Link from "next/link";
import Ribbon from "@/components/Ribbon";
import { blogPosts } from "@/data/blogPosts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Building Sewa",
  description: "Construction tips, guides, and news from Building Sewa.",
};

export default function BlogPage() {
  return (
    <main>
      {/* Page Header */}
      <Ribbon
        name="Blog"
        description="Explore useful insights, ideas, and information related to construction and building projects."
      />

      {/* Blog Posts */}
      <section className="max-w-7xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-52">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5 card2">
                <h2 className="text-lg font-semibold text2">{post.title}</h2>

                <p className="text text-sm mt-2 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="mt-4 text-sm font-semibold text-[#0D5D59]">
                  Read More →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
