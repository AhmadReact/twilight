import type { DisputeParticipant } from '@/lib/admin/disputeDetailTypes';

export type DisputeResolutionType = 'release-seller' | 'refund-buyer' | 'split';

export type DisputeResolutionOption = {
  id: DisputeResolutionType;
  label: string;
  description: string;
};

export const disputeResolutionOptions: DisputeResolutionOption[] = [
  {
    id: 'release-seller',
    label: 'Release Payment to Seller',
    description: 'Transfers full payment to the seller.',
  },
  {
    id: 'refund-buyer',
    label: 'Refund to Buyer',
    description: 'Issue a full refund to the buyer.',
  },
  {
    id: 'split',
    label: 'Split Payments between Seller and Buyer',
    description: 'Splits payment between buyer and seller.',
  },
];

export type ResolveDisputeContext = {
  totalAmount: number;
  totalAmountLabel: string;
  seller: DisputeParticipant;
  buyer: DisputeParticipant;
};

export {
  formatDisputeAmount,
  formatDisputeCalculatedAmount,
  parseDisputeAmount,
} from '@/lib/admin/disputeAmountUtils';
