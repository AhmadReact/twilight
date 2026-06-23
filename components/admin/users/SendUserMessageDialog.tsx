'use client';

import { useEffect, useMemo, useState, type ReactNode } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import {
  useSendEmailMutation,
  useSendNotificationMutation,
} from '@/app/admin/users/store/userAPI';
import AdminPanelDialog from '@/components/admin/shared/AdminPanelDialog';
import SegmentedControl from '@/components/admin/shared/SegmentedControl';
import {
  destructiveOutlineButtonSx,
  primaryButtonSx,
} from '@/lib/admin/adminButtonStyles';
import { adminPillFieldSx, adminTextareaFieldSx } from '@/lib/admin/adminFieldStyles';
import { useAppDispatch } from '@/lib/store/hooks';
import { showNotification } from '@/lib/store/slices/notificationSlice';
import { grayColors } from '@/lib/theme';

type MessageType = 'email' | 'notification';

type SendRecipient = {
  value: string;
  label: string;
};

type SendUserMessageDialogProps = {
  open: boolean;
  onClose: () => void;
  userId: number;
  userName: string;
  recipients?: SendRecipient[];
};

const messageTypeOptions = [
  { id: 'notification', label: 'Send Notification' },
  { id: 'email', label: 'Send Email' },
] as const;

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium leading-5 text-[#344054]">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function SendUserMessageDialog({
  open,
  onClose,
  userId,
  userName,
  recipients,
}: SendUserMessageDialogProps) {
  const dispatch = useAppDispatch();
  const [messageType, setMessageType] = useState<MessageType>('notification');
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const [sendEmail, { isLoading: isSendingEmail }] = useSendEmailMutation();
  const [sendNotification, { isLoading: isSendingNotification }] = useSendNotificationMutation();

  const isSubmitting = isSendingEmail || isSendingNotification;
  const isEmailMode = messageType === 'email';

  const recipientOptions = useMemo<SendRecipient[]>(
    () =>
      recipients ?? [
        {
          value: String(userId),
          label: userName,
        },
      ],
    [recipients, userId, userName],
  );

  const selectSx = useMemo(
    () => ({
      ...adminPillFieldSx,
      '& .MuiOutlinedInput-root': {
        ...adminPillFieldSx['& .MuiOutlinedInput-root'],
        height: 40,
        bgcolor: '#FFFFFF',
      },
      '& .MuiSelect-select': {
        display: 'flex',
        alignItems: 'center',
        py: '8px',
        pl: '12px',
        pr: '36px !important',
        color: grayColors[900],
        fontSize: '16px',
        lineHeight: '24px',
      },
    }),
    [],
  );

  useEffect(() => {
    if (!open) return;
    setRecipient(recipientOptions[0]?.value ?? String(userId));
  }, [open, recipientOptions, userId]);

  const resetForm = () => {
    setMessageType('notification');
    setRecipient(recipientOptions[0]?.value ?? String(userId));
    setSubject('');
    setTitle('');
    setMessage('');
  };

  const handleClose = () => {
    if (isSubmitting) return;
    resetForm();
    onClose();
  };

  const handleSubmit = async () => {
    const trimmedSubject = subject.trim();
    const trimmedTitle = title.trim();
    const trimmedMessage = message.trim();
    const targetUserId = recipient || String(userId);

    if (isEmailMode && (!trimmedSubject || !trimmedMessage)) {
      dispatch(
        showNotification({
          message: 'Please fill in all required fields.',
          severity: 'error',
        }),
      );
      return;
    }

    if (!isEmailMode && (!trimmedTitle || !trimmedMessage)) {
      dispatch(
        showNotification({
          message: 'Please fill in all required fields.',
          severity: 'error',
        }),
      );
      return;
    }

    try {
      const response = isEmailMode
        ? await sendEmail({
            userId: targetUserId,
            body: { subject: trimmedSubject, message: trimmedMessage },
          }).unwrap()
        : await sendNotification({
            userId: targetUserId,
            body: {
              title: trimmedTitle,
              description: trimmedMessage,
              key: 'admin_message',
            },
          }).unwrap();

      dispatch(
        showNotification({
          message:
            response.message ||
            (isEmailMode ? 'Email sent successfully' : 'Notification sent successfully'),
          severity: 'success',
        }),
      );

      resetForm();
      onClose();
    } catch {
      // Error notification is handled by the axios interceptor.
    }
  };

  return (
    <AdminPanelDialog open={open} onClose={handleClose}>
      <div className="flex flex-col gap-[18px]">
        <SegmentedControl
          options={messageTypeOptions.map((option) => ({
            id: option.id,
            label: option.label,
          }))}
          value={messageType}
          onChange={(value) => setMessageType(value as MessageType)}
          className="w-full max-w-none"
        />

        <FormField label="Send to:" htmlFor="send-to">
          <Select
            id="send-to"
            fullWidth
            value={recipient}
            onChange={(event) => setRecipient(event.target.value)}
            IconComponent={KeyboardArrowDownOutlinedIcon}
            sx={selectSx}
            disabled={recipientOptions.length <= 1}
          >
            {recipientOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormField>

        {isEmailMode ? (
          <FormField label="Subject:" htmlFor="message-subject">
            <TextField
              id="message-subject"
              placeholder="Account Notice"
              fullWidth
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              sx={adminPillFieldSx}
              slotProps={{
                input: {
                  sx: {
                    height: 40,
                    px: '12px',
                    py: '8px',
                    fontSize: '16px',
                    lineHeight: '24px',
                    bgcolor: '#FFFFFF',
                  },
                },
              }}
            />
          </FormField>
        ) : (
          <FormField label="Title:" htmlFor="notification-title">
            <TextField
              id="notification-title"
              placeholder="Important Update"
              fullWidth
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              sx={adminPillFieldSx}
              slotProps={{
                input: {
                  sx: {
                    height: 40,
                    px: '12px',
                    py: '8px',
                    fontSize: '16px',
                    lineHeight: '24px',
                    bgcolor: '#FFFFFF',
                  },
                },
              }}
            />
          </FormField>
        )}

        <FormField label="Message" htmlFor="message-body">
          <TextField
            id="message-body"
            placeholder={isEmailMode ? 'Hello from WhoCan admin.' : 'Enter a message...'}
            fullWidth
            multiline
            minRows={6}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            sx={{
              ...adminTextareaFieldSx,
              '& .MuiOutlinedInput-root': {
                ...adminTextareaFieldSx['& .MuiOutlinedInput-root'],
                minHeight: 180,
                bgcolor: '#FFFFFF',
              },
            }}
          />
        </FormField>

        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <Button
            disableElevation
            fullWidth
            onClick={handleClose}
            disabled={isSubmitting}
            sx={{
              ...destructiveOutlineButtonSx,
              flex: 1,
              py: '8px',
            }}
          >
            Cancel
          </Button>
          <Button
            disableElevation
            fullWidth
            onClick={handleSubmit}
            disabled={isSubmitting}
            sx={{
              ...primaryButtonSx,
              flex: 1,
              py: '8px',
              fontSize: '14px',
            }}
            startIcon={isSubmitting ? <CircularProgress size={16} color="inherit" /> : undefined}
          >
            {isEmailMode ? 'Send Email' : 'Send Notification'}
          </Button>
        </div>
      </div>
    </AdminPanelDialog>
  );
}
