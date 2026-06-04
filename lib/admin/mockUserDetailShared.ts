import type {
  BookingServiceProvider,
  SavedDevice,
  UserBookingCard,
  UserLocation,
} from '@/lib/admin/userDetailTypes';

export const buyerServiceThumb =
  'https://www.figma.com/api/mcp/asset/a8a80ab5-b02b-4ded-98d1-e4414c76649e';

export const sellerServiceThumb =
  'https://www.figma.com/api/mcp/asset/6e88b013-3c7a-4dec-b9ab-df4b5ef78b9b';

export const defaultBookingProvider: BookingServiceProvider = {
  name: 'Demi Wilkinson',
  role: 'Pro Seller',
  avatarSrc: 'https://www.figma.com/api/mcp/asset/2c87b9ca-5d7a-4a1a-a6f3-d986d479ad88',
  avatarBg: '#DADCD6',
  verified: true,
};

export function createDefaultBookings(thumbnailSrc: string): {
  bookingsInProgress: UserBookingCard[];
  upcomingBookings: UserBookingCard[];
} {
  const bookingsInProgress: UserBookingCard[] = [
    {
      title: 'I will fix your electric supply issue',
      price: '$135',
      date: 'Jan 9, 2026',
      time: '08:00 AM',
      location: '12 Street, Apt. 4, Lower lake, Downtown, TX',
      thumbnailSrc,
      layout: 'side',
    },
    {
      title: 'I will fix your electric supply issue',
      price: '$135',
      pricePrefix: 'starts from ',
      date: 'Jan 9, 2026',
      time: '08:00 AM',
      location: '12 Street, Apt. 4, Lower lake, Downtown, TX',
      thumbnailSrc,
      layout: 'stacked',
    },
  ];

  const upcomingBookings: UserBookingCard[] = [
    {
      title: 'I will fix your electric supply issue',
      price: '$135',
      date: 'Jan 9, 2026',
      time: '08:00 AM',
      location: '12 Street, Apt. 4, Lower lake, Downtown, TX',
      thumbnailSrc,
      layout: 'side',
    },
    {
      title: 'I will fix your electric supply issue',
      price: '$135',
      pricePrefix: 'starts from ',
      date: 'Jan 9, 2026',
      time: '08:00 AM',
      location: '12 Street, Apt. 4, Lower lake, Downtown, TX',
      thumbnailSrc,
      layout: 'stacked',
    },
  ];

  return { bookingsInProgress, upcomingBookings };
}

export const defaultLocations: UserLocation[] = [
  {
    label: 'Work',
    address: '12 Street, Apt. 4, Lower lake, Downtown, TX',
    showIcon: true,
  },
  {
    label: 'Home',
    address: '12 Street, Apt. 4, Lower lake, Downtown, TX',
  },
];

export const defaultDevices: SavedDevice[] = [
  {
    deviceId: '12345',
    created: '2026-12-24',
    deviceType: 'Iphone 13 Pro',
    fcmToken: 'ABC567....',
  },
  {
    deviceId: '12345',
    created: '2026-12-24',
    deviceType: 'Iphone 13 Pro',
    fcmToken: 'ABC567....',
  },
];
