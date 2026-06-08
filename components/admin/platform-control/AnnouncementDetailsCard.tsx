'use client';

import { useMemo, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AdminStatusToggle from '@/components/admin/shared/AdminStatusToggle';
import SelectableCheckboxCard from '@/components/admin/shared/SelectableCheckboxCard';
import { outlineButtonSx, primaryButtonSx } from '@/lib/admin/adminButtonStyles';
import { adminPillFieldSx, adminTextareaFieldSx } from '@/lib/admin/adminFieldStyles';
import {
  defaultPromotionMessage,
  promotionMessageScreens,
  type PromotionMessageData,
  type PromotionMessageScreen,
} from '@/lib/admin/mockPromotionMessageData';

const disabledActionButtonSx = {
  borderRadius: '1000px',
  border: '1px solid #EAECF0',
  bgcolor: '#F2F4F7',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  px: '12px',
  py: '8px',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '20px',
  color: '#98A2B3',
  '&:hover': {
    bgcolor: '#F2F4F7',
    borderColor: '#EAECF0',
  },
  '&.Mui-disabled': {
    color: '#98A2B3',
    bgcolor: '#F2F4F7',
    borderColor: '#EAECF0',
  },
};

export default function AnnouncementDetailsCard() {
  const [savedMessage, setSavedMessage] = useState<PromotionMessageData>(defaultPromotionMessage);
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState<PromotionMessageData>(defaultPromotionMessage);

  const isDirty = useMemo(
    () =>
      draft.title !== savedMessage.title ||
      draft.body !== savedMessage.body ||
      draft.screens.join(',') !== savedMessage.screens.join(','),
    [draft, savedMessage],
  );

  const handleEdit = () => {
    setDraft(savedMessage);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setDraft(savedMessage);
    setIsEditing(false);
  };

  const handleSave = () => {
    setSavedMessage(draft);
    setIsEditing(false);
  };

  const toggleScreen = (screen: PromotionMessageScreen, checked: boolean) => {
    setDraft((current) => ({
      ...current,
      screens: checked
        ? [...current.screens, screen]
        : current.screens.filter((item) => item !== screen),
    }));
  };

  const updateActive = (isActive: boolean) => {
    setSavedMessage((current) => ({ ...current, isActive }));
    if (!isEditing) {
      setDraft((current) => ({ ...current, isActive }));
    }
  };

  const message = isEditing ? draft : savedMessage;

  return (
    <section className="flex w-full flex-col gap-[18px] rounded-[23px] border border-[#EAECF0] bg-white p-4 sm:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-xl font-semibold leading-7 tracking-[-0.08px] text-[#021326]">
          Announcement Details
        </h2>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-7">
          <AdminStatusToggle active={savedMessage.isActive} onChange={updateActive} />
          <Button
            disableElevation
            startIcon={<CalendarMonthOutlinedIcon sx={{ fontSize: 20 }} />}
            sx={outlineButtonSx}
          >
            {savedMessage.dateRangeLabel}
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-6 rounded-[20px] bg-[#F2F4F7] p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base font-medium leading-6 text-[#021326]">Current Message</p>
          {!isEditing ? (
            <Button
              disableElevation
              startIcon={<EditOutlinedIcon sx={{ fontSize: 16 }} />}
              onClick={handleEdit}
              sx={{
                ...primaryButtonSx,
                alignSelf: 'flex-start',
                px: '12px',
                py: '6px',
                fontSize: '14px',
                minWidth: 107,
              }}
            >
              Edit Message
            </Button>
          ) : null}
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium leading-5 text-[#344054]">Message Title</label>
            <TextField
              fullWidth
              value={message.title}
              onChange={(event) =>
                setDraft((current) => ({ ...current, title: event.target.value }))
              }
              disabled={!isEditing}
              sx={adminPillFieldSx}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium leading-5 text-[#344054]">Message Body</label>
            <TextField
              fullWidth
              multiline
              minRows={5}
              value={message.body}
              onChange={(event) =>
                setDraft((current) => ({ ...current, body: event.target.value }))
              }
              disabled={!isEditing}
              sx={adminTextareaFieldSx}
            />
          </div>
        </div>

        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-2">
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
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium leading-5 text-[#344054]">Message Appears on:</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {promotionMessageScreens.map((screen) => (
            <SelectableCheckboxCard
              key={screen.id}
              label={screen.label}
              checked={message.screens.includes(screen.id)}
              disabled={!isEditing}
              onChange={(checked) => toggleScreen(screen.id, checked)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
