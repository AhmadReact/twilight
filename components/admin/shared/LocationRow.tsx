import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { brandColors } from '@/lib/theme';
import type { UserLocation } from '@/lib/admin/userDetailTypes';

type LocationRowProps = {
  location: UserLocation;
};

export default function LocationRow({ location }: LocationRowProps) {
  return (
    <div className="flex gap-2">
      <span className="flex shrink-0 pt-0.5">
        {location.showIcon ? (
          <PlaceOutlinedIcon sx={{ fontSize: 20, color: brandColors[600] }} />
        ) : (
          <span className="inline-block size-5" aria-hidden />
        )}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold leading-5 text-[#344054]">{location.label}</p>
        <p className="text-xs font-normal leading-4 text-[#475467]">{location.address}</p>
      </div>
    </div>
  );
}
