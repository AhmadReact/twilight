'use client';

import AdminBulletList from '@/components/admin/shared/AdminBulletList';
import DisputeParticipantChip from '@/components/admin/shared/DisputeParticipantChip';
import type { DisputeJobPlan, DisputeParticipant } from '@/lib/admin/disputeDetailTypes';

type DisputeJobSummaryProps = {
  title: string;
  category: string;
  subCategory: string;
  provider: DisputeParticipant;
  plan: DisputeJobPlan;
};

export default function DisputeJobSummary({
  title,
  category,
  subCategory,
  provider,
  plan,
}: DisputeJobSummaryProps) {
  return (
    <aside className="flex w-full flex-col gap-6">
      <div className="min-w-0 space-y-1">
        <h2 className="text-2xl font-semibold leading-8 text-[#101828]">{title}</h2>
        <p className="text-sm font-semibold leading-5 text-[#9643E8]">Category: {category}</p>
        <p className="text-sm font-normal leading-5 text-[#475467]">
          Sub Category: {subCategory}
        </p>
      </div>

      <div className="h-px w-full bg-[#EAECF0]" />

      <DisputeParticipantChip participant={provider} />

      <div className="rounded-2xl border border-[#EAECF0] bg-[#FCFCFD] px-3 pb-4 pt-3">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold leading-[26px] tracking-[-0.04px] text-[#344054]">
                {plan.name}
              </h3>
              <p className="text-base font-semibold leading-6 text-[#8E40FF]">{plan.price}</p>
            </div>
            <AdminBulletList items={plan.features} />
          </div>

          {plan.addOns.length > 0 ? (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold leading-[26px] tracking-[-0.04px] text-[#344054]">
                Add ons
              </h3>
              <ul className="space-y-1.5">
                {plan.addOns.map((addOn) => (
                  <li
                    key={addOn.description}
                    className="flex flex-wrap items-start justify-between gap-3"
                  >
                    <div className="flex min-w-0 flex-1 gap-2">
                      <span
                        className="mt-1.5 h-2.5 w-1 shrink-0 rounded-full bg-[#616161]"
                        aria-hidden
                      />
                      <span className="text-xs font-normal leading-4 tracking-[0.04px] text-[#616161]">
                        {addOn.description}
                      </span>
                    </div>
                    <span className="shrink-0 text-sm font-semibold leading-5 text-[#8E40FF]">
                      {addOn.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </aside>
  );
}
