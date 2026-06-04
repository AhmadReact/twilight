'use client';

import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AdminBreadcrumbs from '@/components/admin/shared/AdminBreadcrumbs';
import FilterButtonGroup from '@/components/admin/shared/FilterButtonGroup';
import TeamsTable from '@/components/admin/teams/TeamsTable';
import { loginFieldSx } from '@/lib/theme';

const attributeFilters = [
  { id: 'all', label: 'All', showDot: true },
  { id: 'rating', label: 'Rating 4+' },
  { id: 'workers', label: 'Workers > 5' },
  { id: 'earnings', label: 'Earnings > $100' },
  { id: 'more', label: 'More filters', icon: 'filter' as const },
];

const statusFilters = [
  { id: 'all', label: 'All', showDot: true },
  { id: 'active', label: 'Active', labelClassName: 'text-[#17B26A]' },
  { id: 'inactive', label: 'Inactive', labelClassName: 'text-[#F79009]' },
  { id: 'blocked', label: 'Blocked', labelClassName: 'text-[#F04438]' },
];

export default function TeamsPage() {
  const [attributeFilter, setAttributeFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  return (
    <div className="flex flex-col gap-8 px-8 pb-12 pt-8">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <AdminBreadcrumbs currentLabel="Teams" />

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-[320px] flex-1">
              <h1 className="text-[30px] font-semibold leading-[38px] text-[#101828]">
                Teams Management
              </h1>
              <p className="text-base font-normal leading-6 text-[#475467]">
                Manage teams and admins.
              </p>
            </div>

            <TextField
              placeholder="Search by ID or Name"
              size="small"
              fullWidth
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

        <div className="flex flex-wrap items-start justify-between gap-4">
          <FilterButtonGroup
            items={attributeFilters}
            activeId={attributeFilter}
            onChange={setAttributeFilter}
          />
          <FilterButtonGroup
            items={statusFilters}
            activeId={statusFilter}
            onChange={setStatusFilter}
          />
        </div>
      </header>

      <TeamsTable />
    </div>
  );
}
