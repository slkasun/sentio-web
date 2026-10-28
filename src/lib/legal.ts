/**
 * Placeholder guard for the legal Markdown (src/content/legal/). Any "[bracketed]" text left in the
 * rendered HTML is a field still to fill in (real links render as <a>, without brackets).
 * Dev shows a "To be confirmed" marker; `astro build` fails so a draft can't be released
 * (set ALLOW_LEGAL_PLACEHOLDERS=1 to build a preview anyway).
 */
const PLACEHOLDER = /\[([^\[\]<>]+)\]/g;

export const isPlaceholder = (value: string) => /^\[[^\[\]]+\]$/.test(value.trim());

export const placeholderLabel = (value: string) => value.trim().slice(1, -1);

export function markPlaceholders(file: string, html: string, frontmatter: Record<string, string>) {
  const found = [
    ...["effective", "updated"].filter((k) => isPlaceholder(frontmatter[k])).map((k) => placeholderLabel(frontmatter[k])),
    ...[...html.matchAll(PLACEHOLDER)].map((m) => m[1]),
  ];

  if (found.length && import.meta.env.PROD && !process.env.ALLOW_LEGAL_PLACEHOLDERS) {
    const list = [...new Set(found)].map((f) => `  - ${f}`).join("\n");
    throw new Error(
      `${file}: ${found.length} unfilled placeholder(s). Fill them in before releasing ` +
        `(or set ALLOW_LEGAL_PLACEHOLDERS=1 for a preview build):\n${list}`
    );
  }

  return html.replace(PLACEHOLDER, '<mark class="tbc"><b>To be confirmed:</b> $1</mark>');
}
