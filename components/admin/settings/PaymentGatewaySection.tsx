'use client';

import AdminCollapsibleSectionHeader from '@/components/admin/shared/AdminCollapsibleSectionHeader';
import AdminSettingsLabeledField from '@/components/admin/shared/AdminSettingsLabeledField';
import AdminSettingsToggleRow from '@/components/admin/shared/AdminSettingsToggleRow';
import type { PaymentGateway } from '@/lib/admin/mockPaymentSettingsData';

type PaymentGatewaySectionProps = {
  expanded: boolean;
  gateways: PaymentGateway[];
  onToggleExpanded: () => void;
  onAddGateway: () => void;
  onUpdateGateway: (id: string, updates: Partial<PaymentGateway>) => void;
};

export default function PaymentGatewaySection({
  expanded,
  gateways,
  onToggleExpanded,
  onAddGateway,
  onUpdateGateway,
}: PaymentGatewaySectionProps) {
  return (
    <div className="flex w-full flex-col gap-[18px]">
      <AdminCollapsibleSectionHeader
        title="Enable Payment Gateway"
        expanded={expanded}
        onToggleExpanded={onToggleExpanded}
        onAdd={onAddGateway}
        addLabel="Add payment gateway"
      />

      {expanded
        ? gateways.map((gateway) => (
            <div key={gateway.id} className="flex w-full flex-col gap-[18px]">
              <AdminSettingsToggleRow
                label={gateway.name}
                enabled={gateway.enabled}
                onChange={(enabled) => onUpdateGateway(gateway.id, { enabled })}
                indent
              />

              {gateway.enabled ? (
                <div className="pl-4">
                  <AdminSettingsLabeledField
                    label={`${gateway.name} Gateway Key`}
                    value={gateway.gatewayKey}
                    onChange={(gatewayKey) => onUpdateGateway(gateway.id, { gatewayKey })}
                  />
                </div>
              ) : null}
            </div>
          ))
        : null}
    </div>
  );
}
