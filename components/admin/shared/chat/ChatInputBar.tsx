'use client';

import { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { primaryButtonSx } from '@/lib/admin/adminButtonStyles';
import { grayColors } from '@/lib/theme';

type ChatInputBarProps = {
  onSend?: (message: string) => void;
};

export default function ChatInputBar({ onSend }: ChatInputBarProps) {
  const [value, setValue] = useState('');

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend?.(trimmed);
    setValue('');
  };

  return (
    <div className="relative w-full">
      <TextField
        multiline
        minRows={3}
        maxRows={6}
        placeholder="Send a message"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSend();
          }
        }}
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            bgcolor: '#FFFFFF',
            alignItems: 'flex-start',
            pb: '52px',
            '& fieldset': {
              borderColor: grayColors[300],
            },
            '&:hover fieldset': {
              borderColor: grayColors[300],
            },
            '&.Mui-focused fieldset': {
              borderColor: grayColors[300],
              borderWidth: '1px',
            },
          },
          '& .MuiOutlinedInput-input': {
            fontSize: '16px',
            lineHeight: '24px',
            color: grayColors[900],
            '&::placeholder': {
              color: grayColors[500],
              opacity: 1,
            },
          },
        }}
      />
      <div className="absolute bottom-3 right-3 flex items-center gap-2">
        <IconButton aria-label="Add emoji" size="small" sx={{ color: grayColors[700] }}>
          <EmojiEmotionsOutlinedIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton aria-label="More options" size="small" sx={{ color: grayColors[700] }}>
          <MoreHorizOutlinedIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <Button disableElevation onClick={handleSend} sx={primaryButtonSx}>
          Send
        </Button>
      </div>
    </div>
  );
}
