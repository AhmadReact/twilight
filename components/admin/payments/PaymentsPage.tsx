'use client';

import { useState } from 'react';
import Button from '@mui/material/Button';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AdminBreadcrumbs from '@/components/admin/shared/AdminBreadcrumbs';
import AdminSearchField from '@/components/admin/shared/AdminSearchField';
import FeaturedMetricCard from '@/components/admin/shared/FeaturedMetricCard';
import FilterButtonGroup from '@/components/admin/shared/FilterButtonGroup';
import SegmentedControl from '@/components/admin/shared/SegmentedControl';
import PaymentsTable from '@/components/admin/payments/PaymentsTable';
import WithdrawalsTable from '@/components/admin/payments/WithdrawalsTable';
import { outlineButtonSx } from '@/lib/admin/adminButtonStyles';
import { paymentMetrics } from '@/lib/admin/mockPaymentsData';
import { brandColors } from '@/lib/theme';

const sectionOptions = [
  { id: 'payments', label: 'Payments' },
  { id: 'withdrawals', label: 'Withdrawals' },
];

const bookingFilters = [
  { id: 'all', label: 'All Bookings' },
  { id: 'completed', label: 'Completed' },
  { id: 'cancelled', label: 'Cancelled' },
  { id: 'in-progress', label: 'In Progress' },
];

const paymentFilters = [
  { id: 'all', label: 'All Payments' },
  { id: 'successful', label: 'Successful', labelClassName: 'text-[#17B26A]' },
  { id: 'pending', label: 'Pending', labelClassName: 'text-[#F79009]' },
  { id: 'failed', label: 'Failed', labelClassName: 'text-[#F04438]' },
  { id: 'refunded', label: 'Refunded' },
];

const withdrawalFilters = [
  { id: 'all', label: 'All' },
  { id: 'successful', label: 'Successful', labelClassName: 'text-[#17B26A]' },
  { id: 'pending', label: 'Pending', labelClassName: 'text-[#F79009]' },
  { id: 'failed', label: 'Failed', labelClassName: 'text-[#F04438]' },
];

export default function PaymentsPage() {
  const [section, setSection] = useState('payments');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookingFilter, setBookingFilter] = useState('all');
  const [paymentFilter, setPaymentFilter] = useState('all');
  const [withdrawalFilter, setWithdrawalFilter] = useState('all');

  return (
    <div className="flex flex-col gap-8 px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-5">
          <AdminBreadcrumbs currentLabel="Payments" />

          <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap lg:items-start lg:justify-between">
            <div className="min-w-[280px] flex-1">
              <h1 className="text-2xl font-semibold leading-[38px] text-[#101828] sm:text-[30px]">
                Payments Management
              </h1>
              <p className="text-base font-normal leading-6 text-[#475467]">
                Manage all Payments.
              </p>
            </div>

            <div className="w-full max-w-[320px] min-w-[200px] flex-1 lg:flex-none">
              <AdminSearchField
                placeholder="Search ID, Buyer or Seller Name"
                value={searchQuery}
                onChange={setSearchQuery}
                showMic={false}
              />
            </div>
          </div>

          <div className="h-px w-full bg-[#EAECF0]" />
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {paymentMetrics.map((metric) => (
          <FeaturedMetricCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            trendDirection={metric.trendDirection}
            trendValue={metric.trendValue}
            icon={<MonetizationOnOutlinedIcon sx={{ fontSize: 24, color: brandColors[600] }} />}
          />
        ))}
      </div>

      <SegmentedControl options={sectionOptions} value={section} onChange={setSection} />

      {section === 'payments' ? (
        <>
          <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
            <div className="overflow-x-auto pb-1">
              <FilterButtonGroup
                items={bookingFilters}
                activeId={bookingFilter}
                onChange={setBookingFilter}
              />
            </div>
            <div className="overflow-x-auto pb-1 xl:shrink-0">
              <FilterButtonGroup
                items={paymentFilters}
                activeId={paymentFilter}
                onChange={setPaymentFilter}
              />
            </div>
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

          <PaymentsTable
            searchQuery={searchQuery}
            bookingFilter={bookingFilter}
            paymentFilter={paymentFilter}
          />
        </>
      ) : (
        <>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button
              disableElevation
              startIcon={<CalendarMonthOutlinedIcon sx={{ fontSize: 20 }} />}
              sx={outlineButtonSx}
            >
              Jan 6, 2024 – Jan 13, 2024
            </Button>
            <div className="overflow-x-auto pb-1 sm:shrink-0">
              <FilterButtonGroup
                items={withdrawalFilters}
                activeId={withdrawalFilter}
                onChange={setWithdrawalFilter}
              />
            </div>
          </div>

          <WithdrawalsTable searchQuery={searchQuery} statusFilter={withdrawalFilter} />
        </>
      )}
    </div>
  );
}
