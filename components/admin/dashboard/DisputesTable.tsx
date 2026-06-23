'use client';

import { useMemo } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AdminDataTable, { type AdminTableColumn } from '@/components/admin/shared/AdminDataTable';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import { outlineButtonSx, primaryButtonSx } from '@/lib/admin/adminButtonStyles';
import type { DisputeRow, ReportStatus } from '@/lib/admin/mockData';
import { disputeRows } from '@/lib/admin/mockData';
import { grayColors } from '@/lib/theme';

const statusStyles: Record<
  ReportStatus,
  { bg: string; border: string; text: string }
> = {
  Active: { bg: '#F9F5FF', border: '#E9D7FE', text: '#6941C6' },
  'Pending from Buyer': { bg: '#F9FAFB', border: '#EAECF0', text: '#344054' },
  'Pending from Seller': { bg: '#F9FAFB', border: '#EAECF0', text: '#344054' },
  Resolved: { bg: '#ECFDF3', border: '#ABEFC6', text: '#067647' },
};

function PersonCell({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm font-medium leading-5 text-[#101828]">{name}</span>
      <span className="text-sm font-normal leading-[18px] text-[#475467]">{role}</span>
    </div>
  );
}

function BookingDetailsCell({ row }: { row: DisputeRow }) {
  return (
    <div className="flex min-w-[220px] flex-col gap-1">
      <span className="text-sm font-medium leading-5 text-[#212121]">{row.title}</span>
      <div className="flex flex-wrap items-center gap-1 text-[11px] leading-[15px] text-[#667085]">
        <span className="inline-flex items-center gap-1">
          <PlaceOutlinedIcon sx={{ fontSize: 14 }} />
          {row.location}
        </span>
        <span className="inline-flex items-center gap-1">
          <CalendarTodayOutlinedIcon sx={{ fontSize: 14 }} />
          {row.dateTime}
        </span>
      </div>
    </div>
  );
}

export default function DisputesTable() {
  const columns = useMemo<AdminTableColumn<DisputeRow>[]>(
    () => [
      {
        id: 'bookingId',
        header: (
          <span className="inline-flex items-center gap-1">
            Booking ID
            <KeyboardArrowDownOutlinedIcon sx={{ fontSize: 14 }} />
          </span>
        ),
        render: (row) => (
          <span className="text-sm font-medium leading-5 text-[#212121]">{row.bookingId}</span>
        ),
      },
      {
        id: 'bookingDetails',
        header: 'Booking Details',
        render: (row) => <BookingDetailsCell row={row} />,
      },
      {
        id: 'buyer',
        header: 'Buyer',
        render: (row) => <PersonCell name={row.buyer.name} role={row.buyer.role} />,
      },
      {
        id: 'seller',
        header: 'Seller',
        render: (row) => <PersonCell name={row.seller.name} role={row.seller.role} />,
      },
      {
        id: 'reportStatus',
        header: 'Report Status',
        align: 'center',
        render: (row) => (
          <StatusBadge
            label={row.status}
            bg={statusStyles[row.status].bg}
            border={statusStyles[row.status].border}
            text={statusStyles[row.status].text}
          />
        ),
      },
      {
        id: 'reportedBy',
        header: 'Reported By',
        render: (row) => (
          <PersonCell name={row.reportedBy.name} role={row.reportedBy.role} />
        ),
      },
      {
        id: 'actions',
        header: 'Actions',
        align: 'center',
        stopRowClick: true,
        render: () => (
          <Button disableElevation sx={primaryButtonSx}>
            View Details
          </Button>
        ),
      },
    ],
    [],
  );

  return (
    <AdminDataTable
      header={
        <>
          <div className="flex items-start justify-between gap-4 px-6 pb-0 pt-[18px]">
            <div className="min-w-0 flex-1">
              <h2 className="text-base font-semibold leading-[25px] text-[#101828]">
                Reports/Disputes
              </h2>
              <p className="truncate text-[13px] font-normal leading-[18px] text-[#475467]">
                These disputes are reported in the last 3 months.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <Button disableElevation sx={outlineButtonSx}>
                Notify Users
              </Button>
              <IconButton aria-label="More options" size="small" sx={{ color: grayColors[700] }}>
                <MoreVertOutlinedIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
          <div className="mt-[18px] border-t border-[#EAECF0]" />
        </>
      }
      columns={columns}
      rows={disputeRows}
      getRowKey={(row, index) => `${row.bookingId}-${index}`}
      minWidth={960}
      enableClientPagination
    />
  );
}
