import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-5 py-12">
      {/* Back to Blog */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="text-[#0D5D59] font-medium hover:underline"
        >
          ← Back to Blog
        </Link>
      </div>

      {/* Blog Header */}
      <article className="card rounded-xl overflow-hidden shadow-md">
        <div className="relative w-full h-[300px] md:h-[450px]">
          <Image
            src={post.img}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
        </div>

        <div className="card2 px-6 md:px-10 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text2">
            {post.title}
          </h1>

          <p className="text mt-4 text-lg leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-8 border-t pt-6">
            <h2 className="text-2xl font-semibold text2 mb-4">
              About This Topic
            </h2>

            <p className="text leading-relaxed">
              This article provides useful information and practical
              guidance related to {post.title.toLowerCase()}.
            </p>

            <p className="text leading-relaxed mt-4">
              Whether you are planning a construction project, improving
              your home, or preparing for your next project, understanding
              the important considerations can help you make informed
              decisions.
            </p>
          </div>
        </div>
      </article>

      {/* Back Button */}
      <div className="flex justify-center mt-10">
        <Link
          href="/blog"
          className="inline-block border-2 border-[#0D5D59] py-2 px-6 rounded-md text-[#0D5D59] font-semibold hover:bg-[#0D5D59] hover:text-white transition duration-300"
        >
          View All Blogs
        </Link>
      </div>
    </main>
  );
}