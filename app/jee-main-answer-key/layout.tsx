import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JEE Main Answer Key 2026 - Session 1 & 2 | Download Official Answer Keys",
  description:
    "Download JEE Main 2026 answer keys for Session 1 (January) and Session 2 (April). Get shift-wise answer keys for Physics, Chemistry, Mathematics. Calculate your score instantly.",
  keywords: [
    "JEE Main answer key 2026",
    "JEE Main 2026 Session 1 answer key",
    "JEE Main 2026 Session 2 answer key",
    "JEE Main answer key download",
    "NTA JEE answer key",
    "JEE Main shift wise answer key",
    "JEE Main solutions 2026",
    "JEE Main paper solution",
    "Calculate JEE Main score",
    "JEE Main expected cutoff",
  ],
  openGraph: {
    title: "JEE Main 2026 Answer Key | Session 1 & 2 Download",
    description:
      "Official JEE Main 2026 answer keys for all shifts and sessions. Download and calculate your score.",
    images: ["/Students Paradise Logo.png"],
  },
};

export default function JEEMainAnswerKeyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
