'use client';

import { notFound } from 'next/navigation';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetUserDetailQuery } from '@/app/admin/users/store/userAPI';
import BuyerUserDetailPage from '@/components/admin/users/BuyerUserDetailPage';
import SellerUserDetailPage from '@/components/admin/users/SellerUserDetailPage';
import {
  mapUserDetailToBuyerDetail,
  mapUserDetailToSellerDetail,
} from '@/lib/admin/mapAdminUserDetail';

type UserDetailPageProps = {
  userId: string;
};

export default function UserDetailPage({ userId }: UserDetailPageProps) {
  const { data, isLoading, isError } = useGetUserDetailQuery(userId);

  if (isLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <CircularProgress size={32} sx={{ color: '#8E40FF' }} />
      </div>
    );
  }

  if (isError || !data?.data?.profile) {
    notFound();
  }

  const detail = data.data;

  if (detail.profile.user_type_key === 'buyer') {
    return <BuyerUserDetailPage detail={mapUserDetailToBuyerDetail(detail)} />;
  }

  return <SellerUserDetailPage detail={mapUserDetailToSellerDetail(detail)} />;
}
