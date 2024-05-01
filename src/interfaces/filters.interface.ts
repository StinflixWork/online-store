export interface IFilters {
	filters: {
		brand: string[]
		price: number[]
	}
	search: string
	sort: 'asc' | 'desc'
}
