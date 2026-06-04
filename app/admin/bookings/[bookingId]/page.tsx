import { notFound } from 'next/navigation';
import BookingDetailPage from '@/components/admin/bookings/BookingDetailPage';
import { getBookingDetail } from '@/lib/admin/mockBookingDetailData';

type PageProps = {
  params: Promise<{ bookingId: string }>;
};

export default async function Page({ params }: PageProps) {
  const { bookingId } = await params;
  const detail = getBookingDetail(bookingId);

  if (!detail) {
    notFound();
  }

  return <BookingDetailPage detail={detail} />;
}
