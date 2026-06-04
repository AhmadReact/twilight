'use client';

import type { ReactNode } from 'react';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { grayColors } from '@/lib/theme';

type CustomFavorDetailsCardProps = {
  price: string;
  description: string[];
  attachments: string[];
  startTime: string;
  startDate: string;
  buyerLocation: string;
};

function SchedulePill({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-[#EAECF0] bg-[#F9FAFB] py-1 pl-2.5 pr-3 text-sm font-medium leading-5 text-[#344054]">
      {icon}
      {children}
    </span>
  );
}

export default function CustomFavorDetailsCard({
  price,
  description,
  attachments,
  startTime,
  startDate,
  buyerLocation,
}: CustomFavorDetailsCardProps) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-7">
      <div className="min-w-0 flex-1 rounded-2xl border border-[#EAECF0] bg-[#FCFCFD] px-3 py-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold leading-[26px] tracking-[-0.04px] text-[#344054]">
            Favor Details
          </h3>
          <span className="text-base font-semibold leading-6 text-[#8E40FF]">{price}</span>
        </div>

        <div className="mt-2 flex flex-col gap-1.5">
          {description.map((line) => (
            <div key={line} className="flex items-start gap-2">
              <FiberManualRecordIcon
                sx={{ fontSize: 6, color: '#8E40FF', mt: '5px', flexShrink: 0 }}
              />
              <p className="text-xs leading-4 tracking-[0.04px] text-[#616161]">{line}</p>
            </div>
          ))}
        </div>

        <div className="mt-3">
          <h4 className="text-lg font-semibold leading-[26px] tracking-[-0.04px] text-[#344054]">
            Attachments
          </h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {attachments.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="h-[90px] w-[120px] shrink-0 overflow-hidden rounded-lg bg-[#F2F4F7]"
              >
                <img src={src} alt="" className="size-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full shrink-0 flex-col gap-10 lg:w-[280px] lg:pt-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <p className="text-base font-semibold leading-6 text-[#363D45]">Start time</p>
            <div className="mt-3">
              <SchedulePill icon={<AccessTimeOutlinedIcon sx={{ fontSize: 12 }} />}>
                {startTime}
              </SchedulePill>
            </div>
          </div>
          <div>
            <p className="text-base font-semibold leading-6 text-[#363D45]">Start Date</p>
            <div className="mt-3">
              <SchedulePill icon={<CalendarMonthOutlinedIcon sx={{ fontSize: 12 }} />}>
                {startDate}
              </SchedulePill>
            </div>
          </div>
        </div>

        <div>
          <p className="text-base font-semibold leading-6 text-[#363D45]">Buyer location</p>
          <div className="mt-3 flex items-start gap-1">
            <PlaceOutlinedIcon sx={{ fontSize: 14, mt: '2px', color: grayColors[500] }} />
            <p className="text-sm font-medium leading-5 text-[#344054]">{buyerLocation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
