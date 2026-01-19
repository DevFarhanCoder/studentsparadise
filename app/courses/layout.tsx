import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Courses - 11th, 12th, JEE, NEET, Commerce & IT Programs | Students Paradise",
  description:
    "Explore our comprehensive range of courses including 11th & 12th Science/Commerce, JEE Main & Advanced, NEET preparation, BBA, Full Stack Development, MERN Stack, Python AI/ML, Data Science, and more. Expert faculty with proven track record.",
  keywords: [
    "all courses",
    "11th 12th coaching",
    "JEE preparation",
    "NEET coaching",
    "IT courses",
    "programming courses",
    "competitive exams",
    "science commerce coaching",
  ],
  openGraph: {
    title: "All Courses - Students Paradise",
    description:
      "Browse all educational programs at Students Paradise - from school coaching to IT courses",
    images: ["/Students Paradise Logo.png"],
  },
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
