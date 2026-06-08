export type BannerStatus = 'Active' | 'Inactive';

export type AdminBannerRow = {
  id: string;
  bannerId: string;
  title: string;
  type: string;
  startDate: string;
  endDate: string;
  status: BannerStatus;
  preview: {
    discountLabel: string;
    headline: string;
    description: string;
    backgroundColor: string;
    imageUrl?: string;
  };
};

export const adminBannerRows: AdminBannerRow[] = [
  {
    id: 'banner-1',
    bannerId: '12345',
    title: 'Tuesday Offer',
    type: 'Homepage Banner',
    startDate: '2026-12-24',
    endDate: '2026-12-24',
    status: 'Active',
    preview: {
      discountLabel: '30% off',
      headline: "Today's Special!",
      description: 'Get discount for every order, only valid for today',
      backgroundColor: '#FEC84B',
    },
  },
  {
    id: 'banner-2',
    bannerId: '12345',
    title: 'Tuesday Offer',
    type: 'Homepage Banner',
    startDate: '2026-12-24',
    endDate: '2026-12-24',
    status: 'Active',
    preview: {
      discountLabel: '30% off',
      headline: "Today's Special!",
      description: 'Get discount for every order, only valid for today',
      backgroundColor: '#FEC84B',
    },
  },
  {
    id: 'banner-3',
    bannerId: '12345',
    title: 'Tuesday Offer',
    type: 'Homepage Banner',
    startDate: '2026-12-24',
    endDate: '2026-12-24',
    status: 'Inactive',
    preview: {
      discountLabel: '20% off',
      headline: 'Weekend Deal',
      description: 'Limited time offer for weekend bookings',
      backgroundColor: '#FEC84B',
    },
  },
  {
    id: 'banner-4',
    bannerId: '12345',
    title: 'Tuesday Offer',
    type: 'Homepage Banner',
    startDate: '2026-12-24',
    endDate: '2026-12-24',
    status: 'Active',
    preview: {
      discountLabel: '30% off',
      headline: "Today's Special!",
      description: 'Get discount for every order, only valid for today',
      backgroundColor: '#FEC84B',
    },
  },
  {
    id: 'banner-5',
    bannerId: '12345',
    title: 'Tuesday Offer',
    type: 'Homepage Banner',
    startDate: '2026-12-24',
    endDate: '2026-12-24',
    status: 'Active',
    preview: {
      discountLabel: '30% off',
      headline: "Today's Special!",
      description: 'Get discount for every order, only valid for today',
      backgroundColor: '#FEC84B',
    },
  },
  {
    id: 'banner-6',
    bannerId: '12345',
    title: 'Tuesday Offer',
    type: 'Homepage Banner',
    startDate: '2026-12-24',
    endDate: '2026-12-24',
    status: 'Inactive',
    preview: {
      discountLabel: '15% off',
      headline: 'Spring Promo',
      description: 'Save on selected services this season',
      backgroundColor: '#FEC84B',
    },
  },
  {
    id: 'banner-7',
    bannerId: '12345',
    title: 'Tuesday Offer',
    type: 'Homepage Banner',
    startDate: '2026-12-24',
    endDate: '2026-12-24',
    status: 'Active',
    preview: {
      discountLabel: '30% off',
      headline: "Today's Special!",
      description: 'Get discount for every order, only valid for today',
      backgroundColor: '#FEC84B',
    },
  },
];

function normalizeQuery(value: string) {
  return value.trim().toLowerCase();
}

export function filterBannerRows(rows: AdminBannerRow[], searchQuery: string, statusFilter: string) {
  const query = normalizeQuery(searchQuery);

  return rows.filter((row) => {
    if (statusFilter !== 'all' && row.status.toLowerCase() !== statusFilter) {
      return false;
    }

    if (!query) {
      return true;
    }

    const haystack = [row.bannerId, row.title, row.type].join(' ').toLowerCase();
    return haystack.includes(query);
  });
}
