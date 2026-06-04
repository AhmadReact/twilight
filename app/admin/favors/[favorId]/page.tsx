import { notFound } from 'next/navigation';
import FavorDetailPage from '@/components/admin/favors/FavorDetailPage';
import { getFavorDetail } from '@/lib/admin/mockFavorDetailData';

type PageProps = {
  params: Promise<{ favorId: string }>;
};

export default async function Page({ params }: PageProps) {
  const { favorId } = await params;
  const detail = getFavorDetail(favorId);

  if (!detail) {
    notFound();
  }

  return <FavorDetailPage detail={detail} />;
}
