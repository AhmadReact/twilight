export type UserAccountSettingsData = {
  buyerRegistrationEnabled: boolean;
  sellerRegistrationEnabled: boolean;
  companyRegistrationEnabled: boolean;
  emailVerificationRequired: boolean;
  phoneVerificationRequired: boolean;
  maximumLoginDevices: string;
  deviceIdRestrictionEnabled: boolean;
};

export const defaultUserAccountSettings: UserAccountSettingsData = {
  buyerRegistrationEnabled: true,
  sellerRegistrationEnabled: true,
  companyRegistrationEnabled: true,
  emailVerificationRequired: true,
  phoneVerificationRequired: true,
  maximumLoginDevices: '5',
  deviceIdRestrictionEnabled: true,
};
