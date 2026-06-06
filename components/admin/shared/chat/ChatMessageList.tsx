'use client';

import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import type { ChatThreadItem, ChatTypingMessage } from '@/lib/admin/chatTypes';
import ChatDateDivider from '@/components/admin/shared/chat/ChatDateDivider';
import ChatMessageBubble from '@/components/admin/shared/chat/ChatMessageBubble';
import ChatTypingIndicator from '@/components/admin/shared/chat/ChatTypingIndicator';

type ChatMessageListProps = {
  items: ChatThreadItem[];
};

function TypingRow({ message }: { message: ChatTypingMessage }) {
  return (
    <div className="flex w-full max-w-[560px] gap-3">
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          message.online ? (
            <span className="block size-2.5 rounded-[5px] border-[1.5px] border-white bg-[#17B26A]" />
          ) : null
        }
      >
        <Avatar
          src={message.senderAvatarSrc}
          alt={message.senderName}
          sx={{
            width: 40,
            height: 40,
            bgcolor: message.senderAvatarBg ?? '#DCCCBD',
            border: '0.75px solid rgba(0,0,0,0.08)',
          }}
        />
      </Badge>
      <div className="min-w-0 flex-1 space-y-1.5">
        <p className="truncate text-sm font-medium leading-5 text-[#344054]">
          {message.senderName}
        </p>
        <ChatTypingIndicator />
      </div>
    </div>
  );
}

export default function ChatMessageList({ items }: ChatMessageListProps) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => {
        if (item.kind === 'divider') {
          return <ChatDateDivider key={item.id} label={item.label} />;
        }

        if (item.kind === 'typing') {
          return (
            <div key={item.id} className="flex w-full justify-start">
              <TypingRow message={item} />
            </div>
          );
        }

        const isOwn = item.kind === 'text' && item.isOwn;

        return (
          <div
            key={item.id}
            className={`flex w-full ${isOwn ? 'justify-end' : 'justify-start'}`}
          >
            <ChatMessageBubble message={item} />
          </div>
        );
      })}
    </div>
  );
}
