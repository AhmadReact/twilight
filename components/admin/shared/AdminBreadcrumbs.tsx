'use client';

import Link from 'next/link';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import { grayColors } from '@/lib/theme';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type AdminBreadcrumbsProps = {
  items?: BreadcrumbItem[];
  /** @deprecated Use `items` instead */
  currentLabel?: string;
  homeHref?: string;
};

function CrumbLabel({ label, href, isCurrent }: BreadcrumbItem & { isCurrent: boolean }) {
  if (href && !isCurrent) {
    return (
      <Link
        href={href}
        className="text-sm font-medium leading-5 text-[#475467] hover:text-[#344054]"
      >
        {label}
      </Link>
    );
  }

  return (
    <span className="rounded-full bg-[#F9FAFB] px-2 py-1 text-sm font-semibold leading-5 text-[#344054]">
      {label}
    </span>
  );
}

export default function AdminBreadcrumbs({
  items,
  currentLabel,
  homeHref = '/admin/dashboard',
}: AdminBreadcrumbsProps) {
  const trail: BreadcrumbItem[] =
    items ?? (currentLabel ? [{ label: currentLabel }] : []);

  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2">
      <IconButton
        component={Link}
        href={homeHref}
        aria-label="Home"
        size="small"
        sx={{
          p: '4px',
          color: grayColors[500],
          '&:hover': { bgcolor: '#F9FAFB' },
        }}
      >
        <HomeOutlinedIcon sx={{ fontSize: 20 }} />
      </IconButton>
      {trail.map((item, index) => (
        <span key={`${item.label}-${item.href ?? 'current'}`} className="flex items-center gap-2">
          <ChevronRightIcon sx={{ fontSize: 16, color: grayColors[500] }} />
          <CrumbLabel {...item} isCurrent={index === trail.length - 1} />
        </span>
      ))}
    </nav>
  );
}
