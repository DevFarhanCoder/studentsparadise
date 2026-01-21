import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JEE Main Mock Test 2026 - Free Online Mock Tests | All India Test Series",
  description:
    "Take free JEE Main 2026 mock tests online. Full-length test series following exact NTA pattern. Get instant results, solutions & performance analysis. Practice with 90 questions in 180 minutes.",
  keywords: [
    "JEE Main mock test 2026",
    "JEE Main test series",
    "free JEE mock test online",
    "JEE Main practice test",
    "JEE Main online test",
    "JEE Main full length test",
    "JEE Main sample papers",
    "JEE mock test with solutions",
    "All India JEE mock test",
    "JEE Main preparation test",
  ],
  openGraph: {
    title: "Free JEE Main Mock Test 2026 | Online Test Series",
    description:
      "Practice with free JEE Main mock tests. Get instant results and detailed analysis.",
    images: ["/Students Paradise Logo.png"],
  },
};

export default function JEEMainMockTestsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
