import { notFound } from 'next/navigation';
import BuyerUserDetailPage from '@/components/admin/users/BuyerUserDetailPage';
import SellerUserDetailPage from '@/components/admin/users/SellerUserDetailPage';
import { getBuyerUserDetail } from '@/lib/admin/mockBuyerUserDetailData';
import { getSellerUserDetail } from '@/lib/admin/mockSellerUserDetailData';
import { getUserBySlug, isBuyerUserType } from '@/lib/admin/mockUsersData';

type PageProps = {
  params: Promise<{ userId: string }>;
};

export default async function Page({ params }: PageProps) {
  const { userId } = await params;
  const user = getUserBySlug(userId);

  if (!user) {
    notFound();
  }

  if (isBuyerUserType(user.userType)) {
    const detail = getBuyerUserDetail(userId);
    if (!detail) {
      notFound();
    }
    return <BuyerUserDetailPage detail={detail} />;
  }

  const detail = getSellerUserDetail(userId);
  if (!detail) {
    notFound();
  }

  return <SellerUserDetailPage detail={detail} />;
}
