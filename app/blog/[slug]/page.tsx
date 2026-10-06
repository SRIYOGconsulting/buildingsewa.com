import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { blogPosts } from "@/data/blogPosts";
import { blogContent, type ContentBlock } from "@/data/blogContent";
import CtaBanner from "@/components/CtaBanner";
import { getServiceBySlug } from "@/lib/services";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Building Sewa",
    };
  }

  return {
    title: `${post.title} | Building Sewa`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function Block({ block }: { block: ContentBlock }) {
  if (block.type === "p") {
    return <p className="text leading-8">{block.text}</p>;
  }

  if (block.type === "list") {
    return (
      <ul className="text list-disc space-y-3 pl-6 leading-7">
        {block.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "steps") {
    return (
      <ol className="space-y-6">
        {block.items.map((step, index) => (
          <li key={index} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0E4541] text-sm font-bold text-white">
              {index + 1}
            </span>

            <div>
              <h4 className="text2 font-bold">{step.title}</h4>

              <p className="text mt-2 leading-7">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "tip") {
    return (
      <div className="rounded-xl border border-[#0E4541]/20 bg-[#0E4541]/5 p-5">
        {block.title && <h4 className="text2 font-bold">{block.title}</h4>}

        <p className="text mt-2 leading-7">{block.text}</p>
      </div>
    );
  }

  if (block.type === "warning") {
    return (
      <div className="rounded-xl border border-amber-300 bg-amber-50 p-5">
        {block.title && (
          <h4 className="font-bold text-amber-900">{block.title}</h4>
        )}

        <p className="mt-2 leading-7 text-amber-900">{block.text}</p>
      </div>
    );
  }

  if (block.type === "table") {
    return (
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full min-w-[600px] border-collapse text-left">
          <thead>
            <tr className="bg-[#0E4541] text-white">
              {block.headers.map((header) => (
                <th
                  key={header}
                  className="border-b border-white/20 px-4 py-3 font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-gray-200 last:border-b-0"
              >
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-3 align-top leading-6">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return null;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const content = blogContent[post.slug];

  if (!content) {
    notFound();
  }

  /*
   * Get the actual Building Sewa service connected
   * to this article.
   */
  const service = post.serviceSlug
    ? await getServiceBySlug(post.serviceSlug)
    : undefined;

  /*
   * Related articles:
   * First use explicitly related articles if available.
   * Then use same-category articles.
   * Finally fill remaining spaces with other articles.
   */
  const explicitRelated = post.relatedSlugs
    ? blogPosts.filter((item) => post.relatedSlugs?.includes(item.slug))
    : [];

  const sameCategory = blogPosts.filter(
    (item) =>
      item.slug !== post.slug &&
      item.category === post.category &&
      !explicitRelated.some((related) => related.slug === item.slug),
  );

  const otherArticles = blogPosts.filter(
    (item) =>
      item.slug !== post.slug &&
      !explicitRelated.some((related) => related.slug === item.slug) &&
      !sameCategory.some((related) => related.slug === item.slug),
  );

  const relatedPosts = [
    ...explicitRelated,
    ...sameCategory,
    ...otherArticles,
  ].slice(0, 3);

  return (
    <main>
      <article className="mx-auto max-w-5xl px-5 py-12 md:py-16">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center font-semibold text-[#0E4541] hover:underline"
        >
          ← Back to Blog
        </Link>

        {/* Header */}
        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Link
              href={`/blog?category=${encodeURIComponent(post.category)}`}
              className="font-semibold text-[#0E4541] hover:underline"
            >
              {post.category}
            </Link>

            <span className="text-gray-400">•</span>

            <span className="text-gray-500">{post.publishedAt}</span>

            <span className="text-gray-400">•</span>

            <span className="text-gray-500">{post.readTime}</span>
          </div>

          <h1 className="text2 mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            {post.title}
          </h1>

          <p className="text mt-5 max-w-3xl text-lg leading-8">
            {post.excerpt}
          </p>

          {post.author && (
            <p className="text mt-4 text-sm">
              By <span className="font-semibold">{post.author}</span>
            </p>
          )}
        </header>

        {/* Cover Image */}
        <div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-2xl">
          <Image
            src={post.img}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover"
          />
        </div>

        {/* Article */}
        <div className="mt-12">
          {/* In Short */}
          {content.summary?.length > 0 && (
            <section className="rounded-2xl border border-[#0E4541]/20 bg-[#0E4541]/5 p-6 md:p-8">
              <h2 className="text2 text-2xl font-bold">In Short</h2>

              <ul className="text mt-5 list-disc space-y-3 pl-6 leading-7">
                {content.summary.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Table of Contents */}
          {content.sections.length > 0 && (
            <section className="mt-10 rounded-2xl border border-dashed border-[#0E4541]/40 p-6 md:p-8">
              <h2 className="text2 text-xl font-bold">In This Article</h2>

              <ul className="mt-4 space-y-2">
                {content.sections.map((section) => (
                  <li key={section.heading}>
                    <a
                      href={`#${slugify(section.heading)}`}
                      className="text font-medium text-[#0E4541] hover:underline"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Content Sections */}
          <div className="mt-12 space-y-12">
            {content.sections.map((section) => (
              <section
                key={section.heading}
                id={slugify(section.heading)}
                className="scroll-mt-24"
              >
                <h2 className="text2 text-2xl font-bold md:text-3xl">
                  {section.heading}
                </h2>

                <div className="mt-5 space-y-5">
                  {section.blocks.map((block, index) => (
                    <Block key={index} block={block} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Checklist */}
          {content.checklist && (
            <section className="mt-12 rounded-2xl border border-[#0E4541]/20 bg-[#0E4541]/5 p-6 md:p-8">
              <h2 className="text2 text-2xl font-bold">
                {content.checklist.title}
              </h2>

              <ul className="text mt-5 list-disc space-y-3 pl-6 leading-7">
                {content.checklist.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Service CTA */}
          {service && (
            <div className="mt-14">
              <CtaBanner
                title={`Need help with ${service.name}?`}
                description={`${service.description} Explore the service or submit a booking request for your project.`}
                buttonText={`Explore ${service.name}`}
                buttonHref={`/services/${service.slug}`}
                backgroundImage={post.img}
              />
            </div>
          )}

          {/* Disclaimer */}
          <div className="mt-10 rounded-xl border border-[#0E4541]/20 bg-[#0E4541]/5 p-5 md:p-6">
            <p className="text text-center text-sm leading-7">
              <strong className="text2">Important:</strong> This article is
              provided for general information and educational purposes.
              Construction costs, municipal procedures, approval requirements,
              timelines and technical requirements can vary by location and
              project. Always confirm current requirements with the relevant
              local authority and consult a qualified architect, engineer or
              other appropriate professional where necessary.
            </p>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 pb-16 md:pb-20">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0E4541]">
              Continue Reading
            </p>

            <h2 className="text2 mt-2 text-3xl font-bold md:text-4xl">
              Related Articles
            </h2>

            <p className="text mt-3 max-w-2xl">
              More guides related to this topic and the decisions involved in
              your project.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((related) => (
              <article
                key={related.slug}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image */}
                <Link href={`/blog/${related.slug}`} className="block">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={related.img}
                      alt={related.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                {/* Content */}
                <div className="flex min-h-[290px] flex-col bg-white p-6">
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="font-semibold text-[#0E4541]">
                      {related.category}
                    </span>

                    <span className="text-gray-400">•</span>

                    <span className="text-gray-500">{related.readTime}</span>
                  </div>

                  <Link href={`/blog/${related.slug}`}>
                    <h3 className="text2 mt-4 text-xl font-bold leading-snug transition-colors group-hover:text-[#0E4541]">
                      {related.title}
                    </h3>
                  </Link>

                  <p className="text mt-3 line-clamp-3 text-sm leading-6">
                    {related.excerpt}
                  </p>

                  <div className="text mt-4 text-sm">{related.publishedAt}</div>

                  <Link
                    href={`/blog/${related.slug}`}
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
    </main>
  );
}
