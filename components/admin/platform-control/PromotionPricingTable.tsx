'use client';

import { useMemo } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AdminDataTable, { type AdminTableColumn } from '@/components/admin/shared/AdminDataTable';
import BoostAppearanceBadges from '@/components/admin/shared/BoostAppearanceBadges';
import { primaryButtonSx } from '@/lib/admin/adminButtonStyles';
import { boostPackageRows } from '@/lib/admin/mockBoostControlData';
import type { BoostPackageRow } from '@/lib/admin/mockBoostControlData';
import { grayColors } from '@/lib/theme';

export default function PromotionPricingTable() {
  const columns = useMemo<AdminTableColumn<BoostPackageRow>[]>(
    () => [
      {
        id: 'name',
        header: 'Promotion Package',
        render: (row) => (
          <span className="text-sm font-medium leading-5 text-[#212121]">{row.name}</span>
        ),
      },
      {
        id: 'price',
        header: 'Price',
        render: (row) => (
          <span className="text-sm font-normal leading-5 text-[#475467]">{row.price}</span>
        ),
      },
      {
        id: 'days',
        header: 'No. of Days',
        align: 'center',
        render: (row) => (
          <span className="text-sm font-normal leading-5 text-[#475467]">{row.days}</span>
        ),
      },
      {
        id: 'appearsOn',
        header: 'Appears on',
        align: 'center',
        render: (row) => <BoostAppearanceBadges locations={row.appearsOn} />,
      },
      {
        id: 'priority',
        header: 'Priority',
        align: 'center',
        render: (row) => (
          <span className="text-sm font-normal leading-5 text-[#475467]">{row.priority}</span>
        ),
      },
      {
        id: 'commission',
        header: 'Commission',
        align: 'center',
        render: (row) => (
          <span className="text-sm font-normal leading-5 text-[#475467]">{row.commission}</span>
        ),
      },
      {
        id: 'actions',
        header: '',
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
          <div className="flex flex-col gap-4 px-4 pt-[18px] sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <h3 className="text-base font-semibold leading-[25px] text-[#101828]">
              Promotion Pricing
            </h3>
            <Button
              disableElevation
              startIcon={<AddOutlinedIcon sx={{ fontSize: 18 }} />}
              sx={{
                ...primaryButtonSx,
                alignSelf: 'flex-start',
                px: '12px',
                py: '9px',
                fontSize: '13px',
              }}
            >
              New Package
            </Button>
          </div>
          <div className="mt-[18px] border-t border-[#EAECF0]" />
        </>
      }
      columns={columns}
      rows={boostPackageRows}
      getRowKey={(row) => row.id}
      minWidth={920}
      enableClientPagination
    />
  );
}
