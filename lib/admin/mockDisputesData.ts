export type DisputeReportStatus = 'Pending' | 'Closed';

export type DisputeReportType = 'Unsolved' | 'Solved';

export type DisputePartyRole = 'Seller' | 'Buyer';

export type DisputeParty = {
  name: string;
  role: DisputePartyRole;
};

export type AdminDisputeRow = {
  slug: string;
  ticketId: string;
  bookingTitle: string;
  reportedAt: string;
  reportedByRole: DisputePartyRole;
  seller: DisputeParty;
  buyer: DisputeParty;
  reason: string;
  reportStatus: DisputeReportStatus;
  reportType: DisputeReportType;
};

const defaultParties = {
  seller: { name: 'Olivia Rhye', role: 'Seller' as const },
  buyer: { name: 'Phoenix Baker', role: 'Buyer' as const },
};

export const adminDisputeRows: AdminDisputeRow[] = [
  {
    slug: '12345-pending-1',
    ticketId: '12345',
    bookingTitle: 'I will fix your electric supply issue',
    reportedAt: 'Jan 9, 2026 - 13:45:30',
    reportedByRole: 'Seller',
    ...defaultParties,
    reason: 'Bad Behavior',
    reportStatus: 'Pending',
    reportType: 'Unsolved',
  },
  {
    slug: '12345-closed-1',
    ticketId: '12345',
    bookingTitle: 'I will fix your electric supply issue',
    reportedAt: 'Jan 9, 2026 - 13:45:30',
    reportedByRole: 'Seller',
    ...defaultParties,
    reason: 'Bad Behavior',
    reportStatus: 'Closed',
    reportType: 'Solved',
  },
  {
    slug: '12345-pending-2',
    ticketId: '12345',
    bookingTitle: 'I will fix your electric supply issue',
    reportedAt: 'Jan 9, 2026 - 13:45:30',
    reportedByRole: 'Seller',
    ...defaultParties,
    reason: 'Bad Behavior',
    reportStatus: 'Pending',
    reportType: 'Unsolved',
  },
  {
    slug: '12345-closed-2',
    ticketId: '12345',
    bookingTitle: 'I will fix your electric supply issue',
    reportedAt: 'Jan 9, 2026 - 13:45:30',
    reportedByRole: 'Seller',
    ...defaultParties,
    reason: 'Bad Behavior',
    reportStatus: 'Closed',
    reportType: 'Solved',
  },
  {
    slug: '12345-closed-3',
    ticketId: '12345',
    bookingTitle: 'I will fix your electric supply issue',
    reportedAt: 'Jan 9, 2026 - 13:45:30',
    reportedByRole: 'Seller',
    ...defaultParties,
    reason: 'Bad Behavior',
    reportStatus: 'Closed',
    reportType: 'Solved',
  },
  {
    slug: '12345-closed-4',
    ticketId: '12345',
    bookingTitle: 'I will fix your electric supply issue',
    reportedAt: 'Jan 9, 2026 - 13:45:30',
    reportedByRole: 'Seller',
    ...defaultParties,
    reason: 'Bad Behavior',
    reportStatus: 'Closed',
    reportType: 'Solved',
  },
  {
    slug: '12345-closed-5',
    ticketId: '12345',
    bookingTitle: 'I will fix your electric supply issue',
    reportedAt: 'Jan 9, 2026 - 13:45:30',
    reportedByRole: 'Seller',
    ...defaultParties,
    reason: 'Bad Behavior',
    reportStatus: 'Closed',
    reportType: 'Solved',
  },
];

export function getDisputeBySlug(slug: string): AdminDisputeRow | undefined {
  return adminDisputeRows.find((row) => row.slug === slug);
}

export function filterDisputeRows(
  rows: AdminDisputeRow[],
  searchQuery: string,
  resolutionFilter: string,
  statusFilter: string,
): AdminDisputeRow[] {
  const query = searchQuery.trim().toLowerCase();

  return rows.filter((row) => {
    if (resolutionFilter === 'solved' && row.reportType !== 'Solved') return false;
    if (resolutionFilter === 'unsolved' && row.reportType !== 'Unsolved') return false;
    if (statusFilter === 'active' && row.reportStatus !== 'Pending') return false;
    if (statusFilter === 'closed' && row.reportStatus !== 'Closed') return false;

    if (!query) return true;

    return (
      row.ticketId.toLowerCase().includes(query) ||
      row.bookingTitle.toLowerCase().includes(query) ||
      row.seller.name.toLowerCase().includes(query) ||
      row.buyer.name.toLowerCase().includes(query)
    );
  });
}
