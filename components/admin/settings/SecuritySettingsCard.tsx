'use client';

import { useState } from 'react';
import AdminSettingsAddonField from '@/components/admin/shared/AdminSettingsAddonField';
import AdminSettingsDivider from '@/components/admin/shared/AdminSettingsDivider';
import AdminSettingsLabeledField from '@/components/admin/shared/AdminSettingsLabeledField';
import QuestionnaireSettingRow from '@/components/admin/shared/QuestionnaireSettingRow';
import {
  defaultSecuritySettings,
  type SecuritySettingsData,
} from '@/lib/admin/mockSecuritySettingsData';

export default function SecuritySettingsCard() {
  const [settings, setSettings] = useState<SecuritySettingsData>(defaultSecuritySettings);

  const updateSetting = <K extends keyof SecuritySettingsData>(
    key: K,
    value: SecuritySettingsData[K],
  ) => {
    setSettings((current) => ({ ...current, [key]: value }));
  };

  return (
    <section className="flex w-full flex-col gap-[18px] rounded-[23px] border border-[#EAECF0] bg-white p-4 sm:p-6">
      <QuestionnaireSettingRow
        label="Admin 2FA"
        enabled={settings.adminTwoFactorEnabled}
        onChange={(adminTwoFactorEnabled) =>
          updateSetting('adminTwoFactorEnabled', adminTwoFactorEnabled)
        }
      />

      <AdminSettingsDivider />

      <QuestionnaireSettingRow
        label="Suspicious Login Alert"
        enabled={settings.suspiciousLoginAlertEnabled}
        onChange={(suspiciousLoginAlertEnabled) =>
          updateSetting('suspiciousLoginAlertEnabled', suspiciousLoginAlertEnabled)
        }
      />

      <AdminSettingsDivider />

      <AdminSettingsLabeledField
        label="Login Attempt Limit"
        value={settings.loginAttemptLimit}
        onChange={(loginAttemptLimit) => updateSetting('loginAttemptLimit', loginAttemptLimit)}
        type="number"
      />

      <AdminSettingsAddonField
        label="Account Lock Duration"
        addon="Hours"
        value={settings.accountLockDurationHours}
        onChange={(accountLockDurationHours) =>
          updateSetting('accountLockDurationHours', accountLockDurationHours)
        }
        helpTooltip="Duration an account remains locked after exceeding login attempts."
      />

      <AdminSettingsLabeledField
        label="Password Minimum Length"
        value={settings.passwordMinimumLength}
        onChange={(passwordMinimumLength) =>
          updateSetting('passwordMinimumLength', passwordMinimumLength)
        }
        type="number"
      />

      <AdminSettingsAddonField
        label="Session Timeout"
        addon="Days"
        value={settings.sessionTimeoutDays}
        onChange={(sessionTimeoutDays) => updateSetting('sessionTimeoutDays', sessionTimeoutDays)}
        helpTooltip="Number of days before an inactive session expires."
      />
    </section>
  );
}
