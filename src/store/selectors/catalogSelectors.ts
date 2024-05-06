import { createSelector } from '@reduxjs/toolkit'

import { ICompareFunction, IFilters } from 'interfaces/filters.interface.ts'
import { TypeProductList } from 'interfaces/product.interface.ts'

export const selectAllProducts = (state: { catalog: TypeProductList[] }) => state.catalog
export const selectFilters = (state: { filters: IFilters }) => state.filters

export const selectFavouriteProducts = createSelector([selectAllProducts], products =>
	products.filter(product => product.isFavourite)
)

export const selectBySearchProducts = createSelector(
	[selectFilters, selectAllProducts],
	(filters, products) =>
		products.filter(filteredBySearchItem =>
			filteredBySearchItem.title.toLocaleLowerCase().includes(filters.search)
		)
)

export const selectFilteredProducts = createSelector(
	[selectFilters, selectBySearchProducts],
	(filters, products) => {
		const { brand } = filters.filters
		const [minPrice, maxPrice] = filters.filters.price

		const sortOptions: {
			expensive: ICompareFunction
			cheap: ICompareFunction
			new: ICompareFunction
			rating: ICompareFunction
		} = {
			expensive: (a, b) => b.price - a.price,
			cheap: (a, b) => a.price - b.price,
			new: (a, b) => b.id - a.id,
			rating: (a, b) => b.rate - a.rate
		}

		const filteredProducts = products.filter(product => {
			const brandMatch = brand.length === 0 || brand.includes(product.brand.toLocaleLowerCase())
			const priceMatch = product.price > minPrice && product.price < maxPrice

			return brandMatch && priceMatch
		})

		return filteredProducts.sort(sortOptions[filters.sort])
	}
)
