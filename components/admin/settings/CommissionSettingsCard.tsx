'use client';

import { useState } from 'react';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import AdminSettingsIconField from '@/components/admin/shared/AdminSettingsIconField';
import AdminSettingsLabeledField from '@/components/admin/shared/AdminSettingsLabeledField';
import AdminSettingsSelectField from '@/components/admin/shared/AdminSettingsSelectField';
import {
  commissionTypeOptions,
  defaultCommissionSettings,
  type CommissionSettingsData,
} from '@/lib/admin/mockCommissionSettingsData';

export default function CommissionSettingsCard() {
  const [settings, setSettings] = useState<CommissionSettingsData>(defaultCommissionSettings);

  const updateSetting = <K extends keyof CommissionSettingsData>(
    key: K,
    value: CommissionSettingsData[K],
  ) => {
    setSettings((current) => ({ ...current, [key]: value }));
  };

  return (
    <section className="flex w-full flex-col gap-[18px] rounded-[23px] border border-[#EAECF0] bg-white p-4 sm:p-6">
      <AdminSettingsIconField
        label="Platform Commission Percentage"
        value={settings.platformCommissionPercentage}
        onChange={(platformCommissionPercentage) =>
          updateSetting('platformCommissionPercentage', platformCommissionPercentage)
        }
        icon={PercentOutlinedIcon}
        type="number"
        helpTooltip="Percentage of each transaction retained by the platform."
      />

      <AdminSettingsIconField
        label="Fixed Service Fee"
        value={settings.fixedServiceFee}
        onChange={(fixedServiceFee) => updateSetting('fixedServiceFee', fixedServiceFee)}
        icon={AttachMoneyOutlinedIcon}
        type="number"
        helpTooltip="Flat fee charged per service in addition to commission."
      />

      <AdminSettingsLabeledField
        label="Support Phone Number"
        value={settings.supportPhone}
        onChange={(supportPhone) => updateSetting('supportPhone', supportPhone)}
        type="tel"
      />

      <AdminSettingsSelectField
        label="Commission Type"
        value={settings.commissionType}
        options={[...commissionTypeOptions]}
        onChange={(commissionType) =>
          updateSetting('commissionType', commissionType as CommissionSettingsData['commissionType'])
        }
        showSelectedCheck
      />
    </section>
  );
}
