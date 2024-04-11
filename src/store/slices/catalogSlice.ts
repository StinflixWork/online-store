import { productData } from 'data/product.data.ts'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { TypeProductList } from 'interfaces/product.interface.ts'

const initialState: TypeProductList[] = productData

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		toggleFavouriteProducts: (state, action: PayloadAction<number>) => {
			const favouriteProduct = state.find(product => product.id === action.payload)
			if (favouriteProduct) {
				favouriteProduct.isFavourite = !favouriteProduct.isFavourite
			}
		}
	}
})

export const { toggleFavouriteProducts } = catalogSlice.actions
export default catalogSlice.reducer
