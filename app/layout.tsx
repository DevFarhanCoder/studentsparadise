import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import StructuredData from "@/components/StructuredData";
import CodeProtection from "@/components/CodeProtection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://studentsparadise.edu"),
  title: {
    default:
      "Students Paradise - Best Coaching Institute for 11th, 12th, JEE, NEET & IT Courses in India",
    template: "%s | Students Paradise",
  },
  description:
    "Students Paradise is India's premier education institute offering comprehensive coaching for 11th & 12th Science/Commerce, JEE Main & Advanced, NEET, competitive exams, BBA, and professional IT courses. Expert faculty, modern infrastructure, and 95% success rate.",
  keywords: [
    "Students Paradise",
    "Best coaching institute India",
    "11th 12th coaching",
    "JEE coaching",
    "NEET coaching",
    "Science coaching",
    "Commerce coaching",
    "IT courses",
    "Full Stack Development",
    "MERN Stack",
    "Python AI ML",
    "Data Science",
    "BBA coaching",
    "Competitive exam preparation",
    "Online and offline classes",
    "Career guidance",
    "Placement support",
    "Education institute",
    "Tutorial classes",
  ],
  authors: [{ name: "Students Paradise" }],
  creator: "Students Paradise",
  publisher: "Students Paradise",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://studentsparadise.edu",
    title: "Students Paradise - Best Coaching Institute for 11th, 12th, JEE, NEET & IT Courses",
    description:
      "Transform your future with India's leading education platform. Expert coaching for school students, competitive exams (JEE, NEET), commerce programs, and cutting-edge IT courses.",
    siteName: "Students Paradise",
    images: [
      {
        url: "/Students Paradise Logo.png",
        width: 1200,
        height: 630,
        alt: "Students Paradise - Premier Education Institute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Students Paradise - Best Coaching Institute in India",
    description:
      "Expert coaching for 11th, 12th, JEE, NEET, Commerce & IT courses with 95% success rate.",
    images: ["/Students Paradise Logo.png"],
    creator: "@studentsparadise",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/Students Paradise Logo.png" },
      { url: "/Students Paradise Logo.png", sizes: "32x32", type: "image/png" },
      { url: "/Students Paradise Logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/Students Paradise Logo.png" }],
    shortcut: ["/Students Paradise Logo.png"],
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://studentsparadise.edu" />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body className={inter.className}>
        <CodeProtection />
        <StructuredData />
        <PageLoader />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
