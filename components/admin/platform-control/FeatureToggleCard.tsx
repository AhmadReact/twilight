'use client';

import { useState } from 'react';
import FeatureToggleRow from '@/components/admin/shared/FeatureToggleRow';
import {
  defaultFeatureToggles,
  type FeatureToggleId,
  type FeatureToggleItem,
} from '@/lib/admin/mockFeatureToggleData';

export default function FeatureToggleCard() {
  const [features, setFeatures] = useState<FeatureToggleItem[]>(defaultFeatureToggles);

  const handleToggle = (id: FeatureToggleId, enabled: boolean) => {
    setFeatures((current) =>
      current.map((feature) => (feature.id === id ? { ...feature, enabled } : feature)),
    );
  };

  return (
    <section className="flex w-full flex-col rounded-[23px] border border-[#EAECF0] bg-white p-4 sm:p-6">
      {features.map((feature, index) => (
        <div key={feature.id}>
          <FeatureToggleRow
            label={feature.label}
            enabled={feature.enabled}
            onChange={(enabled) => handleToggle(feature.id, enabled)}
          />
          {index < features.length - 1 ? (
            <div className="my-[18px] h-px w-full bg-[#EAECF0]" />
          ) : null}
        </div>
      ))}
    </section>
  );
}
