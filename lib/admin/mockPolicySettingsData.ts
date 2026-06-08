export type PolicyCategory = 'general' | 'buyer' | 'seller' | 'controls';

export type PolicyAcceptanceRecord = {
  id: string;
  userId: string;
  policyVersion: number;
  acceptanceDate: string;
};

export type PolicyControlsSettings = {
  forceAcceptUpdatedPolicy: boolean;
};

export type PolicyItem = {
  id: string;
  title: string;
  enabled: boolean;
  expanded: boolean;
  url: string;
  text: string;
  lastUpdated: string;
};

export const policyCategoryOptions = [
  { id: 'general', label: 'General Policies' },
  { id: 'buyer', label: 'Buyer Policies' },
  { id: 'seller', label: 'Seller Policies' },
  { id: 'controls', label: 'Controls' },
] as const;

const loremPolicyText =
  '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."';

const createPolicy = (
  id: string,
  title: string,
  expanded = true,
): PolicyItem => ({
  id,
  title,
  enabled: true,
  expanded,
  url: 'https://example.com/',
  text: loremPolicyText,
  lastUpdated: '12-Jan-2026',
});

export type PolicyListCategory = Exclude<PolicyCategory, 'controls'>;

export const defaultPoliciesByCategory: Record<PolicyListCategory, PolicyItem[]> = {
  general: [
    createPolicy('terms', 'Terms and Conditions'),
    createPolicy('privacy', 'Privacy Policy (General)'),
    createPolicy('refund', 'Refund Policy'),
    createPolicy('cancellation', 'Cancellation Policy'),
    createPolicy('dispute', 'Dispute Policy'),
  ],
  buyer: [createPolicy('buyer-privacy', 'Buyer Privacy Policy')],
  seller: [createPolicy('seller-privacy', 'Seller Privacy Policy')],
};

export const defaultPolicyControlsSettings: PolicyControlsSettings = {
  forceAcceptUpdatedPolicy: true,
};

export const mockPolicyAcceptanceRecords: PolicyAcceptanceRecord[] = Array.from(
  { length: 6 },
  (_, index) => ({
    id: `acceptance-${index + 1}`,
    userId: '12345',
    policyVersion: 1,
    acceptanceDate: '2026-12-24',
  }),
);
