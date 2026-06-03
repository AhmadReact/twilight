'use client';

import Button from '@mui/material/Button';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import MetricCards from '@/components/admin/dashboard/MetricCards';
import AlertsPanel from '@/components/admin/dashboard/AlertsPanel';
import DisputesTable from '@/components/admin/dashboard/DisputesTable';
import { grayColors } from '@/lib/theme';

const outlineButtonSx = {
  borderRadius: '1000px',
  border: `1px solid ${grayColors[300]}`,
  bgcolor: '#FFFFFF',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  px: '14px',
  py: '10px',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '20px',
  color: grayColors[700],
  '&:hover': {
    bgcolor: '#F9FAFB',
    borderColor: grayColors[300],
  },
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 px-8 pb-10 pt-8">
      <header className="flex flex-col gap-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-[320px] flex-1">
            <h1 className="text-[30px] font-semibold leading-[38px] text-[#101828]">
              Super Admin Dashboard
            </h1>
            <p className="text-base font-normal leading-6 text-[#475467]">
              Your current overview of latest activity.
            </p>
          </div>
          <Button disableElevation startIcon={<CloudDownloadOutlinedIcon />} sx={outlineButtonSx}>
            Export report
          </Button>
        </div>

        <div className="h-px w-full bg-[#EAECF0]" />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <Button
            disableElevation
            startIcon={<CalendarTodayOutlinedIcon />}
            sx={{
              ...outlineButtonSx,
              color: grayColors[700],
            }}
          >
            Jan 6, 2024 – Jan 13, 2024
          </Button>
          <Button disableElevation startIcon={<FilterListOutlinedIcon />} sx={outlineButtonSx}>
            Filters
          </Button>
        </div>
      </header>

      <section className="flex flex-col gap-6 xl:flex-row xl:items-start">
        <div className="min-w-0 flex-1">
          <MetricCards />
        </div>
        <AlertsPanel />
      </section>

      <DisputesTable />
    </div>
  );
}
