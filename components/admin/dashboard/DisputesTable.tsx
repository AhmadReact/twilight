'use client';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import TablePagination from '@/components/admin/shared/TablePagination';
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
  return (
    <section className="overflow-hidden rounded-[11px] border border-[#EAECF0] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.1)]">
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

      <div className="overflow-x-auto">
        <table className="w-full min-w-[960px] border-collapse text-left">
          <thead>
            <tr className="bg-[#F9FAFB]">
              <th className="border-b border-[#EAECF0] px-6 py-3 text-xs font-medium leading-4 text-[#475467]">
                <span className="inline-flex items-center gap-1">
                  Booking ID
                  <KeyboardArrowDownOutlinedIcon sx={{ fontSize: 14 }} />
                </span>
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-xs font-medium leading-4 text-[#475467]">
                Booking Details
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-xs font-medium leading-4 text-[#475467]">
                Buyer
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-xs font-medium leading-4 text-[#475467]">
                Seller
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-center text-xs font-medium leading-4 text-[#475467]">
                Report Status
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-xs font-medium leading-4 text-[#475467]">
                Reported By
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-center text-xs font-medium leading-4 text-[#475467]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {disputeRows.map((row, index) => (
              <tr key={`${row.bookingId}-${index}`} className="border-b border-[#EAECF0] last:border-b-0">
                <td className="px-6 py-4 text-sm font-medium leading-5 text-[#212121]">
                  {row.bookingId}
                </td>
                <td className="px-6 py-4">
                  <BookingDetailsCell row={row} />
                </td>
                <td className="px-6 py-4">
                  <PersonCell name={row.buyer.name} role={row.buyer.role} />
                </td>
                <td className="px-6 py-4">
                  <PersonCell name={row.seller.name} role={row.seller.role} />
                </td>
                <td className="px-6 py-4 text-center">
                  <StatusBadge
                    label={row.status}
                    bg={statusStyles[row.status].bg}
                    border={statusStyles[row.status].border}
                    text={statusStyles[row.status].text}
                  />
                </td>
                <td className="px-6 py-4">
                  <PersonCell name={row.reportedBy.name} role={row.reportedBy.role} />
                </td>
                <td className="px-6 py-4 text-center">
                  <Button disableElevation sx={primaryButtonSx}>
                    View Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <TablePagination />
    </section>
  );
}
