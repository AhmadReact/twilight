'use client';

import { useState } from 'react';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AdminBreadcrumbs from '@/components/admin/shared/AdminBreadcrumbs';
import BookingsTable from '@/components/admin/bookings/BookingsTable';
import { outlineButtonSx } from '@/lib/admin/adminButtonStyles';
import { loginFieldSx } from '@/lib/theme';

export default function BookingsPage() {
  const [statusFilter, setStatusFilter] = useState('all');

  return (
    <div className="flex flex-col gap-8 px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <AdminBreadcrumbs currentLabel="Bookings" />

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-[280px] flex-1 sm:min-w-[320px]">
              <h1 className="text-2xl font-semibold leading-[38px] text-[#101828] sm:text-[30px]">
                Bookings Management
              </h1>
              <p className="text-base font-normal leading-6 text-[#475467]">
                Manage all Bookings.
              </p>
            </div>

            <TextField
              placeholder="Search by ID, Seller/Buyer Name"
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

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button
            disableElevation
            startIcon={<CalendarMonthOutlinedIcon sx={{ fontSize: 20 }} />}
            sx={outlineButtonSx}
          >
            Jan 6, 2024 – Jan 13, 2024
          </Button>
          <Button
            disableElevation
            startIcon={<FilterListOutlinedIcon sx={{ fontSize: 20 }} />}
            sx={outlineButtonSx}
          >
            Filters
          </Button>
        </div>
      </header>

      <BookingsTable statusFilter={statusFilter} onStatusFilterChange={setStatusFilter} />
    </div>
  );
}
