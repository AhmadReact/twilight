'use client';

import AdminBreadcrumbs from '@/components/admin/shared/AdminBreadcrumbs';
import BookingsMetricCard from '@/components/admin/shared/BookingsMetricCard';
import RatingSummary from '@/components/admin/shared/RatingSummary';
import StatMetricCard from '@/components/admin/shared/StatMetricCard';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import UserBookingsSections from '@/components/admin/shared/UserBookingsSections';
import UserDetailActionsBar from '@/components/admin/shared/UserDetailActionsBar';
import UserDetailSidebar from '@/components/admin/shared/UserDetailSidebar';
import UserProfileHeader from '@/components/admin/shared/UserProfileHeader';
import SellerUserFavorsTable from '@/components/admin/users/SellerUserFavorsTable';
import type { SellerUserDetail } from '@/lib/admin/mockSellerUserDetailData';
import { userStatusStyles } from '@/lib/admin/userBadgeStyles';

type SellerUserDetailPageProps = {
  detail: SellerUserDetail;
};

export default function SellerUserDetailPage({ detail }: SellerUserDetailPageProps) {
  const { user } = detail;
  const statusStyle = userStatusStyles[user.status];

  return (
    <div className="flex flex-col gap-8 px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <AdminBreadcrumbs
            items={[
              { label: 'Users', href: '/admin/users' },
              { label: 'Sellers' },
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
              <>
                {detail.rating != null ? (
                  <RatingSummary rating={detail.rating} reviewCount={detail.reviewCount} />
                ) : null}
                <StatusBadge
                  label={user.status}
                  bg={statusStyle.bg}
                  border={statusStyle.border}
                  text={statusStyle.text}
                />
                <StatusBadge
                  label={detail.tierLabel}
                  bg="#F9F5FF"
                  border="#E9D7FE"
                  text="#6941C6"
                />
              </>
            }
          />
        </div>

        <UserDetailActionsBar
          userId={user.userId}
          userName={user.name}
          memberSince={user.memberSince}
          isBlocked={user.status === 'Blocked'}
        />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <StatMetricCard
            label="Total Earning"
            value={detail.totalEarning}
            trend={
              detail.earningTrend ? { value: detail.earningTrend, direction: 'down' } : undefined
            }
          />
          <StatMetricCard label="Active Favors" value={detail.activeFavors} />
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
        </div>
      </header>

      <div className="flex flex-col gap-6 xl:flex-row xl:items-start">
        <div className="min-w-0 flex-1 space-y-6">
          <UserBookingsSections
            bookingsInProgress={detail.bookingsInProgress}
            upcomingBookings={detail.upcomingBookings}
            provider={detail.bookingProvider}
          />
          <SellerUserFavorsTable favors={detail.favors} />
        </div>
        <UserDetailSidebar
          locations={detail.locations}
          lastLogin={detail.lastLogin}
          devices={detail.devices}
        />
      </div>
    </div>
  );
}
