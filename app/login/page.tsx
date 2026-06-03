import type { Metadata } from 'next';
import LoginPage from '@/components/login/LoginPage';

export const metadata: Metadata = {
  title: 'Super Admin Log in',
  description: 'Welcome back! Please enter your details.',
};

export default function Login() {
  return <LoginPage />;
}
