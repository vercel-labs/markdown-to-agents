import ReactMarkdown from "react-markdown";
import { availableDocs, loadDoc } from "../docs";

interface DocsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const generateStaticParams = async () => {
  return availableDocs.map((slug) => ({
    slug,
  }));
};

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug } = await params;

  const content = loadDoc(slug);
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <div className="bg-white">
        <article className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
