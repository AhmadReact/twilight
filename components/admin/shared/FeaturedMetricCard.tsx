import type { ReactNode } from 'react';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

type FeaturedMetricCardProps = {
  title: string;
  value: string;
  trendDirection: 'up' | 'down';
  trendValue: string;
  icon: ReactNode;
  className?: string;
};

export default function FeaturedMetricCard({
  title,
  value,
  trendDirection,
  trendValue,
  icon,
  className = '',
}: FeaturedMetricCardProps) {
  const isUp = trendDirection === 'up';

  return (
    <div
      className={`flex min-w-[200px] flex-1 flex-col gap-6 rounded-xl border border-[#EAECF0] bg-white p-6 shadow-[0px_1px_1px_rgba(16,24,40,0.05)] sm:min-w-[232px] ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="relative flex size-12 shrink-0 items-center justify-center rounded-[28px] border-8 border-[#F9F5FF] bg-[#F4EBFF]">
          {icon}
        </div>
        <p className="flex-1 text-base font-semibold leading-6 text-[#101828]">{title}</p>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-[30px] font-semibold leading-[38px] text-[#101828]">{value}</p>
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
              {trendValue}
            </span>
          </div>
          <span className="truncate text-sm font-medium leading-5 text-[#475467]">vs last month</span>
        </div>
      </div>
    </div>
  );
}
