'use client';

import Button from '@mui/material/Button';
import OutlinedFlagOutlinedIcon from '@mui/icons-material/OutlinedFlagOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import AdminBreadcrumbs from '@/components/admin/shared/AdminBreadcrumbs';
import CustomFavorDetailsCard from '@/components/admin/shared/CustomFavorDetailsCard';
import CustomFavorParticipantsPanel from '@/components/admin/shared/CustomFavorParticipantsPanel';
import FavorPartyCard from '@/components/admin/shared/FavorPartyCard';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import {
  destructiveOutlineButtonSx,
  outlineButtonSx,
} from '@/lib/admin/adminButtonStyles';
import type { CustomFavorDetail } from '@/lib/admin/mockCustomFavorDetailData';

const categoryBadgeStyle = {
  bg: 'transparent',
  border: '#7F56D9',
  text: '#6941C6',
};

const createdStatusStyle = { bg: '#F9F5FF', border: '#E9D7FE', text: '#6941C6' };
const acceptedStatusStyle = { bg: '#ECFDF3', border: '#ABEFC6', text: '#067647' };

type CustomFavorDetailPageProps = {
  detail: CustomFavorDetail;
  favorsHref?: string;
  customFavorsHref?: string;
};

export default function CustomFavorDetailPage({
  detail,
  favorsHref = '/admin/favors',
  customFavorsHref = '/admin/favors/custom',
}: CustomFavorDetailPageProps) {
  return (
    <div className="flex flex-col gap-8 px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <AdminBreadcrumbs
            items={[
              { label: 'Favors', href: favorsHref },
              { label: 'Custom Favors', href: customFavorsHref },
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

      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <FavorPartyCard
            name={detail.createdBy.name}
            email={detail.createdBy.email}
            avatarSrc={detail.createdBy.avatarSrc}
            avatarBg={detail.createdBy.avatarBg}
            verified={detail.createdBy.verified}
            statusLabel="Created"
            statusStyle={createdStatusStyle}
          />
          {detail.acceptedBy ? (
            <FavorPartyCard
              name={detail.acceptedBy.name}
              email={detail.acceptedBy.email}
              avatarSrc={detail.acceptedBy.avatarSrc}
              avatarBg={detail.acceptedBy.avatarBg}
              verified={detail.acceptedBy.verified}
              statusLabel="Accepted"
              statusStyle={acceptedStatusStyle}
            />
          ) : (
            <div className="flex min-w-0 flex-1 items-center justify-center rounded-lg border border-dashed border-[#EAECF0] px-4 py-8 text-sm text-[#475467] sm:max-w-[50%]">
              No acceptor yet
            </div>
          )}
        </div>

        <CustomFavorDetailsCard
          price={detail.price}
          description={detail.description}
          attachments={detail.attachments}
          startTime={detail.startTime}
          startDate={detail.startDate}
          buyerLocation={detail.buyerLocation}
        />
      </section>

      <section className="flex flex-col gap-8 xl:flex-row xl:items-start xl:gap-6">
        <CustomFavorParticipantsPanel
          title="Bidders"
          participants={detail.bidders}
          showProposalLink
        />
        <div className="hidden w-px shrink-0 self-stretch bg-[#EAECF0] xl:block" />
        <CustomFavorParticipantsPanel title="Invited Sellers" participants={detail.invitedSellers} />
      </section>
    </div>
  );
}
