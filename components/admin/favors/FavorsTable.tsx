'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AdminDataTable, { type AdminTableColumn } from '@/components/admin/shared/AdminDataTable';
import FavorServiceCell from '@/components/admin/shared/FavorServiceCell';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import UserInfoCell from '@/components/admin/shared/UserInfoCell';
import { outlineButtonSx } from '@/lib/admin/adminButtonStyles';
import type { AdminFavorRow, FavorCategory, FavorStatus } from '@/lib/admin/mockFavorsData';
import { favorRows } from '@/lib/admin/mockFavorsData';
import { grayColors } from '@/lib/theme';

const favorStatusStyles: Record<FavorStatus, { bg: string; border: string; text: string }> = {
  Active: { bg: '#ECFDF3', border: '#ABEFC6', text: '#067647' },
  Blocked: { bg: '#FEF3F2', border: '#FECDCA', text: '#B42318' },
};

const categoryFilterMap: Record<string, FavorCategory | null> = {
  all: null,
  cleaning: 'Cleaning',
  repairing: 'Repairing',
  laundry: 'Laundry',
};

const statusFilterMap: Record<string, FavorStatus | null> = {
  all: null,
  active: 'Active',
  blocked: 'Blocked',
};

type FavorsTableProps = {
  rows?: AdminFavorRow[];
  categoryFilter?: string;
  statusFilter?: string;
  hrefBase?: string;
  customFavorsHref?: string;
};

export default function FavorsTable({
  rows = favorRows,
  categoryFilter = 'all',
  statusFilter = 'all',
  hrefBase = '/admin/favors',
  customFavorsHref = '/admin/favors/custom',
}: FavorsTableProps) {
  const router = useRouter();

  const filteredRows = useMemo(() => {
    const category = categoryFilterMap[categoryFilter];
    const status = statusFilterMap[statusFilter];

    return rows.filter((row) => {
      const matchesCategory = !category || row.category === category;
      const matchesStatus = !status || row.status === status;
      return matchesCategory && matchesStatus;
    });
  }, [rows, categoryFilter, statusFilter]);

  const columns = useMemo<AdminTableColumn<AdminFavorRow>[]>(
    () => [
      {
        id: 'favorId',
        header: 'Favor ID',
        render: (row) => (
          <Link
            href={`${hrefBase}/${row.slug}`}
            className="text-sm font-medium leading-5 text-[#101828] hover:text-[#6941C6]"
            onClick={(event) => event.stopPropagation()}
          >
            {row.favorId}
          </Link>
        ),
      },
      {
        id: 'favors',
        header: (
          <span className="inline-flex items-center gap-1">
            Favors
            <KeyboardArrowDownOutlinedIcon sx={{ fontSize: 14 }} />
          </span>
        ),
        render: (row) => (
          <Link
            href={`${hrefBase}/${row.slug}`}
            className="block"
            onClick={(event) => event.stopPropagation()}
          >
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
        id: 'creator',
        header: 'Favor Creator',
        render: (row) => (
          <UserInfoCell
            name={row.creator.name}
            role={row.creator.role}
            avatarSrc={row.creator.avatarSrc}
            avatarBg={row.creator.avatarBg}
          />
        ),
      },
      {
        id: 'subCategory',
        header: 'Sub Category',
        align: 'center',
        render: (row) => (
          <span className="text-[10px] font-normal leading-[18px] text-[#475467]">
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
    [hrefBase],
  );

  return (
    <AdminDataTable
      header={
        <>
          <div className="flex flex-col gap-4 px-4 py-[18px] lg:flex-row lg:items-start lg:justify-between lg:px-6">
            <div className="min-w-0 flex-1">
              <h2 className="text-base font-semibold leading-[25px] text-[#101828]">All Favors</h2>
              <p className="truncate text-[13px] font-normal leading-[18px] text-[#475467]">
                These favors are created in the last 3 months.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center justify-end gap-3">
              <Button
                component={Link}
                href={customFavorsHref}
                disableElevation
                startIcon={<TuneOutlinedIcon sx={{ fontSize: 18 }} />}
                sx={outlineButtonSx}
                onClick={(event) => event.stopPropagation()}
              >
                View Custom Favors
              </Button>
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
      minWidth={1050}
      enableClientPagination
    />
  );
}
