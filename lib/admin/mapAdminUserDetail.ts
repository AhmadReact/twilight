import type { UserDetailBooking, UserDetailData } from '@/app/admin/users/store/userAPI';
import type { BuyerUserDetail } from '@/lib/admin/mockBuyerUserDetailData';
import type { SellerFavorRow, SellerUserDetail } from '@/lib/admin/mockSellerUserDetailData';
import { getSellerRoleLabel } from '@/lib/admin/mockSellerUserDetailData';
import { buyerServiceThumb, sellerServiceThumb } from '@/lib/admin/mockUserDetailShared';
import type { UserStatus, UserType } from '@/lib/admin/mockUsersData';
import type {
  BookingServiceProvider,
  SavedDevice,
  UserBookingCard,
  UserLocation,
} from '@/lib/admin/userDetailTypes';

const userTypeMap: Record<string, UserType> = {
  buyer: 'Buyer',
  pro_seller: 'Seller (Pro)',
  team_lead: 'Seller (Team Lead)',
  team_worker: 'Seller (Worker)',
};

const statusMap: Record<string, UserStatus> = {
  active: 'Active',
  blocked: 'Blocked',
  inactive: 'Inactive',
};

const favorStatusMap: Record<string, SellerFavorRow['status']> = {
  active: 'Active',
  blocked: 'Blocked',
};

function getUserInitials(name: string | undefined | null): string {
  if (!name) return '';
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

function mapUserType(profile: UserDetailData['profile']): UserType {
  return userTypeMap[profile.user_type_key] ?? (profile.user_type as UserType) ?? 'Buyer';
}

function mapStatus(profile: UserDetailData['profile']): UserStatus {
  return statusMap[profile.status_key] ?? (profile.status as UserStatus) ?? 'Active';
}

function tierLabelForUserType(userType: UserType): string {
  if (userType === 'Seller (Pro)') return 'Pro';
  if (userType === 'Seller (Team Lead)') return 'Team Lead';
  if (userType === 'Seller (Worker)') return 'Worker';
  return 'Pro';
}

function formatCurrency(amount: number): string {
  return `$${amount.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
}

function formatReviewCount(count: number): string {
  return `${count.toLocaleString('en-US')} reviews`;
}

function capitalizeCategory(category: string): string {
  if (!category) return '';
  return category.charAt(0).toUpperCase() + category.slice(1);
}

function mapBookingProvider(booking: UserDetailBooking): BookingServiceProvider {
  return {
    name: booking.provider_name,
    role: booking.provider_type,
    verified: booking.is_pro === true,
    initials: getUserInitials(booking.provider_name),
  };
}

function mapBookingCard(
  booking: UserDetailBooking,
  layout: UserBookingCard['layout'] = 'side'
): UserBookingCard {
  return {
    title: booking.title,
    price: booking.price,
    date: booking.date,
    time: booking.time,
    location: booking.location_address,
    thumbnailSrc: booking.image_url ?? undefined,
    layout,
    provider: mapBookingProvider(booking),
  };
}

function mapLocations(locations: UserDetailData['locations']): UserLocation[] {
  return locations.map((location) => ({
    label: location.label,
    address: location.address,
    showIcon: location.is_selected,
  }));
}

function mapDevices(devices: UserDetailData['saved_devices']): SavedDevice[] {
  return devices.map((device) => ({
    deviceId: device.device_id,
    created: device.created_at,
    deviceType: device.device_type,
    fcmToken: device.fcm_token,
  }));
}

function getLastLogin(devices: UserDetailData['saved_devices']): string {
  return devices[0]?.last_login ?? '—';
}

function mapFavors(favors: UserDetailData['favors'], thumbnailSrc: string): SellerFavorRow[] {
  return favors.map((favor) => ({
    slug: String(favor.id),
    bookingId: String(favor.id),
    title: favor.booking_details.title,
    priceFrom: favor.booking_details.price,
    date: favor.booking_details.date,
    category: capitalizeCategory(favor.category),
    subCategories: favor.sub_categories.join(',\n'),
    status:
      favorStatusMap[favor.status_key] ?? (favor.status as SellerFavorRow['status']) ?? 'Active',
    thumbnailSrc,
  }));
}

function mapBaseDetail(data: UserDetailData) {
  const { profile, bookings_summary } = data;
  const userType = mapUserType(profile);
  const isBuyer = profile.user_type_key === 'buyer';
  const fallbackThumb = isBuyer ? buyerServiceThumb : sellerServiceThumb;
  const fullName = profile.full_name ?? 'Unknown User';

  return {
    user: {
      slug: String(profile.user_id),
      userId: String(profile.user_id),
      name: fullName,
      email: profile.email ?? '',
      phone: profile.phone_number ?? '',
      avatarSrc: profile.profile_image ?? undefined,
      initials: getUserInitials(fullName),
      userType,
      totalBookings: bookings_summary.total,
      completedBookings: bookings_summary.completed,
      cancelledBookings: bookings_summary.cancelled,
      memberSince: profile.member_since ?? '—',
      status: mapStatus(profile),
    },
    verified: profile.is_pro,
    totalBookings: bookings_summary.total,
    completedBookings: bookings_summary.completed,
    inProgressBookings: bookings_summary.in_progress,
    cancelledBookings: bookings_summary.cancelled,
    bookingsInProgress: data.bookings_in_progress.map((booking) => mapBookingCard(booking, 'side')),
    upcomingBookings: data.upcoming_bookings.map((booking, index) =>
      mapBookingCard(booking, index % 2 === 1 ? 'stacked' : 'side')
    ),
    bookingProvider: {
      name: fullName,
      role: isBuyer ? 'Buyer' : getSellerRoleLabel(userType),
      avatarSrc: profile.profile_image ?? undefined,
      initials: getUserInitials(fullName),
      verified: profile.is_pro,
    },
    locations: mapLocations(data.locations),
    lastLogin: getLastLogin(data.saved_devices),
    devices: mapDevices(data.saved_devices),
    fallbackThumb,
  };
}

export function mapUserDetailToBuyerDetail(data: UserDetailData): BuyerUserDetail {
  return mapBaseDetail(data);
}

export function mapUserDetailToSellerDetail(data: UserDetailData): SellerUserDetail {
  const { profile, active_favors, total_earnings, favors } = data;
  const base = mapBaseDetail(data);
  const { fallbackThumb, ...detail } = base;

  return {
    ...detail,
    rating: profile.rating,
    reviewCount: formatReviewCount(profile.review_count),
    tierLabel: tierLabelForUserType(detail.user.userType),
    totalEarning: formatCurrency(total_earnings),
    earningTrend: '',
    activeFavors: `${active_favors.current}/${active_favors.total}`,
    favors: mapFavors(favors, fallbackThumb),
  };
}

// Keep legacy exports for any existing imports.
export const mapAdminUserToBuyerDetail = mapUserDetailToBuyerDetail;
export const mapAdminUserToSellerDetail = mapUserDetailToSellerDetail;
