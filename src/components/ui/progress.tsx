type ProgressProps = {
  value?: number;
  className?: string;
};

export function Progress({ value = 0, className = '' }: ProgressProps) {
  const safeValue = Math.max(0, Math.min(100, value));

  return (
    <div className={`relative h-2 w-full overflow-hidden rounded-full bg-muted ${className}`}>
      <div
        className="h-full bg-primary transition-all"
        style={{ width: `${safeValue}%` }}
      />
    </div>
  );
}
