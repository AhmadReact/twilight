export type UserStatus = 'Active' | 'Blocked' | 'Inactive';

export type UserType =
  | 'Buyer'
  | 'Seller (Pro)'
  | 'Seller (Team Lead)'
  | 'Seller (Worker)';

export type UserRow = {
  slug: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  avatarSrc?: string;
  avatarBg?: string;
  initials?: string;
  userType: UserType;
  totalBookings: number;
  completedBookings: number;
  cancelledBookings: number;
  memberSince: string;
  status: UserStatus;
};

export const USER_COUNT = 100;

export function toUserSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export const userRows: UserRow[] = [
  {
    slug: 'olivia-rhye',
    userId: '12345',
    name: 'Olivia Rhye',
    email: 'olivia@untitledui.com',
    phone: '+1 234 56789',
    avatarSrc: 'https://www.figma.com/api/mcp/asset/489e223f-7102-4c30-870f-60ec9a72f1a1',
    avatarBg: '#CFCBDC',
    userType: 'Buyer',
    totalBookings: 5,
    completedBookings: 2,
    cancelledBookings: 3,
    memberSince: 'Jan 2025',
    status: 'Active',
  },
  {
    slug: 'phoenix-baker',
    userId: '12345',
    name: 'Phoenix Baker',
    email: 'phoenix@untitledui.com',
    phone: '+1 234 56789',
    avatarSrc: 'https://www.figma.com/api/mcp/asset/7ce704df-3c73-4f4c-8036-62d591f31576',
    avatarBg: '#D6CFB7',
    userType: 'Buyer',
    totalBookings: 5,
    completedBookings: 2,
    cancelledBookings: 3,
    memberSince: 'Jan 2025',
    status: 'Active',
  },
  {
    slug: 'lana-steiner',
    userId: '12345',
    name: 'Lana Steiner',
    email: 'lana@untitledui.com',
    phone: '+1 234 56789',
    avatarSrc: 'https://www.figma.com/api/mcp/asset/11db2120-5977-435b-9141-26e66a72c8a8',
    avatarBg: '#D7E3E8',
    userType: 'Buyer',
    totalBookings: 5,
    completedBookings: 2,
    cancelledBookings: 3,
    memberSince: 'Jan 2025',
    status: 'Blocked',
  },
  {
    slug: 'demi-wilkinson',
    userId: '12345',
    name: 'Demi Wilkinson',
    email: 'demi@untitledui.com',
    phone: '+1 234 56789',
    avatarSrc: 'https://www.figma.com/api/mcp/asset/2c87b9ca-5d7a-4a1a-a6f3-d986d479ad88',
    avatarBg: '#DADCD6',
    userType: 'Seller (Pro)',
    totalBookings: 5,
    completedBookings: 2,
    cancelledBookings: 3,
    memberSince: 'Jan 2025',
    status: 'Active',
  },
  {
    slug: 'candice-wu',
    userId: '12345',
    name: 'Candice Wu',
    email: 'candice@untitledui.com',
    phone: '+1 234 56789',
    avatarBg: '#CFCBDC',
    initials: 'CW',
    userType: 'Seller (Pro)',
    totalBookings: 5,
    completedBookings: 2,
    cancelledBookings: 3,
    memberSince: 'Jan 2025',
    status: 'Active',
  },
  {
    slug: 'natali-craig',
    userId: '12345',
    name: 'Natali Craig',
    email: 'natali@untitledui.com',
    phone: '+1 234 56789',
    avatarSrc: 'https://www.figma.com/api/mcp/asset/65e2ee5d-6d83-4be4-b00c-d2514ab9cdca',
    avatarBg: '#E9DCBB',
    userType: 'Seller (Team Lead)',
    totalBookings: 5,
    completedBookings: 2,
    cancelledBookings: 3,
    memberSince: 'Jan 2025',
    status: 'Active',
  },
  {
    slug: 'drew-cano',
    userId: '12345',
    name: 'Drew Cano',
    email: 'drew@untitledui.com',
    phone: '+1 234 56789',
    avatarSrc: 'https://www.figma.com/api/mcp/asset/350c3d8f-3af7-49eb-81df-0be1a0420b60',
    avatarBg: '#D9E5CC',
    userType: 'Buyer',
    totalBookings: 5,
    completedBookings: 2,
    cancelledBookings: 3,
    memberSince: 'Jan 2025',
    status: 'Inactive',
  },
  {
    slug: 'orlando-diggs',
    userId: '12345',
    name: 'Orlando Diggs',
    email: 'orlando@untitledui.com',
    phone: '+1 234 56789',
    avatarBg: '#CFCBDC',
    initials: 'OD',
    userType: 'Buyer',
    totalBookings: 5,
    completedBookings: 2,
    cancelledBookings: 3,
    memberSince: 'Jan 2025',
    status: 'Active',
  },
  {
    slug: 'andi-lane',
    userId: '12345',
    name: 'Andi Lane',
    email: 'andi@untitledui.com',
    phone: '+1 234 56789',
    avatarSrc: 'https://www.figma.com/api/mcp/asset/32a00ce6-8886-4819-b191-0e39b385037e',
    avatarBg: '#DCCCBD',
    userType: 'Seller (Worker)',
    totalBookings: 5,
    completedBookings: 2,
    cancelledBookings: 3,
    memberSince: 'Jan 2025',
    status: 'Active',
  },
  {
    slug: 'kate-morrison',
    userId: '12345',
    name: 'Kate Morrison',
    email: 'kate@untitledui.com',
    phone: '+1 234 56789',
    avatarSrc: 'https://www.figma.com/api/mcp/asset/901aab75-cd7b-4cdc-b9d4-1a570810987f',
    avatarBg: '#CFCBDC',
    userType: 'Buyer',
    totalBookings: 5,
    completedBookings: 2,
    cancelledBookings: 3,
    memberSince: 'Jan 2025',
    status: 'Active',
  },
];

const userTypeFilterMap: Record<string, UserType | null> = {
  all: null,
  buyer: 'Buyer',
  'pro-seller': 'Seller (Pro)',
  'team-lead': 'Seller (Team Lead)',
  'team-worker': 'Seller (Worker)',
};

const statusFilterMap: Record<string, UserStatus | null> = {
  all: null,
  active: 'Active',
  blocked: 'Blocked',
};

export function getUserBySlug(slug: string): UserRow | undefined {
  return userRows.find((row) => row.slug === slug);
}

export function isBuyerUserType(userType: UserType): boolean {
  return userType === 'Buyer';
}

export function filterUserRows(
  rows: UserRow[],
  roleFilter: string,
  statusFilter: string,
  searchQuery: string,
): UserRow[] {
  const typeMatch = userTypeFilterMap[roleFilter] ?? null;
  const statusMatch = statusFilterMap[statusFilter] ?? null;
  const query = searchQuery.trim().toLowerCase();

  return rows.filter((row) => {
    if (typeMatch && row.userType !== typeMatch) return false;
    if (statusMatch && row.status !== statusMatch) return false;
    if (!query) return true;

    return (
      row.userId.toLowerCase().includes(query) ||
      row.name.toLowerCase().includes(query) ||
      row.email.toLowerCase().includes(query)
    );
  });
}
