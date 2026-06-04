type BookingsMetricItem = {
  count: number;
  label: string;
  color: string;
};

type BookingsMetricCardProps = {
  total: number;
  items: BookingsMetricItem[];
};

export default function BookingsMetricCard({ total, items }: BookingsMetricCardProps) {
  return (
    <div className="flex min-w-[200px] flex-1 flex-col gap-2.5 rounded-xl border border-[#EAECF0] bg-white p-5 shadow-[0px_1px_1px_rgba(16,24,40,0.05)] sm:min-w-[232px] sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium leading-5 text-[#475467]">Total Bookings</p>
        <p className="text-[28px] font-semibold leading-[38px] text-[#101828] sm:text-[30px]">
          {total}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        {items.map((item, index) => (
          <span key={item.label} className="inline-flex items-center gap-4">
            {index > 0 ? <span className="text-[#475467]">|</span> : null}
            <span className={item.color}>
              <span className="mr-2 text-base font-normal">{item.count}</span>
              <span className="font-medium">{item.label}</span>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
