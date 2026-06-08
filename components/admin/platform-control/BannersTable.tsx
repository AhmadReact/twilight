'use client';

import { useMemo } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AdminTableCardHeader from '@/components/admin/shared/AdminTableCardHeader';
import BannerPreviewCard from '@/components/admin/shared/BannerPreviewCard';
import StatusBadge from '@/components/admin/shared/StatusBadge';
import TablePagination from '@/components/admin/shared/TablePagination';
import { primaryButtonSx } from '@/lib/admin/adminButtonStyles';
import { bannerStatusStyles } from '@/lib/admin/bannerBadgeStyles';
import { adminBannerRows, filterBannerRows } from '@/lib/admin/mockBannersData';
import { grayColors } from '@/lib/theme';

type BannersTableProps = {
  searchQuery: string;
  statusFilter: string;
};

export default function BannersTable({ searchQuery, statusFilter }: BannersTableProps) {
  const filteredRows = useMemo(
    () => filterBannerRows(adminBannerRows, searchQuery, statusFilter),
    [searchQuery, statusFilter],
  );

  return (
    <section className="overflow-hidden rounded-[11px] border border-[#EAECF0] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.1)]">
      <AdminTableCardHeader
        title="Banners"
        description="These banners have been created in the last 12 months."
        actions={
          <>
            <Button
              disableElevation
              startIcon={<AddOutlinedIcon sx={{ fontSize: 20 }} />}
              sx={primaryButtonSx}
            >
              Banner
            </Button>
            <IconButton aria-label="More options" size="small" sx={{ color: grayColors[700] }}>
              <MoreVertOutlinedIcon fontSize="small" />
            </IconButton>
          </>
        }
      />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[980px] border-collapse text-left">
          <thead>
            <tr className="bg-[#F9FAFB]">
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Banner ID
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Title
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Type
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Start Date
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                End Date
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Status
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Image Preview
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, index) => {
              const statusStyle = bannerStatusStyles[row.status];
              const isHighlighted = index % 2 === 0;

              return (
                <tr
                  key={row.id}
                  className={`border-b border-[#EAECF0] last:border-b-0 transition-colors hover:bg-[#F9F5FF] ${
                    isHighlighted ? 'bg-[#FCFAFF]' : 'bg-white'
                  }`}
                >
                  <td className="px-4 py-4 text-center text-sm font-medium leading-5 text-[#101828] sm:px-6">
                    {row.bannerId}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium leading-5 text-[#101828] sm:px-6">
                    {row.title}
                  </td>
                  <td className="px-4 py-4 text-sm font-normal leading-5 text-[#475467] sm:px-6">
                    {row.type}
                  </td>
                  <td className="px-4 py-4 text-center text-sm font-normal leading-5 text-[#475467] sm:px-6">
                    {row.startDate}
                  </td>
                  <td className="px-4 py-4 text-center text-sm font-normal leading-5 text-[#475467] sm:px-6">
                    {row.endDate}
                  </td>
                  <td className="px-4 py-4 text-center sm:px-6">
                    <StatusBadge
                      label={row.status}
                      bg={statusStyle.bg}
                      border={statusStyle.border}
                      text={statusStyle.text}
                    />
                  </td>
                  <td className="px-4 py-4 sm:px-6">
                    <BannerPreviewCard
                      discountLabel={row.preview.discountLabel}
                      headline={row.preview.headline}
                      description={row.preview.description}
                      backgroundColor={row.preview.backgroundColor}
                      imageUrl={row.preview.imageUrl}
                    />
                  </td>
                  <td className="px-4 py-4 text-center sm:px-6">
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
