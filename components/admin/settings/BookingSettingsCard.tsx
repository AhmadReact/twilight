'use client';

import { useState } from 'react';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AdminSettingsAddonField from '@/components/admin/shared/AdminSettingsAddonField';
import AdminSettingsIconField from '@/components/admin/shared/AdminSettingsIconField';
import AdminSettingsTextareaField from '@/components/admin/shared/AdminSettingsTextareaField';
import QuestionnaireSettingRow from '@/components/admin/shared/QuestionnaireSettingRow';
import {
  defaultBookingSettings,
  type BookingSettingsData,
} from '@/lib/admin/mockBookingSettingsData';

export default function BookingSettingsCard() {
  const [settings, setSettings] = useState<BookingSettingsData>(defaultBookingSettings);

  const updateSetting = <K extends keyof BookingSettingsData>(
    key: K,
    value: BookingSettingsData[K],
  ) => {
    setSettings((current) => ({ ...current, [key]: value }));
  };

  return (
    <section className="flex w-full flex-col gap-[18px] rounded-[23px] border border-[#EAECF0] bg-white p-4 sm:p-6">
      <AdminSettingsIconField
        label="Minimum Booking Amount"
        value={settings.minimumBookingAmount}
        onChange={(minimumBookingAmount) =>
          updateSetting('minimumBookingAmount', minimumBookingAmount)
        }
        icon={AttachMoneyOutlinedIcon}
        type="number"
        helpTooltip="Lowest amount allowed for a booking."
      />

      <AdminSettingsIconField
        label="Maximum Booking Amount"
        value={settings.maximumBookingAmount}
        onChange={(maximumBookingAmount) =>
          updateSetting('maximumBookingAmount', maximumBookingAmount)
        }
        icon={AttachMoneyOutlinedIcon}
        type="number"
        helpTooltip="Highest amount allowed for a booking."
      />

      <AdminSettingsAddonField
        label="Booking Auto Expiry Time"
        addon="Hours"
        value={settings.bookingAutoExpiryHours}
        onChange={(bookingAutoExpiryHours) =>
          updateSetting('bookingAutoExpiryHours', bookingAutoExpiryHours)
        }
        helpTooltip="Hours before an unconfirmed booking expires automatically."
      />

      <AdminSettingsAddonField
        label="Cancellation Allowed Before"
        addon="Hours"
        value={settings.cancellationAllowedBeforeHours}
        onChange={(cancellationAllowedBeforeHours) =>
          updateSetting('cancellationAllowedBeforeHours', cancellationAllowedBeforeHours)
        }
        helpTooltip="Minimum hours before start time when cancellation is allowed."
      />

      <AdminSettingsAddonField
        label="Auto Complete After"
        addon="Hours"
        value={settings.autoCompleteAfterHours}
        onChange={(autoCompleteAfterHours) =>
          updateSetting('autoCompleteAfterHours', autoCompleteAfterHours)
        }
        helpTooltip="Hours after service end when booking is marked complete."
      />

      <QuestionnaireSettingRow
        label="Allow Booking Cancellation"
        enabled={settings.allowBookingCancellation}
        onChange={(allowBookingCancellation) =>
          updateSetting('allowBookingCancellation', allowBookingCancellation)
        }
      />

      <div className="h-px w-full bg-[#EAECF0]" />

      <AdminSettingsTextareaField
        label="Buyer No Show Rules"
        value={settings.buyerNoShowRules}
        onChange={(buyerNoShowRules) => updateSetting('buyerNoShowRules', buyerNoShowRules)}
      />
    </section>
  );
}
