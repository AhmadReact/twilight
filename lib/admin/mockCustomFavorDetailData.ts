import type { CustomFavorRow, CustomFavorUser } from '@/lib/admin/mockCustomFavorsData';
import { customFavorRows } from '@/lib/admin/mockCustomFavorsData';
import type { FavorCategory } from '@/lib/admin/mockFavorsData';

export type CustomFavorParticipant = {
  name: string;
  email: string;
  role: string;
  address: string;
  avatarSrc?: string;
  avatarBg?: string;
};

export type CustomFavorDetail = {
  slug: string;
  favorId: string;
  title: string;
  subCategories: string;
  category: FavorCategory;
  createdBy: CustomFavorUser & { email: string; verified?: boolean };
  acceptedBy: (CustomFavorUser & { email: string; verified?: boolean }) | null;
  price: string;
  description: string[];
  attachments: string[];
  startTime: string;
  startDate: string;
  buyerLocation: string;
  bidders: CustomFavorParticipant[];
  invitedSellers: CustomFavorParticipant[];
};

const attachment1 =
  'https://www.figma.com/api/mcp/asset/4f67d378-2e2c-4849-ba7c-7eeb20b428cc';
const attachment2 =
  'https://www.figma.com/api/mcp/asset/ce3ce9a4-ac72-471f-85a0-5f60987a8b64';

const memberAvatar =
  'https://www.figma.com/api/mcp/asset/c54c60cc-0333-41ee-a25a-21acfd9900f0';

const defaultDescription = [
  'Professional deep cleaning of the selected area using standard cleaning supplies.',
  'Dusting and wiping of all accessible surfaces, furniture, and fixtures.',
  'Trash collection and proper disposal after service completion.',
];

const defaultBidders: CustomFavorParticipant[] = [
  {
    name: 'Olivia Moore',
    email: 'olivia@untitledui.com',
    role: 'Pro Seller',
    address: '12 Street, Apt. 4, Lower lake, Downtown, TX',
    avatarSrc: memberAvatar,
    avatarBg: '#CFCBDC',
  },
  {
    name: 'Olivia Moore',
    email: 'olivia@untitledui.com',
    role: 'Team Lead',
    address: '12 Street, Apt. 4, Lower lake, Downtown, TX',
    avatarSrc: memberAvatar,
    avatarBg: '#D7E3E8',
  },
  {
    name: 'Olivia Moore',
    email: 'olivia@untitledui.com',
    role: 'Team Lead',
    address: '12 Street, Apt. 4, Lower lake, Downtown, TX',
    avatarSrc: memberAvatar,
    avatarBg: '#E9DCBB',
  },
  {
    name: 'Olivia Moore',
    email: 'olivia@untitledui.com',
    role: 'Pro Seller',
    address: '12 Street, Apt. 4, Lower lake, Downtown, TX',
    avatarSrc: memberAvatar,
    avatarBg: '#D9E5CC',
  },
  {
    name: 'Olivia Moore',
    email: 'olivia@untitledui.com',
    role: 'Pro Seller',
    address: '12 Street, Apt. 4, Lower lake, Downtown, TX',
    avatarSrc: memberAvatar,
    avatarBg: '#DADCD6',
  },
];

const defaultInvitedSellers: CustomFavorParticipant[] = [
  {
    name: 'Olivia Moore',
    email: 'olivia@untitledui.com',
    role: 'Pro Seller',
    address: '12 Street, Apt. 4, Lower lake, Downtown, TX',
    avatarSrc: memberAvatar,
    avatarBg: '#CFCBDC',
  },
  {
    name: 'Olivia Moore',
    email: 'olivia@untitledui.com',
    role: 'Team Lead',
    address: '12 Street, Apt. 4, Lower lake, Downtown, TX',
    avatarSrc: memberAvatar,
    avatarBg: '#D7E3E8',
  },
  {
    name: 'Olivia Moore',
    email: 'olivia@untitledui.com',
    role: 'Team Lead',
    address: '12 Street, Apt. 4, Lower lake, Downtown, TX',
    avatarSrc: memberAvatar,
    avatarBg: '#E9DCBB',
  },
  {
    name: 'Olivia Moore',
    email: 'olivia@untitledui.com',
    role: 'Worker',
    address: '12 Street, Apt. 4, Lower lake, Downtown, TX',
    avatarSrc: memberAvatar,
    avatarBg: '#D9E5CC',
  },
  {
    name: 'Olivia Moore',
    email: 'olivia@untitledui.com',
    role: 'Pro Seller',
    address: '12 Street, Apt. 4, Lower lake, Downtown, TX',
    avatarSrc: memberAvatar,
    avatarBg: '#DADCD6',
  },
];

const detailBySlug: Record<string, CustomFavorDetail> = {
  'deep-clean-home': {
    slug: 'deep-clean-home',
    favorId: '12345',
    title: 'I will deep clean your home',
    subCategories: 'Home Cleaning, Gardening, Dusting',
    category: 'Cleaning',
    createdBy: {
      name: 'Olivia Rhye',
      role: 'Pro Seller',
      email: 'olivia@untitledui.com',
      avatarSrc:
        'https://www.figma.com/api/mcp/asset/637a0fae-f2ea-4c82-b2c6-966b0f7803d0',
      verified: true,
    },
    acceptedBy: {
      name: 'Olivia Rhye',
      role: 'Team Lead',
      email: 'olivia@untitledui.com',
      avatarSrc:
        'https://www.figma.com/api/mcp/asset/637a0fae-f2ea-4c82-b2c6-966b0f7803d0',
      verified: true,
    },
    price: '$200',
    description: defaultDescription,
    attachments: [attachment1, attachment2],
    startTime: '08:00 AM',
    startDate: 'Jan 9, 2026',
    buyerLocation: '12 Street, Apt. 4, Lower lake, Downtown, TX',
    bidders: defaultBidders,
    invitedSellers: defaultInvitedSellers,
  },
};

function buildDetail(row: CustomFavorRow): CustomFavorDetail {
  return {
    slug: row.slug,
    favorId: row.favorId === '1234' ? '12345' : row.favorId,
    title: row.title,
    subCategories: 'Home Cleaning, Gardening, Dusting',
    category: row.category,
    createdBy: {
      ...row.creator,
      email: `${row.creator.name.toLowerCase().replace(/\s+/g, '.')}@untitledui.com`,
      verified: true,
    },
    acceptedBy: row.acceptor
      ? {
          ...row.acceptor,
          email: `${row.acceptor.name.toLowerCase().replace(/\s+/g, '.')}@untitledui.com`,
          verified: true,
        }
      : null,
    price: '$200',
    description: defaultDescription,
    attachments: [attachment1, attachment2],
    startTime: '08:00 AM',
    startDate: 'Jan 9, 2026',
    buyerLocation: '12 Street, Apt. 4, Lower lake, Downtown, TX',
    bidders: defaultBidders,
    invitedSellers: defaultInvitedSellers,
  };
}

export function getCustomFavorDetail(slug: string): CustomFavorDetail | undefined {
  if (detailBySlug[slug]) {
    return detailBySlug[slug];
  }

  const row = customFavorRows.find((item) => item.slug === slug);
  if (!row) {
    return undefined;
  }

  return buildDetail(row);
}
