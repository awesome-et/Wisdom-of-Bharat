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
    <>
      <button type="button" className="fixed inset-0 z-40 bg-black/40" onClick={() => onOpenChange?.(false)} aria-label="Close dialog" />
      <div className={`fixed left-1/2 top-1/2 z-50 w-[92vw] max-h-[88vh] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-xl border border-border bg-card p-6 shadow-xl ${className}`}>
        {children}
      </div>
    </>
  );
}

export function DialogHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function DialogTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>;
}

export function DialogFooter({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mt-6 flex justify-end gap-2 ${className}`}>{children}</div>;
}
