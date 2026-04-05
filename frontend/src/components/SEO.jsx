import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = 'Cricket Betting ID | Online Cricket ID Provider | Swamiji Online',
  description = 'Get instant cricket betting ID from Swamiji Online - India\'s most trusted betting ID provider. 5000+ games, 24/7 WhatsApp support, fast withdrawals. Get your ID in 5 minutes!',
  keywords = 'cricket betting id, online cricket id, cricket id provider, betting id india, swamiji online, cricket id whatsapp, instant cricket id, online betting id, cricket id kaise milega, best cricket id provider',
  ogImage = 'https://swami-ji.club/logo.webp',
  url = 'https://swami-ji.club',
  type = 'website',
  schema = null,
  breadcrumbs = null,
  article = null
}) => {

  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  } : null

  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image || ogImage,
    "author": {
      "@type": "Person",
      "name": article.author || "Swamiji Online Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Swamiji Online",
      "logo": { "@type": "ImageObject", "url": ogImage }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished
  } : null

  const allSchemas = [breadcrumbSchema, articleSchema, schema].filter(Boolean)

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Swamiji Online" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Swamiji Online" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="hi_IN" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@swamijionline" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Alternate hreflang */}
      <link rel="alternate" hrefLang="en-in" href={url} />
      <link rel="alternate" hrefLang="hi-in" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      
      {/* Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://wa.me" />
      
      {/* Mobile */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Swamiji Online" />
      
      {/* Structured Data */}
      {allSchemas.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(allSchemas.length === 1 ? allSchemas[0] : allSchemas)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO
