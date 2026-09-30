import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

export default function LatestBlogs() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 max-w-[1200px] mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Latest Blogs
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {latestPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
          >
            <div className="relative w-full h-48">
              <Image
                src={post.img}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          href="/blog"
          className="inline-block border-2 border-[#0D5D59] py-2 px-6 rounded-md text-[#0D5D59] font-semibold hover:bg-[#0D5D59] hover:text-white transition duration-300"
        >
          View All Blogs
        </Link>
      </div>
    </section>
  );
}
