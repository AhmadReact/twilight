'use client';

import { useMemo, useState } from 'react';
import Button from '@mui/material/Button';
import AdminStatusToggle from '@/components/admin/shared/AdminStatusToggle';
import PercentInputField from '@/components/admin/shared/PercentInputField';
import PromotionPricingTable from '@/components/admin/platform-control/PromotionPricingTable';
import { outlineButtonSx, primaryButtonSx } from '@/lib/admin/adminButtonStyles';
import {
  defaultBoostControlSettings,
  type BoostControlSettings,
} from '@/lib/admin/mockBoostControlData';

const disabledActionButtonSx = {
  borderRadius: '1000px',
  border: '1px solid #EAECF0',
  bgcolor: '#F2F4F7',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  px: '12px',
  py: '8px',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '20px',
  color: '#98A2B3',
  '&:hover': {
    bgcolor: '#F2F4F7',
    borderColor: '#EAECF0',
  },
  '&.Mui-disabled': {
    color: '#98A2B3',
    bgcolor: '#F2F4F7',
    borderColor: '#EAECF0',
  },
};

export default function BoostControlCard() {
  const [savedSettings, setSavedSettings] = useState<BoostControlSettings>(
    defaultBoostControlSettings,
  );
  const [draftCommission, setDraftCommission] = useState(
    defaultBoostControlSettings.defaultCommission,
  );

  const isDirty = draftCommission !== savedSettings.defaultCommission;

  const handleSave = () => {
    setSavedSettings((current) => ({
      ...current,
      defaultCommission: draftCommission,
    }));
  };

  const handleCancel = () => {
    setDraftCommission(savedSettings.defaultCommission);
  };

  const handlePromotionToggle = (isPromotionEnabled: boolean) => {
    setSavedSettings((current) => ({ ...current, isPromotionEnabled }));
  };

  const saveButtonSx = useMemo(
    () => (isDirty ? primaryButtonSx : disabledActionButtonSx),
    [isDirty],
  );

  return (
    <section className="flex w-full flex-col gap-[18px] rounded-[23px] border border-[#EAECF0] bg-white p-4 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold leading-7 tracking-[-0.08px] text-[#021326]">
          Enable Promotion Feature
        </h2>
        <AdminStatusToggle
          active={savedSettings.isPromotionEnabled}
          onChange={handlePromotionToggle}
        />
      </div>

      <div className="h-px w-full bg-[#EAECF0]" />

      <PromotionPricingTable />

      <div className="flex flex-col gap-[18px]">
        <h2 className="text-xl font-semibold leading-7 tracking-[-0.08px] text-[#021326]">
          Default Promotion Commission
        </h2>

        <PercentInputField value={draftCommission} onChange={setDraftCommission} />

        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-2">
          <Button
            disableElevation
            onClick={handleCancel}
            disabled={!isDirty}
            sx={{
              ...(isDirty ? outlineButtonSx : disabledActionButtonSx),
              minWidth: 80,
            }}
          >
            Cancel
          </Button>
          <Button
            disableElevation
            onClick={handleSave}
            disabled={!isDirty}
            sx={{
              ...saveButtonSx,
              minWidth: 107,
            }}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </section>
  );
}
