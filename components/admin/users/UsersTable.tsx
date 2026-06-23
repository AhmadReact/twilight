'use client';

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import type { AdminUser } from '@/app/admin/users/store/userAPI';
import AdminDataTable, { type AdminTableColumn } from '@/components/admin/shared/AdminDataTable';
import BookingsSummaryCell from '@/components/admin/shared/BookingsSummaryCell';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import UserInfoCell from '@/components/admin/shared/UserInfoCell';
import UserRowActionsMenu from '@/components/admin/users/UserRowActionsMenu';
import { primaryButtonSx } from '@/lib/admin/adminButtonStyles';
import type { UserStatus } from '@/lib/admin/mockUsersData';
import { userStatusStyles } from '@/lib/admin/userBadgeStyles';
import { grayColors } from '@/lib/theme';

type UsersTableProps = {
  users: AdminUser[];
  total: number;
  page: number;
  totalPages: number;
  isLoading?: boolean;
  isFetching?: boolean;
  onPageChange: (page: number) => void;
  onNewUserClick?: () => void;
};

function getUserStatusStyle(status: string) {
  const normalized = status as UserStatus;
  return userStatusStyles[normalized] ?? userStatusStyles.Active;
}

function getUserInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export default function UsersTable({
  users,
  total,
  page,
  totalPages,
  isLoading = false,
  isFetching = false,
  onPageChange,
  onNewUserClick,
}: UsersTableProps) {
  const router = useRouter();

  const columns = useMemo<AdminTableColumn<AdminUser>[]>(
    () => [
      {
        id: 'id',
        header: 'User ID',
        align: 'center',
        render: (user) => (
          <span className="text-sm font-medium leading-5 text-[#101828]">{user.id}</span>
        ),
      },
      {
        id: 'name',
        header: 'Name',
        render: (user) => (
          <UserInfoCell
            name={user.full_name}
            subtitle={`${user.email} | ${user.phone}`}
            avatarSrc={user.avatar_url ?? undefined}
            initials={getUserInitials(user.full_name)}
          />
        ),
      },
      {
        id: 'userType',
        header: 'User Type',
        align: 'center',
        render: (user) => user.user_type,
      },
      {
        id: 'bookings',
        header: 'Total Bookings',
        render: (user) => (
          <BookingsSummaryCell
            total={user.total_bookings}
            completed={user.completed_bookings}
            cancelled={user.cancelled_bookings}
          />
        ),
      },
      {
        id: 'memberSince',
        header: 'Member Since',
        align: 'center',
        render: (user) => user.member_since,
      },
      {
        id: 'status',
        header: 'Status',
        align: 'center',
        render: (user) => {
          const statusStyle = getUserStatusStyle(user.status);

          return (
            <StatusBadge
              label={user.status}
              bg={statusStyle.bg}
              border={statusStyle.border}
              text={statusStyle.text}
            />
          );
        },
      },
      {
        id: 'actions',
        header: 'Actions',
        align: 'center',
        stopRowClick: true,
        render: (user) => <UserRowActionsMenu user={user} />,
      },
    ],
    [],
  );

  return (
    <AdminDataTable
      title="All members"
      badge={`${total} users`}
      description="Manage your users here."
      headerActions={
        <>
          <Button
            disableElevation
            startIcon={<AddOutlinedIcon />}
            sx={primaryButtonSx}
            onClick={onNewUserClick}
          >
            New User
          </Button>
          <IconButton aria-label="More options" size="small" sx={{ color: grayColors[700] }}>
            <MoreVertOutlinedIcon fontSize="small" />
          </IconButton>
        </>
      }
      columns={columns}
      rows={users}
      getRowKey={(user) => String(user.id)}
      onRowClick={(user) => router.push(`/admin/users/${user.id}`)}
      loading={isLoading}
      fetching={isFetching}
      emptyMessage="No users found."
      minWidth={1050}
      page={page}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  );
}
