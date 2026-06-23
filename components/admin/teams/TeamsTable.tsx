'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AdminDataTable, { type AdminTableColumn } from '@/components/admin/shared/AdminDataTable';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import { outlineButtonSx, primaryButtonSx } from '@/lib/admin/adminButtonStyles';
import { TEAM_COUNT, teamRows, type TeamLead, type TeamRow, type TeamStatus } from '@/lib/admin/mockTeamsData';
import { grayColors } from '@/lib/theme';

const teamStatusStyles: Record<TeamStatus, { bg: string; border: string; text: string }> = {
  Active: { bg: '#ECFDF3', border: '#ABEFC6', text: '#067647' },
  Blocked: { bg: '#FEF3F2', border: '#FECDCA', text: '#B42318' },
};

function TeamLeadCell({ lead }: { lead: TeamLead }) {
  return (
    <div className="flex items-center gap-3">
      <Avatar
        src={lead.avatarSrc}
        alt={lead.name}
        sx={{
          width: 36,
          height: 36,
          bgcolor: lead.avatarBg ?? '#F2F4F7',
          fontSize: lead.initials ? 14 : undefined,
          fontWeight: 600,
          color: grayColors[600],
          border: '1px solid rgba(0,0,0,0.08)',
        }}
      >
        {lead.initials}
      </Avatar>
      <div className="flex min-w-0 flex-col">
        <span className="text-sm font-medium leading-5 text-[#101828]">{lead.name}</span>
        <span className="truncate text-sm font-normal leading-[18px] text-[#475467]">
          {lead.email}
        </span>
      </div>
    </div>
  );
}

function WorkersCell({ row }: { row: TeamRow }) {
  return (
    <div className="flex items-center">
      {row.workerAvatars.slice(0, 5).map((src, index) => (
        <Avatar
          key={`${row.name}-worker-${index}`}
          src={src}
          alt=""
          sx={{
            width: 24,
            height: 24,
            border: '2px solid #FFFFFF',
            ml: index === 0 ? 0 : '-6px',
            zIndex: 5 - index,
          }}
        />
      ))}
      <Avatar
        sx={{
          width: 24,
          height: 24,
          ml: '-6px',
          bgcolor: '#F2F4F7',
          border: '2px solid #FFFFFF',
          fontSize: 11,
          fontWeight: 600,
          color: grayColors[600],
          zIndex: 0,
        }}
      >
        +{row.extraWorkers}
      </Avatar>
    </div>
  );
}

function TeamNameCell({ row }: { row: TeamRow }) {
  return (
    <div className="flex items-center gap-3">
      <Avatar
        src={row.logoSrc}
        alt={row.name}
        variant="rounded"
        sx={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1px solid rgba(0,0,0,0.08)',
        }}
      />
      <div className="flex min-w-0 flex-col">
        <span className="text-sm font-medium leading-5 text-[#101828]">{row.name}</span>
        <span className="text-sm font-normal leading-[18px] text-[#475467]">{row.website}</span>
      </div>
    </div>
  );
}

export default function TeamsTable() {
  const router = useRouter();

  const columns = useMemo<AdminTableColumn<TeamRow>[]>(
    () => [
      {
        id: 'teamId',
        header: 'Team ID',
        align: 'center',
        render: (row) => (
          <span className="text-sm font-medium leading-5 text-[#101828]">{row.teamId}</span>
        ),
      },
      {
        id: 'teamName',
        header: (
          <span className="inline-flex items-center gap-1">
            Team Name
            <KeyboardArrowDownOutlinedIcon sx={{ fontSize: 14 }} />
          </span>
        ),
        render: (row) => (
          <Link
            href={`/admin/teams/${row.slug}`}
            className="block"
            onClick={(event) => event.stopPropagation()}
          >
            <TeamNameCell row={row} />
          </Link>
        ),
      },
      {
        id: 'status',
        header: 'Status',
        align: 'center',
        render: (row) => {
          const statusStyle = teamStatusStyles[row.status];
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
        id: 'teamLead',
        header: 'Team Lead',
        render: (row) => <TeamLeadCell lead={row.teamLead} />,
      },
      {
        id: 'workers',
        header: 'Workers',
        render: (row) => <WorkersCell row={row} />,
      },
      {
        id: 'earnings',
        header: 'Earnings',
        render: (row) => (
          <span className="text-sm font-medium leading-5 text-[#101828]">{row.earnings}</span>
        ),
      },
      {
        id: 'createdOn',
        header: 'Created on',
        render: (row) => (
          <span className="text-sm font-medium leading-5 text-[#101828]">{row.createdOn}</span>
        ),
      },
      {
        id: 'bookings',
        header: 'Bookings',
        render: (row) => (
          <span className="text-sm font-medium leading-5 text-[#101828]">{row.bookings}</span>
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
      title="Teams"
      badge={`${TEAM_COUNT} teams`}
      description="These teams have joined in the last 12 months."
      headerActions={
        <>
          <Button disableElevation sx={outlineButtonSx}>
            Notify Teams
          </Button>
          <Button disableElevation startIcon={<AddOutlinedIcon />} sx={primaryButtonSx}>
            New Team
          </Button>
          <IconButton aria-label="More options" size="small" sx={{ color: grayColors[700] }}>
            <MoreVertOutlinedIcon fontSize="small" />
          </IconButton>
        </>
      }
      columns={columns}
      rows={teamRows}
      getRowKey={(row, index) => `${row.teamId}-${row.name}-${index}`}
      onRowClick={(row) => router.push(`/admin/teams/${row.slug}`)}
      minWidth={1100}
      enableClientPagination
    />
  );
}
