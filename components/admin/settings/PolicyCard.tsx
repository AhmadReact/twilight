'use client';

import { useMemo, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import IconButton from '@mui/material/IconButton';
import AdminSettingsUrlField from '@/components/admin/shared/AdminSettingsUrlField';
import CategoryToggleSwitch from '@/components/admin/shared/CategoryToggleSwitch';
import {
  disabledActionButtonSx,
  outlineButtonSx,
  primaryButtonSx,
} from '@/lib/admin/adminButtonStyles';
import { adminTextareaFieldSx } from '@/lib/admin/adminFieldStyles';
import type { PolicyItem } from '@/lib/admin/mockPolicySettingsData';

type PolicyCardProps = {
  policy: PolicyItem;
  onUpdate: (updates: Partial<PolicyItem>) => void;
};

export default function PolicyCard({ policy, onUpdate }: PolicyCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState({ url: policy.url, text: policy.text });

  const isDirty = useMemo(
    () => draft.url !== policy.url || draft.text !== policy.text,
    [draft, policy.text, policy.url],
  );

  const handleEdit = () => {
    setDraft({ url: policy.url, text: policy.text });
    setIsEditing(true);
    if (!policy.expanded) {
      onUpdate({ expanded: true });
    }
  };

  const handleCancel = () => {
    setDraft({ url: policy.url, text: policy.text });
    setIsEditing(false);
  };

  const handleSave = () => {
    onUpdate({
      url: draft.url,
      text: draft.text,
      lastUpdated: '12-Jan-2026',
    });
    setIsEditing(false);
  };

  const fieldsDisabled = !isEditing;

  return (
    <section className="flex w-full flex-col gap-6 rounded-[20px] bg-[#F2F4F7] p-4 sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <p className="text-base font-medium leading-6 text-[#021326]">{policy.title}</p>

        <div className="flex shrink-0 items-center justify-end gap-[18px]">
          {!isEditing ? (
            <Button
              disableElevation
              startIcon={<EditOutlinedIcon sx={{ fontSize: 14 }} />}
              onClick={handleEdit}
              sx={{
                ...primaryButtonSx,
                minWidth: 87,
                px: '12px',
                py: '6px',
                fontSize: '14px',
              }}
            >
              Edit
            </Button>
          ) : null}

          <CategoryToggleSwitch
            checked={policy.enabled}
            onChange={(enabled) => onUpdate({ enabled })}
            size="sm"
          />

          <IconButton
            aria-label={policy.expanded ? 'Collapse policy' : 'Expand policy'}
            onClick={() => onUpdate({ expanded: !policy.expanded })}
            sx={{
              p: '10.816px',
              color: '#344054',
              '&:hover': { bgcolor: '#EAECF0' },
            }}
          >
            <KeyboardArrowDownOutlinedIcon
              sx={{
                fontSize: 16,
                transform: policy.expanded ? 'rotate(0deg)' : 'rotate(-90deg)',
                transition: 'transform 0.2s ease',
              }}
            />
          </IconButton>
        </div>
      </div>

      {policy.expanded ? (
        <>
          <AdminSettingsUrlField
            label="URL"
            value={isEditing ? draft.url : policy.url}
            onChange={(url) => setDraft((current) => ({ ...current, url }))}
            disabled={fieldsDisabled}
          />

          <div className="flex w-full flex-col gap-1.5">
            <label className="text-sm font-medium leading-5 text-[#344054]">Text</label>
            <TextField
              fullWidth
              multiline
              minRows={6}
              value={isEditing ? draft.text : policy.text}
              disabled={fieldsDisabled}
              onChange={(event) =>
                setDraft((current) => ({ ...current, text: event.target.value }))
              }
              sx={adminTextareaFieldSx}
            />
            <p className="text-sm leading-5 text-[#475467]">
              Last Updated: {policy.lastUpdated}
            </p>
          </div>

          <div className="flex w-full flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <Button
              disableElevation
              onClick={handleCancel}
              disabled={!isEditing}
              sx={{
                ...(isEditing ? outlineButtonSx : disabledActionButtonSx),
                minWidth: 80,
              }}
            >
              Cancel
            </Button>
            <Button
              disableElevation
              onClick={handleSave}
              disabled={!isEditing || !isDirty}
              sx={{
                ...(isEditing && isDirty ? primaryButtonSx : disabledActionButtonSx),
                minWidth: 107,
              }}
            >
              Save Changes
            </Button>
          </div>
        </>
      ) : null}
    </section>
  );
}
