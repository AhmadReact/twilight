import type { DisputeDetail } from '@/lib/admin/disputeDetailTypes';
import { getDisputeBySlug } from '@/lib/admin/mockDisputesData';

const avatarSrc =
  'https://www.figma.com/api/mcp/asset/0af938f3-374d-4713-9184-9d7df1c5adf4';

const attachmentSrcs = [
  'https://www.figma.com/api/mcp/asset/ad78effe-2682-4414-b1e9-172ed428a316',
  'https://www.figma.com/api/mcp/asset/83b32541-1801-4d5a-9f4f-e83ecfacd8d8',
];

const defaultReportDetails = [
  "Seller didn't completed the task. Misbehaved when leaving.",
  "Seller didn't completed the task. Misbehaved when leaving.",
];

const defaultPlan = {
  name: 'Basic Plan',
  price: '$200',
  features: [
    'Professional deep cleaning of the selected area using standard cleaning supplies.',
    'Dusting and wiping of all accessible surfaces, furniture, and fixtures.',
    'Trash collection and proper disposal after service completion.',
  ],
  addOns: [
    {
      description: 'Deep stain removal for carpets, sofas, or mattresses',
      price: '$15',
    },
    {
      description: 'Sanitization & disinfection service for kitchens and bathrooms',
      price: '$30',
    },
  ],
};

function buildDisputeDetail(slug: string, ticketId: string): DisputeDetail {
  return {
    slug,
    ticketId,
    title: 'I need to deep clean my home',
    date: 'Jan 9, 2026',
    time: '08:00 AM',
    location: '12 Street, Apt. 4, Lower lake, Downtown, TX',
    buyer: {
      name: 'Olivia Rhye',
      role: 'Buyer',
      avatarSrc,
      verified: true,
      isDisputeCreator: true,
    },
    seller: {
      name: 'Olivia Rhye',
      role: 'Pro Seller',
      avatarSrc,
      verified: true,
    },
    buyerReport: {
      reportType: 'Misbehave',
      details: defaultReportDetails,
      attachmentSrcs,
    },
    sellerReport: {
      reportType: 'Misbehave',
      details: defaultReportDetails,
      attachmentSrcs,
    },
    category: 'Cleaning',
    subCategory: 'Home Cleaning, Gardening, Dusting',
    plan: defaultPlan,
  };
}

export function getDisputeDetail(slug: string): DisputeDetail | null {
  const row = getDisputeBySlug(slug);
  if (!row) {
    return null;
  }

  return buildDisputeDetail(row.slug, row.ticketId);
}
