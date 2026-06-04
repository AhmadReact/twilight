import type { User } from '@/lib/store/slices/userSlice';

export const MOCK_ADMIN_EMAIL = 'admin@gmail.com';
export const MOCK_ADMIN_PASSWORD = 'admin';

export const mockAdminUser: User = {
  id: '1',
  email: MOCK_ADMIN_EMAIL,
  name: 'Admin',
  role: 'super_admin',
};

export function validateMockCredentials(email: string, password: string): boolean {
  return email === MOCK_ADMIN_EMAIL && password === MOCK_ADMIN_PASSWORD;
}
