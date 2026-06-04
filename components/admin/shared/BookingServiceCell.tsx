'use client';

import Avatar from '@mui/material/Avatar';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { grayColors } from '@/lib/theme';

type BookingServiceCellProps = {
  title: string;
  priceFrom: string;
  location: string;
  scheduledDate: string;
  thumbnailSrc: string;
};

export default function BookingServiceCell({
  title,
  priceFrom,
  location,
  scheduledDate,
  thumbnailSrc,
}: BookingServiceCellProps) {
  return (
    <div className="flex min-w-[320px] items-start gap-3">
      <Avatar
        src={thumbnailSrc}
        alt=""
        variant="rounded"
        sx={{ width: 36, height: 36, borderRadius: '4px', flexShrink: 0 }}
      />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium leading-5 text-[#212121]">{title}</p>
        <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm font-semibold leading-5 text-[#8E40FF]">{priceFrom}</span>
          <span className="inline-flex items-center gap-1 text-[11px] leading-[15px] text-[#667085]">
            <PlaceOutlinedIcon sx={{ fontSize: 14, color: grayColors[500] }} />
            {location}
          </span>
        </div>
      </div>
      <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#667085] py-0.5 pl-1.5 pr-2 text-[9px] font-medium leading-[13px] text-[#667085]">
        <CalendarTodayOutlinedIcon sx={{ fontSize: 9 }} />
        {scheduledDate}
      </span>
    </div>
  );
}
