import { TypeProductList } from 'interfaces/product.interface.ts'

export interface IFilters {
	filters: {
		brand: string[]
		price: number[]
	}
	search: string
	sort: TypeSort
}

export interface ICompareFunction {
	(a: TypeProductList, b: TypeProductList): number
}

export type TypeSort = 'new' | 'rating' | 'cheap' | 'expensive'
