import type { HTMLAttributes } from 'react';

export function Card({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-all duration-200 ${className}`} {...props} />;
}
