'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { adminFooterNavItems, adminMainNavItems } from '@/lib/admin/navigation';
import { grayColors } from '@/lib/theme';

const navIconSx = { fontSize: 24, color: '#667085' };

function NavItem({
  href,
  label,
  icon: Icon,
  active,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex w-full items-center gap-2 overflow-hidden px-3 py-2 ${
        active ? 'rounded-full bg-[#F9FAFB]' : 'rounded-md bg-white hover:bg-[#F9FAFB]'
      }`}
    >
      <span className="flex min-w-0 flex-1 items-center gap-3">
        <Icon sx={navIconSx} />
        <span
          className={`whitespace-nowrap text-base font-semibold leading-6 ${
            active ? 'text-[#182230]' : 'text-[#344054]'
          }`}
        >
          {label}
        </span>
      </span>
    </Link>
  );
}

export default function AdminSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/admin/dashboard') {
      return pathname === href;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <aside className="flex h-full w-[312px] shrink-0 flex-col overflow-hidden border-r border-[#EAECF0] bg-white">
      <div className="flex h-full flex-col justify-between overflow-hidden">
        <div className="flex flex-col gap-6 pt-8">
          <div className="flex flex-col pl-6 pr-5">
            <Link href="/admin/dashboard" className="relative block h-[45px] w-[176.25px] overflow-hidden">
              <Image
                src="/admin/sidebar/logo.svg"
                alt="WhoCan"
                width={159}
                height={32}
                priority
                className="absolute left-[9px] top-[6.5px] h-[31.625px] w-[158.625px] max-w-none object-contain"
              />
            </Link>
          </div>

          <nav className="flex flex-col gap-1 px-4">
            {adminMainNavItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={isActive(item.href)}
              />
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6 px-4 pb-8">
          <nav className="flex flex-col gap-1">
            {adminFooterNavItems.map((item) => (
              <NavItem
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={isActive(item.href)}
              />
            ))}
          </nav>

          <div className="relative flex items-start gap-4 border-t border-[#EAECF0] pl-2 pr-8 pt-6">
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <div className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-[#F2F4F7]">
                <span className="absolute inset-0 rounded-full border border-black/8" />
                <PersonOutlineOutlinedIcon sx={{ fontSize: 20, color: grayColors[700] }} />
              </div>
              <span className="whitespace-nowrap text-sm font-semibold leading-5 text-[#344054]">
                Super Admin
              </span>
            </div>

            <IconButton
              aria-label="Log out"
              href="/login"
              LinkComponent={Link}
              sx={{
                position: 'absolute',
                right: 0,
                top: 15,
                p: 1,
                color: grayColors[700],
                '&:hover': { bgcolor: '#F9FAFB' },
              }}
            >
              <LogoutOutlinedIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </div>
        </div>
      </div>
    </aside>
  );
}
