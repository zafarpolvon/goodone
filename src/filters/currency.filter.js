export default function currencyFilter (value, currency = 'UZS') {
  return new Intl.NumberFormat('ru-Ru', {
    currency,
    minimumFractionDigits: 0
  }).format(value)
}
