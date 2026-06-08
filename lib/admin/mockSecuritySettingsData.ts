export type SecuritySettingsData = {
  adminTwoFactorEnabled: boolean;
  suspiciousLoginAlertEnabled: boolean;
  loginAttemptLimit: string;
  accountLockDurationHours: string;
  passwordMinimumLength: string;
  sessionTimeoutDays: string;
};

export const defaultSecuritySettings: SecuritySettingsData = {
  adminTwoFactorEnabled: true,
  suspiciousLoginAlertEnabled: true,
  loginAttemptLimit: '3',
  accountLockDurationHours: '1',
  passwordMinimumLength: '8',
  sessionTimeoutDays: '7',
};
