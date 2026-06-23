'use client';

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AdminDataTable, { type AdminTableColumn } from '@/components/admin/shared/AdminDataTable';
import DisputePartyCell from '@/components/admin/shared/DisputePartyCell';
import DisputedBookingCell from '@/components/admin/shared/DisputedBookingCell';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import {
  disputeReportStatusStyles,
  disputeReportTypeStyles,
} from '@/lib/admin/disputeBadgeStyles';
import {
  adminDisputeRows,
  filterDisputeRows,
} from '@/lib/admin/mockDisputesData';
import type { AdminDisputeRow } from '@/lib/admin/mockDisputesData';
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

  const columns = useMemo<AdminTableColumn<AdminDisputeRow>[]>(
    () => [
      {
        id: 'ticketId',
        header: 'Ticket ID',
        render: (row) => (
          <span className="text-sm font-medium leading-[18px] text-[#101828]">{row.ticketId}</span>
        ),
      },
      {
        id: 'disputedBookings',
        header: 'Disputed Bookings',
        render: (row) => (
          <DisputedBookingCell
            title={row.bookingTitle}
            reportedAt={row.reportedAt}
            reportedByRole={row.reportedByRole}
          />
        ),
      },
      {
        id: 'disputeBetween',
        header: 'Dispute between',
        render: (row) => <DisputePartyCell seller={row.seller} buyer={row.buyer} />,
      },
      {
        id: 'reason',
        header: 'Reason',
        align: 'center',
        render: (row) => (
          <span className="text-[13px] font-normal leading-[18px] text-[#475467]">{row.reason}</span>
        ),
      },
      {
        id: 'reportStatus',
        header: 'Report Status',
        align: 'center',
        render: (row) => {
          const statusStyle = disputeReportStatusStyles[row.reportStatus];
          return (
            <StatusBadge
              label={row.reportStatus}
              bg={statusStyle.bg}
              border={statusStyle.border}
              text={statusStyle.text}
            />
          );
        },
      },
      {
        id: 'reportType',
        header: 'Report Type',
        align: 'center',
        render: (row) => {
          const typeStyle = disputeReportTypeStyles[row.reportType];
          return (
            <StatusBadge
              label={row.reportType}
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
      title="All Disputes"
      description="These favors are created in the last 3 months."
      headerActions={
        <IconButton aria-label="More options" size="small" sx={{ color: grayColors[700] }}>
          <MoreVertOutlinedIcon fontSize="small" />
        </IconButton>
      }
      columns={columns}
      rows={filteredRows}
      getRowKey={(row) => row.slug}
      onRowClick={(row) => router.push(`/admin/disputes/${row.slug}`)}
      striped="purple"
      minWidth={1050}
      enableClientPagination
    />
  );
}
