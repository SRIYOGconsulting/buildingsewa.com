import { blogContent, type ContentBlock } from "@/data/blogContent";

const WORDS_PER_MINUTE = 200;

function countWords(text: string) {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function countBlockWords(block: ContentBlock) {
  switch (block.type) {
    case "p":
      return countWords(block.text);

    case "list":
      return block.items.reduce(
        (total, item) => total + countWords(item),
        0
      );

    case "steps":
      return block.items.reduce(
        (total, item) =>
          total +
          countWords(item.title) +
          countWords(item.text),
        0
      );

    case "tip":
    case "warning":
      return (
        countWords(block.title ?? "") +
        countWords(block.text)
      );

    case "table":
      return (
        block.headers.reduce(
          (total, header) => total + countWords(header),
          0
        ) +
        block.rows.reduce(
          (total, row) =>
            total +
            row.reduce(
              (rowTotal, cell) =>
                rowTotal + countWords(cell),
              0
            ),
          0
        )
      );

    default:
      return 0;
  }
}

export function getBlogWordCount(slug: string) {
  const content = blogContent[slug];

  if (!content) {
    return 0;
  }

  let words = content.summary.reduce(
    (total, item) => total + countWords(item),
    0
  );

  for (const section of content.sections) {
    words += countWords(section.heading);

    for (const block of section.blocks) {
      words += countBlockWords(block);
    }
  }

  if (content.checklist) {
    words += countWords(content.checklist.title);

    words += content.checklist.items.reduce(
      (total, item) => total + countWords(item),
      0
    );
  }

  return words;
}

export function getBlogReadingTime(slug: string) {
  const words = getBlogWordCount(slug);

  if (!words) {
    return "4 min read";
  }

  const minutes = Math.max(
    1,
    Math.ceil(words / WORDS_PER_MINUTE)
  );

  return `${minutes} min read`;
}