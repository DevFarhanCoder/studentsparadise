/**
 * Converts a course title to a URL-friendly slug
 * This ensures consistency across the application
 * Appends -course-mumbai for local SEO optimization
 */
export function slugify(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/&/g, "-") // Replace & with - (before other replacements)
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]/g, "") // Remove special characters except word chars and -
    .replace(/--+/g, "-") // Replace multiple consecutive dashes with single dash
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing dashes

  return `${slug}-course-mumbai`;
}
