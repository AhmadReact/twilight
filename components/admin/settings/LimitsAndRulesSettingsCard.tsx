'use client';

import { useState } from 'react';
import AdminSettingsAddonField from '@/components/admin/shared/AdminSettingsAddonField';
import AdminSettingsLabeledField from '@/components/admin/shared/AdminSettingsLabeledField';
import {
  defaultLimitsSettings,
  type LimitsSettingsData,
} from '@/lib/admin/mockLimitsSettingsData';

export default function LimitsAndRulesSettingsCard() {
  const [settings, setSettings] = useState<LimitsSettingsData>(defaultLimitsSettings);

  const updateSetting = <K extends keyof LimitsSettingsData>(
    key: K,
    value: LimitsSettingsData[K],
  ) => {
    setSettings((current) => ({ ...current, [key]: value }));
  };

  return (
    <section className="flex w-full flex-col gap-[18px] rounded-[23px] border border-[#EAECF0] bg-white p-4 sm:p-6">
      <AdminSettingsLabeledField
        label="Maximum Favors per Seller"
        value={settings.maximumFavorsPerSeller}
        onChange={(maximumFavorsPerSeller) =>
          updateSetting('maximumFavorsPerSeller', maximumFavorsPerSeller)
        }
        type="number"
      />

      <AdminSettingsLabeledField
        label="Maximum Images per Favor"
        value={settings.maximumImagesPerFavor}
        onChange={(maximumImagesPerFavor) =>
          updateSetting('maximumImagesPerFavor', maximumImagesPerFavor)
        }
        type="number"
      />

      <AdminSettingsAddonField
        label="Maximum File Upload Size"
        addon="MBs"
        value={settings.maximumFileUploadSizeMb}
        onChange={(maximumFileUploadSizeMb) =>
          updateSetting('maximumFileUploadSizeMb', maximumFileUploadSizeMb)
        }
        type="number"
      />

      <AdminSettingsLabeledField
        label="Maximum Report Images"
        value={settings.maximumReportImages}
        onChange={(maximumReportImages) =>
          updateSetting('maximumReportImages', maximumReportImages)
        }
        type="number"
      />

      <AdminSettingsLabeledField
        label="Maximum Active Bookings per Seller"
        value={settings.maximumActiveBookingsPerSeller}
        onChange={(maximumActiveBookingsPerSeller) =>
          updateSetting('maximumActiveBookingsPerSeller', maximumActiveBookingsPerSeller)
        }
        type="number"
      />

      <AdminSettingsLabeledField
        label="Maximum Active Bookings per Buyer"
        value={settings.maximumActiveBookingsPerBuyer}
        onChange={(maximumActiveBookingsPerBuyer) =>
          updateSetting('maximumActiveBookingsPerBuyer', maximumActiveBookingsPerBuyer)
        }
        type="number"
      />
    </section>
  );
}
