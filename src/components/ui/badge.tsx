import type { HTMLAttributes } from 'react';

type Variant = 'default' | 'secondary' | 'outline';

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant;
};

const variantClasses: Record<Variant, string> = {
  default: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
  outline: 'border border-border bg-transparent text-foreground',
};

export function Badge({ className = '', variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
