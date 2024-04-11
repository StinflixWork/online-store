import { createSelector } from '@reduxjs/toolkit'

import { TypeProductList } from 'interfaces/product.interface.ts'

export const selectAllProducts = (state: { catalog: TypeProductList[] }) => state.catalog

export const selectFavouriteProducts = createSelector([selectAllProducts], products =>
	products.filter(product => product.isFavourite)
)
