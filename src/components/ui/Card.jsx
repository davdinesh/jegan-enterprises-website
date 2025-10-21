import React from 'react';
import { cn } from '../../lib/utils';

const cardVariants = {
  default: 'bg-white dark:bg-dark-800 shadow-lg',
  glass: 'bg-white/10 backdrop-blur-lg border border-white/20',
  elevated: 'bg-white dark:bg-dark-800 shadow-xl hover:shadow-2xl',
};

export function Card({
  children,
  variant = 'default',
  className,
  hover = true,
  ...props
}) {
  return (
    <div
      className={cn(
        'rounded-2xl overflow-hidden transition-all duration-300',
        hover && 'hover:transform hover:-translate-y-2',
        cardVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }) {
  return (
    <div className={cn('p-6 pb-4', className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={cn('p-6 pt-0', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ...props }) {
  return (
    <div className={cn('p-6 pt-4', className)} {...props}>
      {children}
    </div>
  );
}
