import { availableDocs, loadDoc } from "@/app/docs/docs";

export const generateStaticParams = async () => {
  return availableDocs.map((slug) => ({
    slug,
  }));
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const content = loadDoc(slug);
  return new Response(content, {
    headers: { "Content-Type": "text/markdown" },
  });
}
