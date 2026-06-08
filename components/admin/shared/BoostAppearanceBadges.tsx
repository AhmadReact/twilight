import StatusBadge from '@/components/admin/shared/StatusBadge';
import { boostAppearanceBadgeStyles } from '@/lib/admin/boostAppearanceBadgeStyles';
import {
  boostAppearanceLabels,
  type BoostAppearanceLocation,
} from '@/lib/admin/mockBoostControlData';

type BoostAppearanceBadgesProps = {
  locations: BoostAppearanceLocation[];
  className?: string;
};

export default function BoostAppearanceBadges({
  locations,
  className = '',
}: BoostAppearanceBadgesProps) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-1 ${className}`}>
      {locations.map((location) => {
        const style = boostAppearanceBadgeStyles[location];

        return (
          <StatusBadge
            key={location}
            label={boostAppearanceLabels[location]}
            bg={style.bg}
            border={style.border}
            text={style.text}
            className="px-2 py-0.5 text-[11px] leading-4"
          />
        );
      })}
    </div>
  );
}
