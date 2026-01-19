"use client";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Students Paradise",
    description:
      "Premier education institute offering coaching for 11th, 12th, JEE, NEET, Commerce, and IT courses",
    url: "https://studentsparadise.edu",
    logo: "https://studentsparadise.edu/Students Paradise Logo.png",
    image: "https://studentsparadise.edu/Students Paradise Logo.png",
    telephone: "+91-XXXXXXXXXX",
    email: "info@studentsparadise.edu",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "Your City",
    },
    sameAs: [
      "https://www.facebook.com/studentsparadise",
      "https://www.instagram.com/studentsparadise",
      "https://www.youtube.com/@studentsparadise",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
    },
  };

  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Courses Offered",
    description: "Comprehensive list of courses at Students Paradise",
    itemListElement: [
      {
        "@type": "Course",
        name: "11th & 12th Science",
        description: "Complete coaching for Physics, Chemistry, Mathematics and Biology",
        provider: {
          "@type": "EducationalOrganization",
          name: "Students Paradise",
        },
      },
      {
        "@type": "Course",
        name: "JEE Main & Advanced",
        description: "Intensive preparation for India's premier engineering entrance exam",
        provider: {
          "@type": "EducationalOrganization",
          name: "Students Paradise",
        },
      },
      {
        "@type": "Course",
        name: "NEET Preparation",
        description: "Comprehensive medical entrance coaching",
        provider: {
          "@type": "EducationalOrganization",
          name: "Students Paradise",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }}
      />
    </>
  );
}
