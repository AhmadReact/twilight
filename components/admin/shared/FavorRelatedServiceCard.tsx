'use client';

import Link from 'next/link';
import Avatar from '@mui/material/Avatar';
import RatingSummary from '@/components/admin/shared/RatingSummary';
import type { FavorRelatedService } from '@/lib/admin/mockFavorDetailData';

type FavorRelatedServiceCardProps = {
  service: FavorRelatedService;
  hrefBase?: string;
};

export default function FavorRelatedServiceCard({
  service,
  hrefBase = '/admin/favors',
}: FavorRelatedServiceCardProps) {
  return (
    <Link
      href={`${hrefBase}/${service.slug}`}
      className="flex gap-2.5 rounded-2xl border border-[#EAECF0] bg-white p-3 shadow-[0px_3px_10px_0px_rgba(11,4,15,0.05)] transition-colors hover:bg-[#F9FAFB] sm:gap-2.5"
    >
      <Avatar
        src={service.thumbnailSrc}
        alt=""
        variant="rounded"
        sx={{ width: 64, height: 64, borderRadius: '6px', flexShrink: 0 }}
      />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium leading-5 text-[#212121]">{service.title}</p>
        <div className="mt-2 flex flex-col gap-1">
          <RatingSummary rating={service.rating} reviewCount={service.reviewCount} />
          <p className="text-sm font-semibold leading-5 text-[#8E40FF]">{service.priceFrom}</p>
        </div>
      </div>
    </Link>
  );
}
