/**
 * Converts a course title to a URL-friendly slug
 * This ensures consistency across the application
 */
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, "-") // Replace & with - (before other replacements)
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]/g, "") // Remove special characters except word chars and -
    .replace(/--+/g, "-") // Replace multiple consecutive dashes with single dash
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing dashes
}
