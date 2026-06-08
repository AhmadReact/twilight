'use client';

import { useState } from 'react';
import AdminSettingsDivider from '@/components/admin/shared/AdminSettingsDivider';
import AdminSettingsLabeledField from '@/components/admin/shared/AdminSettingsLabeledField';
import QuestionnaireSettingRow from '@/components/admin/shared/QuestionnaireSettingRow';
import {
  defaultUserAccountSettings,
  type UserAccountSettingsData,
} from '@/lib/admin/mockUserAccountSettingsData';

export default function UserAccountSettingsCard() {
  const [settings, setSettings] = useState<UserAccountSettingsData>(defaultUserAccountSettings);

  const updateSetting = <K extends keyof UserAccountSettingsData>(
    key: K,
    value: UserAccountSettingsData[K],
  ) => {
    setSettings((current) => ({ ...current, [key]: value }));
  };

  return (
    <section className="flex w-full flex-col gap-[18px] rounded-[23px] border border-[#EAECF0] bg-white p-4 sm:p-6">
      <QuestionnaireSettingRow
        label="Buyer Registration"
        enabled={settings.buyerRegistrationEnabled}
        onChange={(buyerRegistrationEnabled) =>
          updateSetting('buyerRegistrationEnabled', buyerRegistrationEnabled)
        }
      />

      <AdminSettingsDivider />

      <QuestionnaireSettingRow
        label="Seller Registration"
        enabled={settings.sellerRegistrationEnabled}
        onChange={(sellerRegistrationEnabled) =>
          updateSetting('sellerRegistrationEnabled', sellerRegistrationEnabled)
        }
      />

      <AdminSettingsDivider />

      <QuestionnaireSettingRow
        label="Company Registration"
        enabled={settings.companyRegistrationEnabled}
        onChange={(companyRegistrationEnabled) =>
          updateSetting('companyRegistrationEnabled', companyRegistrationEnabled)
        }
      />

      <AdminSettingsDivider />

      <QuestionnaireSettingRow
        label="Email Verification Required"
        enabled={settings.emailVerificationRequired}
        onChange={(emailVerificationRequired) =>
          updateSetting('emailVerificationRequired', emailVerificationRequired)
        }
      />

      <AdminSettingsDivider />

      <QuestionnaireSettingRow
        label="Phone Verification Required"
        enabled={settings.phoneVerificationRequired}
        onChange={(phoneVerificationRequired) =>
          updateSetting('phoneVerificationRequired', phoneVerificationRequired)
        }
      />

      <AdminSettingsDivider />

      <AdminSettingsLabeledField
        label="Maximum Login Devices"
        value={settings.maximumLoginDevices}
        onChange={(maximumLoginDevices) =>
          updateSetting('maximumLoginDevices', maximumLoginDevices)
        }
        type="number"
      />

      <QuestionnaireSettingRow
        label="Device ID Restriction"
        enabled={settings.deviceIdRestrictionEnabled}
        onChange={(deviceIdRestrictionEnabled) =>
          updateSetting('deviceIdRestrictionEnabled', deviceIdRestrictionEnabled)
        }
      />
    </section>
  );
}
