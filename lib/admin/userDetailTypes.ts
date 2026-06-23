import type { UserRow } from '@/lib/admin/mockUsersData';

export type UserBookingCard = {
  title: string;
  price: string;
  pricePrefix?: string;
  date: string;
  time: string;
  location: string;
  thumbnailSrc?: string;
  layout?: 'side' | 'stacked';
  provider?: BookingServiceProvider;
};

export type UserLocation = {
  label: string;
  address: string;
  showIcon?: boolean;
};

export type SavedDevice = {
  deviceId: string;
  created: string;
  deviceType: string;
  fcmToken: string;
};

export type BookingServiceProvider = {
  name: string;
  role: string;
  avatarSrc?: string;
  avatarBg?: string;
  initials?: string;
  verified?: boolean;
};

export type UserDetailBase = {
  user: UserRow;
  verified: boolean;
  totalBookings: number;
  completedBookings: number;
  inProgressBookings: number;
  cancelledBookings: number;
  bookingsInProgress: UserBookingCard[];
  upcomingBookings: UserBookingCard[];
  bookingProvider: BookingServiceProvider;
  locations: UserLocation[];
  lastLogin: string;
  devices: SavedDevice[];
};
