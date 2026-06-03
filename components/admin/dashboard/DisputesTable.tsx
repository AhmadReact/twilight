'use client';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import type { DisputeRow, ReportStatus } from '@/lib/admin/mockData';
import { disputeRows } from '@/lib/admin/mockData';
import { brandColors, grayColors } from '@/lib/theme';

const statusStyles: Record<
  ReportStatus,
  { bg: string; border: string; text: string }
> = {
  Active: { bg: '#F9F5FF', border: '#E9D7FE', text: '#6941C6' },
  'Pending from Buyer': { bg: '#F9FAFB', border: '#EAECF0', text: '#344054' },
  'Pending from Seller': { bg: '#F9FAFB', border: '#EAECF0', text: '#344054' },
  Resolved: { bg: '#ECFDF3', border: '#ABEFC6', text: '#067647' },
};

function StatusBadge({ status }: { status: ReportStatus }) {
  const style = statusStyles[status];

  return (
    <span
      className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium leading-4"
      style={{
        backgroundColor: style.bg,
        borderColor: style.border,
        color: style.text,
      }}
    >
      {status}
    </span>
  );
}

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

const outlineButtonSx = {
  borderRadius: '1000px',
  border: `1px solid ${grayColors[300]}`,
  bgcolor: '#FFFFFF',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  px: '14px',
  py: '10px',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '20px',
  color: grayColors[700],
  '&:hover': {
    bgcolor: '#F9FAFB',
    borderColor: grayColors[300],
  },
};

const primaryButtonSx = {
  borderRadius: '1000px',
  border: `1px solid ${brandColors[300]}`,
  backgroundImage:
    'linear-gradient(184.75deg, rgb(195, 134, 255) 5.31%, rgb(150, 67, 232) 87.07%)',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  px: '14px',
  py: '8px',
  fontSize: '13px',
  fontWeight: 600,
  lineHeight: '20px',
  color: '#FFFFFF',
  whiteSpace: 'nowrap',
  '&:hover': {
    backgroundImage:
      'linear-gradient(184.75deg, rgb(183, 110, 255) 5.31%, rgb(117, 53, 181) 87.07%)',
  },
};

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
                  <StatusBadge status={row.status} />
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

      <div className="flex items-center justify-between border-t border-[#EAECF0] px-6 py-4">
        <Button
          disableElevation
          startIcon={<KeyboardArrowLeftOutlinedIcon />}
          sx={outlineButtonSx}
        >
          Previous
        </Button>
        <div className="flex items-center gap-1">
          {[1, 2, 3, '...', 8, 9, 10].map((page, index) =>
            page === '...' ? (
              <span key={`ellipsis-${index}`} className="px-2 text-sm text-[#667085]">
                ...
              </span>
            ) : (
              <button
                key={page}
                type="button"
                className={`flex size-9 items-center justify-center rounded-lg text-sm font-medium ${
                  page === 1
                    ? 'bg-[#F9FAFB] text-[#182230]'
                    : 'text-[#475467] hover:bg-[#F9FAFB]'
                }`}
              >
                {page}
              </button>
            ),
          )}
        </div>
        <Button
          disableElevation
          endIcon={<KeyboardArrowRightOutlinedIcon />}
          sx={outlineButtonSx}
        >
          Next
        </Button>
      </div>
    </section>
  );
}
