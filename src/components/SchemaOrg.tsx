interface ArticleSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  author: string;
  url: string;
  category: string;
}

export function ArticleSchema({ title, description, datePublished, author, url, category }: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Colombian Insider',
      logo: {
        '@type': 'ImageObject',
        url: 'https://thecolombianinsider.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: category,
    inLanguage: 'en',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'The Colombian Insider',
    description:
      'Your definitive guide to living, working, investing, and exploring Colombia. Expert coverage of Medellín, Santa Marta, and beyond.',
    url: 'https://thecolombianinsider.com',
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      name: 'The Maia Group',
      url: 'https://the-maia-group.com',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://thecolombianinsider.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
