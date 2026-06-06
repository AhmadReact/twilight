'use client';

import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ResolveDisputeAmountDetails from '@/components/admin/disputes/ResolveDisputeAmountDetails';
import ResolveDisputeRadioOptions from '@/components/admin/disputes/ResolveDisputeRadioOptions';
import type { DisputeResolutionType, ResolveDisputeContext } from '@/lib/admin/disputeResolutionTypes';
import { destructiveOutlineButtonSx, primaryButtonSx } from '@/lib/admin/adminButtonStyles';

type ResolveDisputePanelProps = {
  context: ResolveDisputeContext;
  onCancel?: () => void;
  onResolve?: (resolution: DisputeResolutionType) => void;
};

function getDefaultSplitAmounts(totalAmount: number) {
  const buyerAmount = Math.round(totalAmount * 0.2);
  return {
    buyerAmount,
    sellerAmount: totalAmount - buyerAmount,
  };
}

export default function ResolveDisputePanel({
  context,
  onCancel,
  onResolve,
}: ResolveDisputePanelProps) {
  const [resolution, setResolution] = useState<DisputeResolutionType>('release-seller');
  const [sellerPercent, setSellerPercent] = useState(100);
  const [buyerPercent, setBuyerPercent] = useState(0);
  const [sellerAmount, setSellerAmount] = useState(context.totalAmount);
  const [buyerAmount, setBuyerAmount] = useState(0);

  useEffect(() => {
    if (resolution === 'release-seller') {
      setSellerPercent(100);
      setBuyerPercent(0);
    } else if (resolution === 'refund-buyer') {
      setSellerPercent(0);
      setBuyerPercent(100);
    } else {
      const defaults = getDefaultSplitAmounts(context.totalAmount);
      setBuyerAmount(defaults.buyerAmount);
      setSellerAmount(defaults.sellerAmount);
      setBuyerPercent(Math.round((defaults.buyerAmount / context.totalAmount) * 100));
      setSellerPercent(Math.round((defaults.sellerAmount / context.totalAmount) * 100));
    }
  }, [resolution, context.totalAmount]);

  const handleSellerAmountChange = (value: number) => {
    setSellerAmount(value);
    setBuyerAmount(Math.max(0, context.totalAmount - value));
  };

  const handleBuyerAmountChange = (value: number) => {
    setBuyerAmount(value);
    setSellerAmount(Math.max(0, context.totalAmount - value));
  };

  return (
    <div className="flex flex-col gap-6 p-6 sm:gap-[18px] sm:p-8 lg:flex-row lg:items-start">
      <ResolveDisputeRadioOptions value={resolution} onChange={setResolution} />

      <div className="hidden w-px shrink-0 self-stretch bg-[#EAECF0] lg:block" />

      <div className="flex w-full shrink-0 flex-col gap-[18px] lg:w-[327px]">
        <ResolveDisputeAmountDetails
          resolution={resolution}
          context={context}
          sellerPercent={sellerPercent}
          buyerPercent={buyerPercent}
          sellerAmount={sellerAmount}
          buyerAmount={buyerAmount}
          onSellerAmountChange={handleSellerAmountChange}
          onBuyerAmountChange={handleBuyerAmountChange}
        />

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button
            disableElevation
            onClick={onCancel}
            sx={{
              ...destructiveOutlineButtonSx,
              flex: { xs: 1, sm: '0 1 auto' },
              minWidth: 120,
            }}
          >
            Cancel
          </Button>
          <Button
            disableElevation
            onClick={() => onResolve?.(resolution)}
            sx={{
              ...primaryButtonSx,
              flex: { xs: 1, sm: '0 1 auto' },
              minWidth: 160,
            }}
          >
            Resolve Dispute
          </Button>
        </div>
      </div>
    </div>
  );
}
