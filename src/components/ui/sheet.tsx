import { cloneElement, createContext, useContext, type ReactElement, type ReactNode } from 'react';

type Side = 'left' | 'right';

type SheetContextType = {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
};

const SheetContext = createContext<SheetContextType>({ open: false });

export function Sheet({ open = false, onOpenChange, children }: { open?: boolean; onOpenChange?: (open: boolean) => void; children: ReactNode }) {
  return <SheetContext.Provider value={{ open, onOpenChange }}>{children}</SheetContext.Provider>;
}

export function SheetTrigger({ asChild, children, className = '' }: { asChild?: boolean; children: ReactNode; className?: string }) {
  const { onOpenChange } = useContext(SheetContext);

  if (asChild && children && typeof children === 'object' && 'props' in children) {
    const child = children as ReactElement<{ onClick?: () => void; className?: string }>;
    return cloneElement(child, {
      className: `${child.props.className ?? ''} ${className}`.trim(),
      onClick: () => {
        child.props.onClick?.();
        onOpenChange?.(true);
      },
    });
  }

  return (
    <button type="button" className={className} onClick={() => onOpenChange?.(true)}>
      {children}
    </button>
  );
}

export function SheetContent({ side = 'right', className = '', children }: { side?: Side; className?: string; children: ReactNode }) {
  const { open, onOpenChange } = useContext(SheetContext);

  if (!open) return null;

  return (
    <>
      <button type="button" className="fixed inset-0 z-40 bg-black/40" onClick={() => onOpenChange?.(false)} aria-label="Close sheet" />
      <div className={`fixed top-0 z-50 h-full w-80 max-w-[90vw] bg-card p-4 shadow-xl ${side === 'left' ? 'left-0' : 'right-0'} ${className}`}>
        {children}
      </div>
    </>
  );
}
