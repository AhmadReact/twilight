'use client';

import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import type { FavorReview } from '@/lib/admin/mockFavorDetailData';

type FavorReviewCardProps = {
  review: FavorReview;
};

export default function FavorReviewCard({ review }: FavorReviewCardProps) {
  return (
    <article className="rounded-lg border border-[#EAECF0] bg-white p-3 shadow-[0px_1px_3px_0px_rgba(11,4,15,0.03)]">
      <div className="flex gap-2">
        <Avatar
          src={review.avatarSrc}
          alt={review.reviewerName}
          sx={{
            width: 32,
            height: 32,
            bgcolor: review.avatarBg ?? '#BDBDBD',
            flexShrink: 0,
          }}
        />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium leading-4 tracking-[0.04px] text-[#212121]">
            {review.reviewerName}
          </p>
          <Rating
            value={review.rating}
            readOnly
            size="small"
            sx={{
              mt: 0.5,
              '& .MuiRating-iconFilled': { color: '#FDB022' },
              '& .MuiRating-iconEmpty': { color: '#EAECF0' },
            }}
          />
        </div>
      </div>
      <p className="mt-2 line-clamp-3 text-xs leading-4 tracking-[0.04px] text-[#182230]">
        {review.text}
      </p>
      <p className="mt-2 text-[11px] leading-4 tracking-[0.04px] text-[#616161]">{review.date}</p>
    </article>
  );
}
