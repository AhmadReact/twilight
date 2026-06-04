'use client';

import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { brandColors } from '@/lib/theme';

export type FilterButtonGroupItem = {
  id: string;
  label: string;
  showDot?: boolean;
  labelClassName?: string;
  icon?: 'filter';
};

type FilterButtonGroupProps = {
  items: FilterButtonGroupItem[];
  activeId: string;
  onChange: (id: string) => void;
};

function FilterDot() {
  return (
    <span
      className="size-2 shrink-0 rounded-full"
      style={{ backgroundColor: brandColors[600] }}
      aria-hidden
    />
  );
}

export default function FilterButtonGroup({
  items,
  activeId,
  onChange,
}: FilterButtonGroupProps) {
  return (
    <div
      role="group"
      className="inline-flex overflow-hidden rounded-full border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
    >
      {items.map((item, index) => {
        const isActive = item.id === activeId;
        const isLast = index === items.length - 1;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            className={`flex min-h-10 items-center justify-center gap-2 px-4 py-2 text-sm font-semibold leading-5 transition-colors ${
              isActive ? 'bg-[#F9FAFB] text-[#182230]' : 'bg-white text-[#344054] hover:bg-[#F9FAFB]'
            } ${!isLast ? 'border-r border-[#D0D5DD]' : ''}`}
          >
            {item.showDot ? <FilterDot /> : null}
            {item.icon === 'filter' ? (
              <FilterListOutlinedIcon sx={{ fontSize: 20, color: '#667085' }} />
            ) : null}
            <span className={item.labelClassName}>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
