export type FavorStatus = 'Active' | 'Blocked';

export type FavorCategory = 'Cleaning' | 'Repairing' | 'Laundry';

export type FavorCreator = {
  name: string;
  role: string;
  avatarSrc?: string;
  avatarBg?: string;
};

export type AdminFavorRow = {
  slug: string;
  favorId: string;
  title: string;
  priceFrom: string;
  date: string;
  category: FavorCategory;
  subCategories: string;
  status: FavorStatus;
  thumbnailSrc: string;
  creator: FavorCreator;
};

const thumbnail =
  'https://www.figma.com/api/mcp/asset/9f018e8f-cb50-4d1b-a4fe-c21bdb3633ec';

export const favorRows: AdminFavorRow[] = [
  {
    slug: 'fix-electric-supply',
    favorId: '1234',
    title: 'I will fix your electric supply issue',
    priceFrom: 'starts from $135',
    date: '2026-12-25',
    category: 'Cleaning',
    subCategories: 'Home Cleaning, Gardening, Dusting',
    status: 'Active',
    thumbnailSrc: thumbnail,
    creator: {
      name: 'Lana Steiner',
      role: 'Team Lead',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/fde82659-7f43-4af2-9270-1578c3cca12d',
      avatarBg: '#D7E3E8',
    },
  },
  {
    slug: 'wash-car-doorsteps',
    favorId: '1234',
    title: 'I will wash your car at your doorsteps',
    priceFrom: 'starts from $135',
    date: '2026-12-25',
    category: 'Cleaning',
    subCategories: 'Home Cleaning, Gardening, Dusting',
    status: 'Active',
    thumbnailSrc:
      'https://www.figma.com/api/mcp/asset/c8461d29-0447-4542-b06f-019a9d6f6a0e',
    creator: {
      name: 'Phoenix Baker',
      role: 'Pro Seller',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/17c1afaa-a97d-447d-a81f-5807d60da461',
      avatarBg: '#D6CFB7',
    },
  },
  {
    slug: 'fix-electric-repairing',
    favorId: '1234',
    title: 'I will fix your electric supply issue',
    priceFrom: 'starts from $135',
    date: '2026-12-25',
    category: 'Repairing',
    subCategories: 'Home Cleaning, Gardening, Dusting',
    status: 'Active',
    thumbnailSrc: thumbnail,
    creator: {
      name: 'Lana Steiner',
      role: 'Team Lead',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/fde82659-7f43-4af2-9270-1578c3cca12d',
      avatarBg: '#D7E3E8',
    },
  },
  {
    slug: 'deep-clean-home',
    favorId: '1234',
    title: 'I will deep clean your home',
    priceFrom: 'starts from $135',
    date: '2026-12-25',
    category: 'Laundry',
    subCategories: 'Home Cleaning, Gardening, Dusting',
    status: 'Blocked',
    thumbnailSrc:
      'https://www.figma.com/api/mcp/asset/0684979d-e871-4500-98ae-9dc472abb6dd',
    creator: {
      name: 'Demi Wilkinson',
      role: 'Pro Seller',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/f7c2b820-52d0-47df-b637-cb85abf28956',
      avatarBg: '#DADCD6',
    },
  },
  {
    slug: 'fix-electric-candice',
    favorId: '1234',
    title: 'I will fix your electric supply issue',
    priceFrom: 'starts from $135',
    date: '2026-12-25',
    category: 'Cleaning',
    subCategories: 'Home Cleaning, Gardening, Dusting',
    status: 'Active',
    thumbnailSrc: thumbnail,
    creator: {
      name: 'Candice Wu',
      role: 'Pro Seller',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/05f8290a-4d9e-4733-bc10-ebf06e385dbd',
      avatarBg: '#CFCBDC',
    },
  },
  {
    slug: 'fix-electric-natali',
    favorId: '1234',
    title: 'I will fix your electric supply issue',
    priceFrom: 'starts from $135',
    date: '2026-12-25',
    category: 'Cleaning',
    subCategories: 'Home Cleaning, Gardening, Dusting',
    status: 'Active',
    thumbnailSrc: thumbnail,
    creator: {
      name: 'Natali Craig',
      role: 'Pro Seller',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/1842b1b7-c5ff-405f-b699-b6a762e349a4',
      avatarBg: '#E9DCBB',
    },
  },
  {
    slug: 'fix-electric-drew',
    favorId: '1234',
    title: 'I will fix your electric supply issue',
    priceFrom: 'starts from $135',
    date: '2026-12-25',
    category: 'Cleaning',
    subCategories: 'Home Cleaning, Gardening, Dusting',
    status: 'Active',
    thumbnailSrc: thumbnail,
    creator: {
      name: 'Drew Cano',
      role: 'Pro Seller',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/bd8afad2-6922-42b2-a21f-0951dbb7a1c6',
      avatarBg: '#D9E5CC',
    },
  },
];

export function getFavorBySlug(slug: string): AdminFavorRow | undefined {
  return favorRows.find((row) => row.slug === slug);
}
