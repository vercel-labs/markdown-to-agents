import { readFileSync } from "fs";
import { notFound } from "next/navigation";
import { join } from "path";

// Get the current domain based on environment
function getDomain(): string {
  return process.env.NODE_ENV === 'production' 
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` 
    : 'http://localhost:3000';
}

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

  // Replace domain placeholder with actual domain (use environment-based domain if not provided)
  const actualDomain = getDomain();
  content = content.replace(/{{DOMAIN}}/g, actualDomain);

  return content;
}
