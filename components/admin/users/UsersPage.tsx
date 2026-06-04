'use client';

import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AdminBreadcrumbs from '@/components/admin/shared/AdminBreadcrumbs';
import FilterButtonGroup from '@/components/admin/shared/FilterButtonGroup';
import UsersTable from '@/components/admin/users/UsersTable';
import { loginFieldSx } from '@/lib/theme';

const roleFilters = [
  { id: 'all', label: 'All', showDot: true },
  { id: 'buyer', label: 'Buyer' },
  { id: 'pro-seller', label: 'Pro Seller' },
  { id: 'team-lead', label: 'Team Lead' },
  { id: 'team-worker', label: 'Team Worker' },
];

const statusFilters = [
  { id: 'all', label: 'All', showDot: true },
  { id: 'active', label: 'Active', labelClassName: 'text-[#17B26A]' },
  { id: 'blocked', label: 'Blocked', labelClassName: 'text-[#F04438]' },
];

export default function UsersPage() {
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col gap-8 px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <AdminBreadcrumbs currentLabel="Users" />

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-[280px] flex-1 sm:min-w-[320px]">
              <h1 className="text-2xl font-semibold leading-[38px] text-[#101828] sm:text-[30px]">
                User Management
              </h1>
              <p className="text-base font-normal leading-6 text-[#475467]">
                Manage buyers and sellers.
              </p>
            </div>

            <TextField
              placeholder="Search by ID, Name or Email"
              size="small"
              fullWidth
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              sx={{
                ...loginFieldSx,
                maxWidth: 320,
                minWidth: 200,
                flex: '1 0 0',
              }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlinedIcon sx={{ fontSize: 20, color: '#667085' }} />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </div>

          <div className="h-px w-full bg-[#EAECF0]" />
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="overflow-x-auto pb-1">
            <FilterButtonGroup
              items={roleFilters}
              activeId={roleFilter}
              onChange={setRoleFilter}
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

      <UsersTable
        roleFilter={roleFilter}
        statusFilter={statusFilter}
        searchQuery={searchQuery}
      />
    </div>
  );
}
