import { notFound } from 'next/navigation';
import CustomFavorDetailPage from '@/components/admin/favors/CustomFavorDetailPage';
import { getCustomFavorDetail } from '@/lib/admin/mockCustomFavorDetailData';

type PageProps = {
  params: Promise<{ favorId: string }>;
};

export default async function Page({ params }: PageProps) {
  const { favorId } = await params;
  const detail = getCustomFavorDetail(favorId);

  if (!detail) {
    notFound();
  }

  return <CustomFavorDetailPage detail={detail} />;
}
