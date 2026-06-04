import Button from '@mui/material/Button';
import { brandColors } from '@/lib/theme';
import type { TeamActivity } from '@/lib/admin/mockTeamDetailData';

type RecentActivityPanelProps = {
  activities: TeamActivity[];
};

export default function RecentActivityPanel({ activities }: RecentActivityPanelProps) {
  return (
    <aside className="w-full shrink-0 lg:max-w-[325px]">
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-lg font-semibold leading-7 text-[#101828]">Recent Activity</h2>
        <Button
          disableElevation
          sx={{
            minWidth: 0,
            p: 0,
            fontSize: '14px',
            fontWeight: 600,
            color: '#475467',
            '&:hover': { bgcolor: 'transparent', color: '#344054' },
          }}
        >
          View all
        </Button>
      </div>
      <ul className="mt-5 flex flex-col gap-5">
        {activities.map((activity, index) => (
          <li key={`${activity.title}-${index}`} className="relative pr-4">
            {activity.unread ? (
              <span
                className="absolute right-0 top-1 size-2 rounded-full"
                style={{ backgroundColor: brandColors[600] }}
                aria-hidden
              />
            ) : null}
            <p className="text-sm font-medium leading-5 text-[#101828]">{activity.title}</p>
            <p className="text-sm font-normal leading-5 text-[#475467]">{activity.description}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
