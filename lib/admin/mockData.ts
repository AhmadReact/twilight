export type ReportStatus =
  | 'Active'
  | 'Pending from Buyer'
  | 'Pending from Seller'
  | 'Resolved';

export type DisputeRow = {
  bookingId: string;
  title: string;
  location: string;
  dateTime: string;
  buyer: { name: string; role: string };
  seller: { name: string; role: string };
  status: ReportStatus;
  reportedBy: { name: string; role: string };
};

export const dashboardAlerts = [
  { title: 'New Dispute', description: 'Lorem Ipsum text', color: '#B54708', unread: true },
  { title: 'Failed Payment', description: 'Lorem Ipsum text', color: '#F04438', unread: true },
  { title: 'System Issue', description: 'Lorem Ipsum text', color: '#B54708', unread: false },
  { title: 'System Issue', description: 'Lorem Ipsum text', color: '#B54708', unread: false },
  { title: 'Failed Payment', description: 'Lorem Ipsum text', color: '#F04438', unread: false },
  { title: 'New Dispute', description: 'Lorem Ipsum text', color: '#B54708', unread: false },
];

export const disputeRows: DisputeRow[] = [
  {
    bookingId: '12345',
    title: 'I will fix your electric supply issue',
    location: 'Downtown, TX',
    dateTime: '2026-11-26 | 14:24:59',
    buyer: { name: 'Lana Steiner', role: 'Buyer' },
    seller: { name: 'Lana Steiner', role: 'Pro Seller' },
    status: 'Active',
    reportedBy: { name: 'Lana Steiner', role: 'Buyer' },
  },
  {
    bookingId: '12345',
    title: 'I will fix your electric supply issue',
    location: 'Downtown, TX',
    dateTime: '2026-11-26 | 14:24:59',
    buyer: { name: 'Phoenix Baker', role: 'Buyer' },
    seller: { name: 'Phoenix Baker', role: 'Team Lead' },
    status: 'Active',
    reportedBy: { name: 'Phoenix Baker', role: 'Buyer' },
  },
  {
    bookingId: '12345',
    title: 'I will fix your electric supply issue',
    location: 'Downtown, TX',
    dateTime: '2026-11-26 | 14:24:59',
    buyer: { name: 'Lana Steiner', role: 'Buyer' },
    seller: { name: 'Lana Steiner', role: 'Pro Seller' },
    status: 'Pending from Buyer',
    reportedBy: { name: 'Lana Steiner', role: 'Team Lead' },
  },
  {
    bookingId: '12345',
    title: 'I will fix your electric supply issue',
    location: 'Downtown, TX',
    dateTime: '2026-11-26 | 14:24:59',
    buyer: { name: 'Demi Wilkinson', role: 'Buyer' },
    seller: { name: 'Demi Wilkinson', role: 'Pro Seller' },
    status: 'Resolved',
    reportedBy: { name: 'Demi Wilkinson', role: 'Buyer' },
  },
  {
    bookingId: '12345',
    title: 'I will fix your electric supply issue',
    location: 'Downtown, TX',
    dateTime: '2026-11-26 | 14:24:59',
    buyer: { name: 'Candice Wu', role: 'Buyer' },
    seller: { name: 'Candice Wu', role: 'Team Lead' },
    status: 'Resolved',
    reportedBy: { name: 'Candice Wu', role: 'Pro Seller' },
  },
  {
    bookingId: '12345',
    title: 'I will fix your electric supply issue',
    location: 'Downtown, TX',
    dateTime: '2026-11-26 | 14:24:59',
    buyer: { name: 'Natali Craig', role: 'Buyer' },
    seller: { name: 'Natali Craig', role: 'Team Lead' },
    status: 'Pending from Seller',
    reportedBy: { name: 'Natali Craig', role: 'Buyer' },
  },
  {
    bookingId: '12345',
    title: 'I will fix your electric supply issue',
    location: 'Downtown, TX',
    dateTime: '2026-11-26 | 14:24:59',
    buyer: { name: 'Drew Cano', role: 'Buyer' },
    seller: { name: 'Drew Cano', role: 'Pro Seller' },
    status: 'Resolved',
    reportedBy: { name: 'Drew Cano', role: 'Buyer' },
  },
];
