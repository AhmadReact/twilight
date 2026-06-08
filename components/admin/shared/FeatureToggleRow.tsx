'use client';

import AdminStatusToggle from '@/components/admin/shared/AdminStatusToggle';

type FeatureToggleRowProps = {
  label: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
};

export default function FeatureToggleRow({ label, enabled, onChange }: FeatureToggleRowProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <h3 className="text-xl font-semibold leading-7 tracking-[-0.08px] text-[#021326]">
        {label}
      </h3>
      <AdminStatusToggle
        active={enabled}
        onChange={onChange}
        activeLabel="Enabled"
        inactiveLabel="Disabled"
        inactiveLabelClassName="text-[#D92D20]"
      />
    </div>
  );
}
