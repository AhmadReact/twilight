export type CommissionType = 'fixed' | 'percentage' | 'percentage_and_fixed';

export type CommissionSettingsData = {
  platformCommissionPercentage: string;
  fixedServiceFee: string;
  supportPhone: string;
  commissionType: CommissionType;
};

export const commissionTypeOptions = [
  { value: 'fixed', label: 'Fixed Amount' },
  { value: 'percentage', label: 'Percentage' },
  { value: 'percentage_and_fixed', label: 'Percentage + Fixed Amount' },
] as const;

export const defaultCommissionSettings: CommissionSettingsData = {
  platformCommissionPercentage: '5',
  fixedServiceFee: '20',
  supportPhone: '+1 234 5678901',
  commissionType: 'percentage',
};
