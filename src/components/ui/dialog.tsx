import { createContext, useContext, type ReactNode } from 'react';

type DialogContextType = {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
};

const DialogContext = createContext<DialogContextType | null>(null);

function useDialogCtx() {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error('Dialog components must be wrapped in <Dialog>');
  return ctx;
}

export function Dialog({ open = false, onOpenChange, children }: { open?: boolean; onOpenChange?: (open: boolean) => void; children: ReactNode }) {
  return <DialogContext.Provider value={{ open, onOpenChange }}>{children}</DialogContext.Provider>;
}

export function DialogContent({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { open, onOpenChange } = useDialogCtx();
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <button type="button" className="absolute inset-0 bg-black/50 animate-in fade-in duration-200" onClick={() => onOpenChange?.(false)} aria-label="Close dialog" />
      <div className={`relative z-50 w-[92vw] max-h-[88vh] max-w-2xl overflow-auto rounded-lg border border-border bg-card p-6 shadow-xl animate-in zoom-in-95 duration-200 ${className}`}>
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function DialogTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h2 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>{children}</h2>;
}

export function DialogFooter({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mt-6 flex justify-end gap-2 ${className}`}>{children}</div>;
}
