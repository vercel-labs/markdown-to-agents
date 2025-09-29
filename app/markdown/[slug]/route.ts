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
  
  // Extract domain from the request
  const url = new URL(request.url);
  const domain = `${url.protocol}//${url.host}`;
  
  const content = loadDoc(slug, domain);
  return new Response(content, {
    headers: { "Content-Type": "text/markdown" },
  });
}
