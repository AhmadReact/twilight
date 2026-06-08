'use client';

import { useState } from 'react';
import AdminBreadcrumbs from '@/components/admin/shared/AdminBreadcrumbs';
import AdminSearchField from '@/components/admin/shared/AdminSearchField';
import FilterButtonGroup from '@/components/admin/shared/FilterButtonGroup';
import BannersTable from '@/components/admin/platform-control/BannersTable';
import { platformControlBasePath } from '@/lib/admin/platformControlNavigation';

const statusFilters = [
  { id: 'all', label: 'All Banners' },
  { id: 'active', label: 'Active', labelClassName: 'text-[#17B26A]' },
  { id: 'inactive', label: 'Inactive', labelClassName: 'text-[#F79009]' },
];

export default function BannersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  return (
    <div className="flex flex-col gap-8 px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <AdminBreadcrumbs
            items={[
              { label: 'Platform Controls', href: platformControlBasePath },
              { label: 'Banners' },
            ]}
          />

          <div className="min-w-[280px]">
            <h1 className="text-2xl font-semibold leading-[38px] text-[#101828] sm:text-[30px]">
              Banners Control
            </h1>
            <p className="text-base font-normal leading-6 text-[#475467]">
              Manage all Banners.
            </p>
          </div>

          <div className="h-px w-full bg-[#EAECF0]" />
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="overflow-x-auto pb-1">
            <FilterButtonGroup
              items={statusFilters}
              activeId={statusFilter}
              onChange={setStatusFilter}
            />
          </div>
          <div className="w-full max-w-[320px] min-w-[200px] lg:shrink-0">
            <AdminSearchField
              placeholder="Search by Banner ID or Title"
              value={searchQuery}
              onChange={setSearchQuery}
              showMic={false}
            />
          </div>
        </div>
      </header>

      <BannersTable searchQuery={searchQuery} statusFilter={statusFilter} />
    </div>
  );
}
