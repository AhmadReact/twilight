'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AdminDataTable, { type AdminTableColumn } from '@/components/admin/shared/AdminDataTable';
import BookingServiceCell from '@/components/admin/shared/BookingServiceCell';
import FilterButtonGroup from '@/components/admin/shared/FilterButtonGroup';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import UserInfoCell from '@/components/admin/shared/UserInfoCell';
import {
  adminBookingStatusStyles,
  paymentStatusStyles,
} from '@/lib/admin/bookingBadgeStyles';
import type { AdminBookingRow, AdminBookingStatus } from '@/lib/admin/mockBookingsData';
import { bookingRows } from '@/lib/admin/mockBookingsData';
import { grayColors } from '@/lib/theme';

const statusFilters = [
  { id: 'all', label: 'All' },
  { id: 'completed', label: 'Completed', labelClassName: 'text-[#17B26A]' },
  { id: 'accepted', label: 'Accepted', labelClassName: 'text-[#A54AFF]' },
  { id: 'in-progress', label: 'In Progress', labelClassName: 'text-[#667085]' },
  { id: 'pending', label: 'Pending', labelClassName: 'text-[#F79009]' },
  { id: 'cancelled', label: 'Cancelled', labelClassName: 'text-[#F04438]' },
];

const filterToStatus: Record<string, AdminBookingStatus | null> = {
  all: null,
  completed: 'Completed',
  accepted: 'Accepted',
  'in-progress': 'In Progress',
  pending: 'Pending',
  cancelled: 'Cancelled',
};

type BookingsTableProps = {
  rows?: AdminBookingRow[];
  statusFilter?: string;
  onStatusFilterChange?: (id: string) => void;
  hrefBase?: string;
};

export default function BookingsTable({
  rows = bookingRows,
  statusFilter = 'all',
  onStatusFilterChange,
  hrefBase = '/admin/bookings',
}: BookingsTableProps) {
  const router = useRouter();
  const filteredRows = useMemo(() => {
    const status = filterToStatus[statusFilter];
    if (!status) return rows;
    return rows.filter((row) => row.bookingStatus === status);
  }, [rows, statusFilter]);

  const columns = useMemo<AdminTableColumn<AdminBookingRow>[]>(
    () => [
      {
        id: 'bookingId',
        header: 'Booking ID',
        render: (row) => (
          <Link
            href={`${hrefBase}/${row.slug}`}
            className="text-sm font-medium leading-5 text-[#101828] hover:text-[#6941C6]"
            onClick={(event) => event.stopPropagation()}
          >
            {row.bookingId}
          </Link>
        ),
      },
      {
        id: 'bookings',
        header: (
          <span className="inline-flex items-center gap-1">
            Bookings
            <KeyboardArrowDownOutlinedIcon sx={{ fontSize: 14 }} />
          </span>
        ),
        render: (row) => (
          <Link
            href={`${hrefBase}/${row.slug}`}
            className="block"
            onClick={(event) => event.stopPropagation()}
          >
            <BookingServiceCell
              title={row.title}
              priceFrom={row.priceFrom}
              location={row.location}
              scheduledDate={row.scheduledDate}
              thumbnailSrc={row.thumbnailSrc}
            />
          </Link>
        ),
      },
      {
        id: 'bookedBy',
        header: 'Booked By',
        render: (row) => (
          <UserInfoCell
            name={row.bookedBy.name}
            role={row.bookedBy.role}
            avatarSrc={row.bookedBy.avatarSrc}
            avatarBg={row.bookedBy.avatarBg}
          />
        ),
      },
      {
        id: 'acceptedBy',
        header: 'Accepted By',
        render: (row) => (
          <UserInfoCell
            name={row.acceptedBy.name}
            role={row.acceptedBy.role}
            avatarSrc={row.acceptedBy.avatarSrc}
            avatarBg={row.acceptedBy.avatarBg}
          />
        ),
      },
      {
        id: 'bookingStatus',
        header: 'Booking Status',
        align: 'center',
        render: (row) => {
          const bookingStyle = adminBookingStatusStyles[row.bookingStatus];
          return (
            <StatusBadge
              label={row.bookingStatus}
              bg={bookingStyle.bg}
              border={bookingStyle.border}
              text={bookingStyle.text}
            />
          );
        },
      },
      {
        id: 'paymentStatus',
        header: 'Payment Status',
        align: 'center',
        render: (row) => {
          const paymentStyle = paymentStatusStyles[row.paymentStatus];
          return (
            <StatusBadge
              label={row.paymentStatus}
              bg={paymentStyle.bg}
              border={paymentStyle.border}
              text={paymentStyle.text}
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
    [hrefBase],
  );

  return (
    <AdminDataTable
      header={
        <>
          <div className="flex flex-col gap-4 px-4 py-[18px] lg:flex-row lg:items-start lg:justify-between lg:px-6">
            <div className="min-w-0 flex-1">
              <h2 className="text-base font-semibold leading-[25px] text-[#101828]">All Bookings</h2>
              <p className="truncate text-[13px] font-normal leading-[18px] text-[#475467]">
                These favors are created in the last 3 months.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center justify-end gap-3">
              <div className="max-w-full overflow-x-auto">
                <FilterButtonGroup
                  items={statusFilters}
                  activeId={statusFilter}
                  onChange={onStatusFilterChange ?? (() => undefined)}
                />
              </div>
              <IconButton aria-label="More options" size="small" sx={{ color: grayColors[700] }}>
                <MoreVertOutlinedIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
          <div className="border-t border-[#EAECF0]" />
        </>
      }
      columns={columns}
      rows={filteredRows}
      getRowKey={(row, index) => `${row.slug}-${index}`}
      onRowClick={(row) => router.push(`${hrefBase}/${row.slug}`)}
      minWidth={1150}
      enableClientPagination
    />
  );
}
