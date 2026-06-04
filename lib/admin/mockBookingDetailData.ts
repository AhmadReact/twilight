import type { AdminBookingRow, PaymentStatus } from '@/lib/admin/mockBookingsData';
import { getBookingBySlug } from '@/lib/admin/mockBookingsData';
import type { BookingParticipant } from '@/lib/admin/mockTeamDetailData';

export type TimelineStepStatus = 'complete' | 'current' | 'upcoming';

export type BookingTimelineStep = {
  id: string;
  title: string;
  dateTime: string;
  status: TimelineStepStatus;
};

export type BookingPaymentInfo = {
  payerName: string;
  payerRole: string;
  walletProvider: string;
  maskedAccount: string;
  verified: boolean;
  paymentStatus: PaymentStatus;
};

export type BookingDetail = {
  slug: string;
  bookingId: string;
  title: string;
  scheduledDate: string;
  startTime: string;
  location: string;
  buyer: BookingParticipant & { verified?: boolean };
  seller: BookingParticipant & { verified?: boolean };
  price: string;
  description: string[];
  attachments: string[];
  payment: BookingPaymentInfo;
  timeline: BookingTimelineStep[];
};

const attachment1 =
  'https://www.figma.com/api/mcp/asset/f82e9dde-4758-4e93-9c74-735cd493be81';
const attachment2 =
  'https://www.figma.com/api/mcp/asset/f18b53b0-fed2-41d3-8dd9-f41adb0c383b';

const providerAvatar =
  'https://www.figma.com/api/mcp/asset/b8b5d21a-09a6-44ba-84c5-b312f234953b';

const defaultDescription = [
  'Professional deep cleaning of the selected area using standard cleaning supplies.',
  'Dusting and wiping of all accessible surfaces, furniture, and fixtures.',
  'Trash collection and proper disposal after service completion.',
];

const defaultTimeline: BookingTimelineStep[] = [
  {
    id: 'booked',
    title: 'Favor Booked',
    dateTime: 'Jan 9, 2026 - 08:00 AM',
    status: 'complete',
  },
  {
    id: 'started',
    title: 'Favor Started',
    dateTime: 'Jan 9, 2026 - 09:00 AM',
    status: 'current',
  },
  {
    id: 'completed',
    title: 'Favor Completed',
    dateTime: 'Jan 9, 2026 - 10:00 AM',
    status: 'upcoming',
  },
  {
    id: 'payment',
    title: 'Payment Completed',
    dateTime: 'Jan 9, 2026 - 10:05 AM',
    status: 'upcoming',
  },
];

const detailBySlug: Record<string, BookingDetail> = {
  'deep-clean-cancelled': {
    slug: 'deep-clean-cancelled',
    bookingId: '12345',
    title: 'I need to deep clean my home',
    scheduledDate: 'Jan 9, 2026',
    startTime: '08:00 AM',
    location: '12 Street, Apt. 4, Lower lake, Downtown, TX',
    buyer: {
      name: 'Olivia Rhye',
      role: 'Buyer',
      avatarSrc: providerAvatar,
      verified: true,
    },
    seller: {
      name: 'Olivia Rhye',
      role: 'Pro Seller',
      avatarSrc: providerAvatar,
      verified: true,
    },
    price: '$200',
    description: defaultDescription,
    attachments: [attachment1, attachment2],
    payment: {
      payerName: 'Olivia Rhye',
      payerRole: 'Buyer',
      walletProvider: 'Stripe',
      maskedAccount: '1234**********2345',
      verified: true,
      paymentStatus: 'Pending',
    },
    timeline: defaultTimeline,
  },
};

function buildDetail(row: AdminBookingRow): BookingDetail {
  return {
    slug: row.slug,
    bookingId: row.bookingId === '1234' ? '12345' : row.bookingId,
    title: row.title.replace(/^I will /i, 'I need to '),
    scheduledDate: row.scheduledDate,
    startTime: '08:00 AM',
    location: row.location === 'Downtown, TX' ? '12 Street, Apt. 4, Lower lake, Downtown, TX' : row.location,
    buyer: { ...row.bookedBy, verified: true },
    seller: { ...row.acceptedBy, verified: true },
    price: '$200',
    description: defaultDescription,
    attachments: [attachment1, attachment2],
    payment: {
      payerName: row.bookedBy.name,
      payerRole: row.bookedBy.role,
      walletProvider: 'Stripe',
      maskedAccount: '1234**********2345',
      verified: true,
      paymentStatus: row.paymentStatus,
    },
    timeline: defaultTimeline,
  };
}

export function getBookingDetail(slug: string): BookingDetail | undefined {
  if (detailBySlug[slug]) {
    return detailBySlug[slug];
  }

  const row = getBookingBySlug(slug);
  if (!row) {
    return undefined;
  }

  return buildDetail(row);
}
