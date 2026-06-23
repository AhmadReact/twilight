'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AdminDataTable, { type AdminTableColumn } from '@/components/admin/shared/AdminDataTable';
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

  const columns = useMemo<AdminTableColumn<SellerFavorRow>[]>(
    () => [
      {
        id: 'bookingId',
        header: 'Booking ID',
        render: (row) => (
          <span className="text-sm font-medium leading-5 text-[#101828]">{row.bookingId}</span>
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
        stopRowClick: true,
        render: (row) => (
          <Link href={`/admin/favors/${row.slug}`} className="block">
            <FavorServiceCell
              title={row.title}
              priceFrom={row.priceFrom}
              date={row.date}
              category={row.category}
              thumbnailSrc={row.thumbnailSrc}
            />
          </Link>
        ),
      },
      {
        id: 'subCategory',
        header: 'Sub Category',
        align: 'center',
        render: (row) => (
          <span className="whitespace-pre-line text-[10px] font-normal leading-4 text-[#475467]">
            {row.subCategories}
          </span>
        ),
      },
      {
        id: 'status',
        header: 'Status',
        align: 'center',
        render: (row) => {
          const statusStyle = favorStatusStyles[row.status];
          return (
            <StatusBadge
              label={row.status}
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
            <FilterButtonGroup items={favorFilters} activeId={filter} onChange={setFilter} />
          </div>
          <div className="border-t border-[#EAECF0]" />
        </>
      }
      columns={columns}
      rows={filteredFavors}
      getRowKey={(row, index) => `${row.bookingId}-${row.slug}-${index}`}
      onRowClick={(row) => router.push(`/admin/favors/${row.slug}`)}
      minWidth={720}
      enableClientPagination
    />
  );
}
