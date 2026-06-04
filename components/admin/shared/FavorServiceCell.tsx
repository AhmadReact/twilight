'use client';

import Avatar from '@mui/material/Avatar';

type FavorServiceCellProps = {
  title: string;
  priceFrom: string;
  date: string;
  category: string;
  thumbnailSrc: string;
};

export default function FavorServiceCell({
  title,
  priceFrom,
  date,
  category,
  thumbnailSrc,
}: FavorServiceCellProps) {
  return (
    <div className="flex min-w-[280px] items-start gap-3">
      <Avatar
        src={thumbnailSrc}
        alt=""
        variant="rounded"
        sx={{ width: 36, height: 36, borderRadius: '4px', flexShrink: 0 }}
      />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium leading-5 text-[#212121]">{title}</p>
        <div className="mt-0.5 flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm font-semibold leading-5 text-[#8E40FF]">{priceFrom}</span>
          <span className="text-sm font-normal leading-5 text-[#98A2B3]">{date}</span>
        </div>
      </div>
      <span className="inline-flex shrink-0 items-center rounded-full border border-[#E9D7FE] bg-[#F9F5FF] px-2 py-0.5 text-[11px] font-medium leading-4 text-[#6941C6]">
        {category}
      </span>
    </div>
  );
}
