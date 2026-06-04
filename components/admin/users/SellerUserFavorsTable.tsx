'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import FilterButtonGroup from '@/components/admin/shared/FilterButtonGroup';
import FavorServiceCell from '@/components/admin/shared/FavorServiceCell';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import type { SellerFavorRow } from '@/lib/admin/mockSellerUserDetailData';
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

type SellerUserFavorsTableProps = {
  favors: SellerFavorRow[];
};

export default function SellerUserFavorsTable({ favors }: SellerUserFavorsTableProps) {
  const router = useRouter();
  const [filter, setFilter] = useState('all');

  const filteredFavors = useMemo(() => {
    if (filter === 'active') return favors.filter((f) => f.status === 'Active');
    if (filter === 'blocked') return favors.filter((f) => f.status === 'Blocked');
    return favors;
  }, [favors, filter]);

  return (
    <section className="overflow-hidden rounded-[11px] border border-[#EAECF0] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.1)]">
      <div className="flex flex-col gap-4 px-4 py-[18px] sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div className="min-w-0 flex-1">
          <h2 className="text-base font-semibold leading-[25px] text-[#101828]">All Favors</h2>
          <p className="truncate text-[13px] font-normal leading-[18px] text-[#475467]">
            These favors are created in the last 3 months.
          </p>
        </div>
        <FilterButtonGroup items={favorFilters} activeId={filter} onChange={setFilter} />
      </div>

      <div className="border-t border-[#EAECF0]" />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
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
                Status
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-center text-xs font-medium leading-4 text-[#475467]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredFavors.map((row, index) => {
              const statusStyle = favorStatusStyles[row.status];

              return (
                <tr
                  key={`${row.bookingId}-${row.slug}-${index}`}
                  onClick={() => router.push(`/admin/favors/${row.slug}`)}
                  className="cursor-pointer border-b border-[#EAECF0] transition-colors last:border-b-0 hover:bg-[#F9FAFB]"
                >
                  <td className="px-6 py-4 text-sm font-medium leading-5 text-[#101828]">
                    {row.bookingId}
                  </td>
                  <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                    <Link href={`/admin/favors/${row.slug}`} className="block">
                      <FavorServiceCell
                        title={row.title}
                        priceFrom={row.priceFrom}
                        date={row.date}
                        category={row.category}
                        thumbnailSrc={row.thumbnailSrc}
                      />
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-center text-[10px] font-normal leading-4 text-[#475467] whitespace-pre-line">
                    {row.subCategories}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <StatusBadge
                      label={row.status}
                      bg={statusStyle.bg}
                      border={statusStyle.border}
                      text={statusStyle.text}
                    />
                  </td>
                  <td
                    className="px-6 py-4 text-center"
                    onClick={(e) => e.stopPropagation()}
                  >
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
