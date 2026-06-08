import type { SvgIconComponent } from '@mui/icons-material';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';

export type PlatformControlNavItem = {
  label: string;
  href: string;
  icon: SvgIconComponent;
};

export const platformControlNavItems: PlatformControlNavItem[] = [
  {
    label: 'Banners',
    href: '/admin/platform-control/banners',
    icon: ConfirmationNumberOutlinedIcon,
  },
  {
    label: 'Promotion Messages',
    href: '/admin/platform-control/promotion-messages',
    icon: NotificationsOutlinedIcon,
  },
  {
    label: 'Boost Control',
    href: '/admin/platform-control/boost-control',
    icon: BarChartOutlinedIcon,
  },
  {
    label: 'Feature Toggle',
    href: '/admin/platform-control/feature-toggle',
    icon: ToggleOnOutlinedIcon,
  },
  {
    label: 'Category Control',
    href: '/admin/platform-control/category-control',
    icon: FavoriteBorderOutlinedIcon,
  },
  {
    label: 'Questionnaire',
    href: '/admin/platform-control/questionnaire',
    icon: QuizOutlinedIcon,
  },
];

export const platformControlBasePath = '/admin/platform-control';
