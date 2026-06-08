'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { platformControlNavItems } from '@/lib/admin/platformControlNavigation';
import { grayColors } from '@/lib/theme';

/** Figma dual-column sidebar: 528px total, sub nav column is 264px. */
export const PLATFORM_CONTROL_SUBNAV_WIDTH = 264;

const navIconSx = { fontSize: 24, color: '#667085' };

type PlatformControlSubnavProps = {
  onClose: () => void;
  onMouseEnter?: () => void;
};

export default function PlatformControlSubnav({
  onClose,
  onMouseEnter,
}: PlatformControlSubnavProps) {
  const pathname = usePathname();

  return (
    <aside
      className="flex h-full shrink-0 flex-col border-r border-[#EAECF0] bg-white"
      style={{ width: PLATFORM_CONTROL_SUBNAV_WIDTH }}
      onMouseEnter={onMouseEnter}
    >
      <div className="flex flex-col gap-4 px-4 pb-4 pt-8">
        <div className="flex justify-end">
          <IconButton
            aria-label="Close platform controls menu"
            size="small"
            onClick={onClose}
            sx={{
              p: 1,
              color: grayColors[700],
              '&:hover': { bgcolor: '#F9FAFB' },
            }}
          >
            <MenuOutlinedIcon sx={{ fontSize: 24 }} />
          </IconButton>
        </div>

        <nav className="flex flex-col gap-1">
          {platformControlNavItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex w-full items-center gap-2 overflow-hidden px-3 py-2 ${
                  isActive ? 'rounded-full bg-[#F9FAFB]' : 'rounded-md bg-white hover:bg-[#F9FAFB]'
                }`}
              >
                <span className="flex min-w-0 flex-1 items-center gap-3">
                  <Icon sx={navIconSx} />
                  <span
                    className={`whitespace-nowrap text-base font-semibold leading-6 ${
                      isActive ? 'text-[#182230]' : 'text-[#344054]'
                    }`}
                  >
                    {item.label}
                  </span>
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
