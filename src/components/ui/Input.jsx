import React from 'react';
import { cn } from '../../lib/utils';

export function Input({ className, error, ...props }) {
  return (
    <input
      className={cn(
        'w-full p-4 border-2 rounded-xl transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        error
          ? 'border-red-500 dark:border-red-400'
          : 'border-gray-200 dark:border-dark-700',
        'bg-white dark:bg-dark-800 text-gray-900 dark:text-white',
        'placeholder:text-gray-400 dark:placeholder:text-gray-500',
        className
      )}
      {...props}
    />
  );
}

export function TextArea({ className, error, ...props }) {
  return (
    <textarea
      className={cn(
        'w-full p-4 border-2 rounded-xl transition-colors resize-none',
        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        error
          ? 'border-red-500 dark:border-red-400'
          : 'border-gray-200 dark:border-dark-700',
        'bg-white dark:bg-dark-800 text-gray-900 dark:text-white',
        'placeholder:text-gray-400 dark:placeholder:text-gray-500',
        className
      )}
      {...props}
    />
  );
}

export function Select({ className, error, children, ...props }) {
  return (
    <select
      className={cn(
        'w-full p-4 border-2 rounded-xl transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        error
          ? 'border-red-500 dark:border-red-400'
          : 'border-gray-200 dark:border-dark-700',
        'bg-white dark:bg-dark-800 text-gray-900 dark:text-white',
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}

export function Label({ className, children, required, ...props }) {
  return (
    <label
      className={cn(
        'block font-semibold mb-2 text-gray-800 dark:text-gray-200',
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}

export function FormError({ children, className }) {
  if (!children) return null;

  return (
    <p className={cn('text-sm text-red-500 dark:text-red-400 mt-1', className)}>
      {children}
    </p>
  );
}
