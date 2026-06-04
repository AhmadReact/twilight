'use client';

import StarRoundedIcon from '@mui/icons-material/StarRounded';

type RatingSummaryProps = {
  rating: number;
  reviewCount: string;
  className?: string;
};

export default function RatingSummary({ rating, reviewCount, className = '' }: RatingSummaryProps) {
  return (
    <div className={`flex items-center gap-2 text-[11px] leading-4 text-[#616161] ${className}`}>
      <StarRoundedIcon sx={{ fontSize: 16, color: '#FDB022' }} />
      <span>{rating.toFixed(1)}</span>
      <span>|</span>
      <span>{reviewCount}</span>
    </div>
  );
}
