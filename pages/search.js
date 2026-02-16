'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiSearch, FiArrowRight } from 'react-icons/fi';
import MainHeader from '@/components/MainHeader';
import FooterSection from '@/components/FooterSection';
import SEO from '@/components/SEO';
import { searchIndex } from '@/data/searchIndex';

export default function SearchPage() {
  const router = useRouter();
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kivari.co.za').trim();

  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const q = typeof router.query.q === 'string' ? router.query.q : '';
    setQuery(q);
  }, [router.query.q]);

  useEffect(() => {
    const q = query.trim();
    if (!q) {
      setResults([]);
      setLoading(false);
      setSearched(false);
      return;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(q)}`, {
          signal: controller.signal,
        });
        const payload = await response.json();
        setResults(payload?.results || []);
        setSearched(true);
      } catch (error) {
        if (error?.name !== 'AbortError') {
          setResults([]);
          setSearched(true);
        }
      } finally {
        setLoading(false);
      }
    }, 150);

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const q = query.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : '/search', undefined, { shallow: true });
  };

  const suggestedSearches = useMemo(
    () =>
      searchIndex
        .slice(0, 6)
        .map((item) => item.title)
        .filter(Boolean),
    []
  );

  const searchSchema = query
    ? {
        '@context': 'https://schema.org',
        '@type': 'SearchResultsPage',
        name: `Search results for ${query} | KIVARI`,
        url: `${siteUrl}/search?q=${encodeURIComponent(query)}`,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: results.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `${siteUrl}${item.path}`,
            name: item.title,
          })),
        },
      }
    : null;

  return (
    <>
      <SEO
        title="Search KIVARI Construction Services"
        description="Search KIVARI services, construction solutions, infrastructure support, and project capabilities in Midrand, Gauteng, and across South Africa."
        url={`${siteUrl}/search${query ? `?q=${encodeURIComponent(query)}` : ''}`}
        image="/images/about/aboutus.jpg"
      />

      {searchSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(searchSchema) }} />
      ) : null}

      <MainHeader />

      <main id="main" className="bg-white min-h-screen pt-32 pb-20">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Search <span className="text-[#A9CF45]">KIVARI</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Find services, capabilities, and construction solutions quickly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="site-search" className="sr-only">
                Search the website
              </label>
              <div className="relative flex-1">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  id="site-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search services, construction, infrastructure, maintenance..."
                  className="w-full h-14 rounded-xl border border-gray-300 bg-white pl-12 pr-4 text-gray-900 focus:border-[#A9CF45] focus:outline-none focus:ring-2 focus:ring-[#A9CF45]/20"
                />
              </div>
              <button
                type="submit"
                className="h-14 px-7 rounded-xl bg-gradient-to-r from-[#A9CF45] to-[#8ab733] text-black font-semibold border border-[#A9CF45]/30 hover:from-[#8ab733] hover:to-[#7aa82d] transition-all duration-300"
              >
                Search
              </button>
            </div>
          </form>

          {!query ? (
            <div className="rounded-xl border border-gray-200 p-6 bg-gray-50">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Popular Searches</h2>
              <div className="flex flex-wrap gap-2">
                {suggestedSearches.map((label) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => {
                      setQuery(label);
                      router.push(`/search?q=${encodeURIComponent(label)}`, undefined, { shallow: true });
                    }}
                    className="px-3 py-2 text-sm rounded-full border border-gray-300 bg-white hover:border-[#A9CF45] hover:text-[#7aa82d] transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {loading ? <p className="text-gray-600">Searching...</p> : null}

          {searched && !loading ? (
            <div className="mt-4 space-y-4">
              <p className="text-sm text-gray-600">
                {results.length} result{results.length === 1 ? '' : 's'} for "{query}"
              </p>

              {results.length === 0 ? (
                <div className="rounded-xl border border-gray-200 p-6 bg-gray-50 text-gray-700">
                  No results found. Try broader keywords like construction, renovation, civil, or maintenance.
                </div>
              ) : (
                results.map((item) => (
                  <article key={item.id} className="rounded-xl border border-gray-200 p-5 hover:border-[#A9CF45]/50 transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-[#7aa82d]">{item.category}</span>
                      <span className="text-xs text-gray-500">Score {item.score}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
                    <p className="text-gray-700 mb-4">{item.excerpt}</p>
                    <Link
                      href={item.path}
                      className="inline-flex items-center gap-2 text-[#7aa82d] font-medium hover:text-[#5f8f20] transition-colors"
                    >
                      Open Result <FiArrowRight />
                    </Link>
                  </article>
                ))
              )}
            </div>
          ) : null}
        </section>
      </main>

      <FooterSection />
    </>
  );
}

