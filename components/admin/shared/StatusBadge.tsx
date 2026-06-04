type StatusBadgeProps = {
  label: string;
  bg: string;
  border: string;
  text: string;
  className?: string;
};

export default function StatusBadge({ label, bg, border, text, className = '' }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium leading-4 ${className}`}
      style={{
        backgroundColor: bg,
        borderColor: border,
        color: text,
      }}
    >
      {label}
    </span>
  );
}
