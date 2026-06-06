import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

type PaymentTransactionCellProps = {
  transactionAt: string;
  amountLabel: string;
  paymentMethod: string;
};

export default function PaymentTransactionCell({
  transactionAt,
  amountLabel,
  paymentMethod,
}: PaymentTransactionCellProps) {
  return (
    <div className="flex min-w-[220px] flex-col gap-1">
      <p className="text-sm font-medium leading-5 text-[#212121]">{transactionAt}</p>
      <div className="flex flex-wrap items-center gap-1">
        <MonetizationOnOutlinedIcon sx={{ fontSize: 15, color: '#A54AFF' }} />
        <span className="text-[11px] font-semibold leading-[15px] tracking-[0.04px] text-[#A54AFF]">
          {amountLabel}
        </span>
        <span className="text-[11px] font-light leading-[15px] tracking-[0.04px] text-[#667085]">
          {paymentMethod}
        </span>
      </div>
    </div>
  );
}
