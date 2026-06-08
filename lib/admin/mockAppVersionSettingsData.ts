export type AppVersionSettingsData = {
  forceUpdateEnabled: boolean;
  minimumAndroidVersion: string;
  minimumIosVersion: string;
  optionalUpdateMessage: string;
  appStoreLink: string;
  playStoreLink: string;
};

export const defaultAppVersionSettings: AppVersionSettingsData = {
  forceUpdateEnabled: true,
  minimumAndroidVersion: '11',
  minimumIosVersion: '17',
  optionalUpdateMessage:
    'Your app is out of date. Please Update to use latest features.',
  appStoreLink: 'https://example.com/',
  playStoreLink: 'https://example.com/',
};
