import { cloneElement, createContext, useContext, useState, type ReactElement, type ReactNode } from 'react';

type MenuCtx = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const DropdownMenuContext = createContext<MenuCtx | null>(null);

function useDropdownMenuCtx() {
  const ctx = useContext(DropdownMenuContext);
  if (!ctx) throw new Error('Dropdown menu components must be wrapped in <DropdownMenu>');
  return ctx;
}

export function DropdownMenu({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <DropdownMenuContext.Provider value={{ open, setOpen }}>{children}</DropdownMenuContext.Provider>;
}

export function DropdownMenuTrigger({ asChild, children, className = '' }: { asChild?: boolean; children: ReactNode; className?: string }) {
  const { setOpen } = useDropdownMenuCtx();

  if (asChild && children && typeof children === 'object' && 'props' in children) {
    const child = children as ReactElement<{ onClick?: () => void; className?: string }>;
    return cloneElement(child, {
      className: `${child.props.className ?? ''} ${className}`.trim(),
      onClick: () => {
        child.props.onClick?.();
        setOpen(true);
      },
    });
  }

  return (
    <button type="button" className={className} onClick={() => setOpen(true)}>
      {children}
    </button>
  );
}

export function DropdownMenuContent({ children, className = '' }: { align?: 'start' | 'end'; children: ReactNode; className?: string }) {
  const { open, setOpen } = useDropdownMenuCtx();
  if (!open) return null;

  return (
    <>
      <button type="button" className="fixed inset-0 z-30" onClick={() => setOpen(false)} aria-label="Close menu" />
      <div className={`absolute right-2 top-12 z-40 min-w-44 rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg ${className}`}>
        {children}
      </div>
    </>
  );
}

export function DropdownMenuItem({ children, onClick, className = '', asChild }: { children: ReactNode; onClick?: () => void; className?: string; asChild?: boolean }) {
  const { setOpen } = useDropdownMenuCtx();

  if (asChild && children && typeof children === 'object' && 'props' in children) {
    const child = children as ReactElement<{ className?: string; onClick?: () => void }>;
    return cloneElement(child, {
      className: `${child.props.className ?? ''} flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-muted ${className}`.trim(),
      onClick: () => {
        child.props.onClick?.();
        onClick?.();
        setOpen(false);
      },
    });
  }

  return (
    <button
      type="button"
      className={`flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-muted ${className}`}
      onClick={() => {
        onClick?.();
        setOpen(false);
      }}
    >
      {children}
    </button>
  );
}

export function DropdownMenuSeparator() {
  return <div className="my-1 h-px bg-border" />;
}
