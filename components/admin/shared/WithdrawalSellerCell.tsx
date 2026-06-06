import type { WithdrawalSellerRole } from '@/lib/admin/mockWithdrawalsData';

type WithdrawalSellerCellProps = {
  name: string;
  role: WithdrawalSellerRole;
};

export default function WithdrawalSellerCell({ name, role }: WithdrawalSellerCellProps) {
  return (
    <div className="flex min-w-[140px] flex-col gap-0.5 text-[13px] leading-[18px]">
      <p className="font-medium text-[#101828]">{name}</p>
      <p className="font-normal text-[#475467]">{role}</p>
    </div>
  );
}
