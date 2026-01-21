import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JEE Main 2026 - Answer Key, Exam Dates, Syllabus | Students Paradise Mira Road",
  description:
    "Complete JEE Main 2026 guide for Session 1 & 2. Download answer keys, previous papers, mock tests. Best JEE coaching in Mira Road with lowest fees ₹60,000. Expert faculty, 95% success rate.",
  keywords: [
    "JEE Main 2026",
    "JEE Main answer key 2026",
    "JEE Main coaching Mira Road",
    "JEE coaching near me",
    "Best JEE classes Mira Road",
    "JEE Main exam dates",
    "JEE Main syllabus",
    "JEE previous year papers",
    "JEE mock test",
    "Lowest fees JEE coaching Mumbai",
    "IIT coaching Mira Road",
    "JEE coaching Mira Bhayandar",
    "Students Paradise Mira Road",
  ],
  openGraph: {
    title: "JEE Main 2026 Complete Guide | Students Paradise Mira Road",
    description:
      "Download JEE Main 2026 answer keys, previous papers & mock tests. Mumbai's most affordable JEE coaching at ₹60,000.",
    images: ["/Students Paradise Logo.png"],
  },
};

export default function JEEMainLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
