import type { BookingParticipant } from '@/lib/admin/mockTeamDetailData';

export type AdminBookingStatus =
  | 'Upcoming'
  | 'Accepted'
  | 'In Progress'
  | 'Pending'
  | 'Cancelled'
  | 'Completed';

export type PaymentStatus = 'Pending' | 'Disputed' | 'Blocked' | 'Successful';

export type AdminBookingRow = {
  slug: string;
  bookingId: string;
  title: string;
  priceFrom: string;
  location: string;
  scheduledDate: string;
  thumbnailSrc: string;
  bookedBy: BookingParticipant;
  acceptedBy: BookingParticipant;
  bookingStatus: AdminBookingStatus;
  paymentStatus: PaymentStatus;
};

const bookingThumbnail =
  'https://www.figma.com/api/mcp/asset/d338df22-14f5-43b8-b50d-8969054bffeb';

export const bookingRows: AdminBookingRow[] = [
  {
    slug: 'electric-upcoming',
    bookingId: '1234',
    title: 'I will fix your electric supply issue',
    priceFrom: 'starts from $135',
    location: 'Downtown, TX',
    scheduledDate: 'Jan 9, 2026',
    thumbnailSrc: bookingThumbnail,
    bookedBy: {
      name: 'Lana Steiner',
      role: 'Buyer',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/2b4ff3f0-19e5-4d32-947a-4d8ad845993e',
      avatarBg: '#D7E3E8',
    },
    acceptedBy: {
      name: 'Lana Steiner',
      role: 'Pro Seller',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/cc5ce9af-913d-4952-99b8-c05ed1ef9055',
      avatarBg: '#CFCBDC',
    },
    bookingStatus: 'Upcoming',
    paymentStatus: 'Pending',
  },
  {
    slug: 'car-wash-progress',
    bookingId: '1234',
    title: 'I will wash your car at your doorsteps',
    priceFrom: 'starts from $135',
    location: 'Downtown, TX',
    scheduledDate: 'Jan 9, 2026',
    thumbnailSrc:
      'https://www.figma.com/api/mcp/asset/e698de0f-6a7d-465c-a138-c5583f8a2372',
    bookedBy: {
      name: 'Phoenix Baker',
      role: 'Buyer',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/0a4867e5-d603-4dbd-9ca4-7ef7cbff341d',
      avatarBg: '#D6CFB7',
    },
    acceptedBy: {
      name: 'Lana Steiner',
      role: 'Pro Seller',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/cc5ce9af-913d-4952-99b8-c05ed1ef9055',
      avatarBg: '#CFCBDC',
    },
    bookingStatus: 'In Progress',
    paymentStatus: 'Disputed',
  },
  {
    slug: 'deep-clean-cancelled',
    bookingId: '1234',
    title: 'I will deep clean your home',
    priceFrom: 'starts from $135',
    location: 'Downtown, TX',
    scheduledDate: 'Jan 9, 2026',
    thumbnailSrc:
      'https://www.figma.com/api/mcp/asset/38e4e113-a044-45c3-9555-cfe306f35ab2',
    bookedBy: {
      name: 'Lana Steiner',
      role: 'Buyer',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/2b4ff3f0-19e5-4d32-947a-4d8ad845993e',
      avatarBg: '#D7E3E8',
    },
    acceptedBy: {
      name: 'Lana Steiner',
      role: 'Team Lead',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/cc5ce9af-913d-4952-99b8-c05ed1ef9055',
      avatarBg: '#CFCBDC',
    },
    bookingStatus: 'Cancelled',
    paymentStatus: 'Blocked',
  },
  {
    slug: 'electric-completed-1',
    bookingId: '1234',
    title: 'I will fix your electric supply issue',
    priceFrom: 'starts from $135',
    location: 'Downtown, TX',
    scheduledDate: 'Jan 9, 2026',
    thumbnailSrc: bookingThumbnail,
    bookedBy: {
      name: 'Demi Wilkinson',
      role: 'Buyer',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/cc5ce9af-913d-4952-99b8-c05ed1ef9055',
      avatarBg: '#DADCD6',
    },
    acceptedBy: {
      name: 'Demi Wilkinson',
      role: 'Pro Seller',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/cc5ce9af-913d-4952-99b8-c05ed1ef9055',
      avatarBg: '#DADCD6',
    },
    bookingStatus: 'Completed',
    paymentStatus: 'Successful',
  },
  {
    slug: 'electric-accepted',
    bookingId: '1234',
    title: 'I will fix your electric supply issue',
    priceFrom: 'starts from $135',
    location: 'Downtown, TX',
    scheduledDate: 'Jan 9, 2026',
    thumbnailSrc: bookingThumbnail,
    bookedBy: {
      name: 'Candice Wu',
      role: 'Buyer',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/e88e4f88-1e07-4dfc-82a2-33ec2c429664',
      avatarBg: '#CFCBDC',
    },
    acceptedBy: {
      name: 'Candice Wu',
      role: 'Pro Seller',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/e88e4f88-1e07-4dfc-82a2-33ec2c429664',
      avatarBg: '#CFCBDC',
    },
    bookingStatus: 'Accepted',
    paymentStatus: 'Pending',
  },
  {
    slug: 'electric-pending',
    bookingId: '1234',
    title: 'I will fix your electric supply issue',
    priceFrom: 'starts from $135',
    location: 'Downtown, TX',
    scheduledDate: 'Jan 9, 2026',
    thumbnailSrc: bookingThumbnail,
    bookedBy: {
      name: 'Natali Craig',
      role: 'Buyer',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/26ccb713-1c27-47ae-a3da-4540850592cc',
      avatarBg: '#E9DCBB',
    },
    acceptedBy: {
      name: 'Natali Craig',
      role: 'Team Lead',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/26ccb713-1c27-47ae-a3da-4540850592cc',
      avatarBg: '#E9DCBB',
    },
    bookingStatus: 'Pending',
    paymentStatus: 'Successful',
  },
  {
    slug: 'electric-completed-2',
    bookingId: '1234',
    title: 'I will fix your electric supply issue',
    priceFrom: 'starts from $135',
    location: 'Downtown, TX',
    scheduledDate: 'Jan 9, 2026',
    thumbnailSrc: bookingThumbnail,
    bookedBy: {
      name: 'Drew Cano',
      role: 'Buyer',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/774e3831-24f1-400e-930f-42276276a4fc',
      avatarBg: '#D9E5CC',
    },
    acceptedBy: {
      name: 'Drew Cano',
      role: 'Pro Seller',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/774e3831-24f1-400e-930f-42276276a4fc',
      avatarBg: '#D9E5CC',
    },
    bookingStatus: 'Completed',
    paymentStatus: 'Successful',
  },
];

export function getBookingBySlug(slug: string): AdminBookingRow | undefined {
  return bookingRows.find((row) => row.slug === slug);
}
