export type LimitsSettingsData = {
  maximumFavorsPerSeller: string;
  maximumImagesPerFavor: string;
  maximumFileUploadSizeMb: string;
  maximumReportImages: string;
  maximumActiveBookingsPerSeller: string;
  maximumActiveBookingsPerBuyer: string;
};

export const defaultLimitsSettings: LimitsSettingsData = {
  maximumFavorsPerSeller: '7',
  maximumImagesPerFavor: '10',
  maximumFileUploadSizeMb: '10',
  maximumReportImages: '10',
  maximumActiveBookingsPerSeller: '10',
  maximumActiveBookingsPerBuyer: '10',
};
