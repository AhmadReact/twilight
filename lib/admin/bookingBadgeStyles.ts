import type { AdminBookingStatus, PaymentStatus } from '@/lib/admin/mockBookingsData';

export const adminBookingStatusStyles: Record<
  AdminBookingStatus,
  { bg: string; border: string; text: string }
> = {
  Upcoming: { bg: '#F9F5FF', border: '#E9D7FE', text: '#6941C6' },
  Accepted: { bg: '#F9F5FF', border: '#E9D7FE', text: '#7F56D9' },
  'In Progress': { bg: '#F9FAFB', border: '#EAECF0', text: '#344054' },
  Pending: { bg: '#FFFAEB', border: '#FEDF89', text: '#B54708' },
  Cancelled: { bg: '#FEF3F2', border: '#FECDCA', text: '#B42318' },
  Completed: { bg: '#ECFDF3', border: '#ABEFC6', text: '#067647' },
};

export const paymentStatusStyles: Record<
  PaymentStatus,
  { bg: string; border: string; text: string }
> = {
  Pending: { bg: '#F9F5FF', border: '#E9D7FE', text: '#6941C6' },
  Disputed: { bg: '#FFFAEB', border: '#FEDF89', text: '#B54708' },
  Blocked: { bg: '#FEF3F2', border: '#FECDCA', text: '#B42318' },
  Successful: { bg: '#ECFDF3', border: '#ABEFC6', text: '#067647' },
};
