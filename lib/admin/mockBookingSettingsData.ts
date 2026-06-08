export type BookingSettingsData = {
  minimumBookingAmount: string;
  maximumBookingAmount: string;
  bookingAutoExpiryHours: string;
  cancellationAllowedBeforeHours: string;
  autoCompleteAfterHours: string;
  allowBookingCancellation: boolean;
  buyerNoShowRules: string;
};

export const defaultBookingSettings: BookingSettingsData = {
  minimumBookingAmount: '20',
  maximumBookingAmount: '200',
  bookingAutoExpiryHours: '5',
  cancellationAllowedBeforeHours: '1',
  autoCompleteAfterHours: '1',
  allowBookingCancellation: true,
  buyerNoShowRules:
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
};
