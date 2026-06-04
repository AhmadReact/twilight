'use client';

import { useMemo, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import BookingServiceCell from '@/components/admin/shared/BookingServiceCell';
import FilterButtonGroup from '@/components/admin/shared/FilterButtonGroup';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import TablePagination from '@/components/admin/shared/TablePagination';
import UserInfoCell from '@/components/admin/shared/UserInfoCell';
import type { BookingStatus, TeamBookingRow } from '@/lib/admin/mockTeamDetailData';
import { grayColors } from '@/lib/theme';

const bookingStatusStyles: Record<
  BookingStatus,
  { bg: string; border: string; text: string }
> = {
  Upcoming: { bg: '#F9F5FF', border: '#E9D7FE', text: '#6941C6' },
  'In Progress': { bg: '#F9FAFB', border: '#EAECF0', text: '#344054' },
  Cancelled: { bg: '#FEF3F2', border: '#FECDCA', text: '#B42318' },
  Completed: { bg: '#ECFDF3', border: '#ABEFC6', text: '#067647' },
};

const bookingFilters = [
  { id: 'all', label: 'All' },
  { id: 'completed', label: 'Completed', labelClassName: 'text-[#17B26A]' },
  { id: 'in-progress', label: 'In Progress', labelClassName: 'text-[#A54AFF]' },
  { id: 'cancelled', label: 'Cancelled', labelClassName: 'text-[#F04438]' },
  { id: 'upcoming', label: 'Upcoming', labelClassName: 'text-[#667085]' },
];

const filterToStatus: Record<string, BookingStatus | null> = {
  all: null,
  completed: 'Completed',
  'in-progress': 'In Progress',
  cancelled: 'Cancelled',
  upcoming: 'Upcoming',
};

type TeamBookingsTableProps = {
  bookings: TeamBookingRow[];
};

export default function TeamBookingsTable({ bookings }: TeamBookingsTableProps) {
  const [filter, setFilter] = useState('all');

  const filteredBookings = useMemo(() => {
    const status = filterToStatus[filter];
    if (!status) return bookings;
    return bookings.filter((row) => row.status === status);
  }, [bookings, filter]);

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
            <FilterButtonGroup items={bookingFilters} activeId={filter} onChange={setFilter} />
          </div>
          <IconButton aria-label="More options" size="small" sx={{ color: grayColors[700] }}>
            <MoreVertOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
      </div>

      <div className="border-t border-[#EAECF0]" />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px] border-collapse text-left">
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
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((row, index) => {
              const statusStyle = bookingStatusStyles[row.status];

              return (
                <tr
                  key={`${row.bookingId}-${row.title}-${row.status}-${index}`}
                  className="border-b border-[#EAECF0] last:border-b-0"
                >
                  <td className="px-6 py-4 text-sm font-medium leading-5 text-[#101828]">
                    {row.bookingId}
                  </td>
                  <td className="px-6 py-4">
                    <BookingServiceCell
                      title={row.title}
                      priceFrom={row.priceFrom}
                      location={row.location}
                      scheduledDate={row.scheduledDate}
                      thumbnailSrc={row.thumbnailSrc}
                    />
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
                      label={row.status}
                      bg={statusStyle.bg}
                      border={statusStyle.border}
                      text={statusStyle.text}
                    />
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
