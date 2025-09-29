import { readFileSync } from "fs";
import { notFound } from "next/navigation";
import { join } from "path";

// List of available documents
export const availableDocs = [
  "getting-started",
  "api-reference",
  "configuration",
  "examples",
];

export function loadDoc(slug: string) {
  // Check if the requested doc exists
  if (!availableDocs.includes(slug)) {
    notFound();
  }
  let content: string;

  try {
    content = readFileSync(join(process.cwd(), "docs", `${slug}.md`), "utf8");
  } catch {
    notFound();
  }
  return content;
}
