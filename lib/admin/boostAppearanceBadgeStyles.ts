import type { BoostAppearanceLocation } from '@/lib/admin/mockBoostControlData';

export type BoostAppearanceBadgeStyle = {
  bg: string;
  border: string;
  text: string;
};

export const boostAppearanceBadgeStyles: Record<
  BoostAppearanceLocation,
  BoostAppearanceBadgeStyle
> = {
  'seller-profile': {
    bg: '#F9FAFB',
    border: '#EAECF0',
    text: '#344054',
  },
  'favor-listing': {
    bg: '#EFF8FF',
    border: '#B2DDFF',
    text: '#175CD3',
  },
  'home-page': {
    bg: '#ECFDF3',
    border: '#ABEFC6',
    text: '#067647',
  },
  'teams-page': {
    bg: '#FDF2FA',
    border: '#FCCEEE',
    text: '#C11574',
  },
  everywhere: {
    bg: '#F6EDFF',
    border: '#E9D7FE',
    text: '#9643E8',
  },
};
