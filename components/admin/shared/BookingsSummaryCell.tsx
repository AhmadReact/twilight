type BookingsSummaryCellProps = {
  total: number;
  completed: number;
  cancelled: number;
};

export default function BookingsSummaryCell({
  total,
  completed,
  cancelled,
}: BookingsSummaryCellProps) {
  return (
    <div className="flex min-w-[140px] flex-col">
      <span className="text-sm font-medium leading-5 text-[#101828]">{total}</span>
      <p className="text-[13px] font-normal leading-[18px] text-[#475467]">
        <span className="text-[#079455]">
          {completed} Completed
        </span>
        <span>{' | '}</span>
        <span className="text-[#D92D20]">
          {cancelled} Cancelled
        </span>
      </p>
    </div>
  );
}
