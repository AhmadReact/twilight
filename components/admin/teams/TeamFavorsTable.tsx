'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import FavorServiceCell from '@/components/admin/shared/FavorServiceCell';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AdminDataTable, { type AdminTableColumn } from '@/components/admin/shared/AdminDataTable';
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

  const columns = useMemo<AdminTableColumn<TeamFavorRow>[]>(
    () => [
      {
        id: 'bookingId',
        header: 'Booking ID',
        render: (favor) => (
          <Link
            href={`/admin/favors/${favor.slug}`}
            className="text-sm font-medium leading-5 text-[#101828] hover:text-[#6941C6]"
            onClick={(event) => event.stopPropagation()}
          >
            {favor.bookingId}
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
        render: (favor) => (
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
        ),
      },
      {
        id: 'subCategory',
        header: 'Sub Category',
        align: 'center',
        render: (favor) => (
          <span className="text-[10px] font-normal leading-[18px] text-[#475467]">
            {favor.subCategories}
          </span>
        ),
      },
      {
        id: 'ratings',
        header: 'Ratings',
        align: 'center',
        render: (favor) => (
          <Rating
            value={favor.rating}
            readOnly
            size="small"
            sx={{
              '& .MuiRating-iconFilled': { color: '#FDB022' },
              '& .MuiRating-iconEmpty': { color: '#EAECF0' },
            }}
          />
        ),
      },
      {
        id: 'status',
        header: 'Status',
        align: 'center',
        render: (favor) => {
          const statusStyle = favorStatusStyles[favor.status];
          return (
            <StatusBadge
              label={favor.status}
              bg={statusStyle.bg}
              border={statusStyle.border}
              text={statusStyle.text}
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
      header={
        <>
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
        </>
      }
      columns={columns}
      rows={favors}
      getRowKey={(favor, index) => `${favor.slug}-${index}`}
      onRowClick={(favor) => router.push(`/admin/favors/${favor.slug}`)}
      minWidth={900}
      enableClientPagination
    />
  );
}
