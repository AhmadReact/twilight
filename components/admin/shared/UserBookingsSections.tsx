import ServiceBookingCard from '@/components/admin/shared/ServiceBookingCard';
import type {
  BookingServiceProvider,
  UserBookingCard,
} from '@/lib/admin/userDetailTypes';

type UserBookingsSectionsProps = {
  bookingsInProgress: UserBookingCard[];
  upcomingBookings: UserBookingCard[];
  provider: BookingServiceProvider;
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
          {bookingsInProgress.map((booking, index) => (
            <ServiceBookingCard
              key={`in-progress-${index}`}
              booking={booking}
              provider={provider}
            />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold leading-7 text-[#101828]">Upcoming Bookings</h2>
        <div className="flex flex-col gap-3">
          {upcomingBookings.map((booking, index) => (
            <ServiceBookingCard
              key={`upcoming-${index}`}
              booking={booking}
              provider={provider}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
