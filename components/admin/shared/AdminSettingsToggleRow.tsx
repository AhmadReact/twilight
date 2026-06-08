'use client';

import CategoryToggleSwitch from '@/components/admin/shared/CategoryToggleSwitch';

type AdminSettingsToggleRowProps = {
  label: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  size?: 'sm' | 'md';
  indent?: boolean;
};

export default function AdminSettingsToggleRow({
  label,
  enabled,
  onChange,
  size = 'sm',
  indent = false,
}: AdminSettingsToggleRowProps) {
  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ${
        indent ? 'pl-4' : ''
      }`}
    >
      <p className="text-base font-medium leading-6 text-[#021326]">{label}</p>
      <CategoryToggleSwitch checked={enabled} onChange={onChange} size={size} />
    </div>
  );
}
