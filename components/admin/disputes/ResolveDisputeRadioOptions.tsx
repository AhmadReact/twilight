'use client';

import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import type { DisputeResolutionType } from '@/lib/admin/disputeResolutionTypes';
import { disputeResolutionOptions } from '@/lib/admin/disputeResolutionTypes';
import { brandColors } from '@/lib/theme';

type ResolveDisputeRadioOptionsProps = {
  value: DisputeResolutionType;
  onChange: (value: DisputeResolutionType) => void;
};

export default function ResolveDisputeRadioOptions({
  value,
  onChange,
}: ResolveDisputeRadioOptionsProps) {
  return (
    <div className="w-full shrink-0 lg:w-[378px]">
      <RadioGroup
        value={value}
        onChange={(_, next) => onChange(next as DisputeResolutionType)}
      >
        {disputeResolutionOptions.map((option) => (
          <FormControlLabel
            key={option.id}
            value={option.id}
            control={
              <Radio
                sx={{
                  color: '#98A2B3',
                  '&.Mui-checked': { color: brandColors[600] },
                }}
              />
            }
            label={option.label}
            sx={{
              alignItems: 'center',
              mx: 0,
              py: 0.5,
              '& .MuiFormControlLabel-label': {
                fontSize: '16px',
                lineHeight: '24px',
                color: '#344054',
                fontWeight: value === option.id ? 600 : 400,
              },
            }}
          />
        ))}
      </RadioGroup>
    </div>
  );
}
