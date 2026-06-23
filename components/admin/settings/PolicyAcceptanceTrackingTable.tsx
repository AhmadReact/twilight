'use client';

import { useMemo } from 'react';
import IconButton from '@mui/material/IconButton';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AdminDataTable, { type AdminTableColumn } from '@/components/admin/shared/AdminDataTable';
import type { PolicyAcceptanceRecord } from '@/lib/admin/mockPolicySettingsData';
import { grayColors } from '@/lib/theme';

type PolicyAcceptanceTrackingTableProps = {
  rows: PolicyAcceptanceRecord[];
};

export default function PolicyAcceptanceTrackingTable({
  rows,
}: PolicyAcceptanceTrackingTableProps) {
  const columns = useMemo<AdminTableColumn<PolicyAcceptanceRecord>[]>(
    () => [
      {
        id: 'userId',
        header: 'User ID',
        render: (row) => (
          <span className="text-sm font-medium leading-5 text-[#212121]">{row.userId}</span>
        ),
      },
      {
        id: 'policyVersion',
        header: 'Policy Version',
        align: 'center',
        render: (row) => (
          <span className="text-sm font-normal leading-5 text-[#475467]">{row.policyVersion}</span>
        ),
      },
      {
        id: 'acceptanceDate',
        header: 'Acceptance Date',
        align: 'center',
        render: (row) => (
          <span className="text-sm font-normal leading-5 text-[#475467]">{row.acceptanceDate}</span>
        ),
      },
      {
        id: 'actions',
        header: '',
        align: 'right',
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
          <div className="px-4 pt-[18px] sm:px-6">
            <h3 className="text-base font-semibold leading-[25px] text-[#101828]">
              Acceptance Tracking
            </h3>
          </div>
          <div className="mt-[18px] border-t border-[#EAECF0]" />
        </>
      }
      columns={columns}
      rows={rows}
      getRowKey={(row) => row.id}
      minWidth={640}
      enableClientPagination
    />
  );
}
