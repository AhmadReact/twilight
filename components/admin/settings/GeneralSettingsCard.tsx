'use client';

import { useState } from 'react';
import AdminSettingsLabeledField from '@/components/admin/shared/AdminSettingsLabeledField';
import AdminSettingsSelectField from '@/components/admin/shared/AdminSettingsSelectField';
import QuestionnaireSettingRow from '@/components/admin/shared/QuestionnaireSettingRow';
import {
  countryOptions,
  currencyOptions,
  defaultGeneralSettings,
  timeZoneOptions,
  type GeneralSettingsData,
} from '@/lib/admin/mockGeneralSettingsData';

export default function GeneralSettingsCard() {
  const [settings, setSettings] = useState<GeneralSettingsData>(defaultGeneralSettings);

  const updateSetting = <K extends keyof GeneralSettingsData>(
    key: K,
    value: GeneralSettingsData[K],
  ) => {
    setSettings((current) => ({ ...current, [key]: value }));
  };

  return (
    <section className="flex w-full flex-col gap-[18px] rounded-[23px] border border-[#EAECF0] bg-white p-4 sm:p-6">
      <AdminSettingsLabeledField
        label="Platform Name"
        value={settings.platformName}
        onChange={(platformName) => updateSetting('platformName', platformName)}
      />

      <AdminSettingsLabeledField
        label="Support Email"
        value={settings.supportEmail}
        onChange={(supportEmail) => updateSetting('supportEmail', supportEmail)}
        type="email"
      />

      <AdminSettingsLabeledField
        label="Support Phone Number"
        value={settings.supportPhone}
        onChange={(supportPhone) => updateSetting('supportPhone', supportPhone)}
        type="tel"
      />

      <AdminSettingsSelectField
        label="Default Currency"
        value={settings.defaultCurrency}
        options={currencyOptions}
        onChange={(defaultCurrency) => updateSetting('defaultCurrency', defaultCurrency)}
      />

      <AdminSettingsSelectField
        label="Default Country/Region"
        value={settings.defaultCountry}
        options={countryOptions}
        onChange={(defaultCountry) => updateSetting('defaultCountry', defaultCountry)}
      />

      <AdminSettingsSelectField
        label="Time Zone"
        value={settings.timeZone}
        options={timeZoneOptions}
        onChange={(timeZone) => updateSetting('timeZone', timeZone)}
      />

      <div className="h-px w-full bg-[#EAECF0]" />

      <QuestionnaireSettingRow
        label="Maintenance Mode"
        enabled={settings.maintenanceMode}
        onChange={(maintenanceMode) => updateSetting('maintenanceMode', maintenanceMode)}
      />
    </section>
  );
}
