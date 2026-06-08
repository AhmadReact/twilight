export type AdminActivityLogOptions = {
  loginHistory: boolean;
  paymentActions: boolean;
  userBlockingActions: boolean;
  settingsChanges: boolean;
};

export type AdminActivitySettingsData = {
  activityLogsEnabled: boolean;
  activityLogsExpanded: boolean;
  logOptions: AdminActivityLogOptions;
  assignQuestionsToCategory: boolean;
  termsAndConditionsEnabled: boolean;
  termsAndConditionsExpanded: boolean;
};

export const defaultAdminActivitySettings: AdminActivitySettingsData = {
  activityLogsEnabled: true,
  activityLogsExpanded: true,
  logOptions: {
    loginHistory: true,
    paymentActions: true,
    userBlockingActions: true,
    settingsChanges: false,
  },
  assignQuestionsToCategory: true,
  termsAndConditionsEnabled: true,
  termsAndConditionsExpanded: false,
};

export const activityLogOptionLabels: Record<keyof AdminActivityLogOptions, string> = {
  loginHistory: 'Log Login History',
  paymentActions: 'Log Payment Actions',
  userBlockingActions: 'Log User Blocking Actions',
  settingsChanges: 'Log Settings Changes',
};
