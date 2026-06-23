import type { ReactNode } from 'react';

type AdminLabeledFieldProps = {
  label: string;
  htmlFor?: string;
  children: ReactNode;
  className?: string;
};

export default function AdminLabeledField({
  label,
  htmlFor,
  children,
  className = '',
}: AdminLabeledFieldProps) {
  return (
    <div className={`flex w-full flex-col gap-2 ${className}`}>
      <label
        htmlFor={htmlFor}
        className="text-sm font-semibold leading-5 text-[#182230]"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
