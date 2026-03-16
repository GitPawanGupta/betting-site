import { Helmet } from 'react-helmet-async'

const AdvancedSchema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Swamiji Online",
    "alternateName": "Swamiji Club",
    "url": "https://swami-ji.club",
    "logo": "https://swami-ji.club/logo.webp",
    "description": "India's Best Cricket Betting ID Provider. Get instant cricket ID, casino games, and sports betting with 24/7 support.",
    "foundingDate": "2020",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-7474784070",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Hindi"],
      "areaServed": "IN",
      "contactOption": ["TollFree", "HearingImpairedSupported"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "sameAs": [
      "https://www.facebook.com/swamijionline",
      "https://www.instagram.com/swamijionline",
      "https://twitter.com/swamijionline",
      "https://www.youtube.com/@swamijionline",
      "https://wa.me/447474784070"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "2547",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "₹₹"
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Swamiji Online",
    "url": "https://swami-ji.club",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://swami-ji.club/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://swami-ji.club/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://swami-ji.club/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Contact",
        "item": "https://swami-ji.club/contact"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Blog",
        "item": "https://swami-ji.club/blog"
      }
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Online Cricket Betting ID Provider",
    "provider": {
      "@type": "Organization",
      "name": "Swamiji Online"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Betting Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cricket Betting ID"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Casino Gaming ID"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sports Betting ID"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Live Casino Games"
          }
        }
      ]
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to get cricket ID online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply click on the WhatsApp button and contact our support team at +44 7474784070. They will guide you through the quick registration process and provide your Cricket ID instantly within 5 minutes."
        }
      },
      {
        "@type": "Question",
        "name": "Is Swamiji Online legal in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Swamiji Online operates legally and provides secure gaming services. We follow all necessary regulations to ensure a safe gaming environment for our users."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support multiple payment methods including UPI, Net Banking, Paytm, PhonePe, Google Pay, and all major credit/debit cards for seamless transactions."
        }
      },
      {
        "@type": "Question",
        "name": "How fast are withdrawals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Withdrawals are processed instantly to within 24 hours depending on your payment method. We prioritize fast and secure transactions for all our users."
        }
      },
      {
        "@type": "Question",
        "name": "What games can I play?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can enjoy cricket betting, 5000+ casino games, live sports betting, Aviator game, Teen Patti, Roulette, Blackjack, and many more exciting options on our platform."
        }
      },
      {
        "@type": "Question",
        "name": "Is customer support available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our customer support team is available 24/7 via WhatsApp, phone, and email. We provide support in both Hindi and English languages."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum deposit amount?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The minimum deposit amount varies by payment method, typically starting from ₹500. Contact our support team for specific details."
        }
      },
      {
        "@type": "Question",
        "name": "How long does ID creation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ID creation is instant! Once you contact us via WhatsApp, our team will create your cricket betting ID within 5 minutes."
        }
      }
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Swamiji Online",
    "image": "https://swami-ji.club/logo.webp",
    "telephone": "+44-7474784070",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6139",
      "longitude": "77.2090"
    },
    "url": "https://swami-ji.club",
    "priceRange": "₹₹",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  )
}

export default AdvancedSchema
