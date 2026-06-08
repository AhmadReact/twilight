export type BoostAppearanceLocation =
  | 'seller-profile'
  | 'favor-listing'
  | 'home-page'
  | 'teams-page'
  | 'everywhere';

export type BoostPackageRow = {
  id: string;
  name: string;
  price: string;
  days: number;
  appearsOn: BoostAppearanceLocation[];
  priority: 'Low' | 'Medium' | 'High' | 'Top';
  commission: string;
};

export type BoostControlSettings = {
  isPromotionEnabled: boolean;
  defaultCommission: number;
};

export const boostAppearanceLabels: Record<BoostAppearanceLocation, string> = {
  'seller-profile': 'Seller Profile',
  'favor-listing': 'Favor Listing',
  'home-page': 'Home Page',
  'teams-page': 'Teams Page',
  everywhere: 'Everywhere across Platform',
};

export const boostPackageRows: BoostPackageRow[] = [
  {
    id: 'starter',
    name: 'Starter Pack',
    price: '$10',
    days: 5,
    appearsOn: ['seller-profile'],
    priority: 'Low',
    commission: '2%',
  },
  {
    id: 'silver',
    name: 'Silver Package',
    price: '$20',
    days: 7,
    appearsOn: ['seller-profile', 'favor-listing'],
    priority: 'Medium',
    commission: '2%',
  },
  {
    id: 'bronze',
    name: 'Bronze Package',
    price: '$50',
    days: 14,
    appearsOn: ['seller-profile', 'favor-listing'],
    priority: 'Medium',
    commission: '3%',
  },
  {
    id: 'gold',
    name: 'Gold Package',
    price: '$70',
    days: 30,
    appearsOn: ['seller-profile', 'favor-listing', 'home-page'],
    priority: 'High',
    commission: '5%',
  },
  {
    id: 'platinum',
    name: 'Platinum Package',
    price: '$100',
    days: 30,
    appearsOn: ['seller-profile', 'favor-listing', 'home-page', 'teams-page'],
    priority: 'High',
    commission: '5%',
  },
  {
    id: 'diamond',
    name: 'Diamond Package',
    price: '$200',
    days: 30,
    appearsOn: ['everywhere'],
    priority: 'Top',
    commission: '8%',
  },
];

export const defaultBoostControlSettings: BoostControlSettings = {
  isPromotionEnabled: true,
  defaultCommission: 2,
};
