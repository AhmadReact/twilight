'use client';

import { brandColors } from '@/lib/theme';

export type SegmentedOption = {
  id: string;
  label: string;
};

type SegmentedControlProps = {
  options: SegmentedOption[];
  value: string;
  onChange: (id: string) => void;
  className?: string;
};

export default function SegmentedControl({
  options,
  value,
  onChange,
  className = '',
}: SegmentedControlProps) {
  return (
    <div
      role="tablist"
      className={`flex w-full max-w-full gap-0.5 rounded-full bg-[#EAECF0] p-0.5 ${className}`}
    >
      {options.map((option) => {
        const isActive = option.id === value;

        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.id)}
            className={`flex-1 rounded-full px-4 py-3 text-xs font-semibold leading-4 transition-colors sm:py-2.5 ${
              isActive
                ? 'text-white shadow-[0px_1px_2px_rgba(16,24,40,0.05)]'
                : 'font-normal text-[#98A2B3] hover:text-[#667085]'
            }`}
            style={
              isActive
                ? {
                    backgroundImage: `linear-gradient(188.6deg, ${brandColors[300]} 5.31%, ${brandColors[600]} 87.07%)`,
                  }
                : undefined
            }
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
