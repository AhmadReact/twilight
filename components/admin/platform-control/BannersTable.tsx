'use client';

import { useMemo } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AdminDataTable, { type AdminTableColumn } from '@/components/admin/shared/AdminDataTable';
import BannerPreviewCard from '@/components/admin/shared/BannerPreviewCard';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import { primaryButtonSx } from '@/lib/admin/adminButtonStyles';
import { bannerStatusStyles } from '@/lib/admin/bannerBadgeStyles';
import { adminBannerRows, filterBannerRows } from '@/lib/admin/mockBannersData';
import type { AdminBannerRow } from '@/lib/admin/mockBannersData';
import { grayColors } from '@/lib/theme';

type BannersTableProps = {
  searchQuery: string;
  statusFilter: string;
};

export default function BannersTable({ searchQuery, statusFilter }: BannersTableProps) {
  const filteredRows = useMemo(
    () => filterBannerRows(adminBannerRows, searchQuery, statusFilter),
    [searchQuery, statusFilter],
  );

  const columns = useMemo<AdminTableColumn<AdminBannerRow>[]>(
    () => [
      {
        id: 'bannerId',
        header: 'Banner ID',
        align: 'center',
        render: (row) => (
          <span className="text-sm font-medium leading-5 text-[#101828]">{row.bannerId}</span>
        ),
      },
      {
        id: 'title',
        header: 'Title',
        render: (row) => (
          <span className="text-sm font-medium leading-5 text-[#101828]">{row.title}</span>
        ),
      },
      {
        id: 'type',
        header: 'Type',
        render: (row) => (
          <span className="text-sm font-normal leading-5 text-[#475467]">{row.type}</span>
        ),
      },
      {
        id: 'startDate',
        header: 'Start Date',
        align: 'center',
        render: (row) => (
          <span className="text-sm font-normal leading-5 text-[#475467]">{row.startDate}</span>
        ),
      },
      {
        id: 'endDate',
        header: 'End Date',
        align: 'center',
        render: (row) => (
          <span className="text-sm font-normal leading-5 text-[#475467]">{row.endDate}</span>
        ),
      },
      {
        id: 'status',
        header: 'Status',
        align: 'center',
        render: (row) => {
          const statusStyle = bannerStatusStyles[row.status];
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
        id: 'imagePreview',
        header: 'Image Preview',
        render: (row) => (
          <BannerPreviewCard
            discountLabel={row.preview.discountLabel}
            headline={row.preview.headline}
            description={row.preview.description}
            backgroundColor={row.preview.backgroundColor}
            imageUrl={row.preview.imageUrl}
          />
        ),
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
      title="Banners"
      description="These banners have been created in the last 12 months."
      headerActions={
        <>
          <Button
            disableElevation
            startIcon={<AddOutlinedIcon sx={{ fontSize: 20 }} />}
            sx={primaryButtonSx}
          >
            Banner
          </Button>
          <IconButton aria-label="More options" size="small" sx={{ color: grayColors[700] }}>
            <MoreVertOutlinedIcon fontSize="small" />
          </IconButton>
        </>
      }
      columns={columns}
      rows={filteredRows}
      getRowKey={(row) => row.id}
      striped="purple"
      minWidth={980}
      enableClientPagination
    />
  );
}
