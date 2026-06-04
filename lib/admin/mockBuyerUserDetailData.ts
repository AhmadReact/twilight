import { getUserBySlug, type UserRow } from '@/lib/admin/mockUsersData';
import type { UserDetailBase } from '@/lib/admin/userDetailTypes';
import {
  buyerServiceThumb,
  createDefaultBookings,
  defaultBookingProvider,
  defaultDevices,
  defaultLocations,
} from '@/lib/admin/mockUserDetailShared';

export type BuyerUserDetail = UserDetailBase;

export function isBuyerUser(user: UserRow): boolean {
  return user.userType === 'Buyer';
}

export function getBuyerUserDetail(slug: string): BuyerUserDetail | null {
  const user = getUserBySlug(slug);
  if (!user || !isBuyerUser(user)) return null;

  const { bookingsInProgress, upcomingBookings } = createDefaultBookings(buyerServiceThumb);

  return {
    user,
    verified: true,
    totalBookings: 6,
    completedBookings: 2,
    inProgressBookings: 2,
    cancelledBookings: 2,
    bookingsInProgress,
    upcomingBookings,
    bookingProvider: defaultBookingProvider,
    locations: defaultLocations,
    lastLogin: '2026-11-26 | 14:24:59',
    devices: defaultDevices,
  };
}
