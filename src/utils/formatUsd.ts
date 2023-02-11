export function formatUsd(usdPrice: number) {
  return Intl.NumberFormat('en', {
    currency: 'USD',
    style: 'currency',
    currencyDisplay: 'symbol',
    maximumFractionDigits: 2
  }).format(usdPrice)
}
