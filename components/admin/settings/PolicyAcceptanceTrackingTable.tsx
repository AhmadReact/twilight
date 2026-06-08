'use client';

import IconButton from '@mui/material/IconButton';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import TablePagination from '@/components/admin/shared/TablePagination';
import type { PolicyAcceptanceRecord } from '@/lib/admin/mockPolicySettingsData';
import { grayColors } from '@/lib/theme';

type PolicyAcceptanceTrackingTableProps = {
  rows: PolicyAcceptanceRecord[];
};

export default function PolicyAcceptanceTrackingTable({
  rows,
}: PolicyAcceptanceTrackingTableProps) {
  return (
    <section className="overflow-hidden rounded-[11px] border border-[#EAECF0] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.06),0px_1px_3px_0px_rgba(16,24,40,0.1)]">
      <div className="px-4 pt-[18px] sm:px-6">
        <h3 className="text-base font-semibold leading-[25px] text-[#101828]">Acceptance Tracking</h3>
      </div>

      <div className="mt-[18px] border-t border-[#EAECF0]" />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="bg-[#F9FAFB]">
              <th className="border-b border-[#EAECF0] px-4 py-3 text-xs font-medium leading-4 text-[#475467] sm:px-6">
                User ID
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Policy Version
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 text-center text-xs font-medium leading-4 text-[#475467] sm:px-6">
                Acceptance Date
              </th>
              <th className="border-b border-[#EAECF0] px-4 py-3 sm:px-6" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-[#EAECF0] last:border-b-0 transition-colors hover:bg-[#F9FAFB]"
              >
                <td className="px-4 py-4 text-sm font-medium leading-5 text-[#212121] sm:px-6">
                  {row.userId}
                </td>
                <td className="px-4 py-4 text-center text-sm font-normal leading-5 text-[#475467] sm:px-6">
                  {row.policyVersion}
                </td>
                <td className="px-4 py-4 text-center text-sm font-normal leading-5 text-[#475467] sm:px-6">
                  {row.acceptanceDate}
                </td>
                <td className="px-4 py-4 text-right sm:px-6">
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
