import type { ReactNode } from 'react';

type AdminTableCardHeaderProps = {
  title: string;
  badge: string;
  description: string;
  actions?: ReactNode;
};

export default function AdminTableCardHeader({
  title,
  badge,
  description,
  actions,
}: AdminTableCardHeaderProps) {
  return (
    <>
      <div className="flex flex-col gap-4 px-4 pt-[18px] sm:flex-row sm:items-start sm:justify-between sm:gap-4 sm:px-6">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-base font-semibold leading-[25px] text-[#101828]">{title}</h2>
            <span className="inline-flex items-center rounded-full border border-[#E9D7FE] bg-[#F9F5FF] px-2 py-0.5 text-[11px] font-medium leading-4 text-[#6941C6]">
              {badge}
            </span>
          </div>
          <p className="truncate text-[13px] font-normal leading-[18px] text-[#475467]">
            {description}
          </p>
        </div>
        {actions ? (
          <div className="flex shrink-0 flex-wrap items-center gap-3">{actions}</div>
        ) : null}
      </div>
      <div className="mt-[18px] border-t border-[#EAECF0]" />
    </>
  );
}
