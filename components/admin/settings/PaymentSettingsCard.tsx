'use client';

import { useState } from 'react';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AdminSettingsAddonField from '@/components/admin/shared/AdminSettingsAddonField';
import AdminSettingsIconField from '@/components/admin/shared/AdminSettingsIconField';
import AdminSettingsTextareaField from '@/components/admin/shared/AdminSettingsTextareaField';
import PaymentGatewaySection from '@/components/admin/settings/PaymentGatewaySection';
import {
  defaultPaymentSettings,
  type PaymentGateway,
  type PaymentSettingsData,
} from '@/lib/admin/mockPaymentSettingsData';

export default function PaymentSettingsCard() {
  const [settings, setSettings] = useState<PaymentSettingsData>(defaultPaymentSettings);

  const updateSetting = <K extends keyof PaymentSettingsData>(
    key: K,
    value: PaymentSettingsData[K],
  ) => {
    setSettings((current) => ({ ...current, [key]: value }));
  };

  const updateGateway = (id: string, updates: Partial<PaymentGateway>) => {
    setSettings((current) => ({
      ...current,
      gateways: current.gateways.map((gateway) =>
        gateway.id === id ? { ...gateway, ...updates } : gateway,
      ),
    }));
  };

  const handleAddGateway = () => {
    const nextIndex = settings.gateways.length + 1;
    setSettings((current) => ({
      ...current,
      gateways: [
        ...current.gateways,
        {
          id: `gateway-${nextIndex}`,
          name: `Gateway ${nextIndex}`,
          enabled: false,
          gatewayKey: '',
        },
      ],
    }));
  };

  return (
    <section className="flex w-full flex-col gap-[18px] rounded-[23px] border border-[#EAECF0] bg-white p-4 sm:p-6">
      <PaymentGatewaySection
        expanded={settings.gatewaysExpanded}
        gateways={settings.gateways}
        onToggleExpanded={() =>
          updateSetting('gatewaysExpanded', !settings.gatewaysExpanded)
        }
        onAddGateway={handleAddGateway}
        onUpdateGateway={updateGateway}
      />

      <div className="h-px w-full bg-[#EAECF0]" />

      <AdminSettingsIconField
        label="Minimum Withdrawal Amount"
        value={settings.minimumWithdrawalAmount}
        onChange={(minimumWithdrawalAmount) =>
          updateSetting('minimumWithdrawalAmount', minimumWithdrawalAmount)
        }
        icon={AttachMoneyOutlinedIcon}
        type="number"
        helpTooltip="Minimum balance required before a seller can withdraw funds."
      />

      <AdminSettingsAddonField
        label="Withdrawal Processing Time"
        addon="Hours"
        value={settings.withdrawalProcessingHours}
        onChange={(withdrawalProcessingHours) =>
          updateSetting('withdrawalProcessingHours', withdrawalProcessingHours)
        }
        helpTooltip="Hours required to process a withdrawal request."
      />

      <AdminSettingsTextareaField
        label="Seller Payment Release Rules"
        value={settings.sellerPaymentReleaseRules}
        onChange={(sellerPaymentReleaseRules) =>
          updateSetting('sellerPaymentReleaseRules', sellerPaymentReleaseRules)
        }
      />

      <AdminSettingsTextareaField
        label="Refund Policy Settings"
        value={settings.refundPolicySettings}
        onChange={(refundPolicySettings) =>
          updateSetting('refundPolicySettings', refundPolicySettings)
        }
      />
    </section>
  );
}
