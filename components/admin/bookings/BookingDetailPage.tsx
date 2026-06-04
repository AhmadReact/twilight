'use client';

import AdminBreadcrumbs from '@/components/admin/shared/AdminBreadcrumbs';
import BookingDetailsPanel from '@/components/admin/shared/BookingDetailsPanel';
import BookingTimeline from '@/components/admin/shared/BookingTimeline';
import FavorPartyCard from '@/components/admin/shared/FavorPartyCard';
import SchedulePillsRow from '@/components/admin/shared/SchedulePillsRow';
import type { BookingDetail } from '@/lib/admin/mockBookingDetailData';

const createdStatusStyle = { bg: '#F9F5FF', border: '#E9D7FE', text: '#6941C6' };
const acceptedStatusStyle = { bg: '#ECFDF3', border: '#ABEFC6', text: '#067647' };

type BookingDetailPageProps = {
  detail: BookingDetail;
  bookingsHref?: string;
};

export default function BookingDetailPage({
  detail,
  bookingsHref = '/admin/bookings',
}: BookingDetailPageProps) {
  return (
    <div className="flex flex-col gap-8 px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <AdminBreadcrumbs
            items={[
              { label: 'Bookings', href: bookingsHref },
              { label: detail.title },
            ]}
          />

          <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:items-start lg:justify-between">
            <h1 className="min-w-0 flex-1 text-2xl font-semibold leading-[38px] text-[#101828] sm:text-[30px]">
              {detail.title}
            </h1>
            <p className="shrink-0 text-sm font-normal leading-5 text-[#475467] lg:self-center">
              Booking ID: {detail.bookingId}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <FavorPartyCard
            name={detail.buyer.name}
            subtitle={detail.buyer.role}
            avatarSrc={detail.buyer.avatarSrc}
            avatarBg={detail.buyer.avatarBg}
            verified={detail.buyer.verified}
            statusLabel="Created"
            statusStyle={createdStatusStyle}
          />
          <FavorPartyCard
            name={detail.seller.name}
            subtitle={detail.seller.role}
            avatarSrc={detail.seller.avatarSrc}
            avatarBg={detail.seller.avatarBg}
            verified={detail.seller.verified}
            statusLabel="Accepted"
            statusStyle={acceptedStatusStyle}
          />
        </div>

        <SchedulePillsRow
          date={detail.scheduledDate}
          time={detail.startTime}
          location={detail.location}
        />

        <div className="h-px w-full bg-[#EAECF0]" />
      </header>

      <BookingDetailsPanel detail={detail} />

      <BookingTimeline steps={detail.timeline} />
    </div>
  );
}
