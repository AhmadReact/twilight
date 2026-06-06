type PaymentDivisionCellProps = {
  sellerAmount: number;
  platformAmount: number;
};

export default function PaymentDivisionCell({
  sellerAmount,
  platformAmount,
}: PaymentDivisionCellProps) {
  return (
    <div className="flex min-w-[120px] flex-col gap-0.5 text-[13px] leading-[18px]">
      <p className="font-medium text-[#101828]">Seller: ${sellerAmount}</p>
      <p className="font-normal text-[#475467]">Platform: ${platformAmount}</p>
    </div>
  );
}
