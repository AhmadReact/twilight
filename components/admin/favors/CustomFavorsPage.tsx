'use client';

import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AdminBreadcrumbs from '@/components/admin/shared/AdminBreadcrumbs';
import FilterButtonGroup from '@/components/admin/shared/FilterButtonGroup';
import CustomFavorsTable from '@/components/admin/favors/CustomFavorsTable';
import { loginFieldSx } from '@/lib/theme';

const categoryFilters = [
  { id: 'all', label: 'All' },
  { id: 'cleaning', label: 'Cleaning' },
  { id: 'repairing', label: 'Repairing' },
  { id: 'laundry', label: 'Laundry' },
  { id: 'more', label: 'More Categories', icon: 'filter' as const },
];

const acceptanceFilters = [
  { id: 'all', label: 'All' },
  { id: 'accepted', label: 'Accepted', labelClassName: 'text-[#17B26A]' },
  { id: 'pending', label: 'Pending', labelClassName: 'text-[#667085]' },
];

type CustomFavorsPageProps = {
  favorsHref?: string;
  favorDetailHrefBase?: string;
};

export default function CustomFavorsPage({
  favorsHref = '/admin/favors',
  favorDetailHrefBase = '/admin/favors/custom',
}: CustomFavorsPageProps) {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [acceptanceFilter, setAcceptanceFilter] = useState('all');

  return (
    <div className="flex flex-col gap-8 px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <AdminBreadcrumbs
            items={[
              { label: 'Favors', href: favorsHref },
              { label: 'Custom Favors' },
            ]}
          />

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-[280px] flex-1 sm:min-w-[320px]">
              <h1 className="text-2xl font-semibold leading-[38px] text-[#101828] sm:text-[30px]">
                Custom Favors Management
              </h1>
              <p className="text-base font-normal leading-6 text-[#475467]">
                Manage Custom favors.
              </p>
            </div>

            <TextField
              placeholder="Search by ID or Title"
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

        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div className="max-w-full overflow-x-auto">
            <FilterButtonGroup
              items={categoryFilters}
              activeId={categoryFilter}
              onChange={setCategoryFilter}
            />
          </div>
          <div className="max-w-full overflow-x-auto">
            <FilterButtonGroup
              items={acceptanceFilters}
              activeId={acceptanceFilter}
              onChange={setAcceptanceFilter}
            />
          </div>
        </div>
      </header>

      <CustomFavorsTable
        categoryFilter={categoryFilter}
        acceptanceFilter={acceptanceFilter}
        hrefBase={favorDetailHrefBase}
      />
    </div>
  );
}
