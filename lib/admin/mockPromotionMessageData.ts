export type PromotionMessageScreen = 'home' | 'booking' | 'seller-dashboard';

export type PromotionMessageData = {
  isActive: boolean;
  dateRangeLabel: string;
  title: string;
  body: string;
  screens: PromotionMessageScreen[];
};

export const promotionMessageScreens: {
  id: PromotionMessageScreen;
  label: string;
}[] = [
  { id: 'home', label: 'Home Screen' },
  { id: 'booking', label: 'Booking Screen' },
  { id: 'seller-dashboard', label: 'Seller Dashboard' },
];

export const defaultPromotionMessage: PromotionMessageData = {
  isActive: true,
  dateRangeLabel: 'Jan 6, 2024 – Jan 13, 2024',
  title: 'The standard Lorem Ipsum passage, used since 1966',
  body: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  screens: ['home'],
};
