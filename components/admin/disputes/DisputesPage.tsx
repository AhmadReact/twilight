'use client';

import { useState } from 'react';
import AdminBreadcrumbs from '@/components/admin/shared/AdminBreadcrumbs';
import AdminSearchField from '@/components/admin/shared/AdminSearchField';
import FilterButtonGroup from '@/components/admin/shared/FilterButtonGroup';
import DisputesManagementTable from '@/components/admin/disputes/DisputesManagementTable';

const resolutionFilters = [
  { id: 'all', label: 'All' },
  { id: 'solved', label: 'Solved' },
  { id: 'unsolved', label: 'Unsolved' },
];

const statusFilters = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active', labelClassName: 'text-[#F79009]' },
  { id: 'closed', label: 'Closed', labelClassName: 'text-[#344054]' },
];

export default function DisputesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [resolutionFilter, setResolutionFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('active');

  return (
    <div className="flex flex-col gap-8 px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <AdminBreadcrumbs currentLabel="Disputes" />

          <div className="min-w-[280px]">
            <h1 className="text-2xl font-semibold leading-[38px] text-[#101828] sm:text-[30px]">
              Disputes Management
            </h1>
            <p className="text-base font-normal leading-6 text-[#475467]">
              Manage all Disputes.
            </p>
          </div>

          <div className="h-px w-full bg-[#EAECF0]" />
        </div>

        <AdminSearchField
          placeholder="Search by Booking ID, Buyer or Seller Name"
          value={searchQuery}
          onChange={setSearchQuery}
        />

        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="overflow-x-auto pb-1">
            <FilterButtonGroup
              items={resolutionFilters}
              activeId={resolutionFilter}
              onChange={setResolutionFilter}
            />
          </div>
          <div className="overflow-x-auto pb-1 lg:shrink-0">
            <FilterButtonGroup
              items={statusFilters}
              activeId={statusFilter}
              onChange={setStatusFilter}
            />
          </div>
        </div>
      </header>

      <DisputesManagementTable
        searchQuery={searchQuery}
        resolutionFilter={resolutionFilter}
        statusFilter={statusFilter}
      />
    </div>
  );
}
