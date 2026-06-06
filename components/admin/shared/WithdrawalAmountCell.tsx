import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

type WithdrawalAmountCellProps = {
  withdrawnAt: string;
  amountLabel: string;
};

export default function WithdrawalAmountCell({
  withdrawnAt,
  amountLabel,
}: WithdrawalAmountCellProps) {
  return (
    <div className="flex min-w-[180px] flex-col gap-1">
      <p className="text-sm font-medium leading-5 text-[#212121]">{withdrawnAt}</p>
      <div className="flex items-center gap-1">
        <MonetizationOnOutlinedIcon sx={{ fontSize: 15, color: '#A54AFF' }} />
        <span className="text-[11px] font-semibold leading-[15px] tracking-[0.04px] text-[#A54AFF]">
          {amountLabel}
        </span>
      </div>
    </div>
  );
}
