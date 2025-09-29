import DocsNavigation from '../components/DocsNavigation';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile layout */}
      <div className="lg:hidden">
        <DocsNavigation />
        <main className="bg-white">
          {children}
        </main>
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:flex">
        <DocsNavigation />
        <main className="flex-1 bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}