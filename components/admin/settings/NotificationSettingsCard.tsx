'use client';

import { useState } from 'react';
import AdminSettingsDivider from '@/components/admin/shared/AdminSettingsDivider';
import AdminSettingsLabeledField from '@/components/admin/shared/AdminSettingsLabeledField';
import QuestionnaireSettingRow from '@/components/admin/shared/QuestionnaireSettingRow';
import {
  defaultNotificationSettings,
  type NotificationSettingsData,
} from '@/lib/admin/mockNotificationSettingsData';

export default function NotificationSettingsCard() {
  const [settings, setSettings] = useState<NotificationSettingsData>(defaultNotificationSettings);

  const updateSetting = <K extends keyof NotificationSettingsData>(
    key: K,
    value: NotificationSettingsData[K],
  ) => {
    setSettings((current) => ({ ...current, [key]: value }));
  };

  return (
    <section className="flex w-full flex-col gap-[18px] rounded-[23px] border border-[#EAECF0] bg-white p-4 sm:p-6">
      <QuestionnaireSettingRow
        label="Push Notifications"
        enabled={settings.pushNotificationsEnabled}
        onChange={(pushNotificationsEnabled) =>
          updateSetting('pushNotificationsEnabled', pushNotificationsEnabled)
        }
      />

      <AdminSettingsDivider />

      <QuestionnaireSettingRow
        label="Email Notifications"
        enabled={settings.emailNotificationsEnabled}
        onChange={(emailNotificationsEnabled) =>
          updateSetting('emailNotificationsEnabled', emailNotificationsEnabled)
        }
      />

      <AdminSettingsDivider />

      <QuestionnaireSettingRow
        label="SMS Notifications"
        enabled={settings.smsNotificationsEnabled}
        onChange={(smsNotificationsEnabled) =>
          updateSetting('smsNotificationsEnabled', smsNotificationsEnabled)
        }
      />

      <AdminSettingsDivider />

      <AdminSettingsLabeledField
        label="Default Notification Sender Name"
        value={settings.defaultSenderName}
        onChange={(defaultSenderName) => updateSetting('defaultSenderName', defaultSenderName)}
      />

      <AdminSettingsLabeledField
        label="Email From Address"
        value={settings.emailFromAddress}
        onChange={(emailFromAddress) => updateSetting('emailFromAddress', emailFromAddress)}
        type="email"
      />
    </section>
  );
}
