import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = 'GameZone - Premium Online Gaming Platform',
  description = 'Experience premium online gaming with GameZone. Get instant Gaming ID for cricket betting, live casino, sports betting & 5000+ games.',
  keywords = 'online gaming, cricket betting, casino games, sports betting, gaming ID',
  ogImage = 'https://www.swamiji.club/wp-content/uploads/al_opt_content/IMAGE/www.swamiji.club/wp-content/uploads/2025/05/download-2025-05-25T154726.066-1024x581.webp.bv.webp?bv_host=www.swamiji.club',
  url = 'https://swami-ji.club',
  type = 'website',
  schema = null,
  breadcrumbs = null,
  article = null
}) => {
  
  // Default Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GameZone",
    "description": "Premium online gaming platform offering cricket betting, casino games, and live gaming experiences",
    "url": "https://swami-ji.club",
    "logo": ogImage,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8743884000",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Hindi"],
      "areaServed": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/gamezone",
      "https://www.youtube.com/gamezone"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "2547",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GameZone",
    "url": "https://swami-ji.club",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://swami-ji.club/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  // Breadcrumb Schema
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

  // Article Schema (for Blog posts)
  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image || ogImage,
    "author": {
      "@type": "Person",
      "name": article.author || "GameZone Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GameZone",
      "logo": {
        "@type": "ImageObject",
        "url": ogImage
      }
    },
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished
  } : null

  // Combine all schemas
  const allSchemas = [
    organizationSchema,
    websiteSchema,
    breadcrumbSchema,
    articleSchema,
    schema
  ].filter(Boolean)

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="GameZone" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="GameZone" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@gamezone" />
      <meta name="twitter:creator" content="@gamezone" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="hi" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://wa.me" />
      
      {/* Mobile App Meta */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="GameZone" />
      
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
