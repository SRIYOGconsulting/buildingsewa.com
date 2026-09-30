import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import { blogContent, type ContentBlock } from "@/data/blogContent";
import type { Metadata } from "next";

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
    return { title: "Blog Post Not Found | Building Sewa" };
  }

  return {
    title: `${post.title} | Building Sewa`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/* ---------- Renders one content block ---------- */
function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text text-base md:text-lg leading-relaxed">
          {block.text}
        </p>
      );

    case "list":
      return (
        <ul className="space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text text-base md:text-lg leading-relaxed">
              <span
                aria-hidden
                className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#0D5D59]"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol className="space-y-5">
          {block.items.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0D5D59] text-white font-bold">
                {i + 1}
              </span>
              <div>
                <h4 className="text2 text-lg font-semibold">{step.title}</h4>
                <p className="text mt-1 leading-relaxed">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      );

    case "tip":
      return (
        <div className="rounded-lg border-l-4 border-[#0D5D59] bg-[#0D5D59]/10 p-4 md:p-5">
          <p className="text2 font-semibold">💡 {block.title ?? "Tip"}</p>
          <p className="text mt-1 leading-relaxed">{block.text}</p>
        </div>
      );

    case "warning":
      return (
        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-500/10 p-4 md:p-5">
          <p className="text2 font-semibold">⚠️ {block.title ?? "Be careful"}</p>
          <p className="text mt-1 leading-relaxed">{block.text}</p>
        </div>
      );

    case "table":
      return (
        <div className="overflow-x-auto rounded-lg border border-[#0D5D59]/30">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-[#0D5D59] text-white">
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i} className="px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-t border-[#0D5D59]/20">
                  {row.map((cell, c) => (
                    <td
                      key={c}
                      className={`px-4 py-3 align-top text ${
                        c === 0 ? "font-semibold" : ""
                      }`}
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

    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const content = blogContent[post.slug];
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

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

      <article className="card rounded-xl overflow-hidden shadow-md">
        {/* Cover image */}
        <div className="relative w-full h-[240px] md:h-[420px]">
          <Image
            src={post.img}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
        </div>

        <div className="card2 px-6 md:px-10 py-8 md:py-10">
          {/* Header */}
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-[#0D5D59] px-3 py-1 font-semibold text-white">
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text2 mt-4 leading-tight">
            {post.title}
          </h1>
          <p className="text mt-4 text-lg leading-relaxed">{post.excerpt}</p>

          {content ? (
            <div className="mt-8 max-w-3xl mx-auto space-y-10">
              {/* In short */}
              <section className="rounded-xl border border-[#0D5D59]/30 bg-[#0D5D59]/10 p-5 md:p-6">
                <h2 className="text2 text-xl font-bold">In short</h2>
                <ul className="mt-3 space-y-2">
                  {content.summary.map((point, i) => (
                    <li key={i} className="flex gap-3 text leading-relaxed">
                      <span className="font-bold text-[#0D5D59]">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Table of contents */}
              <nav aria-label="In this article">
                <h2 className="text2 text-lg font-semibold mb-3">
                  In this article
                </h2>
                <ol className="list-decimal pl-5 space-y-1.5">
                  {content.sections.map((section) => (
                    <li key={section.heading}>
                      <a
                        href={`#${slugify(section.heading)}`}
                        className="text-[#0D5D59] hover:underline"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                  {content.checklist && (
                    <li>
                      <a href="#checklist" className="text-[#0D5D59] hover:underline">
                        {content.checklist.title}
                      </a>
                    </li>
                  )}
                  <li>
                    <a href="#faqs" className="text-[#0D5D59] hover:underline">
                      Frequently asked questions
                    </a>
                  </li>
                </ol>
              </nav>

              {/* Sections */}
              {content.sections.map((section) => (
                <section
                  key={section.heading}
                  id={slugify(section.heading)}
                  className="scroll-mt-24 space-y-5"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text2 border-b border-[#0D5D59]/30 pb-2">
                    {section.heading}
                  </h2>
                  {section.blocks.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </section>
              ))}

              {/* Checklist */}
              {content.checklist && (
                <section
                  id="checklist"
                  className="scroll-mt-24 rounded-xl border-2 border-dashed border-[#0D5D59]/50 p-5 md:p-6"
                >
                  <h2 className="text-2xl font-bold text2">
                    ✅ {content.checklist.title}
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {content.checklist.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text leading-relaxed">
                        <span
                          aria-hidden
                          className="mt-1 h-5 w-5 shrink-0 rounded border-2 border-[#0D5D59]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* FAQs */}
              <section id="faqs" className="scroll-mt-24 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text2 border-b border-[#0D5D59]/30 pb-2">
                  Frequently asked questions
                </h2>
                {content.faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-lg border border-[#0D5D59]/30 p-4"
                  >
                    <summary className="cursor-pointer list-none text2 font-semibold flex items-center justify-between gap-4">
                      {faq.q}
                      <span className="text-[#0D5D59] transition-transform group-open:rotate-45 text-2xl leading-none">
                        +
                      </span>
                    </summary>
                    <p className="text mt-3 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </section>

              {/* Call to action */}
              <section className="rounded-xl bg-[#0D5D59] p-6 md:p-8 text-white text-center">
                <h2 className="text-2xl font-bold">
                  Need help with your building project?
                </h2>
                <p className="mt-2 opacity-90">
                  Talk to the Building Sewa team about design, approvals,
                  construction and finishing.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-block rounded-md bg-white px-6 py-2.5 font-semibold text-[#0D5D59] hover:bg-gray-100 transition"
                >
                  Contact Us
                </Link>
              </section>

              <p className="text-sm text-center text">
                This article is for general guidance. Rules, fees and timelines
                can differ between municipalities, so please confirm details
                with your local ward office and a licensed engineer.
              </p>
            </div>
          ) : (
            <div className="mt-8 border-t pt-6">
              <p className="text leading-relaxed">
                The full article is coming soon.
              </p>
            </div>
          )}
        </div>
      </article>

      {/* Related articles */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text2 mb-6">Keep reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/blog/${item.slug}`}
              className="card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-40">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="card2 p-4">
                <p className="text-xs font-semibold text-[#0D5D59]">
                  {item.category}
                </p>
                <h3 className="text2 font-semibold mt-1">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

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