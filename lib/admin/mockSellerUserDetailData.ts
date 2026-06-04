import { getUserBySlug, isBuyerUserType } from '@/lib/admin/mockUsersData';
import type { UserDetailBase } from '@/lib/admin/userDetailTypes';
import {
  createDefaultBookings,
  defaultDevices,
  defaultLocations,
  sellerServiceThumb,
} from '@/lib/admin/mockUserDetailShared';

export type SellerBookingCard = import('@/lib/admin/userDetailTypes').UserBookingCard;

export type SellerFavorRow = {
  slug: string;
  bookingId: string;
  title: string;
  priceFrom: string;
  date: string;
  category: string;
  subCategories: string;
  status: 'Active' | 'Blocked';
  thumbnailSrc: string;
};

export type { UserLocation, SavedDevice } from '@/lib/admin/userDetailTypes';

export type SellerUserDetail = UserDetailBase & {
  rating: number;
  reviewCount: string;
  tierLabel: string;
  totalEarning: string;
  earningTrend: string;
  activeFavors: string;
  favors: SellerFavorRow[];
};

const defaultFavors: SellerFavorRow[] = [
  {
    slug: 'electric-fix',
    bookingId: '1234',
    title: 'I will fix your electric supply issue',
    priceFrom: 'starts from $135',
    date: '2026-12-25',
    category: 'Cleaning',
    subCategories: 'Home Cleaning,\nGardening, ',
    status: 'Active',
    thumbnailSrc: sellerServiceThumb,
  },
  {
    slug: 'car-wash',
    bookingId: '1234',
    title: 'I will wash your car at your doorsteps',
    priceFrom: 'starts from $135',
    date: '2026-12-25',
    category: 'Cleaning',
    subCategories: 'Home Cleaning,\nGardening, ',
    status: 'Active',
    thumbnailSrc: sellerServiceThumb,
  },
  {
    slug: 'electric-fix-2',
    bookingId: '1234',
    title: 'I will fix your electric supply issue',
    priceFrom: 'starts from $135',
    date: '2026-12-25',
    category: 'Cleaning',
    subCategories: 'Home Cleaning,\nGardening, ',
    status: 'Active',
    thumbnailSrc: sellerServiceThumb,
  },
];

function tierLabelForUserType(userType: import('@/lib/admin/mockUsersData').UserType): string {
  if (userType === 'Seller (Pro)') return 'Pro';
  if (userType === 'Seller (Team Lead)') return 'Team Lead';
  if (userType === 'Seller (Worker)') return 'Worker';
  return 'Pro';
}

export function getSellerRoleLabel(
  userType: import('@/lib/admin/mockUsersData').UserType,
): string {
  if (userType === 'Seller (Pro)') return 'Pro Seller';
  if (userType === 'Seller (Team Lead)') return 'Team Lead';
  if (userType === 'Seller (Worker)') return 'Team Worker';
  return 'Pro Seller';
}

export function getSellerUserDetail(slug: string): SellerUserDetail | null {
  const user = getUserBySlug(slug);
  if (!user || isBuyerUserType(user.userType)) return null;

  const { bookingsInProgress, upcomingBookings } = createDefaultBookings(sellerServiceThumb);

  return {
    user,
    verified: true,
    rating: 4.8,
    reviewCount: '8,89 reviews',
    tierLabel: tierLabelForUserType(user.userType),
    totalEarning: '$190',
    earningTrend: '20%',
    activeFavors: '3/7',
    totalBookings: 6,
    completedBookings: 2,
    inProgressBookings: 2,
    cancelledBookings: 2,
    bookingsInProgress,
    upcomingBookings,
    bookingProvider: {
      name: user.name,
      role: getSellerRoleLabel(user.userType),
      avatarSrc: user.avatarSrc,
      avatarBg: user.avatarBg,
      initials: user.initials,
      verified: true,
    },
    favors: defaultFavors,
    locations: defaultLocations,
    lastLogin: '2026-11-26 | 14:24:59',
    devices: defaultDevices,
  };
}
