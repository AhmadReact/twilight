'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AdminDataTable, { type AdminTableColumn } from '@/components/admin/shared/AdminDataTable';
import AvatarStackCell from '@/components/admin/shared/AvatarStackCell';
import FavorServiceCell from '@/components/admin/shared/FavorServiceCell';
import StatusBadge from '@/components/admin/shared/StatusBadge';
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

  const columns = useMemo<AdminTableColumn<CustomFavorRow>[]>(
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
        id: 'acceptor',
        header: 'Favor Acceptor',
        render: (row) =>
          row.acceptor ? (
            <UserInfoCell
              name={row.acceptor.name}
              role={row.acceptor.role}
              avatarSrc={row.acceptor.avatarSrc}
              avatarBg={row.acceptor.avatarBg}
            />
          ) : (
            <span className="text-sm font-medium leading-5 text-[#475467]">-</span>
          ),
      },
      {
        id: 'invitedSellers',
        header: 'Invited Sellers',
        align: 'center',
        render: (row) => (
          <AvatarStackCell
            avatars={row.invitedSellerAvatars}
            extraCount={row.invitedSellerExtra}
          />
        ),
      },
      {
        id: 'bidders',
        header: 'Bidders',
        align: 'center',
        render: (row) => (
          <AvatarStackCell avatars={row.bidderAvatars} extraCount={row.bidderExtra} />
        ),
      },
      {
        id: 'acceptanceStatus',
        header: 'Acceptance Status',
        align: 'center',
        render: (row) => {
          const statusStyle = acceptanceStatusStyles[row.acceptanceStatus];
          return (
            <StatusBadge
              label={row.acceptanceStatus}
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
        </>
      }
      columns={columns}
      rows={filteredRows}
      getRowKey={(row, index) => `${row.slug}-${index}`}
      onRowClick={(row) => router.push(`${hrefBase}/${row.slug}`)}
      minWidth={1200}
      enableClientPagination
    />
  );
}
