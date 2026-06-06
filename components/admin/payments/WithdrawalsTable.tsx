'use client';

import { useMemo } from 'react';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AdminTableCardHeader from '@/components/admin/shared/AdminTableCardHeader';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import TablePagination from '@/components/admin/shared/TablePagination';
import WithdrawalAmountCell from '@/components/admin/shared/WithdrawalAmountCell';
import WithdrawalDestinationCell from '@/components/admin/shared/WithdrawalDestinationCell';
import WithdrawalSellerCell from '@/components/admin/shared/WithdrawalSellerCell';
import WithholdActionButton from '@/components/admin/shared/WithholdActionButton';
import { adminPaymentStatusStyles } from '@/lib/admin/paymentBadgeStyles';
import { adminWithdrawalRows, filterWithdrawalRows } from '@/lib/admin/mockWithdrawalsData';
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

  return (
    <section className="overflow-hidden rounded-[11px] border border-[#EAECF0] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.1)]">
      <AdminTableCardHeader
        title="All Withdrawals"
        description="These withdrawals are processed in the last 3 months."
      />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <thead>
            <tr className="bg-[#F9FAFB]">
              <th className="border-b border-[#EAECF0] px-4 py-3 text-xs font-medium leading-4 text-[#475467] sm:px-6">
                <span className="inline-flex items-center gap-1">
                  Withdrawals
                  <KeyboardArrowDownOutlinedIcon sx={{ fontSize: 14, color: grayColors[500] }} />
                </span>
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Withdrawn to
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Seller
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Status
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, index) => {
              const statusStyle = adminPaymentStatusStyles[row.status];
              const isHighlighted = index % 2 === 0;
              const canWithhold = row.status === 'Pending';

              return (
                <tr
                  key={row.id}
                  className={`border-b border-[#EAECF0] last:border-b-0 transition-colors hover:bg-[#F9F5FF] ${
                    isHighlighted ? 'bg-[#FCFAFF]' : 'bg-white'
                  }`}
                >
                  <td className="px-4 py-4 sm:px-6">
                    <WithdrawalAmountCell
                      withdrawnAt={row.withdrawnAt}
                      amountLabel={row.amountLabel}
                    />
                  </td>
                  <td className="px-4 py-4 sm:px-6">
                    <WithdrawalDestinationCell
                      provider={row.destinationProvider}
                      account={row.destinationAccount}
                    />
                  </td>
                  <td className="px-4 py-4 sm:px-6">
                    <WithdrawalSellerCell name={row.sellerName} role={row.sellerRole} />
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
                    <WithholdActionButton disabled={!canWithhold} />
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
