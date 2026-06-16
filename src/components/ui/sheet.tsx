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
export function SheetContent({
  side = "right",
  className = "",
  children,
}: {
  side?: Side;
  className?: string;
  children: ReactNode;
}) {
  const { open, onOpenChange } = useContext(SheetContext);

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => onOpenChange?.(false)}
      />

      {/* Drawer */}
      <div
        className={`
          fixed top-0 ${side === "left" ? "left-0" : "right-0"
          }
          z-[100]
          h-screen
          w-[320px]
          max-w-[90vw]
          bg-background
          border-l
          border-border
          shadow-2xl
          transition-transform
          duration-300
          ${side === "left"
            ? "translate-x-0"
            : "translate-x-0"
          }
          ${className}
        `}
      >
        {children}
      </div>
    </>
  );
}