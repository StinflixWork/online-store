const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
	currency: 'UAH',
	style: 'currency',
	currencyDisplay: 'symbol',
	maximumFractionDigits: 0
})

export function formatCurrency(price: number) {
	return CURRENCY_FORMATTER.format(price)
}
