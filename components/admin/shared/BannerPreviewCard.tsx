type BannerPreviewCardProps = {
  discountLabel: string;
  headline: string;
  description: string;
  backgroundColor?: string;
  imageUrl?: string;
};

export default function BannerPreviewCard({
  discountLabel,
  headline,
  description,
  backgroundColor = '#FEC84B',
  imageUrl,
}: BannerPreviewCardProps) {
  return (
    <div
      className="relative h-[45px] w-[129px] shrink-0 overflow-hidden rounded-[8px] shadow-[0px_1.5px_22.5px_rgba(4,6,15,0.05)]"
      style={{ backgroundColor }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/5" />
      <div className="relative z-[1] flex h-full flex-col justify-center px-2 py-1">
        <p className="text-[10.5px] font-bold leading-[13.5px] tracking-[-0.045px] text-black">
          {discountLabel}
        </p>
        <p className="text-[6px] font-semibold leading-[9px] text-[#101828]">{headline}</p>
        <p className="line-clamp-2 text-[4.5px] leading-[6px] tracking-[0.015px] text-[#101828]">
          {description}
        </p>
      </div>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt=""
          className="pointer-events-none absolute bottom-0 right-0 h-[99px] w-[66px] object-cover"
        />
      ) : (
        <div className="pointer-events-none absolute -right-1 bottom-0 h-10 w-10 rounded-full bg-white/30" />
      )}
      <div className="absolute bottom-1 right-2 flex items-center gap-0.5">
        <span className="h-[1.5px] w-1.5 rounded-full bg-white" />
        <span className="size-[1.5px] rounded-full bg-[#B54708]" />
        <span className="size-[1.5px] rounded-full bg-[#B54708]" />
        <span className="size-[1.5px] rounded-full bg-[#B54708]" />
        <span className="size-[1.5px] rounded-full bg-[#B54708]" />
      </div>
    </div>
  );
}
