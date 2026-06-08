export type GeneralSettingsData = {
  platformName: string;
  supportEmail: string;
  supportPhone: string;
  defaultCurrency: string;
  defaultCountry: string;
  timeZone: string;
  maintenanceMode: boolean;
};

export const currencyOptions = [
  { value: 'USD', label: '$' },
  { value: 'EUR', label: '€' },
  { value: 'GBP', label: '£' },
];

export const countryOptions = [
  { value: 'USA', label: 'USA' },
  { value: 'UK', label: 'UK' },
  { value: 'CA', label: 'Canada' },
];

export const timeZoneOptions = [
  { value: 'UTC+00', label: 'UTC +00' },
  { value: 'UTC+05', label: 'UTC +05' },
  { value: 'UTC-05', label: 'UTC -05' },
];

export const defaultGeneralSettings: GeneralSettingsData = {
  platformName: 'WhoCan',
  supportEmail: 'support@whocan.com',
  supportPhone: '+1 234 5678901',
  defaultCurrency: 'USD',
  defaultCountry: 'USA',
  timeZone: 'UTC+00',
  maintenanceMode: true,
};
