'use client';

import { useState } from 'react';
import AdminCollapsibleToggleSection from '@/components/admin/shared/AdminCollapsibleToggleSection';
import AdminEditableToggleRow from '@/components/admin/shared/AdminEditableToggleRow';
import AdminSettingsDivider from '@/components/admin/shared/AdminSettingsDivider';
import QuestionnaireSettingRow from '@/components/admin/shared/QuestionnaireSettingRow';
import {
  activityLogOptionLabels,
  defaultAdminActivitySettings,
  type AdminActivityLogOptions,
  type AdminActivitySettingsData,
} from '@/lib/admin/mockAdminActivitySettingsData';

export default function AdminActivitySettingsCard() {
  const [settings, setSettings] = useState<AdminActivitySettingsData>(defaultAdminActivitySettings);

  const updateSetting = <K extends keyof AdminActivitySettingsData>(
    key: K,
    value: AdminActivitySettingsData[K],
  ) => {
    setSettings((current) => ({ ...current, [key]: value }));
  };

  const updateLogOption = (key: keyof AdminActivityLogOptions, enabled: boolean) => {
    setSettings((current) => ({
      ...current,
      logOptions: { ...current.logOptions, [key]: enabled },
    }));
  };

  return (
    <section className="flex w-full flex-col gap-[18px] rounded-[23px] border border-[#EAECF0] bg-white p-4 sm:p-6">
      <AdminCollapsibleToggleSection
        title="Enable Activity Logs"
        enabled={settings.activityLogsEnabled}
        expanded={settings.activityLogsExpanded}
        onEnabledChange={(activityLogsEnabled) => updateSetting('activityLogsEnabled', activityLogsEnabled)}
        onExpandedChange={(activityLogsExpanded) =>
          updateSetting('activityLogsExpanded', activityLogsExpanded)
        }
      >
        {(Object.keys(activityLogOptionLabels) as Array<keyof AdminActivityLogOptions>).map(
          (key) => (
            <QuestionnaireSettingRow
              key={key}
              label={activityLogOptionLabels[key]}
              enabled={settings.logOptions[key]}
              onChange={(enabled) => updateLogOption(key, enabled)}
              variant="field"
              disabled={!settings.activityLogsEnabled}
            />
          ),
        )}
      </AdminCollapsibleToggleSection>

      <AdminSettingsDivider />

      <QuestionnaireSettingRow
        label="Assign Questions to Category"
        enabled={settings.assignQuestionsToCategory}
        onChange={(assignQuestionsToCategory) =>
          updateSetting('assignQuestionsToCategory', assignQuestionsToCategory)
        }
      />

      <AdminEditableToggleRow
        label="Terms and Conditions"
        enabled={settings.termsAndConditionsEnabled}
        expanded={settings.termsAndConditionsExpanded}
        onEnabledChange={(termsAndConditionsEnabled) =>
          updateSetting('termsAndConditionsEnabled', termsAndConditionsEnabled)
        }
        onExpandedChange={(termsAndConditionsExpanded) =>
          updateSetting('termsAndConditionsExpanded', termsAndConditionsExpanded)
        }
        onEdit={() => updateSetting('termsAndConditionsExpanded', true)}
      />
    </section>
  );
}
