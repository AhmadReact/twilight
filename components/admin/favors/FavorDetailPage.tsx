'use client';

import Button from '@mui/material/Button';
import OutlinedFlagOutlinedIcon from '@mui/icons-material/OutlinedFlagOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import AdminBreadcrumbs from '@/components/admin/shared/AdminBreadcrumbs';
import FavorPlanCard from '@/components/admin/shared/FavorPlanCard';
import FavorProviderProfile from '@/components/admin/shared/FavorProviderProfile';
import FavorRelatedServiceCard from '@/components/admin/shared/FavorRelatedServiceCard';
import FavorReviewCard from '@/components/admin/shared/FavorReviewCard';
import RatingSummary from '@/components/admin/shared/RatingSummary';
import SectionHeaderLink from '@/components/admin/shared/SectionHeaderLink';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import {
  destructiveOutlineButtonSx,
  outlineButtonSx,
} from '@/lib/admin/adminButtonStyles';
import type { FavorDetail } from '@/lib/admin/mockFavorDetailData';

const categoryBadgeStyle = {
  bg: 'transparent',
  border: '#7F56D9',
  text: '#6941C6',
};

type FavorDetailPageProps = {
  detail: FavorDetail;
};

export default function FavorDetailPage({ detail }: FavorDetailPageProps) {
  return (
    <div className="flex flex-col gap-8 px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <AdminBreadcrumbs
            items={[
              { label: 'Favors', href: '/admin/favors' },
              { label: detail.title },
            ]}
          />

          <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:items-start lg:justify-between">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-2xl font-semibold leading-[38px] text-[#101828] sm:text-[30px]">
                  {detail.title}
                </h1>
                <StatusBadge
                  label={detail.category}
                  bg={categoryBadgeStyle.bg}
                  border={categoryBadgeStyle.border}
                  text={categoryBadgeStyle.text}
                  className="border-[1.5px] px-2 py-0.5 text-xs"
                />
              </div>
              <p className="mt-1 text-base font-normal leading-6 text-[#475467]">
                Sub Category: {detail.subCategories}
              </p>
            </div>
            <p className="shrink-0 text-sm font-normal leading-5 text-[#475467] lg:self-center">
              Favor ID: {detail.favorId}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <Button
              disableElevation
              startIcon={<OutlinedFlagOutlinedIcon sx={{ fontSize: 20 }} />}
              sx={outlineButtonSx}
            >
              Flag Favor
            </Button>
            <Button
              disableElevation
              startIcon={<VisibilityOffOutlinedIcon sx={{ fontSize: 20 }} />}
              sx={outlineButtonSx}
            >
              Hide Favor
            </Button>
          </div>
          <Button
            disableElevation
            startIcon={<BlockOutlinedIcon sx={{ fontSize: 20 }} />}
            sx={destructiveOutlineButtonSx}
          >
            Delete Favor
          </Button>
        </div>

        <div className="h-px w-full bg-[#EAECF0]" />
      </header>

      <section className="flex flex-col gap-8 xl:flex-row xl:items-start xl:gap-7">
        <div className="flex min-w-0 flex-1 flex-col gap-4 xl:max-w-[630px]">
          <FavorProviderProfile provider={detail.provider} />
          <FavorPlanCard plan={detail.plan} />

          <div className="flex flex-col gap-2">
            <SectionHeaderLink title="More from this pro" />
            <div className="flex flex-col gap-2">
              {detail.relatedServices.map((service) => (
                <FavorRelatedServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden w-px shrink-0 self-stretch bg-[#EAECF0] xl:block" />

        <aside className="flex min-w-0 flex-1 flex-col gap-2 xl:max-w-none">
          <SectionHeaderLink title="Reviews and Ratings" />
          <RatingSummary
            rating={detail.aggregateRating}
            reviewCount={detail.reviewCount}
            className="mt-1"
          />
          <div className="mt-2 flex flex-col gap-2">
            {detail.reviews.map((review, index) => (
              <FavorReviewCard key={`${review.reviewerName}-${index}`} review={review} />
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
