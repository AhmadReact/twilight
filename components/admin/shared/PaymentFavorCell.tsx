type PaymentFavorCellProps = {
  title: string;
  bookingId: string;
};

export default function PaymentFavorCell({ title, bookingId }: PaymentFavorCellProps) {
  return (
    <div className="flex min-w-[220px] flex-col gap-1">
      <p className="text-sm font-medium leading-5 text-[#212121]">{title}</p>
      <p className="text-[11px] font-normal leading-[15px] tracking-[0.04px] text-[#667085]">
        Booking ID:{bookingId}
      </p>
    </div>
  );
}
