'use client';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import BoostAppearanceBadges from '@/components/admin/shared/BoostAppearanceBadges';
import TablePagination from '@/components/admin/shared/TablePagination';
import { primaryButtonSx } from '@/lib/admin/adminButtonStyles';
import { boostPackageRows } from '@/lib/admin/mockBoostControlData';
import { grayColors } from '@/lib/theme';

export default function PromotionPricingTable() {
  return (
    <section className="overflow-hidden rounded-[11px] border border-[#EAECF0] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.1)]">
      <div className="flex flex-col gap-4 px-4 pt-[18px] sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <h3 className="text-base font-semibold leading-[25px] text-[#101828]">Promotion Pricing</h3>
        <Button
          disableElevation
          startIcon={<AddOutlinedIcon sx={{ fontSize: 18 }} />}
          sx={{
            ...primaryButtonSx,
            alignSelf: 'flex-start',
            px: '12px',
            py: '9px',
            fontSize: '13px',
          }}
        >
          New Package
        </Button>
      </div>

      <div className="mt-[18px] border-t border-[#EAECF0]" />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[920px] border-collapse text-left">
          <thead>
            <tr className="bg-[#F9FAFB]">
              <th className="border-b border-[#EAECF0] px-4 py-3 text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Promotion Package
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Price
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                No. of Days
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Appears on
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Priority
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Commission
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 sm:px-6" />
            </tr>
          </thead>
          <tbody>
            {boostPackageRows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-[#EAECF0] last:border-b-0 transition-colors hover:bg-[#F9FAFB]"
              >
                <td className="px-4 py-4 text-sm font-medium leading-5 text-[#212121] sm:px-6">
                  {row.name}
                </td>
                <td className="px-4 py-4 text-sm font-normal leading-5 text-[#475467] sm:px-6">
                  {row.price}
                </td>
                <td className="px-4 py-4 text-center text-sm font-normal leading-5 text-[#475467] sm:px-6">
                  {row.days}
                </td>
                <td className="px-4 py-4 sm:px-6">
                  <BoostAppearanceBadges locations={row.appearsOn} />
                </td>
                <td className="px-4 py-4 text-center text-sm font-normal leading-5 text-[#475467] sm:px-6">
                  {row.priority}
                </td>
                <td className="px-4 py-4 text-center text-sm font-normal leading-5 text-[#475467] sm:px-6">
                  {row.commission}
                </td>
                <td className="px-4 py-4 sm:px-6">
                  <IconButton aria-label="Row actions" size="small" sx={{ color: grayColors[700] }}>
                    <MoreVertOutlinedIcon fontSize="small" />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <TablePagination />
    </section>
  );
}
