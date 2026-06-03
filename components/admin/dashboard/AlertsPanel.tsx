import { dashboardAlerts } from '@/lib/admin/mockData';
import { brandColors } from '@/lib/theme';

export default function AlertsPanel() {
  return (
    <aside className="flex w-[240px] shrink-0 flex-col gap-6">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-lg font-semibold leading-7 text-[#101828]">Alerts</h2>
        <button
          type="button"
          className="text-sm font-semibold leading-5 text-[#475467] hover:text-[#344054]"
        >
          View all
        </button>
      </div>

      <ul className="flex flex-col gap-5">
        {dashboardAlerts.map((alert, index) => (
          <li key={`${alert.title}-${index}`} className="relative pr-4">
            <p className="text-sm font-medium leading-5" style={{ color: alert.color }}>
              {alert.title}
            </p>
            <p className="text-sm font-normal leading-5 text-[#475467]">{alert.description}</p>
            {alert.unread && (
              <span
                className="absolute right-0 top-0 size-2 rounded-full"
                style={{ backgroundColor: brandColors[600] }}
              />
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
