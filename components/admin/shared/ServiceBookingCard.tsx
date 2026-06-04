'use client';

import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import VerifiedIcon from '@mui/icons-material/Verified';
import SchedulePillsRow from '@/components/admin/shared/SchedulePillsRow';
import type {
  BookingServiceProvider,
  UserBookingCard,
} from '@/lib/admin/userDetailTypes';

type ServiceBookingCardProps = {
  booking: UserBookingCard;
  provider?: BookingServiceProvider;
};

export default function ServiceBookingCard({ booking, provider }: ServiceBookingCardProps) {
  const priceLabel = `${booking.pricePrefix ?? ''}${booking.price}`;
  const isStacked = booking.layout === 'stacked';

  return (
    <article className="flex gap-2.5 rounded-2xl border border-[#EAECF0] bg-[#FCFCFD] px-3 pb-4 pt-3">
      <Avatar
        src={booking.thumbnailSrc}
        alt=""
        variant="rounded"
        sx={{ width: 64, height: 64, borderRadius: '6px', flexShrink: 0 }}
      />
      <div className="min-w-0 flex-1">
        {isStacked ? (
          <>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <p className="text-sm font-medium leading-5 text-[#212121]">{booking.title}</p>
              <p className="shrink-0 text-sm font-semibold leading-5 text-[#8E40FF]">{priceLabel}</p>
            </div>
            {provider ? (
              <div className="mt-3 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <ProviderChip provider={provider} />
                <SchedulePillsRow
                  date={booking.date}
                  time={booking.time}
                  location={booking.location}
                />
              </div>
            ) : (
              <div className="mt-3">
                <SchedulePillsRow
                  date={booking.date}
                  time={booking.time}
                  location={booking.location}
                />
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
            <div className="min-w-0 flex-1 space-y-1.5">
              <p className="text-sm font-medium leading-5 text-[#212121]">{booking.title}</p>
              {provider ? <ProviderChip provider={provider} /> : null}
            </div>
            <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
              <p className="text-sm font-semibold leading-5 text-[#8E40FF]">{priceLabel}</p>
              <SchedulePillsRow
                date={booking.date}
                time={booking.time}
                location={booking.location}
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

function ProviderChip({ provider }: { provider: BookingServiceProvider }) {
  return (
    <div className="flex items-center gap-2.5">
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          provider.verified ? (
            <VerifiedIcon
              sx={{ fontSize: 12, color: '#2E90FA', bgcolor: '#FFFFFF', borderRadius: '50%' }}
            />
          ) : null
        }
      >
        <Avatar
          src={provider.avatarSrc}
          alt={provider.name}
          sx={{
            width: 32,
            height: 32,
            bgcolor: provider.avatarBg ?? '#F2F4F7',
            fontSize: provider.initials ? 12 : undefined,
            fontWeight: 600,
            color: '#475467',
            border: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          {provider.initials}
        </Avatar>
      </Badge>
      <div className="min-w-0">
        <p className="text-sm font-semibold leading-5 text-[#344054]">{provider.name}</p>
        <p className="text-xs font-normal leading-[18px] text-[#475467]">{provider.role}</p>
      </div>
    </div>
  );
}
