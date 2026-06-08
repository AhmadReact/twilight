import type { SvgIconComponent } from '@mui/icons-material';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

export type SystemSettingsNavItem = {
  label: string;
  href: string;
  icon: SvgIconComponent;
};

export const systemSettingsNavItems: SystemSettingsNavItem[] = [
  {
    label: 'General Settings',
    href: '/admin/settings/general',
    icon: SettingsOutlinedIcon,
  },
  {
    label: 'Commission Settings',
    href: '/admin/settings/commission',
    icon: PercentOutlinedIcon,
  },
  {
    label: 'Booking Settings',
    href: '/admin/settings/booking',
    icon: CalendarMonthOutlinedIcon,
  },
  {
    label: 'Payment Settings',
    href: '/admin/settings/payment',
    icon: AccountBalanceWalletOutlinedIcon,
  },
  {
    label: 'Notification Settings',
    href: '/admin/settings/notifications',
    icon: NotificationsOutlinedIcon,
  },
  {
    label: 'User Account Settings',
    href: '/admin/settings/user-account',
    icon: PeopleOutlinedIcon,
  },
  {
    label: 'Security Settings',
    href: '/admin/settings/security',
    icon: LockOutlinedIcon,
  },
  {
    label: 'App Version Control',
    href: '/admin/settings/app-version',
    icon: CloudDownloadOutlinedIcon,
  },
  {
    label: 'Policy Settings',
    href: '/admin/settings/policy',
    icon: MenuBookOutlinedIcon,
  },
  {
    label: 'Limits and Rules',
    href: '/admin/settings/limits',
    icon: StraightenOutlinedIcon,
  },
  {
    label: 'Admin Activity Settings',
    href: '/admin/settings/admin-activity',
    icon: BarChartOutlinedIcon,
  },
];

export const systemSettingsBasePath = '/admin/settings';
