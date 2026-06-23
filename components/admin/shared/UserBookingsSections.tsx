import ServiceBookingCard from '@/components/admin/shared/ServiceBookingCard';
import type {
  BookingServiceProvider,
  UserBookingCard,
} from '@/lib/admin/userDetailTypes';

type UserBookingsSectionsProps = {
  bookingsInProgress: UserBookingCard[];
  upcomingBookings: UserBookingCard[];
  provider?: BookingServiceProvider;
};

export default function UserBookingsSections({
  bookingsInProgress,
  upcomingBookings,
  provider,
}: UserBookingsSectionsProps) {
  return (
    <div className="min-w-0 flex-1 space-y-6">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold leading-7 text-[#101828]">Bookings In Progress</h2>
        <div className="flex flex-col gap-3">
          {bookingsInProgress.length === 0 ? (
            <p className="text-sm text-[#475467]">No bookings in progress.</p>
          ) : (
            bookingsInProgress.map((booking) => (
              <ServiceBookingCard
                key={`in-progress-${booking.title}-${booking.date}-${booking.time}`}
                booking={booking}
                provider={booking.provider ?? provider}
              />
            ))
          )}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold leading-7 text-[#101828]">Upcoming Bookings</h2>
        <div className="flex flex-col gap-3">
          {upcomingBookings.length === 0 ? (
            <p className="text-sm text-[#475467]">No upcoming bookings.</p>
          ) : (
            upcomingBookings.map((booking) => (
              <ServiceBookingCard
                key={`upcoming-${booking.title}-${booking.date}-${booking.time}`}
                booking={booking}
                provider={booking.provider ?? provider}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
}
