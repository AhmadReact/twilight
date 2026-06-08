'use client';

import { useState } from 'react';
import QuestionnaireSettingRow from '@/components/admin/shared/QuestionnaireSettingRow';
import {
  defaultQuestionnaireSettings,
  type QuestionnaireFieldId,
  type QuestionnaireSettings,
} from '@/lib/admin/mockQuestionnaireData';

export default function QuestionnaireControlCard() {
  const [settings, setSettings] = useState<QuestionnaireSettings>(defaultQuestionnaireSettings);

  const updateField = (fieldId: QuestionnaireFieldId, enabled: boolean) => {
    setSettings((current) => ({
      ...current,
      fields: current.fields.map((field) =>
        field.id === fieldId ? { ...field, enabled } : field,
      ),
    }));
  };

  return (
    <section className="flex w-full flex-col gap-[18px] rounded-[23px] border border-[#EAECF0] bg-white p-4 sm:p-6">
      <QuestionnaireSettingRow
        label="Create Questions"
        enabled={settings.createQuestionsEnabled}
        onChange={(createQuestionsEnabled) =>
          setSettings((current) => ({ ...current, createQuestionsEnabled }))
        }
      />

      <div className="h-px w-full bg-[#EAECF0]" />

      {settings.fields.map((field) => (
        <QuestionnaireSettingRow
          key={field.id}
          label={field.label}
          enabled={field.enabled}
          variant="field"
          disabled={!settings.createQuestionsEnabled}
          onChange={(enabled) => updateField(field.id, enabled)}
        />
      ))}

      <div className="h-px w-full bg-[#EAECF0]" />

      <QuestionnaireSettingRow
        label="Assign Questions to Category"
        enabled={settings.assignToCategoryEnabled}
        onChange={(assignToCategoryEnabled) =>
          setSettings((current) => ({ ...current, assignToCategoryEnabled }))
        }
      />
    </section>
  );
}
