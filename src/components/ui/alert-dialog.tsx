export {
  Dialog as AlertDialog,
  DialogContent as AlertDialogContent,
  DialogFooter as AlertDialogFooter,
  DialogHeader as AlertDialogHeader,
  DialogTitle as AlertDialogTitle,
} from '@/components/ui/dialog';

import type { ReactNode } from 'react';

export function AlertDialogDescription({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>;
}

export function AlertDialogCancel({ children, className = '', onClick }: { children: ReactNode; className?: string; onClick?: () => void }) {
  return (
    <button type="button" className={`h-10 rounded-md border border-border px-4 text-sm font-medium hover:bg-muted ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export function AlertDialogAction({ children, className = '', onClick }: { children: ReactNode; className?: string; onClick?: () => void }) {
  return (
    <button type="button" className={`h-10 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
