'use client';

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AdminTableCardHeader from '@/components/admin/shared/AdminTableCardHeader';
import DisputePartyCell from '@/components/admin/shared/DisputePartyCell';
import DisputedBookingCell from '@/components/admin/shared/DisputedBookingCell';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import TablePagination from '@/components/admin/shared/TablePagination';
import {
  disputeReportStatusStyles,
  disputeReportTypeStyles,
} from '@/lib/admin/disputeBadgeStyles';
import {
  adminDisputeRows,
  filterDisputeRows,
} from '@/lib/admin/mockDisputesData';
import { grayColors } from '@/lib/theme';

type DisputesManagementTableProps = {
  searchQuery: string;
  resolutionFilter: string;
  statusFilter: string;
};

export default function DisputesManagementTable({
  searchQuery,
  resolutionFilter,
  statusFilter,
}: DisputesManagementTableProps) {
  const router = useRouter();
  const filteredRows = useMemo(
    () => filterDisputeRows(adminDisputeRows, searchQuery, resolutionFilter, statusFilter),
    [searchQuery, resolutionFilter, statusFilter],
  );

  return (
    <section className="overflow-hidden rounded-[11px] border border-[#EAECF0] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.1)]">
      <AdminTableCardHeader
        title="All Disputes"
        description="These favors are created in the last 3 months."
        actions={
          <IconButton aria-label="More options" size="small" sx={{ color: grayColors[700] }}>
            <MoreVertOutlinedIcon fontSize="small" />
          </IconButton>
        }
      />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1050px] border-collapse text-left">
          <thead>
            <tr className="bg-[#F9FAFB]">
              <th className="border-b border-[#EAECF0] px-4 py-3 text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Ticket ID
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Disputed Bookings
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Dispute between
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Reason
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Report Status
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Report Type
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, index) => {
              const statusStyle = disputeReportStatusStyles[row.reportStatus];
              const typeStyle = disputeReportTypeStyles[row.reportType];
              const isHighlighted = index % 2 === 0;

              return (
                <tr
                  key={row.slug}
                  onClick={() => router.push(`/admin/disputes/${row.slug}`)}
                  className={`cursor-pointer border-b border-[#EAECF0] last:border-b-0 transition-colors hover:bg-[#F9F5FF] ${
                    isHighlighted ? 'bg-[#FCFAFF]' : 'bg-white'
                  }`}
                >
                  <td className="px-4 py-4 text-sm font-medium leading-[18px] text-[#101828] sm:px-6">
                    {row.ticketId}
                  </td>
                  <td className="px-4 py-4 sm:px-6">
                    <DisputedBookingCell
                      title={row.bookingTitle}
                      reportedAt={row.reportedAt}
                      reportedByRole={row.reportedByRole}
                    />
                  </td>
                  <td className="px-4 py-4 sm:px-6">
                    <DisputePartyCell seller={row.seller} buyer={row.buyer} />
                  </td>
                  <td className="px-4 py-4 text-center text-[13px] font-normal leading-[18px] text-[#475467] sm:px-6">
                    {row.reason}
                  </td>
                  <td className="px-4 py-4 text-center sm:px-6">
                    <StatusBadge
                      label={row.reportStatus}
                      bg={statusStyle.bg}
                      border={statusStyle.border}
                      text={statusStyle.text}
                    />
                  </td>
                  <td className="px-4 py-4 text-center sm:px-6">
                    <StatusBadge
                      label={row.reportType}
                      bg={typeStyle.bg}
                      border={typeStyle.border}
                      text={typeStyle.text}
                    />
                  </td>
                  <td className="px-4 py-4 text-center sm:px-6">
                    <IconButton
                      aria-label="Row actions"
                      size="small"
                      sx={{ color: grayColors[700] }}
                      onClick={(event) => event.stopPropagation()}
                    >
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
