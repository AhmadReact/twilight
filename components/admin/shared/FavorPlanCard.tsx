'use client';

import type { ReactNode } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import type { FavorPlan } from '@/lib/admin/mockFavorDetailData';

type FavorPlanCardProps = {
  plan: FavorPlan;
};

function BulletItem({ children, price }: { children: ReactNode; price?: string }) {
  return (
    <div className="flex items-start gap-2 sm:gap-3">
      <FiberManualRecordIcon sx={{ fontSize: 6, color: '#8E40FF', mt: '5px', flexShrink: 0 }} />
      <p className="min-w-0 flex-1 text-xs leading-4 tracking-[0.04px] text-[#616161]">{children}</p>
      {price ? (
        <span className="shrink-0 text-sm font-semibold leading-5 text-[#8E40FF]">{price}</span>
      ) : null}
    </div>
  );
}

export default function FavorPlanCard({ plan }: FavorPlanCardProps) {
  return (
    <div className="rounded-2xl border border-[#EAECF0] bg-[#FCFCFD] px-3 py-3 sm:px-3 sm:py-3">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold leading-[26px] tracking-[-0.04px] text-[#344054]">
          {plan.name}
        </h3>
        <span className="text-base font-semibold leading-6 text-[#8E40FF]">{plan.price}</span>
      </div>

      <div className="mt-2 flex flex-col gap-1.5">
        {plan.features.map((feature) => (
          <BulletItem key={feature}>{feature}</BulletItem>
        ))}
      </div>

      <div className="mt-3">
        <h4 className="text-lg font-semibold leading-[26px] tracking-[-0.04px] text-[#344054]">
          Add ons
        </h4>
        <div className="mt-2 flex flex-col gap-1.5">
          {plan.addons.map((addon) => (
            <BulletItem key={addon.label} price={addon.price}>
              {addon.label}
            </BulletItem>
          ))}
        </div>
      </div>
    </div>
  );
}
