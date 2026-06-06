import type { DisputeParty } from '@/lib/admin/mockDisputesData';

export type AdminPaymentStatus = 'Pending' | 'Failed' | 'Successful' | 'Refunded';
export type AdminPaymentType = 'Refund to Buyer' | 'Pay to Seller';
export type AdminBookingFilterStatus = 'all' | 'completed' | 'cancelled' | 'in-progress';

export type AdminPaymentRow = {
  id: string;
  paymentId: string;
  transactionAt: string;
  amount: number;
  amountLabel: string;
  paymentMethod: string;
  favorTitle: string;
  bookingId: string;
  sellerAmount: number;
  platformAmount: number;
  seller: DisputeParty;
  buyer: DisputeParty;
  status: AdminPaymentStatus;
  paymentType: AdminPaymentType;
  bookingStatus: Exclude<AdminBookingFilterStatus, 'all'>;
};

export type PaymentMetric = {
  title: string;
  value: string;
  trendDirection: 'up' | 'down';
  trendValue: string;
};

export const paymentMetrics: PaymentMetric[] = [
  {
    title: 'Total Platform Revenue',
    value: '$319',
    trendDirection: 'up',
    trendValue: '50%',
  },
  {
    title: 'Total Seller Earnings',
    value: '$214',
    trendDirection: 'down',
    trendValue: '30%',
  },
  {
    title: 'Total Refund Amount',
    value: '$110',
    trendDirection: 'up',
    trendValue: '100%',
  },
  {
    title: 'Total Payments Completed',
    value: '10',
    trendDirection: 'up',
    trendValue: '100%',
  },
];

export const adminPaymentRows: AdminPaymentRow[] = [
  {
    id: 'payment-1',
    paymentId: '1234',
    transactionAt: '2026-11-26 | 14:24:59',
    amount: 200,
    amountLabel: '$200',
    paymentMethod: 'Paid through Stripe - ****-2821',
    favorTitle: 'I will fix your electric supply issue',
    bookingId: '1234',
    sellerAmount: 190,
    platformAmount: 10,
    seller: { name: 'Olivia Rhye', role: 'Seller' },
    buyer: { name: 'Phoenix Baker', role: 'Buyer' },
    status: 'Pending',
    paymentType: 'Refund to Buyer',
    bookingStatus: 'completed',
  },
  {
    id: 'payment-2',
    paymentId: '1234',
    transactionAt: '2026-11-26 | 14:24:59',
    amount: 200,
    amountLabel: '$200',
    paymentMethod: 'Paid through Stripe - ****-2821',
    favorTitle: 'I will fix your electric supply issue',
    bookingId: '1234',
    sellerAmount: 190,
    platformAmount: 10,
    seller: { name: 'Olivia Rhye', role: 'Seller' },
    buyer: { name: 'Phoenix Baker', role: 'Buyer' },
    status: 'Pending',
    paymentType: 'Refund to Buyer',
    bookingStatus: 'in-progress',
  },
  {
    id: 'payment-3',
    paymentId: '1234',
    transactionAt: '2026-11-26 | 14:24:59',
    amount: 200,
    amountLabel: '$200',
    paymentMethod: 'Paid through Stripe - ****-2821',
    favorTitle: 'I will fix your electric supply issue',
    bookingId: '1234',
    sellerAmount: 190,
    platformAmount: 10,
    seller: { name: 'Olivia Rhye', role: 'Seller' },
    buyer: { name: 'Phoenix Baker', role: 'Buyer' },
    status: 'Failed',
    paymentType: 'Pay to Seller',
    bookingStatus: 'cancelled',
  },
  {
    id: 'payment-4',
    paymentId: '1234',
    transactionAt: '2026-11-26 | 14:24:59',
    amount: 200,
    amountLabel: '$200',
    paymentMethod: 'Paid through Stripe - ****-2821',
    favorTitle: 'I will fix your electric supply issue',
    bookingId: '1234',
    sellerAmount: 190,
    platformAmount: 10,
    seller: { name: 'Olivia Rhye', role: 'Seller' },
    buyer: { name: 'Phoenix Baker', role: 'Buyer' },
    status: 'Successful',
    paymentType: 'Refund to Buyer',
    bookingStatus: 'completed',
  },
  {
    id: 'payment-5',
    paymentId: '1234',
    transactionAt: '2026-11-26 | 14:24:59',
    amount: 200,
    amountLabel: '$200',
    paymentMethod: 'Paid through Stripe - ****-2821',
    favorTitle: 'I will fix your electric supply issue',
    bookingId: '1234',
    sellerAmount: 190,
    platformAmount: 10,
    seller: { name: 'Olivia Rhye', role: 'Seller' },
    buyer: { name: 'Phoenix Baker', role: 'Buyer' },
    status: 'Successful',
    paymentType: 'Pay to Seller',
    bookingStatus: 'completed',
  },
  {
    id: 'payment-6',
    paymentId: '1234',
    transactionAt: '2026-11-26 | 14:24:59',
    amount: 200,
    amountLabel: '$200',
    paymentMethod: 'Paid through Stripe - ****-2821',
    favorTitle: 'I will fix your electric supply issue',
    bookingId: '1234',
    sellerAmount: 190,
    platformAmount: 10,
    seller: { name: 'Olivia Rhye', role: 'Seller' },
    buyer: { name: 'Phoenix Baker', role: 'Buyer' },
    status: 'Successful',
    paymentType: 'Refund to Buyer',
    bookingStatus: 'in-progress',
  },
  {
    id: 'payment-7',
    paymentId: '1234',
    transactionAt: '2026-11-26 | 14:24:59',
    amount: 200,
    amountLabel: '$200',
    paymentMethod: 'Paid through Stripe - ****-2821',
    favorTitle: 'I will fix your electric supply issue',
    bookingId: '1234',
    sellerAmount: 190,
    platformAmount: 10,
    seller: { name: 'Olivia Rhye', role: 'Seller' },
    buyer: { name: 'Phoenix Baker', role: 'Buyer' },
    status: 'Successful',
    paymentType: 'Pay to Seller',
    bookingStatus: 'completed',
  },
];

function normalizeQuery(value: string) {
  return value.trim().toLowerCase();
}

export function filterPaymentRows(
  rows: AdminPaymentRow[],
  searchQuery: string,
  bookingFilter: string,
  paymentFilter: string,
) {
  const query = normalizeQuery(searchQuery);

  return rows.filter((row) => {
    if (bookingFilter !== 'all' && row.bookingStatus !== bookingFilter) {
      return false;
    }

    if (paymentFilter !== 'all') {
      const statusKey = paymentFilter as AdminPaymentStatus;
      if (row.status.toLowerCase() !== statusKey.toLowerCase()) {
        return false;
      }
    }

    if (!query) {
      return true;
    }

    const haystack = [
      row.paymentId,
      row.bookingId,
      row.favorTitle,
      row.seller.name,
      row.buyer.name,
      row.paymentMethod,
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(query);
  });
}
