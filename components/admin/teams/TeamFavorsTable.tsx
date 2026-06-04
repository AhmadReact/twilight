'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import FavorServiceCell from '@/components/admin/shared/FavorServiceCell';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import FilterButtonGroup from '@/components/admin/shared/FilterButtonGroup';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import type { TeamFavorRow } from '@/lib/admin/mockTeamDetailData';
import { grayColors } from '@/lib/theme';

const favorStatusStyles = {
  Active: { bg: '#ECFDF3', border: '#ABEFC6', text: '#067647' },
  Blocked: { bg: '#FEF3F2', border: '#FECDCA', text: '#B42318' },
} as const;

const favorFilters = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active', labelClassName: 'text-[#17B26A]' },
  { id: 'blocked', label: 'Blocked', labelClassName: 'text-[#F04438]' },
];

type TeamFavorsTableProps = {
  favors: TeamFavorRow[];
};

export default function TeamFavorsTable({ favors }: TeamFavorsTableProps) {
  const router = useRouter();
  const [filter, setFilter] = useState('all');

  return (
    <section className="overflow-hidden rounded-[11px] border border-[#EAECF0] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.1)]">
      <div className="flex flex-col gap-4 px-4 py-[18px] sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div className="min-w-0 flex-1">
          <h2 className="text-base font-semibold leading-[25px] text-[#101828]">All Favors</h2>
          <p className="truncate text-[13px] font-normal leading-[18px] text-[#475467]">
            These favors are created in the last 3 months.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <FilterButtonGroup items={favorFilters} activeId={filter} onChange={setFilter} />
          <IconButton aria-label="More options" size="small" sx={{ color: grayColors[700] }}>
            <MoreVertOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
      </div>

      <div className="border-t border-[#EAECF0]" />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-left">
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
              <th className="border-b border-[#EAECF0] px-6 py-3 text-center text-xs font-medium leading-4 text-[#475467]">
                Sub Category
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-center text-xs font-medium leading-4 text-[#475467]">
                Ratings
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-center text-xs font-medium leading-4 text-[#475467]">
                Status
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-center text-xs font-medium leading-4 text-[#475467]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {favors.map((favor, index) => {
              const statusStyle = favorStatusStyles[favor.status];

              return (
                <tr
                  key={`${favor.slug}-${index}`}
                  onClick={() => router.push(`/admin/favors/${favor.slug}`)}
                  className="cursor-pointer border-b border-[#EAECF0] transition-colors last:border-b-0 hover:bg-[#F9FAFB]"
                >
                  <td className="px-6 py-4 text-sm font-medium leading-5 text-[#101828]">
                    <Link
                      href={`/admin/favors/${favor.slug}`}
                      className="hover:text-[#6941C6]"
                      onClick={(event) => event.stopPropagation()}
                    >
                      {favor.bookingId}
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/admin/favors/${favor.slug}`}
                      className="block"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <FavorServiceCell
                      title={favor.title}
                      priceFrom={favor.priceFrom}
                      date={favor.date}
                      category={favor.category}
                      thumbnailSrc={favor.thumbnailSrc}
                      />
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-center text-[10px] font-normal leading-[18px] text-[#475467]">
                    {favor.subCategories}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Rating
                      value={favor.rating}
                      readOnly
                      size="small"
                      sx={{
                        '& .MuiRating-iconFilled': { color: '#FDB022' },
                        '& .MuiRating-iconEmpty': { color: '#EAECF0' },
                      }}
                    />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <StatusBadge
                      label={favor.status}
                      bg={statusStyle.bg}
                      border={statusStyle.border}
                      text={statusStyle.text}
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
    </section>
  );
}
