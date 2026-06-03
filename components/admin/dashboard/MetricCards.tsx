import type { ReactNode } from 'react';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

type TrendDirection = 'up' | 'down';

function TrendBadge({
  direction,
  value,
  suffix = 'vs last month',
}: {
  direction: TrendDirection;
  value: string;
  suffix?: string;
}) {
  const isUp = direction === 'up';

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {isUp ? (
          <TrendingUpOutlinedIcon sx={{ fontSize: 20, color: '#067647' }} />
        ) : (
          <TrendingDownOutlinedIcon sx={{ fontSize: 20, color: '#B42318' }} />
        )}
        <span
          className={`text-sm font-medium leading-5 ${isUp ? 'text-[#067647]' : 'text-[#B42318]'}`}
        >
          {value}
        </span>
      </div>
      <span className="truncate text-sm font-medium leading-5 text-[#475467]">{suffix}</span>
    </div>
  );
}

function FeaturedIcon({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex size-12 shrink-0 items-center justify-center rounded-[28px] border-8 border-[#F9F5FF] bg-[#F4EBFF]">
      {children}
    </div>
  );
}

function StatCard({
  title,
  value,
  direction,
  change,
  icon,
}: {
  title: string;
  value: string;
  direction: TrendDirection;
  change: string;
  icon: ReactNode;
}) {
  return (
    <div className="flex min-w-[232px] flex-1 flex-col gap-6 rounded-xl border border-[#EAECF0] bg-white p-6 shadow-[0px_1px_1px_rgba(16,24,40,0.05)]">
      <div className="flex items-center gap-4">
        <FeaturedIcon>{icon}</FeaturedIcon>
        <p className="flex-1 text-base font-semibold leading-6 text-[#101828]">{title}</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-[30px] font-semibold leading-[38px] text-[#101828]">{value}</p>
        <TrendBadge direction={direction} value={change} />
      </div>
    </div>
  );
}

function MiniChart({ direction }: { direction: TrendDirection }) {
  const isUp = direction === 'up';
  const stroke = isUp ? '#17B26A' : '#F04438';
  const fillId = isUp ? 'chartFillUp' : 'chartFillDown';

  return (
    <svg viewBox="0 0 200 72" className="h-[72px] w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.2" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={
          isUp
            ? 'M0 60 L30 55 L60 48 L90 40 L120 32 L150 22 L180 12 L200 8 L200 72 L0 72 Z'
            : 'M0 12 L30 18 L60 24 L90 32 L120 38 L150 46 L180 54 L200 58 L200 72 L0 72 Z'
        }
        fill={`url(#${fillId})`}
      />
      <path
        d={
          isUp
            ? 'M0 60 L30 55 L60 48 L90 40 L120 32 L150 22 L180 12 L200 8'
            : 'M0 12 L30 18 L60 24 L90 32 L120 38 L150 46 L180 54 L200 58'
        }
        fill="none"
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
}

function EarningsCard({
  title,
  value,
  direction,
  change,
}: {
  title: string;
  value: string;
  direction: TrendDirection;
  change: string;
}) {
  return (
    <div className="flex min-w-[232px] flex-1 flex-col gap-5 rounded-xl border border-[#EAECF0] bg-white p-6 shadow-[0px_1px_1px_rgba(16,24,40,0.05)]">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium leading-5 text-[#475467]">{title}</p>
        <div className="flex flex-wrap items-center justify-between gap-y-3">
          <p className="text-[30px] font-semibold leading-[38px] text-[#101828]">{value}</p>
          <TrendBadge direction={direction} value={change} />
        </div>
      </div>
      <MiniChart direction={direction} />
    </div>
  );
}

export default function MetricCards() {
  return (
    <div className="flex flex-wrap gap-6">
      <StatCard
        title="Today's Buyers"
        value="19"
        direction="up"
        change="50%"
        icon={<PersonOutlineOutlinedIcon sx={{ fontSize: 24, color: '#9643E8' }} />}
      />
      <StatCard
        title="Total Teams"
        value="14"
        direction="down"
        change="30%"
        icon={<GroupsOutlinedIcon sx={{ fontSize: 24, color: '#9643E8' }} />}
      />
      <StatCard
        title="Total Sellers"
        value="10"
        direction="up"
        change="100%"
        icon={<PersonAddAltOutlinedIcon sx={{ fontSize: 24, color: '#9643E8' }} />}
      />
      <EarningsCard
        title="Total Platform Earnings"
        value="$91.42"
        direction="up"
        change="100%"
      />
      <EarningsCard
        title="Total Pro Seller Earnings"
        value="$91.42"
        direction="up"
        change="100%"
      />
      <EarningsCard
        title="Total Teams Earnings"
        value="$91.42"
        direction="down"
        change="100%"
      />
    </div>
  );
}
