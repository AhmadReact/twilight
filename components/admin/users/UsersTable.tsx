'use client';

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AdminTableCardHeader from '@/components/admin/shared/AdminTableCardHeader';
import BookingsSummaryCell from '@/components/admin/shared/BookingsSummaryCell';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import TablePagination from '@/components/admin/shared/TablePagination';
import UserInfoCell from '@/components/admin/shared/UserInfoCell';
import { primaryButtonSx } from '@/lib/admin/adminButtonStyles';
import {
  USER_COUNT,
  filterUserRows,
  userRows,
} from '@/lib/admin/mockUsersData';
import { userStatusStyles } from '@/lib/admin/userBadgeStyles';
import { grayColors } from '@/lib/theme';

type UsersTableProps = {
  roleFilter: string;
  statusFilter: string;
  searchQuery: string;
};

export default function UsersTable({ roleFilter, statusFilter, searchQuery }: UsersTableProps) {
  const router = useRouter();
  const filteredRows = useMemo(
    () => filterUserRows(userRows, roleFilter, statusFilter, searchQuery),
    [roleFilter, statusFilter, searchQuery],
  );

  return (
    <section className="overflow-hidden rounded-[11px] border border-[#EAECF0] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.1)]">
      <AdminTableCardHeader
        title="All members"
        badge={`${USER_COUNT} users`}
        description="Manage your users here."
        actions={
          <>
            <Button disableElevation startIcon={<AddOutlinedIcon />} sx={primaryButtonSx}>
              New User
            </Button>
            <IconButton aria-label="More options" size="small" sx={{ color: grayColors[700] }}>
              <MoreVertOutlinedIcon fontSize="small" />
            </IconButton>
          </>
        }
      />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1050px] border-collapse text-left">
          <thead>
            <tr className="bg-[#F9FAFB]">
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                User ID
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Name
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                User Type
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Total Bookings
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Member Since
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Status
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, index) => {
              const statusStyle = userStatusStyles[row.status];

              return (
                <tr
                  key={`${row.userId}-${row.name}-${index}`}
                  onClick={() => router.push(`/admin/users/${row.slug}`)}
                  className="cursor-pointer border-b border-[#EAECF0] transition-colors last:border-b-0 hover:bg-[#F9FAFB]"
                >
                  <td className="px-4 py-4 text-center text-sm font-medium leading-5 text-[#101828] sm:px-6">
                    {row.userId}
                  </td>
                  <td className="px-4 py-4 sm:px-6">
                    <UserInfoCell
                      name={row.name}
                      subtitle={`${row.email} | ${row.phone}`}
                      avatarSrc={row.avatarSrc}
                      avatarBg={row.avatarBg}
                      initials={row.initials}
                    />
                  </td>
                  <td className="px-4 py-4 text-center text-sm font-normal leading-[18px] text-[#475467] sm:px-6">
                    {row.userType}
                  </td>
                  <td className="px-4 py-4 sm:px-6">
                    <BookingsSummaryCell
                      total={row.totalBookings}
                      completed={row.completedBookings}
                      cancelled={row.cancelledBookings}
                    />
                  </td>
                  <td className="px-4 py-4 text-center text-sm font-normal leading-5 text-[#475467] sm:px-6">
                    {row.memberSince}
                  </td>
                  <td className="px-4 py-4 text-center sm:px-6">
                    <StatusBadge
                      label={row.status}
                      bg={statusStyle.bg}
                      border={statusStyle.border}
                      text={statusStyle.text}
                    />
                  </td>
                  <td
                    className="px-4 py-4 text-center sm:px-6"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <IconButton aria-label="Row actions" size="small" sx={{ color: grayColors[700] }}>
                      <MoreVertOutlinedIcon fontSize="small" />
                    </IconButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <TablePagination />
    </section>
  );
}
