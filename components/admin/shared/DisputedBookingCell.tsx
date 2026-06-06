import type { DisputePartyRole } from '@/lib/admin/mockDisputesData';

type DisputedBookingCellProps = {
  title: string;
  reportedAt: string;
  reportedByRole: DisputePartyRole;
};

export default function DisputedBookingCell({
  title,
  reportedAt,
  reportedByRole,
}: DisputedBookingCellProps) {
  return (
    <div className="flex min-w-[240px] flex-col gap-1">
      <p className="text-sm font-medium leading-5 text-[#212121]">{title}</p>
      <p className="text-[11px] font-normal leading-[15px] tracking-[0.04px] text-[#667085]">
        {reportedAt}
        <span>{' | '}</span>
        Reported By: {reportedByRole}
      </p>
    </div>
  );
}
