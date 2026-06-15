import { Children, isValidElement, type ReactNode } from 'react';

type SelectItemData = { value: string; label: ReactNode };

function collectItems(children: ReactNode): SelectItemData[] {
  const items: SelectItemData[] = [];

  Children.forEach(children, child => {
    if (!isValidElement(child)) return;

    const type = child.type as { displayName?: string };
    if (type.displayName === 'SelectItem') {
      items.push({ value: String((child.props as { value?: string }).value ?? ''), label: (child.props as { children?: ReactNode }).children });
      return;
    }

    const nested = (child.props as { children?: ReactNode }).children;
    if (nested) items.push(...collectItems(nested));
  });

  return items;
}

function findTriggerClass(children: ReactNode): string {
  let className = '';

  Children.forEach(children, child => {
    if (!isValidElement(child)) return;
    const type = child.type as { displayName?: string };

    if (type.displayName === 'SelectTrigger') {
      className = String((child.props as { className?: string }).className ?? '');
      return;
    }

    const nested = (child.props as { children?: ReactNode }).children;
    if (nested && !className) className = findTriggerClass(nested);
  });

  return className;
}

function findPlaceholder(children: ReactNode): string {
  let placeholder = '';

  Children.forEach(children, child => {
    if (!isValidElement(child)) return;
    const type = child.type as { displayName?: string };

    if (type.displayName === 'SelectValue') {
      placeholder = String((child.props as { placeholder?: string }).placeholder ?? 'Select');
      return;
    }

    const nested = (child.props as { children?: ReactNode }).children;
    if (nested && !placeholder) placeholder = findPlaceholder(nested);
  });

  return placeholder;
}

export function Select({ value, onValueChange, children }: { value?: string; onValueChange?: (value: string) => void; children: ReactNode }) {
  const items = collectItems(children);
  const triggerClass = findTriggerClass(children);
  const placeholder = findPlaceholder(children) || 'Select';

  return (
    <select
      value={value}
      onChange={e => onValueChange?.(e.target.value)}
      className={`h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ${triggerClass}`}
    >
      {!value && <option value="">{placeholder}</option>}
      {items.map(item => (
        <option key={item.value} value={item.value}>
          {typeof item.label === 'string' ? item.label : item.value}
        </option>
      ))}
    </select>
  );
}

export function SelectTrigger({ children }: { className?: string; children: ReactNode }) {
  return <>{children}</>;
}
SelectTrigger.displayName = 'SelectTrigger';

export function SelectContent({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function SelectItem({ children }: { value: string; children: ReactNode }) {
  return <>{children}</>;
}
SelectItem.displayName = 'SelectItem';

export function SelectValue({ placeholder }: { placeholder?: string }) {
  return <span>{placeholder}</span>;
}
SelectValue.displayName = 'SelectValue';
