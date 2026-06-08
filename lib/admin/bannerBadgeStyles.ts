import type { BannerStatus } from '@/lib/admin/mockBannersData';

export const bannerStatusStyles: Record<
  BannerStatus,
  { bg: string; border: string; text: string }
> = {
  Active: { bg: '#ECFDF3', border: '#ABEFC6', text: '#067647' },
  Inactive: { bg: '#FFFAEB', border: '#FEDF89', text: '#B54708' },
};
