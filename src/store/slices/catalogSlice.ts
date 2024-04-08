import { productData } from 'data/product.data.ts'

import { createSlice } from '@reduxjs/toolkit'

import { IProductList } from 'interfaces/product.interface.ts'

const initialState: IProductList = productData

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {}
})

export default catalogSlice.reducer
