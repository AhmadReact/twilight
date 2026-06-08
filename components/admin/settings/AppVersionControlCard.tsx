'use client';

import { useState } from 'react';
import AdminSettingsDivider from '@/components/admin/shared/AdminSettingsDivider';
import AdminSettingsLabeledField from '@/components/admin/shared/AdminSettingsLabeledField';
import QuestionnaireSettingRow from '@/components/admin/shared/QuestionnaireSettingRow';
import {
  defaultAppVersionSettings,
  type AppVersionSettingsData,
} from '@/lib/admin/mockAppVersionSettingsData';

export default function AppVersionControlCard() {
  const [settings, setSettings] = useState<AppVersionSettingsData>(defaultAppVersionSettings);

  const updateSetting = <K extends keyof AppVersionSettingsData>(
    key: K,
    value: AppVersionSettingsData[K],
  ) => {
    setSettings((current) => ({ ...current, [key]: value }));
  };

  return (
    <section className="flex w-full flex-col gap-[18px] rounded-[23px] border border-[#EAECF0] bg-white p-4 sm:p-6">
      <QuestionnaireSettingRow
        label="Force Update"
        enabled={settings.forceUpdateEnabled}
        onChange={(forceUpdateEnabled) => updateSetting('forceUpdateEnabled', forceUpdateEnabled)}
      />

      <AdminSettingsDivider />

      <AdminSettingsLabeledField
        label="Minimum Android Version"
        value={settings.minimumAndroidVersion}
        onChange={(minimumAndroidVersion) =>
          updateSetting('minimumAndroidVersion', minimumAndroidVersion)
        }
      />

      <AdminSettingsLabeledField
        label="Minimum iOS Version"
        value={settings.minimumIosVersion}
        onChange={(minimumIosVersion) => updateSetting('minimumIosVersion', minimumIosVersion)}
      />

      <AdminSettingsLabeledField
        label="Optional Update Message"
        value={settings.optionalUpdateMessage}
        onChange={(optionalUpdateMessage) =>
          updateSetting('optionalUpdateMessage', optionalUpdateMessage)
        }
      />

      <AdminSettingsLabeledField
        label="App Store Link"
        value={settings.appStoreLink}
        onChange={(appStoreLink) => updateSetting('appStoreLink', appStoreLink)}
        type="url"
      />

      <AdminSettingsLabeledField
        label="Play Store Link"
        value={settings.playStoreLink}
        onChange={(playStoreLink) => updateSetting('playStoreLink', playStoreLink)}
        type="url"
      />
    </section>
  );
}
