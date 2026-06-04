'use client';

import type { ReactNode } from 'react';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

type SchedulePillsRowProps = {
  date: string;
  time: string;
  location: string;
};

function Pill({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <span className="inline-flex max-w-full items-center gap-1 rounded-full border border-[#EAECF0] bg-[#F9FAFB] py-1 pl-2.5 pr-3 text-sm font-medium leading-5 text-[#344054]">
      {icon}
      <span className="truncate">{children}</span>
    </span>
  );
}

export default function SchedulePillsRow({ date, time, location }: SchedulePillsRowProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Pill icon={<CalendarMonthOutlinedIcon sx={{ fontSize: 12 }} />}>{date}</Pill>
      <Pill icon={<AccessTimeOutlinedIcon sx={{ fontSize: 12 }} />}>{time}</Pill>
      <Pill icon={<PlaceOutlinedIcon sx={{ fontSize: 12 }} />}>{location}</Pill>
    </div>
  );
}
