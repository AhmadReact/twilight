'use client';

import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import type { ChatFileMessage, ChatTextMessage } from '@/lib/admin/chatTypes';

type ChatMessageBubbleProps = {
  message: ChatTextMessage | ChatFileMessage;
};

function OnlineAvatar({
  src,
  bg,
  alt,
  online,
}: {
  src?: string;
  bg?: string;
  alt: string;
  online?: boolean;
}) {
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      badgeContent={
        online ? (
          <span className="block size-2.5 rounded-[5px] border-[1.5px] border-white bg-[#17B26A]" />
        ) : null
      }
    >
      <Avatar
        src={src}
        alt={alt}
        sx={{
          width: 40,
          height: 40,
          bgcolor: bg ?? '#DCCCBD',
          border: '0.75px solid rgba(0,0,0,0.08)',
        }}
      />
    </Badge>
  );
}

function FileAttachment({ fileName, fileSize }: { fileName: string; fileSize: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="relative flex size-10 shrink-0 items-center justify-center">
        <InsertDriveFileOutlinedIcon sx={{ fontSize: 32, color: '#D0D5DD' }} />
        <span className="absolute bottom-1 left-0 rounded-sm bg-[#D92D20] px-0.5 py-px text-[10px] font-bold leading-none text-white">
          PDF
        </span>
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-medium leading-5 text-[#344054]">{fileName}</p>
        <p className="text-sm font-normal leading-5 text-[#475467]">{fileSize}</p>
      </div>
    </div>
  );
}

export default function ChatMessageBubble({ message }: ChatMessageBubbleProps) {
  const isOwn = message.kind === 'text' && message.isOwn;

  const bubble = (
    <div
      className={`overflow-hidden px-3.5 py-2.5 ${
        isOwn
          ? 'rounded-bl-lg rounded-br-lg rounded-tl-lg bg-[#7F56D9] text-white'
          : 'rounded-bl-lg rounded-br-lg rounded-tr-lg border border-[#EAECF0] bg-[#F9FAFB] text-[#101828]'
      } ${message.kind === 'file' ? 'bg-white' : ''}`}
    >
      {message.kind === 'file' ? (
        <FileAttachment fileName={message.fileName} fileSize={message.fileSize} />
      ) : (
        <p className="text-base font-normal leading-6">{message.content}</p>
      )}
    </div>
  );

  const meta = (
    <div className="flex items-center gap-2">
      <p className="min-w-0 flex-1 truncate text-sm font-medium leading-5 text-[#344054]">
        {message.senderName}
      </p>
      <p className="shrink-0 text-xs font-normal leading-[18px] text-[#475467]">
        {message.timestamp}
      </p>
    </div>
  );

  if (isOwn) {
    return (
      <div className="flex w-full max-w-[442px] flex-col gap-1.5">
        {meta}
        {bubble}
        {message.reactions && message.reactions.length > 0 ? (
          <div className="flex justify-end gap-1">
            {message.reactions.map((reaction) => (
              <span
                key={reaction}
                className="inline-flex h-6 items-center rounded-2xl bg-[#F9FAFB] px-2 text-base"
              >
                {reaction}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-[560px] gap-3">
      <OnlineAvatar
        src={message.senderAvatarSrc}
        bg={message.senderAvatarBg}
        alt={message.senderName}
        online={message.online}
      />
      <div className="min-w-0 flex-1 space-y-1.5">
        {meta}
        {bubble}
      </div>
    </div>
  );
}
