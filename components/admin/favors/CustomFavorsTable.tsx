'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AvatarStackCell from '@/components/admin/shared/AvatarStackCell';
import FavorServiceCell from '@/components/admin/shared/FavorServiceCell';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import TablePagination from '@/components/admin/shared/TablePagination';
import UserInfoCell from '@/components/admin/shared/UserInfoCell';
import type { AcceptanceStatus, CustomFavorRow } from '@/lib/admin/mockCustomFavorsData';
import { customFavorRows } from '@/lib/admin/mockCustomFavorsData';
import type { FavorCategory } from '@/lib/admin/mockFavorsData';
import { grayColors } from '@/lib/theme';

const acceptanceStatusStyles: Record<
  AcceptanceStatus,
  { bg: string; border: string; text: string }
> = {
  Accepted: { bg: '#ECFDF3', border: '#ABEFC6', text: '#067647' },
  Pending: { bg: '#F9FAFB', border: '#EAECF0', text: '#344054' },
};

const categoryFilterMap: Record<string, FavorCategory | null> = {
  all: null,
  cleaning: 'Cleaning',
  repairing: 'Repairing',
  laundry: 'Laundry',
};

const acceptanceFilterMap: Record<string, AcceptanceStatus | null> = {
  all: null,
  accepted: 'Accepted',
  pending: 'Pending',
};

type CustomFavorsTableProps = {
  rows?: CustomFavorRow[];
  categoryFilter?: string;
  acceptanceFilter?: string;
  hrefBase?: string;
};

export default function CustomFavorsTable({
  rows = customFavorRows,
  categoryFilter = 'all',
  acceptanceFilter = 'all',
  hrefBase = '/admin/favors/custom',
}: CustomFavorsTableProps) {
  const router = useRouter();

  const filteredRows = useMemo(() => {
    const category = categoryFilterMap[categoryFilter];
    const acceptance = acceptanceFilterMap[acceptanceFilter];

    return rows.filter((row) => {
      const matchesCategory = !category || row.category === category;
      const matchesAcceptance = !acceptance || row.acceptanceStatus === acceptance;
      return matchesCategory && matchesAcceptance;
    });
  }, [rows, categoryFilter, acceptanceFilter]);

  return (
    <section className="overflow-hidden rounded-[11px] border border-[#EAECF0] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.1)]">
      <div className="flex flex-col gap-4 px-4 py-5 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-semibold leading-7 text-[#101828]">All Favors</h2>
          <p className="truncate text-sm font-normal leading-5 text-[#475467]">
            These favors are created in the last 3 months.
          </p>
        </div>
        <IconButton aria-label="More options" size="small" sx={{ color: grayColors[700] }}>
          <MoreVertOutlinedIcon fontSize="small" />
        </IconButton>
      </div>

      <div className="border-t border-[#EAECF0]" />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1200px] border-collapse text-left">
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
              <th className="border-b border-[#EAECF0] px-6 py-3 text-xs font-medium leading-4 text-[#475467]">
                Favor Acceptor
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-center text-xs font-medium leading-4 text-[#475467]">
                Invited Sellers
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-center text-xs font-medium leading-4 text-[#475467]">
                Bidders
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-center text-xs font-medium leading-4 text-[#475467]">
                Acceptance Status
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-center text-xs font-medium leading-4 text-[#475467]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, index) => {
              const statusStyle = acceptanceStatusStyles[row.acceptanceStatus];

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
                  <td className="px-6 py-4">
                    {row.acceptor ? (
                      <UserInfoCell
                        name={row.acceptor.name}
                        role={row.acceptor.role}
                        avatarSrc={row.acceptor.avatarSrc}
                        avatarBg={row.acceptor.avatarBg}
                      />
                    ) : (
                      <span className="text-sm font-medium leading-5 text-[#475467]">-</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <AvatarStackCell
                      avatars={row.invitedSellerAvatars}
                      extraCount={row.invitedSellerExtra}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <AvatarStackCell avatars={row.bidderAvatars} extraCount={row.bidderExtra} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <StatusBadge
                      label={row.acceptanceStatus}
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
