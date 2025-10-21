import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx and tailwind-merge for optimal className handling
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
