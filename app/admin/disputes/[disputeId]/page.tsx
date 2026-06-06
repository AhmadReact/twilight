import { notFound } from 'next/navigation';
import DisputeDetailPage from '@/components/admin/disputes/DisputeDetailPage';
import { getDisputeDetail } from '@/lib/admin/mockDisputeDetailData';

type PageProps = {
  params: Promise<{ disputeId: string }>;
};

export default async function Page({ params }: PageProps) {
  const { disputeId } = await params;
  const detail = getDisputeDetail(disputeId);

  if (!detail) {
    notFound();
  }

  return <DisputeDetailPage detail={detail} />;
}
