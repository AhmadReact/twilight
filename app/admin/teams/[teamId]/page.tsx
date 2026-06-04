import { notFound } from 'next/navigation';
import TeamDetailPage from '@/components/admin/teams/TeamDetailPage';
import { getTeamDetail } from '@/lib/admin/mockTeamDetailData';

type PageProps = {
  params: Promise<{ teamId: string }>;
};

export default async function Page({ params }: PageProps) {
  const { teamId } = await params;
  const detail = getTeamDetail(teamId);

  if (!detail) {
    notFound();
  }

  return <TeamDetailPage detail={detail} />;
}
