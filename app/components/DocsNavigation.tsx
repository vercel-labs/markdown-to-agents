'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const docsPages = [
  {
    slug: 'getting-started',
    title: 'Getting Started',
    description: 'Quick start guide and installation'
  },
  {
    slug: 'api-reference',
    title: 'API Reference',
    description: 'Complete API documentation'
  },
  {
    slug: 'configuration',
    title: 'Configuration',
    description: 'Environment and app settings'
  },
  {
    slug: 'examples',
    title: 'Examples',
    description: 'Code examples and patterns'
  }
];

export default function DocsNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden bg-white border-b border-gray-200 p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left"
        >
          <div>
            <h2 className="text-lg font-bold text-gray-900">Documentation</h2>
            <p className="text-sm text-gray-600">Menu</p>
          </div>
          <svg
            className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 p-4">
          <ul className="space-y-2">
            {docsPages.map((page) => {
              const isActive = pathname === `/docs/${page.slug}`;
              return (
                <li key={page.slug}>
                  <Link
                    href={`/docs/${page.slug}`}
                    onClick={() => setIsOpen(false)}
                    className={`block p-3 rounded-lg transition-all duration-200 border ${
                      isActive
                        ? 'bg-blue-50 text-blue-900 border-blue-200 shadow-sm'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 border-transparent hover:border-gray-200'
                    }`}
                  >
                    <div className="font-semibold text-base">{page.title}</div>
                    <div className="text-sm text-gray-500 mt-1">{page.description}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      )}

      {/* Desktop navigation */}
      <nav className="hidden lg:block w-72 bg-white p-6 border-r border-gray-200 shadow-sm">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Documentation</h2>
          <p className="text-sm text-gray-600">Navigate through our guides and references</p>
        </div>

        <ul className="space-y-2">
          {docsPages.map((page) => {
            const isActive = pathname === `/docs/${page.slug}`;

            return (
              <li key={page.slug}>
                <Link
                  href={`/docs/${page.slug}`}
                  className={`block p-4 rounded-lg transition-all duration-200 border ${
                    isActive
                      ? 'bg-blue-50 text-blue-900 border-blue-200 shadow-sm'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 border-transparent hover:border-gray-200'
                  }`}
                >
                  <div className="font-semibold text-base">{page.title}</div>
                  <div className="text-sm text-gray-500 mt-1">{page.description}</div>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>
    </>
  );
}