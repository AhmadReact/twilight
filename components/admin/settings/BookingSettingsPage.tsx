'use client';

import AdminBreadcrumbs from '@/components/admin/shared/AdminBreadcrumbs';
import BookingSettingsCard from '@/components/admin/settings/BookingSettingsCard';
import { systemSettingsBasePath } from '@/lib/admin/systemSettingsNavigation';

export default function BookingSettingsPage() {
  return (
    <div className="flex flex-col gap-8 px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <header className="flex flex-col gap-5">
        <AdminBreadcrumbs
          items={[
            { label: 'System Settings', href: systemSettingsBasePath },
            { label: 'Booking Settings' },
          ]}
        />

        <div className="min-w-[280px]">
          <h1 className="text-2xl font-semibold leading-[38px] text-[#101828] sm:text-[30px]">
            Booking Settings
          </h1>
          <p className="text-base font-normal leading-6 text-[#475467]">
            Manage Booking Settings.
          </p>
        </div>
      </header>

      <BookingSettingsCard />
    </div>
  );
}
