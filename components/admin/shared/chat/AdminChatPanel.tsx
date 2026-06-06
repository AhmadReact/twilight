'use client';

import { useEffect, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import type { ChatThread } from '@/lib/admin/chatTypes';
import { formatChatHeaderTitle } from '@/lib/admin/mockDisputeChatData';
import ChatInputBar from '@/components/admin/shared/chat/ChatInputBar';
import ChatMessageList from '@/components/admin/shared/chat/ChatMessageList';
import { grayColors } from '@/lib/theme';

type AdminChatPanelProps = {
  thread: ChatThread;
  onClose?: () => void;
  onSend?: (message: string) => void;
};

function StackedAvatars({ participants }: { participants: ChatThread['participants'] }) {
  const [first, second] = participants;

  return (
    <div className="flex shrink-0 items-center">
      {first ? (
        <Avatar
          src={first.avatarSrc}
          alt={first.name}
          sx={{
            width: 40,
            height: 40,
            border: '1.5px solid #FFFFFF',
            zIndex: 2,
          }}
        />
      ) : null}
      {second ? (
        <Avatar
          src={second.avatarSrc}
          alt={second.name}
          sx={{
            width: 40,
            height: 40,
            ml: '-12px',
            border: '1.5px solid #FFFFFF',
            zIndex: 1,
          }}
        />
      ) : null}
    </div>
  );
}

export default function AdminChatPanel({ thread, onClose, onSend }: AdminChatPanelProps) {
  const title = formatChatHeaderTitle(thread.participants);
  const [firstName, ...restNames] = title.split(' and ');
  const secondName = restNames.join(' and ');
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = messagesRef.current;
    if (!container) return;
    container.scrollTop = container.scrollHeight;
  }, [thread.items]);

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[14px] border border-[#D0D5DD] bg-[#FCFCFD]">
      <header className="shrink-0 border-b border-[#D0D5DD] bg-white px-4 pt-5 sm:px-6">
        <div className="flex items-start gap-4 pb-5">
          <div className="flex min-w-0 flex-1 items-center gap-4">
            <StackedAvatars participants={thread.participants} />
            <h2 className="min-w-0 text-lg font-semibold leading-7 text-[#101828]">
              {secondName ? (
                <>
                  {firstName}{' '}
                  <span className="font-normal">and</span> {secondName}
                </>
              ) : (
                firstName
              )}
            </h2>
          </div>
          {onClose ? (
            <IconButton
              aria-label="Close chat"
              onClick={onClose}
              size="small"
              sx={{ color: grayColors[700], mt: '2px' }}
            >
              <CloseIcon sx={{ fontSize: 20 }} />
            </IconButton>
          ) : null}
        </div>
      </header>

      <div
        ref={messagesRef}
        className="admin-chat-scroll min-h-0 flex-1 px-4 py-6 sm:px-6 sm:py-8"
      >
        <div className="flex min-h-full flex-col justify-end">
          <ChatMessageList items={thread.items} />
        </div>
      </div>

      <div className="shrink-0 px-4 pb-6 sm:px-6">
        <ChatInputBar onSend={onSend} />
      </div>
    </div>
  );
}
