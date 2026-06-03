import type { SvgIconComponent } from '@mui/icons-material';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export type AdminNavItem = {
  label: string;
  href: string;
  icon: SvgIconComponent;
};

export const adminMainNavItems: AdminNavItem[] = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: BarChartOutlinedIcon },
  { label: 'Teams', href: '/admin/teams', icon: GroupsOutlinedIcon },
  { label: 'Users', href: '/admin/users', icon: PersonOutlineOutlinedIcon },
  { label: 'Favors', href: '/admin/favors', icon: ThumbUpAltOutlinedIcon },
  { label: 'Bookings', href: '/admin/bookings', icon: EventAvailableOutlinedIcon },
  { label: 'Disputes', href: '/admin/disputes', icon: HelpOutlineOutlinedIcon },
  { label: 'Payments', href: '/admin/payments', icon: AccountBalanceWalletOutlinedIcon },
];

export const adminFooterNavItems: AdminNavItem[] = [
  { label: 'Platform Control', href: '/admin/platform-control', icon: TuneOutlinedIcon },
  { label: 'System Settings', href: '/admin/settings', icon: SettingsOutlinedIcon },
];
