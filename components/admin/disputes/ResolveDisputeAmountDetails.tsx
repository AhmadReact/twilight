'use client';

import DisputePaymentAmountField from '@/components/admin/shared/DisputePaymentAmountField';
import type { DisputeResolutionType, ResolveDisputeContext } from '@/lib/admin/disputeResolutionTypes';
import { disputeResolutionOptions } from '@/lib/admin/disputeResolutionTypes';

type ResolveDisputeAmountDetailsProps = {
  resolution: DisputeResolutionType;
  context: ResolveDisputeContext;
  sellerPercent: number;
  buyerPercent: number;
  sellerAmount: number;
  buyerAmount: number;
  onSellerAmountChange: (value: number) => void;
  onBuyerAmountChange: (value: number) => void;
};

export default function ResolveDisputeAmountDetails({
  resolution,
  context,
  sellerPercent,
  buyerPercent,
  sellerAmount,
  buyerAmount,
  onSellerAmountChange,
  onBuyerAmountChange,
}: ResolveDisputeAmountDetailsProps) {
  const selectedOption = disputeResolutionOptions.find((option) => option.id === resolution);

  return (
    <div className="flex flex-col gap-[18px]">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold leading-8 text-[#101828]">
          Total Amount: {context.totalAmountLabel}
        </h2>
        <p className="text-base font-normal leading-6 text-[#475467]">
          {selectedOption?.description}
        </p>
      </div>

      {resolution === 'release-seller' ? (
        <DisputePaymentAmountField
          label="Seller gets payment:"
          participant={context.seller}
          value={sellerPercent}
          totalAmount={context.totalAmount}
          readOnly
        />
      ) : null}

      {resolution === 'refund-buyer' ? (
        <DisputePaymentAmountField
          label="Buyer gets refund:"
          participant={context.buyer}
          value={buyerPercent}
          totalAmount={context.totalAmount}
          readOnly
        />
      ) : null}

      {resolution === 'split' ? (
        <div className="flex flex-col gap-[18px]">
          <DisputePaymentAmountField
            label="Buyer gets refund:"
            participant={context.buyer}
            inputMode="dollar"
            value={buyerAmount}
            totalAmount={context.totalAmount}
            onValueChange={onBuyerAmountChange}
          />
          <DisputePaymentAmountField
            label="Seller gets payment:"
            participant={context.seller}
            inputMode="dollar"
            value={sellerAmount}
            totalAmount={context.totalAmount}
            onValueChange={onSellerAmountChange}
          />
        </div>
      ) : null}
    </div>
  );
}
