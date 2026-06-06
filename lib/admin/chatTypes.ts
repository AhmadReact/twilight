export type ChatParticipant = {
  name: string;
  avatarSrc?: string;
  avatarBg?: string;
  online?: boolean;
};

export type ChatTextMessage = {
  id: string;
  kind: 'text';
  senderName: string;
  senderAvatarSrc?: string;
  senderAvatarBg?: string;
  timestamp: string;
  content: string;
  isOwn?: boolean;
  online?: boolean;
  reactions?: string[];
};

export type ChatFileMessage = {
  id: string;
  kind: 'file';
  senderName: string;
  senderAvatarSrc?: string;
  senderAvatarBg?: string;
  timestamp: string;
  fileName: string;
  fileSize: string;
  online?: boolean;
};

export type ChatTypingMessage = {
  id: string;
  kind: 'typing';
  senderName: string;
  senderAvatarSrc?: string;
  senderAvatarBg?: string;
  online?: boolean;
};

export type ChatDateDividerItem = {
  id: string;
  kind: 'divider';
  label: string;
};

export type ChatThreadItem =
  | ChatTextMessage
  | ChatFileMessage
  | ChatTypingMessage
  | ChatDateDividerItem;

export type ChatThread = {
  participants: ChatParticipant[];
  items: ChatThreadItem[];
};
