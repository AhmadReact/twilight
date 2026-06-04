'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import TablePagination from '@/components/admin/shared/TablePagination';
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

  return (
    <section className="overflow-hidden rounded-[11px] border border-[#EAECF0] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.1)]">
      <div className="flex items-start justify-between gap-4 px-6 pb-0 pt-[18px]">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-base font-semibold leading-[25px] text-[#101828]">Teams</h2>
            <span className="inline-flex items-center rounded-full border border-[#E9D7FE] bg-[#F9F5FF] px-2 py-0.5 text-[11px] font-medium leading-4 text-[#6941C6]">
              {TEAM_COUNT} teams
            </span>
          </div>
          <p className="truncate text-[13px] font-normal leading-[18px] text-[#475467]">
            These teams have joined in the last 12 months.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <Button disableElevation sx={outlineButtonSx}>
            Notify Teams
          </Button>
          <Button disableElevation startIcon={<AddOutlinedIcon />} sx={primaryButtonSx}>
            New Team
          </Button>
          <IconButton aria-label="More options" size="small" sx={{ color: grayColors[700] }}>
            <MoreVertOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
      </div>

      <div className="mt-[18px] border-t border-[#EAECF0]" />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px] border-collapse text-left">
          <thead>
            <tr className="bg-[#F9FAFB]">
              <th className="border-b border-[#EAECF0] px-6 py-3 text-center text-xs font-medium leading-4 text-[#475467]">
                Team ID
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-xs font-medium leading-4 text-[#475467]">
                <span className="inline-flex items-center gap-1">
                  Team Name
                  <KeyboardArrowDownOutlinedIcon sx={{ fontSize: 14 }} />
                </span>
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-center text-xs font-medium leading-4 text-[#475467]">
                Status
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-xs font-medium leading-4 text-[#475467]">
                Team Lead
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-xs font-medium leading-4 text-[#475467]">
                Workers
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-xs font-medium leading-4 text-[#475467]">
                Earnings
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-xs font-medium leading-4 text-[#475467]">
                Created on
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-xs font-medium leading-4 text-[#475467]">
                Bookings
              </th>
              <th className="border-b border-[#EAECF0] px-6 py-3 text-center text-xs font-medium leading-4 text-[#475467]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {teamRows.map((row, index) => {
              const statusStyle = teamStatusStyles[row.status];

              return (
                <tr
                  key={`${row.teamId}-${row.name}-${index}`}
                  onClick={() => router.push(`/admin/teams/${row.slug}`)}
                  className="cursor-pointer border-b border-[#EAECF0] transition-colors last:border-b-0 hover:bg-[#F9FAFB]"
                >
                  <td className="px-6 py-4 text-center text-sm font-medium leading-5 text-[#101828]">
                    {row.teamId}
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/admin/teams/${row.slug}`}
                      className="block"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <TeamNameCell row={row} />
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <StatusBadge
                      label={row.status}
                      bg={statusStyle.bg}
                      border={statusStyle.border}
                      text={statusStyle.text}
                    />
                  </td>
                  <td className="px-6 py-4">
                    <TeamLeadCell lead={row.teamLead} />
                  </td>
                  <td className="px-6 py-4">
                    <WorkersCell row={row} />
                  </td>
                  <td className="px-6 py-4 text-sm font-medium leading-5 text-[#101828]">
                    {row.earnings}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium leading-5 text-[#101828]">
                    {row.createdOn}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium leading-5 text-[#101828]">
                    {row.bookings}
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
