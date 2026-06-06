'use client';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import DisputeParticipantChip from '@/components/admin/shared/DisputeParticipantChip';
import type { DisputeParticipant } from '@/lib/admin/disputeDetailTypes';
import {
  formatDisputeCalculatedAmount,
  formatDisputeSplitPercent,
} from '@/lib/admin/disputeAmountUtils';
import { grayColors } from '@/lib/theme';

export type DisputePaymentInputMode = 'percent' | 'dollar';

type DisputePaymentAmountFieldProps = {
  label: string;
  participant: DisputeParticipant;
  totalAmount: number;
  inputMode?: DisputePaymentInputMode;
  value: number;
  onValueChange?: (value: number) => void;
  readOnly?: boolean;
};

export default function DisputePaymentAmountField({
  label,
  participant,
  totalAmount,
  inputMode = 'percent',
  value,
  onValueChange,
  readOnly = false,
}: DisputePaymentAmountFieldProps) {
  const isDollarMode = inputMode === 'dollar';
  const calculatedAmount = Math.round((totalAmount * value) / 100);
  const suffix = isDollarMode ? '$' : '%';
  const helperText = isDollarMode
    ? formatDisputeSplitPercent(value, totalAmount)
    : formatDisputeCalculatedAmount(calculatedAmount);

  return (
    <div className="w-full max-w-[327px] rounded-[23px] bg-white p-8 shadow-[0px_28px_30.5px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col gap-[26px]">
        <DisputeParticipantChip participant={participant} />
        <div className="w-full max-w-[260px] space-y-1.5">
          <label className="text-sm font-medium leading-5 text-[#344054]">{label}</label>
          <div
            className={`flex overflow-hidden rounded-full border border-[#D0D5DD] shadow-[0px_1px_1px_rgba(16,24,40,0.05)] ${
              isDollarMode ? 'bg-white' : 'bg-[#F9FAFB]'
            }`}
          >
            <TextField
              value={value}
              onChange={(event) => {
                const next = Number.parseInt(event.target.value, 10);
                if (!Number.isNaN(next)) {
                  const max = isDollarMode ? totalAmount : 100;
                  onValueChange?.(Math.min(max, Math.max(0, next)));
                } else if (event.target.value === '') {
                  onValueChange?.(0);
                }
              }}
              disabled={readOnly}
              type="number"
              sx={{
                flex: 1,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 0,
                  bgcolor: 'transparent',
                  '& fieldset': { border: 'none' },
                },
                '& .MuiOutlinedInput-input': {
                  py: '8px',
                  pl: '12px',
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: isDollarMode ? grayColors[900] : grayColors[500],
                },
              }}
            />
            <Select
              value={suffix}
              disabled
              variant="standard"
              disableUnderline
              sx={{
                minWidth: 72,
                px: '12px',
                py: '8px',
                fontSize: '16px',
                color: grayColors[700],
                '& .MuiSelect-icon': { color: grayColors[700] },
              }}
            >
              <MenuItem value={suffix}>{suffix}</MenuItem>
            </Select>
          </div>
          <p className="text-sm font-normal leading-5 text-[#475467]">{helperText}</p>
        </div>
      </div>
    </div>
  );
}
