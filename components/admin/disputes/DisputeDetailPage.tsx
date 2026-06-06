'use client';

import { useMemo, useState } from 'react';
import AdminBreadcrumbs from '@/components/admin/shared/AdminBreadcrumbs';
import AdminChatDialog from '@/components/admin/shared/chat/AdminChatDialog';
import DisputeDetailActionsBar from '@/components/admin/shared/DisputeDetailActionsBar';
import ResolveDisputeDialog from '@/components/admin/disputes/ResolveDisputeDialog';
import DisputeJobSummary from '@/components/admin/shared/DisputeJobSummary';
import DisputeParticipantChip from '@/components/admin/shared/DisputeParticipantChip';
import DisputeReportSection from '@/components/admin/shared/DisputeReportSection';
import SchedulePillsRow from '@/components/admin/shared/SchedulePillsRow';
import type { DisputeDetail } from '@/lib/admin/disputeDetailTypes';
import { getDisputeChatThread } from '@/lib/admin/mockDisputeChatData';
import { parseDisputeAmount } from '@/lib/admin/disputeAmountUtils';
import type { ResolveDisputeContext } from '@/lib/admin/disputeResolutionTypes';

type DisputeDetailPageProps = {
  detail: DisputeDetail;
};

export default function DisputeDetailPage({ detail }: DisputeDetailPageProps) {
  const [chatOpen, setChatOpen] = useState(false);
  const [resolveOpen, setResolveOpen] = useState(false);
  const chatThread = useMemo(() => getDisputeChatThread(detail), [detail]);
  const resolveContext = useMemo<ResolveDisputeContext>(() => {
    const totalAmount = parseDisputeAmount(detail.plan.price);
    return {
      totalAmount,
      totalAmountLabel: detail.plan.price,
      seller: detail.seller,
      buyer: detail.buyer,
    };
  }, [detail]);

  return (
    <>
      <div className="flex flex-col gap-8 px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <AdminBreadcrumbs
            items={[
              { label: 'Disputes', href: '/admin/disputes' },
              { label: detail.ticketId },
            ]}
          />

          <div className="flex flex-col gap-5 xl:flex-row xl:flex-wrap xl:items-start xl:justify-between">
            <h1 className="min-w-[280px] flex-1 text-2xl font-semibold leading-[38px] text-[#101828] sm:text-[30px]">
              {detail.title}
            </h1>
            <DisputeDetailActionsBar
              onViewChat={() => setChatOpen(true)}
              onResolveDispute={() => setResolveOpen(true)}
            />
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-8">
            <DisputeParticipantChip participant={detail.buyer} />
            <DisputeParticipantChip participant={detail.seller} />
          </div>

          <SchedulePillsRow
            date={detail.date}
            time={detail.time}
            location={detail.location}
          />
        </div>

        <div className="h-px w-full bg-[#EAECF0]" />
      </header>

      <div className="flex flex-col gap-8 xl:flex-row xl:items-start xl:gap-7">
        <div className="flex min-w-0 flex-1 flex-col gap-8">
          <DisputeReportSection
            title="Buyer Report"
            participant={detail.buyer}
            report={detail.buyerReport}
          />
          <DisputeReportSection
            title="Seller Report"
            participant={detail.seller}
            report={detail.sellerReport}
          />
        </div>

        <div className="hidden shrink-0 self-stretch xl:block">
          <div className="h-full w-px bg-[#EAECF0]" />
        </div>

        <div className="w-full xl:max-w-[480px] xl:flex-1">
          <DisputeJobSummary
            title={detail.title}
            category={detail.category}
            subCategory={detail.subCategory}
            provider={detail.seller}
            plan={detail.plan}
          />
        </div>
      </div>
      </div>

      <AdminChatDialog
        open={chatOpen}
        thread={chatThread}
        onClose={() => setChatOpen(false)}
      />

      <ResolveDisputeDialog
        open={resolveOpen}
        context={resolveContext}
        onClose={() => setResolveOpen(false)}
      />
    </>
  );
}
