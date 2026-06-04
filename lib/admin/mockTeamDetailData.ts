import type { TeamRow } from '@/lib/admin/mockTeamsData';
import { getTeamBySlug } from '@/lib/admin/mockTeamsData';

export type TeamMemberRole = 'Team Lead' | 'Worker';

export type TeamMember = {
  name: string;
  email: string;
  address: string;
  deviceId: string;
  role: TeamMemberRole;
  avatarSrc?: string;
  avatarBg?: string;
};

export type TeamActivity = {
  title: string;
  description: string;
  unread?: boolean;
};

export type TeamFavorRow = {
  slug: string;
  bookingId: string;
  title: string;
  priceFrom: string;
  date: string;
  category: string;
  subCategories: string;
  rating: number;
  status: 'Active' | 'Blocked';
  thumbnailSrc: string;
};

export type BookingStatus =
  | 'Upcoming'
  | 'In Progress'
  | 'Cancelled'
  | 'Completed';

export type BookingParticipant = {
  name: string;
  role: string;
  avatarSrc?: string;
  avatarBg?: string;
};

export type TeamBookingRow = {
  bookingId: string;
  title: string;
  priceFrom: string;
  location: string;
  scheduledDate: string;
  thumbnailSrc: string;
  bookedBy: BookingParticipant;
  acceptedBy: BookingParticipant;
  status: BookingStatus;
};

export type TeamDetail = {
  team: TeamRow;
  displayName: string;
  memberCount: number;
  memberSince: string;
  flagCount: number;
  totalEarning: string;
  earningTrend: string;
  totalBookings: number;
  completedBookings: number;
  cancelledBookings: number;
  inProgressBookings: number;
  upcomingBookings: number;
  teamLead: TeamMember;
  members: TeamMember[];
  activities: TeamActivity[];
  favors: TeamFavorRow[];
  bookings: TeamBookingRow[];
};

const memberAvatar =
  'https://www.figma.com/api/mcp/asset/c54c60cc-0333-41ee-a25a-21acfd9900f0';

const defaultMembers: Omit<TeamMember, 'role'>[] = [
  {
    name: 'Olivia Moore',
    email: 'olivia@untitledui.com',
    address: '12 Street, Apt. 4, Lower lake, Downtown, TX',
    deviceId: '12345 - iPhone 13 Pro',
    avatarSrc: memberAvatar,
    avatarBg: '#CFCBDC',
  },
];

const defaultActivities: TeamActivity[] = [
  { title: 'Added A Member', description: 'Lorem Ipsum text', unread: true },
  { title: 'Made a Payment', description: 'Lorem Ipsum text', unread: true },
  { title: 'Added a Payment Method', description: 'Lorem Ipsum text' },
  { title: 'Created A Favor', description: 'Lorem Ipsum text' },
  { title: 'Cancelled a Booking', description: 'Lorem Ipsum text' },
  { title: 'New Dispute', description: 'Lorem Ipsum text' },
];

const favorThumbnail =
  'https://www.figma.com/api/mcp/asset/d7456878-0b1b-4e4c-a0d3-9ea8607588b8';

const bookingThumbnail =
  'https://www.figma.com/api/mcp/asset/d338df22-14f5-43b8-b50d-8969054bffeb';

const defaultBookings: TeamBookingRow[] = [
  {
    bookingId: '1234',
    title: 'I will fix your electric supply issue',
    priceFrom: 'starts from $135',
    location: 'Downtown, TX',
    scheduledDate: 'Jan 9, 2026',
    thumbnailSrc: bookingThumbnail,
    bookedBy: {
      name: 'Lana Steiner',
      role: 'Buyer',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/2b4ff3f0-19e5-4d32-947a-4d8ad845993e',
      avatarBg: '#D7E3E8',
    },
    acceptedBy: {
      name: 'Lana Steiner',
      role: 'Pro Seller',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/cc5ce9af-913d-4952-99b8-c05ed1ef9055',
      avatarBg: '#CFCBDC',
    },
    status: 'Upcoming',
  },
  {
    bookingId: '1234',
    title: 'I will wash your car at your doorsteps',
    priceFrom: 'starts from $135',
    location: 'Downtown, TX',
    scheduledDate: 'Jan 9, 2026',
    thumbnailSrc:
      'https://www.figma.com/api/mcp/asset/e698de0f-6a7d-465c-a138-c5583f8a2372',
    bookedBy: {
      name: 'Phoenix Baker',
      role: 'Buyer',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/0a4867e5-d603-4dbd-9ca4-7ef7cbff341d',
      avatarBg: '#D6CFB7',
    },
    acceptedBy: {
      name: 'Lana Steiner',
      role: 'Pro Seller',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/cc5ce9af-913d-4952-99b8-c05ed1ef9055',
      avatarBg: '#CFCBDC',
    },
    status: 'In Progress',
  },
  {
    bookingId: '1234',
    title: 'I will deep clean your home',
    priceFrom: 'starts from $135',
    location: 'Downtown, TX',
    scheduledDate: 'Jan 9, 2026',
    thumbnailSrc:
      'https://www.figma.com/api/mcp/asset/38e4e113-a044-45c3-9555-cfe306f35ab2',
    bookedBy: {
      name: 'Lana Steiner',
      role: 'Buyer',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/2b4ff3f0-19e5-4d32-947a-4d8ad845993e',
      avatarBg: '#D7E3E8',
    },
    acceptedBy: {
      name: 'Lana Steiner',
      role: 'Team Lead',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/cc5ce9af-913d-4952-99b8-c05ed1ef9055',
      avatarBg: '#CFCBDC',
    },
    status: 'Cancelled',
  },
  {
    bookingId: '1234',
    title: 'I will fix your electric supply issue',
    priceFrom: 'starts from $135',
    location: 'Downtown, TX',
    scheduledDate: 'Jan 9, 2026',
    thumbnailSrc: bookingThumbnail,
    bookedBy: {
      name: 'Demi Wilkinson',
      role: 'Buyer',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/cc5ce9af-913d-4952-99b8-c05ed1ef9055',
      avatarBg: '#DADCD6',
    },
    acceptedBy: {
      name: 'Demi Wilkinson',
      role: 'Pro Seller',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/cc5ce9af-913d-4952-99b8-c05ed1ef9055',
      avatarBg: '#DADCD6',
    },
    status: 'Completed',
  },
  {
    bookingId: '1234',
    title: 'I will fix your electric supply issue',
    priceFrom: 'starts from $135',
    location: 'Downtown, TX',
    scheduledDate: 'Jan 9, 2026',
    thumbnailSrc: bookingThumbnail,
    bookedBy: {
      name: 'Candice Wu',
      role: 'Buyer',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/e88e4f88-1e07-4dfc-82a2-33ec2c429664',
      avatarBg: '#CFCBDC',
    },
    acceptedBy: {
      name: 'Candice Wu',
      role: 'Pro Seller',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/e88e4f88-1e07-4dfc-82a2-33ec2c429664',
      avatarBg: '#CFCBDC',
    },
    status: 'Completed',
  },
  {
    bookingId: '1234',
    title: 'I will fix your electric supply issue',
    priceFrom: 'starts from $135',
    location: 'Downtown, TX',
    scheduledDate: 'Jan 9, 2026',
    thumbnailSrc: bookingThumbnail,
    bookedBy: {
      name: 'Natali Craig',
      role: 'Buyer',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/26ccb713-1c27-47ae-a3da-4540850592cc',
      avatarBg: '#E9DCBB',
    },
    acceptedBy: {
      name: 'Natali Craig',
      role: 'Team Lead',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/26ccb713-1c27-47ae-a3da-4540850592cc',
      avatarBg: '#E9DCBB',
    },
    status: 'Completed',
  },
  {
    bookingId: '1234',
    title: 'I will fix your electric supply issue',
    priceFrom: 'starts from $135',
    location: 'Downtown, TX',
    scheduledDate: 'Jan 9, 2026',
    thumbnailSrc: bookingThumbnail,
    bookedBy: {
      name: 'Drew Cano',
      role: 'Buyer',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/774e3831-24f1-400e-930f-42276276a4fc',
      avatarBg: '#D9E5CC',
    },
    acceptedBy: {
      name: 'Drew Cano',
      role: 'Pro Seller',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/774e3831-24f1-400e-930f-42276276a4fc',
      avatarBg: '#D9E5CC',
    },
    status: 'Completed',
  },
];

const defaultFavors: TeamFavorRow[] = [
  {
    slug: 'fix-electric-supply',
    bookingId: '1234',
    title: 'I will fix your electric supply issue',
    priceFrom: 'starts from $135',
    date: '2026-12-25',
    category: 'Cleaning',
    subCategories: 'Home Cleaning, Gardening, Dusting',
    rating: 4,
    status: 'Active',
    thumbnailSrc: favorThumbnail,
  },
  {
    slug: 'wash-car-doorsteps',
    bookingId: '1234',
    title: 'I will wash your car at your doorsteps',
    priceFrom: 'starts from $135',
    date: '2026-12-25',
    category: 'Cleaning',
    subCategories: 'Home Cleaning, Gardening, Dusting',
    rating: 4,
    status: 'Active',
    thumbnailSrc:
      'https://www.figma.com/api/mcp/asset/e698de0f-6a7d-465c-a138-c5583f8a2372',
  },
  {
    slug: 'deep-clean-home',
    bookingId: '1234',
    title: 'I will deep clean your home',
    priceFrom: 'starts from $135',
    date: '2026-12-25',
    category: 'Cleaning',
    subCategories: 'Home Cleaning, Gardening, Dusting',
    rating: 4,
    status: 'Active',
    thumbnailSrc: favorThumbnail,
  },
];

function buildTeamDetail(team: TeamRow): TeamDetail {
  const teamLead: TeamMember = {
    name: team.teamLead.name,
    email: team.teamLead.email,
    address: '12 Street, Apt. 4, Lower lake, Downtown, TX',
    deviceId: '12345 - iPhone 13 Pro',
    role: 'Team Lead',
    avatarSrc: team.teamLead.avatarSrc ?? memberAvatar,
    avatarBg: team.teamLead.avatarBg,
  };

  const workers: TeamMember[] = Array.from({ length: 5 }, (_, index) => ({
    ...defaultMembers[0],
    name: `Olivia Moore`,
    role: 'Worker' as const,
    avatarSrc: team.workerAvatars[index] ?? memberAvatar,
  }));

  return {
    team,
    displayName: team.name,
    memberCount: 6,
    memberSince: 'Jan 2025',
    flagCount: 0,
    totalEarning: team.earnings,
    earningTrend: '20%',
    totalBookings: team.bookings > 4 ? 4 : team.bookings,
    completedBookings: 2,
    cancelledBookings: 2,
    inProgressBookings: 2,
    upcomingBookings: 2,
    teamLead,
    members: workers,
    activities: defaultActivities,
    favors: defaultFavors,
    bookings: defaultBookings,
  };
}

export function getTeamDetail(slug: string): TeamDetail | undefined {
  const team = getTeamBySlug(slug);
  if (!team) return undefined;
  return buildTeamDetail(team);
}
