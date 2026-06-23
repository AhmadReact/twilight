'use client';

import AdminBreadcrumbs from '@/components/admin/shared/AdminBreadcrumbs';
import BookingsMetricCard from '@/components/admin/shared/BookingsMetricCard';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import UserBookingsSections from '@/components/admin/shared/UserBookingsSections';
import UserDetailActionsBar from '@/components/admin/shared/UserDetailActionsBar';
import UserDetailSidebar from '@/components/admin/shared/UserDetailSidebar';
import UserProfileHeader from '@/components/admin/shared/UserProfileHeader';
import type { BuyerUserDetail } from '@/lib/admin/mockBuyerUserDetailData';
import { userStatusStyles } from '@/lib/admin/userBadgeStyles';

type BuyerUserDetailPageProps = {
  detail: BuyerUserDetail;
};

export default function BuyerUserDetailPage({ detail }: BuyerUserDetailPageProps) {
  const { user } = detail;
  const statusStyle = userStatusStyles[user.status];

  return (
    <div className="flex flex-col gap-8 px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <AdminBreadcrumbs
            items={[
              { label: 'Users', href: '/admin/users' },
              { label: 'Buyer' },
              { label: user.name },
            ]}
          />

          <UserProfileHeader
            name={user.name}
            email={user.email}
            phone={user.phone}
            avatarSrc={user.avatarSrc}
            avatarBg={user.avatarBg}
            initials={user.initials}
            verified={detail.verified}
            trailing={
              <StatusBadge
                label={user.status}
                bg={statusStyle.bg}
                border={statusStyle.border}
                text={statusStyle.text}
              />
            }
          />
        </div>

        <UserDetailActionsBar
          userId={user.userId}
          userName={user.name}
          memberSince={user.memberSince}
          isBlocked={user.status === 'Blocked'}
        />

        <BookingsMetricCard
          total={detail.totalBookings}
          items={[
            {
              count: detail.completedBookings,
              label: 'Completed',
              color: 'text-[#17B26A]',
            },
            {
              count: detail.inProgressBookings,
              label: 'In-Progress',
              color: 'text-[#A54AFF]',
            },
            {
              count: detail.cancelledBookings,
              label: 'Cancelled',
              color: 'text-[#F04438]',
            },
          ]}
        />
      </header>

      <div className="flex flex-col gap-6 xl:flex-row xl:items-start">
        <UserBookingsSections
          bookingsInProgress={detail.bookingsInProgress}
          upcomingBookings={detail.upcomingBookings}
          provider={detail.bookingProvider}
        />
        <UserDetailSidebar
          locations={detail.locations}
          lastLogin={detail.lastLogin}
          devices={detail.devices}
        />
      </div>
    </div>
  );
}
