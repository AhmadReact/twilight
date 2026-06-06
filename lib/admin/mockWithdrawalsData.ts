import type { AdminPaymentStatus } from '@/lib/admin/mockPaymentsData';

export type WithdrawalSellerRole = 'Pro Seller' | 'Team Lead';

export type AdminWithdrawalRow = {
  id: string;
  withdrawnAt: string;
  amountLabel: string;
  destinationProvider: string;
  destinationAccount: string;
  sellerName: string;
  sellerRole: WithdrawalSellerRole;
  status: Exclude<AdminPaymentStatus, 'Refunded'>;
};

export const adminWithdrawalRows: AdminWithdrawalRow[] = [
  {
    id: 'withdrawal-1',
    withdrawnAt: '2026-11-26 | 14:24:59',
    amountLabel: '$200',
    destinationProvider: 'Stripe',
    destinationAccount: '****-2821',
    sellerName: 'Lana Steiner',
    sellerRole: 'Pro Seller',
    status: 'Pending',
  },
  {
    id: 'withdrawal-2',
    withdrawnAt: '2026-11-26 | 14:24:59',
    amountLabel: '$200',
    destinationProvider: 'Stripe',
    destinationAccount: '****-2821',
    sellerName: 'Phoenix Baker',
    sellerRole: 'Team Lead',
    status: 'Pending',
  },
  {
    id: 'withdrawal-3',
    withdrawnAt: '2026-11-26 | 14:24:59',
    amountLabel: '$200',
    destinationProvider: 'Debit Card',
    destinationAccount: 'VISA-****-2801',
    sellerName: 'Lana Steiner',
    sellerRole: 'Pro Seller',
    status: 'Failed',
  },
  {
    id: 'withdrawal-4',
    withdrawnAt: '2026-11-26 | 14:24:59',
    amountLabel: '$200',
    destinationProvider: 'Stripe',
    destinationAccount: '****-2821',
    sellerName: 'Demi Wilkinson',
    sellerRole: 'Pro Seller',
    status: 'Successful',
  },
  {
    id: 'withdrawal-5',
    withdrawnAt: '2026-11-26 | 14:24:59',
    amountLabel: '$200',
    destinationProvider: 'Stripe',
    destinationAccount: '****-2821',
    sellerName: 'Candice Wu',
    sellerRole: 'Team Lead',
    status: 'Successful',
  },
  {
    id: 'withdrawal-6',
    withdrawnAt: '2026-11-26 | 14:24:59',
    amountLabel: '$200',
    destinationProvider: 'Stripe',
    destinationAccount: '****-2821',
    sellerName: 'Natali Craig',
    sellerRole: 'Team Lead',
    status: 'Successful',
  },
  {
    id: 'withdrawal-7',
    withdrawnAt: '2026-11-26 | 14:24:59',
    amountLabel: '$200',
    destinationProvider: 'Debit Card',
    destinationAccount: 'VISA-****-2801',
    sellerName: 'Drew Cano',
    sellerRole: 'Pro Seller',
    status: 'Successful',
  },
];

function normalizeQuery(value: string) {
  return value.trim().toLowerCase();
}

export function filterWithdrawalRows(
  rows: AdminWithdrawalRow[],
  searchQuery: string,
  statusFilter: string,
) {
  const query = normalizeQuery(searchQuery);

  return rows.filter((row) => {
    if (statusFilter !== 'all' && row.status.toLowerCase() !== statusFilter) {
      return false;
    }

    if (!query) {
      return true;
    }

    const haystack = [
      row.sellerName,
      row.sellerRole,
      row.destinationProvider,
      row.destinationAccount,
      row.amountLabel,
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(query);
  });
}
