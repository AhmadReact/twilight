'use client';

import AdminBreadcrumbs from '@/components/admin/shared/AdminBreadcrumbs';
import { platformControlBasePath } from '@/lib/admin/platformControlNavigation';

type PlatformControlPlaceholderPageProps = {
  title: string;
  description: string;
};

export default function PlatformControlPlaceholderPage({
  title,
  description,
}: PlatformControlPlaceholderPageProps) {
  return (
    <div className="flex flex-col gap-8 px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <header className="flex flex-col gap-5">
        <AdminBreadcrumbs
          items={[
            { label: 'Platform Controls', href: platformControlBasePath },
            { label: title },
          ]}
        />
        <div className="min-w-[280px]">
          <h1 className="text-2xl font-semibold leading-[38px] text-[#101828] sm:text-[30px]">
            {title}
          </h1>
          <p className="text-base font-normal leading-6 text-[#475467]">{description}</p>
        </div>
        <div className="h-px w-full bg-[#EAECF0]" />
      </header>

      <section className="rounded-[11px] border border-[#EAECF0] bg-white px-6 py-16 text-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.1)]">
        <p className="text-sm leading-5 text-[#475467]">This section is coming soon.</p>
      </section>
    </div>
  );
}
