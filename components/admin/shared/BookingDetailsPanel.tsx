'use client';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BookingPaymentPanel from '@/components/admin/shared/BookingPaymentPanel';
import type { BookingDetail } from '@/lib/admin/mockBookingDetailData';

type BookingDetailsPanelProps = {
  detail: Pick<BookingDetail, 'price' | 'description' | 'attachments' | 'payment'>;
};

export default function BookingDetailsPanel({ detail }: BookingDetailsPanelProps) {
  return (
    <div className="flex flex-col gap-6 xl:flex-row xl:items-stretch">
      <div className="min-w-0 flex-1 rounded-2xl border border-[#EAECF0] bg-[#FCFCFD] px-3 py-3">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold leading-[26px] tracking-[-0.04px] text-[#344054]">
                Favor Details
              </h3>
              <span className="text-base font-semibold leading-6 text-[#8E40FF]">{detail.price}</span>
            </div>
            <div className="mt-2 flex flex-col gap-1.5">
              {detail.description.map((line) => (
                <div key={line} className="flex items-start gap-2">
                  <FiberManualRecordIcon
                    sx={{ fontSize: 6, color: '#8E40FF', mt: '5px', flexShrink: 0 }}
                  />
                  <p className="text-xs leading-4 tracking-[0.04px] text-[#616161]">{line}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0 lg:w-[271px]">
            <h4 className="text-lg font-semibold leading-[26px] tracking-[-0.04px] text-[#344054]">
              Attachments
            </h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {detail.attachments.map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  className="h-[90px] w-[120px] shrink-0 overflow-hidden rounded-lg bg-[#F2F4F7]"
                >
                  <img src={src} alt="" className="size-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden w-px shrink-0 bg-[#EAECF0] xl:block" />

      <BookingPaymentPanel payment={detail.payment} />
    </div>
  );
}
