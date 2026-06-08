'use client';

import { useState } from 'react';
import PolicyAcceptanceTrackingTable from '@/components/admin/settings/PolicyAcceptanceTrackingTable';
import AdminSettingsDivider from '@/components/admin/shared/AdminSettingsDivider';
import CategoryToggleSwitch from '@/components/admin/shared/CategoryToggleSwitch';
import {
  defaultPolicyControlsSettings,
  mockPolicyAcceptanceRecords,
  type PolicyControlsSettings,
} from '@/lib/admin/mockPolicySettingsData';

export default function PolicyControlsTab() {
  const [controls, setControls] = useState<PolicyControlsSettings>(defaultPolicyControlsSettings);

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xl font-semibold leading-7 tracking-[-0.08px] text-[#021326]">
          Force users to accept updated policy
        </p>
        <CategoryToggleSwitch
          checked={controls.forceAcceptUpdatedPolicy}
          onChange={(forceAcceptUpdatedPolicy) =>
            setControls((current) => ({ ...current, forceAcceptUpdatedPolicy }))
          }
          size="md"
        />
      </div>

      <AdminSettingsDivider />

      <PolicyAcceptanceTrackingTable rows={mockPolicyAcceptanceRecords} />
    </div>
  );
}
