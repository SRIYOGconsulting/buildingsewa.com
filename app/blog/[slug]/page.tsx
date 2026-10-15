import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { blogPosts } from "@/data/blogPosts";
import { blogContent, type ContentBlock } from "@/data/blogContent";
import CtaBanner from "@/components/CtaBanner";
import { getServiceBySlug } from "@/lib/services";

const AUTHOR_IMAGE = "/blog/1.png";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Article Not Found | Building Sewa" };
  }

  return {
    title: `${post.title} | Building Sewa`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* Author profile without a heading or subtitle */
function AuthorProfile({
  author = "Sundar Shrestha",
  compact = false,
}: {
  author?: string;
  compact?: boolean;
}) {
  return (
    <div className="flex shrink-0 items-center gap-2.5">
      <Image
        src={AUTHOR_IMAGE}
        alt={`${author} profile`}
        width={compact ? 32 : 40}
        height={compact ? 32 : 40}
        className={`${
          compact ? "h-8 w-8" : "h-10 w-10"
        } shrink-0 rounded-full border border-[#0E4541]/15 object-cover`}
      />

      <span
        className={`text2 whitespace-nowrap font-semibold ${
          compact ? "text-xs" : "text-sm"
        }`}
      >
        {author}
      </span>
    </div>
  );
}

/* Article content blocks */
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

  if (block.type === "tip" || block.type === "warning") {
    const warning = block.type === "warning";

    return (
      <div
        className={`rounded-xl border p-5 ${
          warning
            ? "border-amber-300/50 bg-amber-50/50"
            : "border-[#0E4541]/20 bg-[#0E4541]/5"
        }`}
      >
        {block.title && <h4 className="text2 font-bold">{block.title}</h4>}

        <p className="text mt-2 leading-7">{block.text}</p>
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
                  <td
                    key={cellIndex}
                    className="text px-4 py-3 align-top leading-6"
                  >
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

  const service = post.serviceSlug
    ? await getServiceBySlug(post.serviceSlug)
    : undefined;

  const relatedSlugs = post.relatedSlugs ?? [];

  const explicitRelated = blogPosts.filter(
    (item) => item.slug !== post.slug && relatedSlugs.includes(item.slug),
  );

  const sameCategory = blogPosts.filter(
    (item) =>
      item.slug !== post.slug &&
      item.category === post.category &&
      !relatedSlugs.includes(item.slug),
  );

  const otherArticles = blogPosts.filter(
    (item) =>
      item.slug !== post.slug &&
      !relatedSlugs.includes(item.slug) &&
      item.category !== post.category,
  );

  const relatedPosts = [
    ...explicitRelated,
    ...sameCategory,
    ...otherArticles,
  ].slice(0, 3);

  const author = post.author || "Sundar Shrestha";

  return (
    <main>
      <article className="mx-auto max-w-5xl px-5 py-10 md:py-14">
        <Link
          href="/blog"
          className="inline-flex items-center font-semibold text-[#0E4541] hover:underline"
        >
          ← Back to Blog
        </Link>

        <header className="mt-7 md:mt-9">
          {/* Category, date, reading time and author */}
          <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-4 border-b border-theme pb-5">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <Link
                href={`/blog?category=${encodeURIComponent(post.category)}`}
                className="font-semibold text-[#0E4541] hover:underline"
              >
                {post.category}
              </Link>

              <span className="text-gray-400">•</span>

              <span className="text">{post.publishedAt}</span>

              <span className="text-gray-400">•</span>

              <span className="text">{post.readTime}</span>
            </div>

            <AuthorProfile author={author} />
          </div>

          {/* Article title */}
          <h1 className="text2 mt-5 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {post.title}
          </h1>

          {/* Article excerpt */}
          <p className="text mt-4 max-w-3xl text-base leading-8 md:text-lg">
            {post.excerpt}
          </p>
        </header>

        {/* Cover image */}
        <div className="relative mt-7 aspect-[16/9] overflow-hidden rounded-2xl md:mt-9">
          <Image
            src={post.img}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1000px"
            className="object-cover"
          />
        </div>

        <div className="mt-10 md:mt-12">
          {/* In Short */}
          {content.summary?.length > 0 && (
            <section className="rounded-2xl border border-[#0E4541]/20 bg-[#0E4541]/5 p-5 sm:p-6 md:p-8">
              <h2 className="text2 text-2xl font-bold">In Short</h2>

              <ul className="text mt-4 list-disc space-y-3 pl-6 leading-7">
                {content.summary.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Table of contents */}
          {content.sections.length > 0 && (
            <section className="mt-8 rounded-2xl border border-dashed border-[#0E4541]/40 p-5 sm:p-6 md:p-8">
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

          {/* Article sections */}
          <div className="mt-10 space-y-10 md:mt-12 md:space-y-12">
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
            <section className="mt-10 rounded-2xl border border-[#0E4541]/20 bg-[#0E4541]/5 p-5 sm:p-6 md:mt-12 md:p-8">
              <h2 className="text2 text-2xl font-bold">
                {content.checklist.title}
              </h2>

              <ul className="text mt-4 list-disc space-y-3 pl-6 leading-7">
                {content.checklist.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Related service CTA */}
          {service && (
            <div className="mt-12">
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
              <strong className="text2">Important: </strong>
              This article is provided for general information and educational
              purposes. Construction costs, municipal procedures, approval
              requirements, timelines and technical requirements can vary by
              location and project. Always confirm current requirements with the
              relevant local authority and consult a qualified architect,
              engineer or other appropriate professional where necessary.
            </p>
          </div>

          {/* Bottom navigation without a duplicate author profile */}
          <div className="mt-8 flex flex-col gap-4 border-t border-theme pt-6 sm:flex-row sm:items-center sm:justify-end">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 self-start font-semibold text-[#0E4541] hover:underline sm:self-center"
            >
              Explore more articles
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </article>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 pb-14 md:pb-20">
          <div className="mb-7">
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

          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((related) => (
              <article
                key={related.slug}
                className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border-theme bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Related article image */}
                <Link
                  href={`/blog/${related.slug}`}
                  className="relative block h-52 shrink-0 overflow-hidden"
                >
                  <Image
                    src={related.img}
                    alt={related.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </Link>

                <div className="flex min-h-[330px] flex-1 flex-col p-5 sm:p-6">
                  {/* Category and reading time */}
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                    <span className="font-semibold text-[#0E4541]">
                      {related.category}
                    </span>

                    <span className="text2">•</span>

                    <span className="text2">{related.readTime}</span>
                  </div>

                  {/* Related article title */}
                  <h3 className="text2 mt-3 min-h-[3.5rem] line-clamp-2 text-xl font-bold leading-snug transition-colors group-hover:text-[#0E4541]">
                    <Link href={`/blog/${related.slug}`}>{related.title}</Link>
                  </h3>

                  {/* Short description */}
                  <p className="text mt-3 min-h-[4.5rem] line-clamp-3 text-sm leading-6">
                    {related.excerpt}
                  </p>

                  <p className="text2 mt-3 text-xs">{related.publishedAt}</p>

                  {/* Author without heading */}
                  <div className="mt-3 border-t border-theme pt-4">
                    <AuthorProfile
                      author={related.author || "Sundar Shrestha"}
                      compact
                    />
                  </div>

                  {/* Read article link */}
                  <div className="mt-auto pt-5">
                    <Link
                      href={`/blog/${related.slug}`}
                      className="inline-flex items-center gap-2 font-semibold text-[#0E4541] hover:underline"
                    >
                      Read Article
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
