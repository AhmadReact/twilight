export type NotificationSettingsData = {
  pushNotificationsEnabled: boolean;
  emailNotificationsEnabled: boolean;
  smsNotificationsEnabled: boolean;
  defaultSenderName: string;
  emailFromAddress: string;
};

export const defaultNotificationSettings: NotificationSettingsData = {
  pushNotificationsEnabled: true,
  emailNotificationsEnabled: true,
  smsNotificationsEnabled: true,
  defaultSenderName: 'WhoCan',
  emailFromAddress: 'hello@whocan.com',
};
