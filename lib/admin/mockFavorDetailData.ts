import type { AdminFavorRow, FavorCategory } from '@/lib/admin/mockFavorsData';
import { getFavorBySlug } from '@/lib/admin/mockFavorsData';

export type FavorPlanAddon = {
  label: string;
  price: string;
};

export type FavorPlan = {
  name: string;
  price: string;
  features: string[];
  addons: FavorPlanAddon[];
};

export type FavorProvider = {
  name: string;
  email: string;
  avatarSrc: string;
  isPro?: boolean;
  verified?: boolean;
};

export type FavorRelatedService = {
  slug: string;
  title: string;
  thumbnailSrc: string;
  rating: number;
  reviewCount: string;
  priceFrom: string;
};

export type FavorReview = {
  reviewerName: string;
  avatarSrc?: string;
  avatarBg?: string;
  rating: number;
  text: string;
  date: string;
};

export type FavorDetail = {
  slug: string;
  favorId: string;
  title: string;
  subCategories: string;
  category: FavorCategory;
  provider: FavorProvider;
  plan: FavorPlan;
  aggregateRating: number;
  reviewCount: string;
  relatedServices: FavorRelatedService[];
  reviews: FavorReview[];
};

const providerAvatar =
  'https://www.figma.com/api/mcp/asset/f1b47967-dda4-4d4c-81bc-117d239c009c';

const serviceThumb =
  'https://www.figma.com/api/mcp/asset/9f018e8f-cb50-4d1b-a4fe-c21bdb3633ec';

const defaultPlan: FavorPlan = {
  name: 'Basic Plan',
  price: '$200',
  features: [
    'Professional deep cleaning of the selected area using standard cleaning supplies.',
    'Dusting and wiping of all accessible surfaces, furniture, and fixtures.',
    'Trash collection and proper disposal after service completion.',
  ],
  addons: [
    { label: 'Deep stain removal for carpets, sofas, or mattresses', price: '$15' },
    { label: 'Sanitization & disinfection service for kitchens and bathrooms', price: '$30' },
  ],
};

const defaultReviews: FavorReview[] = [
  {
    reviewerName: 'Shawn Ireland',
    avatarSrc: 'https://www.figma.com/api/mcp/asset/c4ea0a31-4601-47ed-aa8f-fe8e1e1dd8c5',
    rating: 5,
    text: 'My place looked fresh and spotless after the service. She arrived at the decided',
    date: '12 Dec, 2024',
  },
  {
    reviewerName: 'Mary Katherine',
    avatarSrc: 'https://www.figma.com/api/mcp/asset/d9537f18-2194-4f7f-80c4-df477e036fac',
    rating: 5,
    text: 'Quick, professional, and left my place spotless—highly recommended!',
    date: '8 Dec, 2024',
  },
];

const defaultRelated: FavorRelatedService[] = [
  {
    slug: 'fix-electric-supply',
    title: 'I will fix your electric supply issue',
    thumbnailSrc: serviceThumb,
    rating: 4.8,
    reviewCount: '8,89 reviews',
    priceFrom: 'starts from $135',
  },
  {
    slug: 'deep-clean-home',
    title: 'I will deep clean your home',
    thumbnailSrc:
      'https://www.figma.com/api/mcp/asset/c8461d29-0447-4542-b06f-019a9d6f6a0e',
    rating: 4.8,
    reviewCount: '8,89 reviews',
    priceFrom: 'starts from $200',
  },
];

function buildDetail(row: AdminFavorRow): FavorDetail {
  return {
    slug: row.slug,
    favorId: row.favorId === '1234' ? '12345' : row.favorId,
    title: row.title,
    subCategories: row.subCategories,
    category: row.category,
    provider: {
      name: row.creator.name === 'Demi Wilkinson' ? 'Olivia Rhye' : row.creator.name,
      email: `${row.creator.name.toLowerCase().replace(/\s+/g, '.')}@untitledui.com`,
      avatarSrc: row.creator.avatarSrc ?? providerAvatar,
      isPro: true,
      verified: true,
    },
    plan: defaultPlan,
    aggregateRating: 4.8,
    reviewCount: '8,89 reviews',
    relatedServices: defaultRelated.filter((service) => service.slug !== row.slug),
    reviews: defaultReviews,
  };
}

const detailBySlug: Record<string, FavorDetail> = {
  'deep-clean-home': {
    slug: 'deep-clean-home',
    favorId: '12345',
    title: 'I will deep clean your home',
    subCategories: 'Home Cleaning, Gardening, Dusting',
    category: 'Cleaning',
    provider: {
      name: 'Olivia Rhye',
      email: 'olivia@untitledui.com',
      avatarSrc: providerAvatar,
      isPro: true,
      verified: true,
    },
    plan: defaultPlan,
    aggregateRating: 4.8,
    reviewCount: '8,89 reviews',
    relatedServices: defaultRelated,
    reviews: defaultReviews,
  },
};

export function getFavorDetail(slug: string): FavorDetail | undefined {
  if (detailBySlug[slug]) {
    return detailBySlug[slug];
  }

  const row = getFavorBySlug(slug);
  if (!row) {
    return undefined;
  }

  return buildDetail(row);
}
