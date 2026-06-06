import type { ChatThread } from '@/lib/admin/chatTypes';
import type { DisputeDetail } from '@/lib/admin/disputeDetailTypes';

const andiAvatar =
  'https://www.figma.com/api/mcp/asset/2c87b9ca-5d7a-4a1a-a6f3-d986d479ad88';
const oliviaAvatar =
  'https://www.figma.com/api/mcp/asset/0af938f3-374d-4713-9184-9d7df1c5adf4';

export function getDisputeChatThread(detail: DisputeDetail): ChatThread {
  return {
    participants: [
      {
        name: detail.buyer.name,
        avatarSrc: detail.buyer.avatarSrc ?? oliviaAvatar,
        online: true,
      },
      {
        name: detail.seller.name,
        avatarSrc: detail.seller.avatarSrc ?? andiAvatar,
        online: true,
      },
    ],
    items: [
      {
        id: 'divider-thursday',
        kind: 'divider',
        label: 'Thursday',
      },
      {
        id: 'msg-1',
        kind: 'text',
        senderName: 'Andi Lane',
        senderAvatarSrc: andiAvatar,
        senderAvatarBg: '#DCCCBD',
        timestamp: 'Thursday 10:16am',
        content:
          "Thanks Olivia! Almost there. I'll work on making those changes you suggested and will shoot it over.",
        online: true,
      },
      {
        id: 'msg-2',
        kind: 'text',
        senderName: 'Olivia Rhy',
        senderAvatarSrc: oliviaAvatar,
        senderAvatarBg: '#DCCCBD',
        timestamp: 'Thursday 11:40am',
        content:
          "Hey Olivia, I've finished with the requirements doc! I made some notes in the gdoc as well for Phoenix to look over.",
        online: true,
      },
      {
        id: 'msg-3',
        kind: 'file',
        senderName: 'Olivia Rhy',
        senderAvatarSrc: oliviaAvatar,
        senderAvatarBg: '#DCCCBD',
        timestamp: 'Thursday 11:40am',
        fileName: 'Tech requirements.pdf',
        fileSize: '1.2 MB',
        online: true,
      },
      {
        id: 'msg-4',
        kind: 'text',
        senderName: 'You',
        timestamp: 'Thursday 11:41am',
        content: "Awesome! Thanks. I'll look at this today.",
        isOwn: true,
      },
      {
        id: 'msg-5',
        kind: 'text',
        senderName: 'Andi Lane',
        senderAvatarSrc: andiAvatar,
        senderAvatarBg: '#DCCCBD',
        timestamp: 'Thursday 11:44am',
        content: "No rush though — we still have to wait for Lana's designs.",
        online: true,
      },
      {
        id: 'divider-today',
        kind: 'divider',
        label: 'Today',
      },
      {
        id: 'msg-6',
        kind: 'text',
        senderName: 'Olivia Rhy',
        senderAvatarSrc: oliviaAvatar,
        senderAvatarBg: '#DCCCBD',
        timestamp: 'Today 2:20pm',
        content: 'Hey Olivia, can you please review the latest design when you can?',
        online: true,
      },
      {
        id: 'msg-7',
        kind: 'text',
        senderName: 'You',
        timestamp: 'Just now',
        content: "Sure thing, I'll have a look today. They're looking great!",
        isOwn: true,
        reactions: ['❤️', '👌'],
      },
      {
        id: 'msg-8',
        kind: 'typing',
        senderName: 'Olivia Rhy',
        senderAvatarSrc: oliviaAvatar,
        senderAvatarBg: '#DCCCBD',
        online: true,
      },
    ],
  };
}

export function formatChatHeaderTitle(participants: ChatThread['participants']): string {
  if (participants.length === 0) return 'Chat';
  if (participants.length === 1) return participants[0].name;
  return `${participants[0].name} and ${participants[1].name}`;
}
