import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JEE Main Previous Year Papers (2021-2026) with Solutions PDF Download",
  description:
    "Download JEE Main previous year question papers from 2021-2026 with detailed solutions. Free PDF download for all shifts and sessions. Practice with solved papers for better preparation.",
  keywords: [
    "JEE Main previous papers",
    "JEE Main question papers with solutions",
    "JEE Main 2025 papers",
    "JEE Main 2024 papers",
    "JEE Main previous year papers PDF",
    "JEE solved papers download",
    "JEE Main all shifts papers",
    "JEE Main practice papers",
    "JEE Main old papers",
    "JEE paper with solution PDF",
  ],
  openGraph: {
    title: "JEE Main Previous Year Papers 2021-2026 | Free PDF Download",
    description:
      "Access all JEE Main previous year question papers with solutions. Free download for all sessions.",
    images: ["/Students Paradise Logo.png"],
  },
};

export default function JEEMainPreviousPapersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
