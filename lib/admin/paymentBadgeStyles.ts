import type { AdminPaymentStatus, AdminPaymentType } from '@/lib/admin/mockPaymentsData';

export const adminPaymentStatusStyles: Record<
  AdminPaymentStatus,
  { bg: string; border: string; text: string }
> = {
  Pending: { bg: '#FFFAEB', border: '#FEDF89', text: '#B54708' },
  Failed: { bg: '#FEF3F2', border: '#FECDCA', text: '#B42318' },
  Successful: { bg: '#ECFDF3', border: '#ABEFC6', text: '#067647' },
  Refunded: { bg: '#F9FAFB', border: '#EAECF0', text: '#344054' },
};

export const adminPaymentTypeStyles: Record<
  AdminPaymentType,
  { bg: string; border: string; text: string }
> = {
  'Refund to Buyer': { bg: 'transparent', border: '#475467', text: '#344054' },
  'Pay to Seller': { bg: 'transparent', border: '#475467', text: '#344054' },
};
