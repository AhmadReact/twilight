'use client';

import CategoryToggleSwitch from '@/components/admin/shared/CategoryToggleSwitch';

type QuestionnaireSettingRowProps = {
  label: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  variant?: 'section' | 'field';
  disabled?: boolean;
};

export default function QuestionnaireSettingRow({
  label,
  enabled,
  onChange,
  variant = 'section',
  disabled = false,
}: QuestionnaireSettingRowProps) {
  const isField = variant === 'field';

  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ${
        isField ? 'pl-5' : ''
      }`}
    >
      <p
        className={
          isField
            ? 'text-base font-normal leading-6 text-[#101828]'
            : 'text-xl font-semibold leading-7 tracking-[-0.08px] text-[#021326]'
        }
      >
        {label}
      </p>
      <CategoryToggleSwitch
        checked={enabled}
        onChange={onChange}
        size={isField ? 'sm' : 'md'}
        disabled={disabled}
      />
    </div>
  );
}
