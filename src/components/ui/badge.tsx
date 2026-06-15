import type { HTMLAttributes } from 'react';

type Variant = 'default' | 'secondary' | 'outline';

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant;
};

const variantClasses: Record<Variant, string> = {
  default: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary/50 text-foreground border border-border',
  outline: 'border border-border bg-transparent text-foreground',
};

export function Badge({ className = '', variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-200 ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
