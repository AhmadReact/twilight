export type TeamStatus = 'Active' | 'Blocked';

export type TeamLead = {
  name: string;
  email: string;
  avatarSrc?: string;
  avatarBg?: string;
  initials?: string;
};

export type TeamRow = {
  slug: string;
  teamId: string;
  name: string;
  website: string;
  logoSrc: string;
  status: TeamStatus;
  teamLead: TeamLead;
  workerAvatars: string[];
  extraWorkers: number;
  earnings: string;
  createdOn: string;
  bookings: number;
};

const workerAvatars = [
  'https://www.figma.com/api/mcp/asset/90a4cb6c-0c59-4fa6-8595-53a83fbf1dab',
  'https://www.figma.com/api/mcp/asset/63193f0c-bf46-4bbe-999a-954d64a03934',
  'https://www.figma.com/api/mcp/asset/519aef29-3ede-4c09-ab16-2a7dd37167af',
  'https://www.figma.com/api/mcp/asset/13991638-e9eb-4e2f-8bb9-970cd60f3c1c',
  'https://www.figma.com/api/mcp/asset/b252d45f-4b12-4662-a361-525315dde045',
];

export const teamRows: TeamRow[] = [
  {
    slug: 'catalog',
    teamId: '12345',
    name: 'Catalog',
    website: 'catalogapp.io',
    logoSrc: 'https://www.figma.com/api/mcp/asset/affc6c35-bc76-4c45-af69-9cd556916252',
    status: 'Active',
    teamLead: {
      name: 'Olivia Rhye',
      email: 'olivia@untitledui.com',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/90a4cb6c-0c59-4fa6-8595-53a83fbf1dab',
      avatarBg: '#CFCBDC',
    },
    workerAvatars,
    extraWorkers: 5,
    earnings: '$200',
    createdOn: '2026-12-24',
    bookings: 12,
  },
  {
    slug: 'circooles',
    teamId: '12345',
    name: 'Circooles',
    website: 'getcirooles.com',
    logoSrc: 'https://www.figma.com/api/mcp/asset/56aeea50-0719-4914-89c2-f67ff2819180',
    status: 'Active',
    teamLead: {
      name: 'Phoenix Baker',
      email: 'phoenix@untitledui.com',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/63193f0c-bf46-4bbe-999a-954d64a03934',
      avatarBg: '#D6CFB7',
    },
    workerAvatars,
    extraWorkers: 5,
    earnings: '$200',
    createdOn: '2026-12-24',
    bookings: 12,
  },
  {
    slug: 'command-r',
    teamId: '12345',
    name: 'Command+R',
    website: 'cmdr.ai',
    logoSrc: 'https://www.figma.com/api/mcp/asset/128b0369-fe1b-4b9d-8fad-69c44a04d191',
    status: 'Blocked',
    teamLead: {
      name: 'Lana Steiner',
      email: 'lana@untitledui.com',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/519aef29-3ede-4c09-ab16-2a7dd37167af',
      avatarBg: '#D7E3E8',
    },
    workerAvatars,
    extraWorkers: 5,
    earnings: '$200',
    createdOn: '2026-12-24',
    bookings: 12,
  },
  {
    slug: 'hourglass',
    teamId: '12345',
    name: 'Hourglass',
    website: 'hourglass.app',
    logoSrc: 'https://www.figma.com/api/mcp/asset/a031b3d7-aa61-4e72-9f21-c1087d488923',
    status: 'Active',
    teamLead: {
      name: 'Demi Wilkinson',
      email: 'demi@untitledui.com',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/13991638-e9eb-4e2f-8bb9-970cd60f3c1c',
      avatarBg: '#DADCD6',
    },
    workerAvatars,
    extraWorkers: 5,
    earnings: '$200',
    createdOn: '2026-12-24',
    bookings: 12,
  },
  {
    slug: 'layers',
    teamId: '12345',
    name: 'Layers',
    website: 'getlayers.io',
    logoSrc: 'https://www.figma.com/api/mcp/asset/ca7d630f-041f-468a-acb2-5b60a9e04e34',
    status: 'Active',
    teamLead: {
      name: 'Candice Wu',
      email: 'candice@untitledui.com',
      avatarBg: '#CFCBDC',
      initials: 'CW',
    },
    workerAvatars,
    extraWorkers: 5,
    earnings: '$200',
    createdOn: '2026-12-24',
    bookings: 12,
  },
  {
    slug: 'quotient',
    teamId: '12345',
    name: 'Quotient',
    website: 'quotient.co',
    logoSrc: 'https://www.figma.com/api/mcp/asset/28499d77-2b4f-4b9b-a211-ea33a3ff759c',
    status: 'Active',
    teamLead: {
      name: 'Natali Craig',
      email: 'natali@untitledui.com',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/b252d45f-4b12-4662-a361-525315dde045',
      avatarBg: '#E9DCBB',
    },
    workerAvatars,
    extraWorkers: 5,
    earnings: '$200',
    createdOn: '2026-12-24',
    bookings: 12,
  },
  {
    slug: 'sisyphus',
    teamId: '12345',
    name: 'Sisyphus',
    website: 'sisyphus.com',
    logoSrc: 'https://www.figma.com/api/mcp/asset/73e3d65c-f4ad-4264-af57-9e45ab8d25cc',
    status: 'Active',
    teamLead: {
      name: 'Drew Cano',
      email: 'drew@untitledui.com',
      avatarSrc: 'https://www.figma.com/api/mcp/asset/5c93d33a-8397-4dac-afc5-e0c2b8f0eef0',
      avatarBg: '#D9E5CC',
    },
    workerAvatars,
    extraWorkers: 5,
    earnings: '$200',
    createdOn: '2026-12-24',
    bookings: 12,
  },
];

export const TEAM_COUNT = 100;

export function getTeamBySlug(slug: string): TeamRow | undefined {
  return teamRows.find((team) => team.slug === slug);
}
