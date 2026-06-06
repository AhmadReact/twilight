'use client';

import AdminBulletList from '@/components/admin/shared/AdminBulletList';
import DisputeParticipantChip from '@/components/admin/shared/DisputeParticipantChip';
import type { DisputeParticipant, DisputeReport } from '@/lib/admin/disputeDetailTypes';

type DisputeReportSectionProps = {
  title: string;
  participant: DisputeParticipant;
  report: DisputeReport;
};

export default function DisputeReportSection({
  title,
  participant,
  report,
}: DisputeReportSectionProps) {
  return (
    <section className="flex w-full flex-col gap-4">
      <h2 className="text-2xl font-semibold leading-8 text-[#101828]">{title}</h2>
      <DisputeParticipantChip participant={participant} />
      <div className="rounded-2xl border border-[#EAECF0] bg-[#FCFCFD] px-3 pb-4 pt-3">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-[70px]">
          <div className="min-w-0 flex-1 space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold leading-[26px] tracking-[-0.04px] text-[#344054]">
                Report Type
              </h3>
              <AdminBulletList items={[report.reportType]} />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold leading-[26px] tracking-[-0.04px] text-[#344054]">
                Details
              </h3>
              <div className="space-y-1.5 text-xs font-normal leading-4 tracking-[0.04px] text-[#667085]">
                {report.details.map((detail, index) => (
                  <p key={`${detail}-${index}`}>{detail}</p>
                ))}
              </div>
            </div>
          </div>
          {report.attachmentSrcs.length > 0 ? (
            <div className="shrink-0 space-y-2">
              <h3 className="text-lg font-semibold leading-[26px] tracking-[-0.04px] text-[#344054]">
                Attachments
              </h3>
              <div className="flex flex-wrap gap-2 sm:flex-col">
                {report.attachmentSrcs.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt="Report attachment"
                    className="h-[90px] w-[120px] rounded-lg object-cover"
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
