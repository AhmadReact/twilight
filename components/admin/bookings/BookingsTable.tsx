'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import BookingServiceCell from '@/components/admin/shared/BookingServiceCell';
import FilterButtonGroup from '@/components/admin/shared/FilterButtonGroup';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import TablePagination from '@/components/admin/shared/TablePagination';
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

  return (
    <section className="overflow-hidden rounded-[11px] border border-[#EAECF0] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.1)]">
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

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1150px] border-collapse text-left">
          <thead>
            <tr className="bg-[#F9FAFB]">
              <th className="border-b border-[#EAECF0] px-6 py-3 text-xs font-medium leading-4 text-[#475467]">
                Booking ID
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-xs font-medium leading-4 text-[#475467]">
                <span className="inline-flex items-center gap-1">
                  Bookings
                  <KeyboardArrowDownOutlinedIcon sx={{ fontSize: 14 }} />
                </span>
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-xs font-medium leading-4 text-[#475467]">
                Booked By
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-xs font-medium leading-4 text-[#475467]">
                Accepted By
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-center text-xs font-medium leading-4 text-[#475467]">
                Booking Status
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-center text-xs font-medium leading-4 text-[#475467]">
                Payment Status
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-center text-xs font-medium leading-4 text-[#475467]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, index) => {
              const bookingStyle = adminBookingStatusStyles[row.bookingStatus];
              const paymentStyle = paymentStatusStyles[row.paymentStatus];

              return (
                <tr
                  key={`${row.slug}-${index}`}
                  onClick={() => router.push(`${hrefBase}/${row.slug}`)}
                  className="cursor-pointer border-b border-[#EAECF0] transition-colors last:border-b-0 hover:bg-[#F9FAFB]"
                >
                  <td className="px-6 py-4 text-sm font-medium leading-5 text-[#101828]">
                    <Link
                      href={`${hrefBase}/${row.slug}`}
                      className="hover:text-[#6941C6]"
                      onClick={(event) => event.stopPropagation()}
                    >
                      {row.bookingId}
                    </Link>
                  </td>
                  <td className="px-6 py-4">
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
                  </td>
                  <td className="px-6 py-4">
                    <UserInfoCell
                      name={row.bookedBy.name}
                      role={row.bookedBy.role}
                      avatarSrc={row.bookedBy.avatarSrc}
                      avatarBg={row.bookedBy.avatarBg}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <UserInfoCell
                      name={row.acceptedBy.name}
                      role={row.acceptedBy.role}
                      avatarSrc={row.acceptedBy.avatarSrc}
                      avatarBg={row.acceptedBy.avatarBg}
                    />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <StatusBadge
                      label={row.bookingStatus}
                      bg={bookingStyle.bg}
                      border={bookingStyle.border}
                      text={bookingStyle.text}
                    />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <StatusBadge
                      label={row.paymentStatus}
                      bg={paymentStyle.bg}
                      border={paymentStyle.border}
                      text={paymentStyle.text}
                    />
                  </td>
                  <td className="px-6 py-4 text-center" onClick={(event) => event.stopPropagation()}>
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
