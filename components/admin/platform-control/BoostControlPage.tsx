'use client';

import AdminBreadcrumbs from '@/components/admin/shared/AdminBreadcrumbs';
import BoostControlCard from '@/components/admin/platform-control/BoostControlCard';
import { platformControlBasePath } from '@/lib/admin/platformControlNavigation';

export default function BoostControlPage() {
  return (
    <div className="flex flex-col gap-8 px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <header className="flex flex-col gap-5">
        <AdminBreadcrumbs
          items={[
            { label: 'Platform Controls', href: platformControlBasePath },
            { label: 'Boost Controls' },
          ]}
        />

        <div className="min-w-[280px]">
          <h1 className="text-2xl font-semibold leading-[38px] text-[#101828] sm:text-[30px]">
            Promotion/Boost Control
          </h1>
          <p className="text-base font-normal leading-6 text-[#475467]">
            Manage rules for promotions and boosts.
          </p>
        </div>
      </header>

      <BoostControlCard />
    </div>
  );
}
