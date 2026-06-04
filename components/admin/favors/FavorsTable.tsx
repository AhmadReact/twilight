'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import FavorServiceCell from '@/components/admin/shared/FavorServiceCell';
import FilterButtonGroup from '@/components/admin/shared/FilterButtonGroup';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import TablePagination from '@/components/admin/shared/TablePagination';
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

  return (
    <section className="overflow-hidden rounded-[11px] border border-[#EAECF0] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.1)]">
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

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1050px] border-collapse text-left">
          <thead>
            <tr className="bg-[#F9FAFB]">
              <th className="border-b border-[#EAECF0] px-6 py-3 text-xs font-medium leading-4 text-[#475467]">
                Favor ID
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-xs font-medium leading-4 text-[#475467]">
                <span className="inline-flex items-center gap-1">
                  Favors
                  <KeyboardArrowDownOutlinedIcon sx={{ fontSize: 14 }} />
                </span>
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-xs font-medium leading-4 text-[#475467]">
                Favor Creator
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
            {filteredRows.map((row, index) => {
              const statusStyle = favorStatusStyles[row.status];

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
                      {row.favorId}
                    </Link>
                  </td>
                  <td className="px-6 py-4">
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
                  </td>
                  <td className="px-6 py-4">
                    <UserInfoCell
                      name={row.creator.name}
                      role={row.creator.role}
                      avatarSrc={row.creator.avatarSrc}
                      avatarBg={row.creator.avatarBg}
                    />
                  </td>
                  <td className="px-6 py-4 text-center text-[10px] font-normal leading-[18px] text-[#475467]">
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
