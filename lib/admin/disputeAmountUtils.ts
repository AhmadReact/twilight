export function parseDisputeAmount(priceLabel: string): number {
  const numeric = priceLabel.replace(/[^0-9.]/g, '');
  const parsed = Number.parseFloat(numeric);
  return Number.isFinite(parsed) ? parsed : 0;
}

export function formatDisputeAmount(amount: number): string {
  return `$${amount.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
}

export function formatDisputeCalculatedAmount(amount: number): string {
  return `= $ ${amount.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
}

export function formatDisputeSplitPercent(amount: number, totalAmount: number): string {
  if (totalAmount <= 0) return '=0%';
  const percent = Math.round((amount / totalAmount) * 100);
  return `=${percent}%`;
}
