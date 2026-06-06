import StatusBadge from '@/components/admin/shared/StatusBadge';
import { disputePartyRoleStyles } from '@/lib/admin/disputeBadgeStyles';
import type { DisputeParty } from '@/lib/admin/mockDisputesData';

type DisputePartyCellProps = {
  seller: DisputeParty;
  buyer: DisputeParty;
};

function PartyRow({ party }: { party: DisputeParty }) {
  const style = disputePartyRoleStyles[party.role];

  return (
    <div className="flex flex-wrap items-center gap-3.5">
      <span className="text-[13px] font-medium leading-[18px] text-[#101828]">{party.name}</span>
      <StatusBadge
        label={party.role}
        bg={style.bg}
        border={style.border}
        text={style.text}
        className="px-1 py-px text-[10px] leading-3"
      />
    </div>
  );
}

export default function DisputePartyCell({ seller, buyer }: DisputePartyCellProps) {
  return (
    <div className="flex min-w-[180px] flex-col gap-1">
      <PartyRow party={seller} />
      <PartyRow party={buyer} />
    </div>
  );
}
