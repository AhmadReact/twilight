'use client';

import { useMemo } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AdminTableCardHeader from '@/components/admin/shared/AdminTableCardHeader';
import DisputePartyCell from '@/components/admin/shared/DisputePartyCell';
import PaymentDivisionCell from '@/components/admin/shared/PaymentDivisionCell';
import PaymentFavorCell from '@/components/admin/shared/PaymentFavorCell';
import PaymentTransactionCell from '@/components/admin/shared/PaymentTransactionCell';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import TablePagination from '@/components/admin/shared/TablePagination';
import {
  adminPaymentStatusStyles,
  adminPaymentTypeStyles,
} from '@/lib/admin/paymentBadgeStyles';
import { adminPaymentRows, filterPaymentRows } from '@/lib/admin/mockPaymentsData';
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

  return (
    <section className="overflow-hidden rounded-[11px] border border-[#EAECF0] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.1)]">
      <AdminTableCardHeader
        title="All Payments"
        description="These payments are made in the last 3 months."
        actions={
          <IconButton aria-label="More options" size="small" sx={{ color: grayColors[700] }}>
            <MoreVertOutlinedIcon fontSize="small" />
          </IconButton>
        }
      />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px] border-collapse text-left">
          <thead>
            <tr className="bg-[#F9FAFB]">
              <th className="border-b border-[#EAECF0] px-4 py-3 text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Payment ID
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-xs font-medium leading-4 text-[#475467] sm:px-6">
                <span className="inline-flex items-center gap-1">
                  Transactions
                  <KeyboardArrowDownOutlinedIcon sx={{ fontSize: 14, color: grayColors[500] }} />
                </span>
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Favors
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Payment Division
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Payer and Payee
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Status
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Payment Type
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, index) => {
              const statusStyle = adminPaymentStatusStyles[row.status];
              const typeStyle = adminPaymentTypeStyles[row.paymentType];
              const isHighlighted = index % 2 === 0;

              return (
                <tr
                  key={row.id}
                  className={`border-b border-[#EAECF0] last:border-b-0 transition-colors hover:bg-[#F9F5FF] ${
                    isHighlighted ? 'bg-[#FCFAFF]' : 'bg-white'
                  }`}
                >
                  <td className="px-4 py-4 text-sm font-medium leading-[18px] text-[#101828] sm:px-6">
                    {row.paymentId}
                  </td>
                  <td className="px-4 py-4 sm:px-6">
                    <PaymentTransactionCell
                      transactionAt={row.transactionAt}
                      amountLabel={row.amountLabel}
                      paymentMethod={row.paymentMethod}
                    />
                  </td>
                  <td className="px-4 py-4 sm:px-6">
                    <PaymentFavorCell title={row.favorTitle} bookingId={row.bookingId} />
                  </td>
                  <td className="px-4 py-4 sm:px-6">
                    <PaymentDivisionCell
                      sellerAmount={row.sellerAmount}
                      platformAmount={row.platformAmount}
                    />
                  </td>
                  <td className="px-4 py-4 sm:px-6">
                    <DisputePartyCell seller={row.seller} buyer={row.buyer} />
                  </td>
                  <td className="px-4 py-4 text-center sm:px-6">
                    <StatusBadge
                      label={row.status}
                      bg={statusStyle.bg}
                      border={statusStyle.border}
                      text={statusStyle.text}
                    />
                  </td>
                  <td className="px-4 py-4 text-center sm:px-6">
                    <StatusBadge
                      label={row.paymentType}
                      bg={typeStyle.bg}
                      border={typeStyle.border}
                      text={typeStyle.text}
                    />
                  </td>
                  <td className="px-4 py-4 text-center sm:px-6">
                    <IconButton aria-label="Row actions" size="small" sx={{ color: grayColors[700] }}>
                      <MoreVertOutlinedIcon fontSize="small" />
                    </IconButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <TablePagination />
    </section>
  );
}
