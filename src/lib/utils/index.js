/**
 * Utility functions for AZAL Projects website
 */

/**
 * Format a date string to a readable format
 */
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Truncate text to a given character length
 */
export function truncate(text, maxLength = 150) {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '…';
}

/**
 * Generate a slug from a string
 */
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Clamp a value between min and max
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Build Open Graph metadata object
 */
export function buildOgMeta({ title, description, image, url }) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: image ? [{ url: image, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

/**
 * Get service by slug
 */
export function getServiceBySlug(services, slug) {
  return services.find((s) => s.slug === slug) || null;
}

/**
 * Get project by ID
 */
export function getProjectById(projects, id) {
  return projects.find((p) => p.id === id) || null;
}
