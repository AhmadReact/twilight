import type { DisputeReportStatus, DisputeReportType } from '@/lib/admin/mockDisputesData';

export const disputeReportStatusStyles: Record<
  DisputeReportStatus,
  { bg: string; border: string; text: string }
> = {
  Pending: { bg: '#FFFAEB', border: '#FEDF89', text: '#B54708' },
  Closed: { bg: '#F9FAFB', border: '#EAECF0', text: '#344054' },
};

export const disputeReportTypeStyles: Record<
  DisputeReportType,
  { bg: string; border: string; text: string }
> = {
  Unsolved: { bg: '#F9FAFB', border: '#EAECF0', text: '#344054' },
  Solved: { bg: '#F9FAFB', border: '#EAECF0', text: '#344054' },
};

export const disputePartyRoleStyles = {
  Seller: { bg: 'transparent', border: '#0086C9', text: '#026AA2' },
  Buyer: { bg: 'transparent', border: '#7F56D9', text: '#6941C6' },
} as const;
