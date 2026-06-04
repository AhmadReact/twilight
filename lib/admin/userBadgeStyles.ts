import type { UserStatus } from '@/lib/admin/mockUsersData';

export const userStatusStyles: Record<
  UserStatus,
  { bg: string; border: string; text: string }
> = {
  Active: { bg: '#ECFDF3', border: '#ABEFC6', text: '#067647' },
  Blocked: { bg: '#FEF3F2', border: '#FECDCA', text: '#B42318' },
  Inactive: { bg: '#FFFAEB', border: '#FEDF89', text: '#B54708' },
};
