'use client';

import { useMemo } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AdminDataTable, { type AdminTableColumn } from '@/components/admin/shared/AdminDataTable';
import DisputePartyCell from '@/components/admin/shared/DisputePartyCell';
import PaymentDivisionCell from '@/components/admin/shared/PaymentDivisionCell';
import PaymentFavorCell from '@/components/admin/shared/PaymentFavorCell';
import PaymentTransactionCell from '@/components/admin/shared/PaymentTransactionCell';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import {
  adminPaymentStatusStyles,
  adminPaymentTypeStyles,
} from '@/lib/admin/paymentBadgeStyles';
import { adminPaymentRows, filterPaymentRows } from '@/lib/admin/mockPaymentsData';
import type { AdminPaymentRow } from '@/lib/admin/mockPaymentsData';
import { grayColors } from '@/lib/theme';

type PaymentsTableProps = {
  searchQuery: string;
  bookingFilter: string;
  paymentFilter: string;
};

export default function PaymentsTable({
  searchQuery,
  bookingFilter,
  paymentFilter,
}: PaymentsTableProps) {
  const filteredRows = useMemo(
    () => filterPaymentRows(adminPaymentRows, searchQuery, bookingFilter, paymentFilter),
    [searchQuery, bookingFilter, paymentFilter],
  );

  const columns = useMemo<AdminTableColumn<AdminPaymentRow>[]>(
    () => [
      {
        id: 'paymentId',
        header: 'Payment ID',
        render: (row) => (
          <span className="text-sm font-medium leading-[18px] text-[#101828]">{row.paymentId}</span>
        ),
      },
      {
        id: 'transactions',
        header: (
          <span className="inline-flex items-center gap-1">
            Transactions
            <KeyboardArrowDownOutlinedIcon sx={{ fontSize: 14, color: grayColors[500] }} />
          </span>
        ),
        render: (row) => (
          <PaymentTransactionCell
            transactionAt={row.transactionAt}
            amountLabel={row.amountLabel}
            paymentMethod={row.paymentMethod}
          />
        ),
      },
      {
        id: 'favors',
        header: 'Favors',
        render: (row) => (
          <PaymentFavorCell title={row.favorTitle} bookingId={row.bookingId} />
        ),
      },
      {
        id: 'paymentDivision',
        header: 'Payment Division',
        render: (row) => (
          <PaymentDivisionCell
            sellerAmount={row.sellerAmount}
            platformAmount={row.platformAmount}
          />
        ),
      },
      {
        id: 'payerPayee',
        header: 'Payer and Payee',
        render: (row) => <DisputePartyCell seller={row.seller} buyer={row.buyer} />,
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
        id: 'paymentType',
        header: 'Payment Type',
        align: 'center',
        render: (row) => {
          const typeStyle = adminPaymentTypeStyles[row.paymentType];
          return (
            <StatusBadge
              label={row.paymentType}
              bg={typeStyle.bg}
              border={typeStyle.border}
              text={typeStyle.text}
            />
          );
        },
      },
      {
        id: 'actions',
        header: 'Actions',
        align: 'center',
        stopRowClick: true,
        render: () => (
          <IconButton aria-label="Row actions" size="small" sx={{ color: grayColors[700] }}>
            <MoreVertOutlinedIcon fontSize="small" />
          </IconButton>
        ),
      },
    ],
    [],
  );

  return (
    <AdminDataTable
      title="All Payments"
      description="These payments are made in the last 3 months."
      headerActions={
        <IconButton aria-label="More options" size="small" sx={{ color: grayColors[700] }}>
          <MoreVertOutlinedIcon fontSize="small" />
        </IconButton>
      }
      columns={columns}
      rows={filteredRows}
      getRowKey={(row) => row.id}
      striped="purple"
      minWidth={1100}
      enableClientPagination
    />
  );
}
