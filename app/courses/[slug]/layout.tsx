import { courseDetails } from "@/data/courseDetails";
import { Metadata } from "next";

export async function generateStaticParams() {
  const slugs = Object.keys(courseDetails);
  console.log("Generating static params for slugs:", slugs);
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export const dynamicParams = true; // Allow dynamic routes

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = courseDetails[params.slug];

  if (!course) {
    return {
      title: "Course Not Found | Students Paradise",
    };
  }

  return {
    title: `${course.title} - Admission Open | Students Paradise`,
    description: course.fullDescription || course.description,
    keywords: [course.title, course.category, "Students Paradise", "coaching", "education"],
    openGraph: {
      title: `${course.title} - Students Paradise`,
      description: course.description,
      images: ["/Students Paradise Logo.png"],
    },
  };
}

export default function CourseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
