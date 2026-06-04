'use client';

import StatusBadge from '@/components/admin/shared/StatusBadge';
import { paymentStatusStyles } from '@/lib/admin/bookingBadgeStyles';
import type { BookingPaymentInfo } from '@/lib/admin/mockBookingDetailData';

type BookingPaymentPanelProps = {
  payment: BookingPaymentInfo;
};

export default function BookingPaymentPanel({ payment }: BookingPaymentPanelProps) {
  const paymentStyle = paymentStatusStyles[payment.paymentStatus];

  return (
    <aside className="w-full shrink-0 lg:w-[254px]">
      <h2 className="text-lg font-semibold leading-7 text-[#101828]">Payment Method</h2>
      <div className="mt-5 space-y-4">
        <div>
          <p className="text-base font-semibold leading-6 text-[#344054]">{payment.payerName}</p>
          <p className="text-sm font-normal leading-5 text-[#98A2B3]">{payment.payerRole}</p>
          <div className="mt-2.5 text-sm leading-5">
            <p className="font-medium text-[#212121]">Wallet: {payment.walletProvider}</p>
            <p className="font-normal text-[#98A2B3]">{payment.maskedAccount}</p>
          </div>
          {payment.verified ? (
            <p className="mt-2 text-[13px] font-normal leading-[19px] text-[#079455]">Verified</p>
          ) : null}
        </div>

        <div className="h-px w-full bg-[#EAECF0]" />

        <div>
          <p className="text-sm font-medium leading-5 text-[#212121]">Payment Status</p>
          <div className="mt-1">
            <StatusBadge
              label={payment.paymentStatus}
              bg={paymentStyle.bg}
              border={paymentStyle.border}
              text={paymentStyle.text}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
