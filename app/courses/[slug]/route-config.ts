import { courseDetails } from "@/data/courseDetails";

export async function generateStaticParams() {
  return Object.keys(courseDetails).map((slug) => ({
    slug: slug,
  }));
}

export const dynamicParams = false;
