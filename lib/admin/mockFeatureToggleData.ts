export type FeatureToggleId =
  | 'booking-system'
  | 'chat'
  | 'payments'
  | 'notifications'
  | 'promotions';

export type FeatureToggleItem = {
  id: FeatureToggleId;
  label: string;
  enabled: boolean;
};

export const defaultFeatureToggles: FeatureToggleItem[] = [
  { id: 'booking-system', label: 'Booking System', enabled: true },
  { id: 'chat', label: 'Chat', enabled: true },
  { id: 'payments', label: 'Payments', enabled: true },
  { id: 'notifications', label: 'Notifications', enabled: false },
  { id: 'promotions', label: 'Promotions', enabled: false },
];
