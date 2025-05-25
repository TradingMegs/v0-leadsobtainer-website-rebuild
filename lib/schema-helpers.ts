export function generateLocationBusinessSchema(location: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `LeadsObtainer - AI-Powered Growth Solutions in ${location}`,
    description: description,
    address: {
      "@type": "PostalAddress",
      addressLocality: location,
    },
    url: url,
    telephone: "+1-800-LEADS-AI",
    openingHours: "Mo-Fr 09:00-17:00",
    priceRange: "$$$",
    sameAs: [
      "https://www.facebook.com/leadsobtainer",
      "https://twitter.com/leadsobtainer",
      "https://www.linkedin.com/company/leadsobtainer",
      "https://www.instagram.com/leadsobtainer",
    ],
    image: "https://leadsobtainer.com/images/logo.png",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
      },
      geoRadius: "50000",
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `https://leadsobtainer.com/get-started?location=${encodeURIComponent(location)}`,
        inLanguage: "en-US",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Growth Strategy Session",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `SEO Services in ${location}`,
            description: `Professional SEO services for businesses in ${location}`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Lead Generation in ${location}`,
            description: `Professional lead generation services for businesses in ${location}`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Marketing Automation in ${location}`,
            description: `Professional marketing automation services for businesses in ${location}`,
          },
        },
      ],
    },
  }
}
