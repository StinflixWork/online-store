import { createSelector } from '@reduxjs/toolkit'

import { IFilters } from 'interfaces/filters.interface.ts'
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
		const filteredProducts = products.filter(product => {
			const brandMatch =
				filters.filters.brand.length === 0 ||
				filters.filters.brand.includes(product.brand.toLocaleLowerCase())
			const priceMatch =
				product.price > filters.filters.price[0] && product.price < filters.filters.price[1]
			return brandMatch && priceMatch
		})

		return filteredProducts
	}
)
