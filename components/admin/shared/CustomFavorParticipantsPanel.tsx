'use client';

import CustomFavorParticipantRow from '@/components/admin/shared/CustomFavorParticipantRow';
import type { CustomFavorParticipant } from '@/lib/admin/mockCustomFavorDetailData';

type CustomFavorParticipantsPanelProps = {
  title: string;
  participants: CustomFavorParticipant[];
  showProposalLink?: boolean;
};

export default function CustomFavorParticipantsPanel({
  title,
  participants,
  showProposalLink = false,
}: CustomFavorParticipantsPanelProps) {
  return (
    <div className="min-w-0 flex-1">
      <h2 className="text-lg font-semibold leading-7 text-[#101828]">{title}</h2>
      <div className="mt-5 flex flex-col gap-4">
        {participants.map((participant, index) => (
          <div key={`${participant.name}-${participant.role}-${index}`}>
            <CustomFavorParticipantRow
              participant={participant}
              showProposalLink={showProposalLink}
            />
            {index < participants.length - 1 ? (
              <div className="mt-4 h-px w-full bg-[#EAECF0]" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
