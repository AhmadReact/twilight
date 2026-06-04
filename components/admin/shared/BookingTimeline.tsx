'use client';

import CheckIcon from '@mui/icons-material/Check';
import type { BookingTimelineStep, TimelineStepStatus } from '@/lib/admin/mockBookingDetailData';

function StepIcon({ status }: { status: TimelineStepStatus }) {
  if (status === 'complete') {
    return (
      <span className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-[#F9F5FF]">
        <CheckIcon sx={{ fontSize: 16, color: '#7F56D9' }} />
      </span>
    );
  }

  if (status === 'current') {
    return (
      <span className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-[#7F56D9] shadow-[0px_0px_0px_4px_rgba(158,119,237,0.24)]">
        <span className="size-2.5 rounded-full bg-white" />
      </span>
    );
  }

  return (
    <span className="relative flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-[#EAECF0] bg-white">
      <span className="size-2.5 rounded-full bg-[#EAECF0]" />
    </span>
  );
}

type BookingTimelineProps = {
  steps: BookingTimelineStep[];
};

export default function BookingTimeline({ steps }: BookingTimelineProps) {
  const currentIndex = steps.findIndex((step) => step.status === 'current');
  const progressIndex = currentIndex >= 0 ? currentIndex : steps.filter((s) => s.status === 'complete').length - 1;

  return (
    <section className="w-full py-5">
      <h2 className="text-center text-lg font-semibold leading-7 text-[#475467]">Booking Timeline</h2>

      <div className="relative mt-8 overflow-x-auto px-2">
        <div className="relative mx-auto flex min-w-[960px] max-w-5xl justify-center gap-4">
          <div
            className="absolute top-4 h-0.5 bg-[#7F56D9]"
            style={{
              left: '120px',
              width: progressIndex > 0 ? `calc(${(progressIndex / (steps.length - 1)) * 100}% - 120px)` : 0,
              maxWidth: 'calc(100% - 240px)',
            }}
          />
          <div className="absolute left-[120px] right-[120px] top-4 h-0.5 bg-[#EAECF0]" />

          {steps.map((step) => {
            const isCurrent = step.status === 'current';

            return (
              <div
                key={step.id}
                className="relative z-10 flex w-[200px] shrink-0 flex-col items-center gap-4 sm:w-[240px]"
              >
                <StepIcon status={step.status} />
                <div className="text-center">
                  <p
                    className={`text-base font-semibold leading-6 ${
                      isCurrent ? 'text-[#6941C6]' : 'text-[#344054]'
                    }`}
                  >
                    {step.title}
                  </p>
                  <p
                    className={`text-base font-normal leading-6 ${
                      isCurrent ? 'text-[#7F56D9]' : 'text-[#475467]'
                    }`}
                  >
                    {step.dateTime}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
