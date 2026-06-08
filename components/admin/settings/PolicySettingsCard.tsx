'use client';

import { useState } from 'react';
import PolicyCard from '@/components/admin/settings/PolicyCard';
import PolicyControlsTab from '@/components/admin/settings/PolicyControlsTab';
import SegmentedControl from '@/components/admin/shared/SegmentedControl';
import {
  defaultPoliciesByCategory,
  policyCategoryOptions,
  type PolicyCategory,
  type PolicyItem,
} from '@/lib/admin/mockPolicySettingsData';

export default function PolicySettingsCard() {
  const [activeCategory, setActiveCategory] = useState<PolicyCategory>('general');
  const [policiesByCategory, setPoliciesByCategory] = useState(defaultPoliciesByCategory);

  const policies =
    activeCategory === 'controls' ? [] : policiesByCategory[activeCategory];

  const updatePolicy = (policyId: string, updates: Partial<PolicyItem>) => {
    if (activeCategory === 'controls') {
      return;
    }

    setPoliciesByCategory((current) => ({
      ...current,
      [activeCategory]: current[activeCategory].map((policy) =>
        policy.id === policyId ? { ...policy, ...updates } : policy,
      ),
    }));
  };

  return (
    <div className="flex w-full flex-col gap-6">
      <SegmentedControl
        options={[...policyCategoryOptions]}
        value={activeCategory}
        onChange={(value) => setActiveCategory(value as PolicyCategory)}
      />

      {activeCategory === 'controls' ? (
        <PolicyControlsTab />
      ) : (
        <div className="flex w-full flex-col gap-6">
          {policies.map((policy) => (
            <PolicyCard
              key={policy.id}
              policy={policy}
              onUpdate={(updates) => updatePolicy(policy.id, updates)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
