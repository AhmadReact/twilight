'use client';

import { useMemo } from 'react';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AdminDataTable, { type AdminTableColumn } from '@/components/admin/shared/AdminDataTable';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import WithdrawalAmountCell from '@/components/admin/shared/WithdrawalAmountCell';
import WithdrawalDestinationCell from '@/components/admin/shared/WithdrawalDestinationCell';
import WithdrawalSellerCell from '@/components/admin/shared/WithdrawalSellerCell';
import WithholdActionButton from '@/components/admin/shared/WithholdActionButton';
import { adminPaymentStatusStyles } from '@/lib/admin/paymentBadgeStyles';
import { adminWithdrawalRows, filterWithdrawalRows } from '@/lib/admin/mockWithdrawalsData';
import type { AdminWithdrawalRow } from '@/lib/admin/mockWithdrawalsData';
import { grayColors } from '@/lib/theme';

type WithdrawalsTableProps = {
  searchQuery: string;
  statusFilter: string;
};

export default function WithdrawalsTable({ searchQuery, statusFilter }: WithdrawalsTableProps) {
  const filteredRows = useMemo(
    () => filterWithdrawalRows(adminWithdrawalRows, searchQuery, statusFilter),
    [searchQuery, statusFilter],
  );

  const columns = useMemo<AdminTableColumn<AdminWithdrawalRow>[]>(
    () => [
      {
        id: 'withdrawals',
        header: (
          <span className="inline-flex items-center gap-1">
            Withdrawals
            <KeyboardArrowDownOutlinedIcon sx={{ fontSize: 14, color: grayColors[500] }} />
          </span>
        ),
        render: (row) => (
          <WithdrawalAmountCell withdrawnAt={row.withdrawnAt} amountLabel={row.amountLabel} />
        ),
      },
      {
        id: 'withdrawnTo',
        header: 'Withdrawn to',
        render: (row) => (
          <WithdrawalDestinationCell
            provider={row.destinationProvider}
            account={row.destinationAccount}
          />
        ),
      },
      {
        id: 'seller',
        header: 'Seller',
        render: (row) => (
          <WithdrawalSellerCell name={row.sellerName} role={row.sellerRole} />
        ),
      },
      {
        id: 'status',
        header: 'Status',
        align: 'center',
        render: (row) => {
          const statusStyle = adminPaymentStatusStyles[row.status];
          return (
            <StatusBadge
              label={row.status}
              bg={statusStyle.bg}
              border={statusStyle.border}
              text={statusStyle.text}
            />
          );
        },
      },
      {
        id: 'actions',
        header: 'Actions',
        align: 'center',
        stopRowClick: true,
        render: (row) => <WithholdActionButton disabled={row.status !== 'Pending'} />,
      },
    ],
    [],
  );

  return (
    <AdminDataTable
      title="All Withdrawals"
      description="These withdrawals are processed in the last 3 months."
      columns={columns}
      rows={filteredRows}
      getRowKey={(row) => row.id}
      striped="purple"
      minWidth={900}
      enableClientPagination
    />
  );
}
