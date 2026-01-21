import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JEE Main Syllabus 2026 - Complete Topic-wise Breakdown | Physics, Chemistry, Maths",
  description:
    "Download complete JEE Main 2026 syllabus with topic-wise breakdown for Physics, Chemistry & Mathematics. Official NTA syllabus with detailed chapter list. Free PDF download available.",
  keywords: [
    "JEE Main syllabus 2026",
    "JEE Main 2026 syllabus PDF",
    "JEE Main Physics syllabus",
    "JEE Main Chemistry syllabus",
    "JEE Main Maths syllabus",
    "NTA JEE syllabus 2026",
    "JEE Main complete syllabus",
    "JEE Main topic wise syllabus",
    "JEE Main syllabus download",
    "JEE preparation syllabus",
  ],
  openGraph: {
    title: "JEE Main 2026 Complete Syllabus | Physics, Chemistry, Mathematics",
    description:
      "Official JEE Main 2026 syllabus with detailed topic breakdown. Download free PDF guide.",
    images: ["/Students Paradise Logo.png"],
  },
};

export default function JEEMainSyllabusLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
