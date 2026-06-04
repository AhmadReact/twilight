'use client';

import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import AdminBreadcrumbs from '@/components/admin/shared/AdminBreadcrumbs';
import MemberRow from '@/components/admin/shared/MemberRow';
import RecentActivityPanel from '@/components/admin/shared/RecentActivityPanel';
import SegmentedControl from '@/components/admin/shared/SegmentedControl';
import StatMetricCard from '@/components/admin/shared/StatMetricCard';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import FlagCountStepper from '@/components/admin/teams/FlagCountStepper';
import TeamBookingsTable from '@/components/admin/teams/TeamBookingsTable';
import TeamFavorsTable from '@/components/admin/teams/TeamFavorsTable';
import type { TeamDetail } from '@/lib/admin/mockTeamDetailData';

const teamStatusStyles = {
  Active: { bg: '#ECFDF3', border: '#ABEFC6', text: '#067647' },
  Blocked: { bg: '#FEF3F2', border: '#FECDCA', text: '#B42318' },
} as const;

type TeamDetailPageProps = {
  detail: TeamDetail;
};

export default function TeamDetailPage({ detail }: TeamDetailPageProps) {
  const [flagCount, setFlagCount] = useState(detail.flagCount);
  const [tab, setTab] = useState('favors');
  const statusStyle = teamStatusStyles[detail.team.status];

  return (
    <div className="flex flex-col gap-8 px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <AdminBreadcrumbs
            items={[
              { label: 'Teams', href: '/admin/teams' },
              { label: detail.displayName },
            ]}
          />

          <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between">
            <div className="flex min-w-0 flex-1 items-center gap-4 sm:gap-5">
              <Avatar
                src={detail.team.logoSrc}
                alt={detail.displayName}
                sx={{
                  width: { xs: 56, sm: 64 },
                  height: { xs: 56, sm: 64 },
                  border: '1.5px solid #FFFFFF',
                  boxShadow: '0 0 0 1px rgba(0,0,0,0.08)',
                }}
              />
              <div className="min-w-0">
                <h1 className="truncate text-2xl font-semibold leading-[38px] text-[#101828] sm:text-[30px]">
                  {detail.displayName}
                </h1>
                <p className="text-base font-normal leading-6 text-[#475467]">
                  {detail.memberCount} Members
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge
                label={detail.team.status}
                bg={statusStyle.bg}
                border={statusStyle.border}
                text={statusStyle.text}
              />
              <StatusBadge label="Team" bg="#F9F5FF" border="#E9D7FE" text="#6941C6" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-base text-[#475467]">Flag Count:</span>
            <FlagCountStepper value={flagCount} onChange={setFlagCount} />
            <Button
              disableElevation
              startIcon={<BlockOutlinedIcon />}
              sx={{
                borderRadius: '1000px',
                border: '1px solid #FDA29B',
                bgcolor: '#FFFFFF',
                boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                px: '12px',
                py: '8px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#B42318',
                '&:hover': { bgcolor: '#FEF3F2', borderColor: '#FDA29B' },
              }}
            >
              Block User
            </Button>
          </div>
          <p className="text-base text-[#475467]">
            Member Since {detail.memberSince}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatMetricCard
            label="Total Earning"
            value={detail.totalEarning}
            trend={{ value: detail.earningTrend, direction: 'down' }}
          />
          <StatMetricCard
            label="Total Bookings"
            value={String(detail.totalBookings)}
            footer={
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="text-[#17B26A]">
                  <span className="mr-2 text-base">{detail.completedBookings}</span>
                  Completed
                </span>
                <span className="text-[#475467]">|</span>
                <span className="text-[#F04438]">
                  <span className="mr-2 text-base">{detail.cancelledBookings}</span>
                  Cancelled
                </span>
              </div>
            }
          />
          <StatMetricCard
            label="In-Progress Bookings"
            value={String(detail.inProgressBookings)}
          />
          <StatMetricCard
            label="Upcoming Bookings"
            value={String(detail.upcomingBookings)}
          />
        </div>

        <div className="h-px w-full bg-[#EAECF0]" />
      </header>

      <section className="flex flex-col gap-6 xl:flex-row xl:items-start">
        <div className="min-w-0 flex-1 space-y-6">
          <MemberRow member={detail.teamLead} />

          <div>
            <h2 className="text-lg font-semibold leading-7 text-[#101828]">Team Members</h2>
            <div className="mt-4 flex flex-col gap-4">
              {detail.members.map((member, index) => (
                <MemberRow key={`${member.email}-${index}`} member={member} />
              ))}
            </div>
          </div>
        </div>

        <RecentActivityPanel activities={detail.activities} />
      </section>

      <SegmentedControl
        options={[
          { id: 'favors', label: 'Favors' },
          { id: 'bookings', label: 'Bookings' },
        ]}
        value={tab}
        onChange={setTab}
        className="max-w-full lg:max-w-[1045px]"
      />

      {tab === 'favors' ? (
        <TeamFavorsTable favors={detail.favors} />
      ) : (
        <TeamBookingsTable bookings={detail.bookings} />
      )}
    </div>
  );
}
