type WithdrawalDestinationCellProps = {
  provider: string;
  account: string;
};

export default function WithdrawalDestinationCell({
  provider,
  account,
}: WithdrawalDestinationCellProps) {
  return (
    <div className="flex min-w-[140px] flex-col gap-0.5 text-[13px] leading-[18px]">
      <p className="font-medium text-[#101828]">{provider}</p>
      <p className="font-normal text-[#475467]">{account}</p>
    </div>
  );
}
