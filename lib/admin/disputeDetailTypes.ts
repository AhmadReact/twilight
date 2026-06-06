export type DisputeParticipant = {
  name: string;
  role: string;
  avatarSrc?: string;
  avatarBg?: string;
  initials?: string;
  verified?: boolean;
  isDisputeCreator?: boolean;
};

export type DisputeReport = {
  reportType: string;
  details: string[];
  attachmentSrcs: string[];
};

export type DisputePlanAddOn = {
  description: string;
  price: string;
};

export type DisputeJobPlan = {
  name: string;
  price: string;
  features: string[];
  addOns: DisputePlanAddOn[];
};

export type DisputeDetail = {
  slug: string;
  ticketId: string;
  title: string;
  date: string;
  time: string;
  location: string;
  buyer: DisputeParticipant;
  seller: DisputeParticipant;
  buyerReport: DisputeReport;
  sellerReport: DisputeReport;
  category: string;
  subCategory: string;
  plan: DisputeJobPlan;
};
