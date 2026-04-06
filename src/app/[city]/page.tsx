import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import AdSense from '@/components/AdSense';
import { cities, getCityBySlug } from '@/lib/cities';
import { categories } from '@/lib/categories';
import { getAllArticlesByCity, getFeaturedArticlesByCity } from '@/lib/articles';

interface Props {
  params: { city: string };
}

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (!city) return {};

  return {
    title: `${city.name} Guide — Expat, Real Estate, Legal & More`,
    description: `Your complete guide to living in ${city.name}, Colombia. Real estate, legal, food, jobs, and lifestyle — for expats, digital nomads, and investors.`,
    openGraph: {
      title: `${city.name} Guide | The Colombian Insider`,
      description: city.description,
    },
  };
}

export default function CityHubPage({ params }: Props) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  const featured = getFeaturedArticlesByCity(params.city);
  const latest = getAllArticlesByCity(params.city).slice(0, 6);

  return (
    <>
      {/* City hero */}
      <section className={`bg-gradient-to-br ${city.heroGradient} text-white py-16 px-4`}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-3">{city.region}, Colombia</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {city.name}
          </h1>
          <p className="text-white/80 text-lg md:text-xl italic mb-4">{city.tagline}</p>
          <p className="text-white/70 text-base max-w-2xl mx-auto leading-relaxed mb-8">
            {city.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.slice(0, 4).map((cat) => (
              <Link
                key={cat.slug}
                href={`/${params.city}/${cat.slug}/`}
                className="bg-white/15 hover:bg-white/25 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors backdrop-blur-sm"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <AdSense slot={`city-${params.city}-top`} format="horizontal" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-teal-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">{city.name}</span>
        </nav>

        {/* Featured articles */}
        {featured.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900">Featured</h2>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((article) => (
                <ArticleCard key={article.slug} article={article} variant="featured" />
              ))}
            </div>
          </div>
        )}

        {/* Categories grid */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-serif text-2xl font-bold text-gray-900">Browse by Category</h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${params.city}/${cat.slug}/`}
                className="group p-4 rounded-xl border border-gray-200 hover:border-teal-400 hover:shadow-sm transition-all text-center"
              >
                <div
                  className="w-8 h-8 rounded-full mx-auto mb-2"
                  style={{ backgroundColor: cat.maia_brand.bgColor, border: `2px solid ${cat.maia_brand.color}` }}
                />
                <span className="text-sm font-semibold text-gray-700 group-hover:text-teal-700 block leading-tight">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Latest articles */}
        {latest.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900">Latest Articles</h2>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latest.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        )}

        {latest.length === 0 && featured.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg font-semibold mb-2">Content coming soon</p>
            <p className="text-sm">We are working on our {city.name} guides. Check back soon.</p>
          </div>
        )}
      </div>
    </>
  );
}
