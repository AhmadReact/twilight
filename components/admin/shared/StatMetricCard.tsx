import type { ReactNode } from 'react';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';

type StatMetricCardProps = {
  label: string;
  value: string;
  footer?: ReactNode;
  trend?: { value: string; direction: 'down' | 'up' };
  className?: string;
};

export default function StatMetricCard({
  label,
  value,
  footer,
  trend,
  className = '',
}: StatMetricCardProps) {
  return (
    <div
      className={`flex min-w-[200px] flex-1 flex-col gap-2 rounded-xl border border-[#EAECF0] bg-white p-5 shadow-[0px_1px_1px_rgba(16,24,40,0.05)] sm:min-w-[232px] sm:p-6 ${className}`}
    >
      <p className="text-sm font-medium leading-5 text-[#475467]">{label}</p>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <p className="text-[28px] font-semibold leading-[38px] text-[#101828] sm:text-[30px]">
          {value}
        </p>
        {trend ? (
          <span className="mb-1 inline-flex items-center gap-1 rounded-full border border-[#FECDCA] bg-[#FEF3F2] py-0.5 pl-2 pr-2.5 text-sm font-medium text-[#B42318]">
            <TrendingDownOutlinedIcon sx={{ fontSize: 12 }} />
            {trend.value}
          </span>
        ) : null}
      </div>
      {footer ? <div className="mt-1">{footer}</div> : null}
    </div>
  );
}
