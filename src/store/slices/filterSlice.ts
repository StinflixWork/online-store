import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IFilters, TypeSort } from 'interfaces/filters.interface.ts'

const initialState: IFilters = {
	filters: {
		brand: [],
		price: []
	},
	search: '',
	sort: 'rating'
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setFilterBrand: (state, action: PayloadAction<string[]>) => {
			state.filters.brand = action.payload
		},
		setFilterPrice: (state, action: PayloadAction<number[]>) => {
			state.filters.price = action.payload
		},
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload
		},
		setSort: (state, action: PayloadAction<TypeSort>) => {
			state.sort = action.payload
		}
	}
})

export const { setFilterBrand, setFilterPrice, setSearch, setSort } = filterSlice.actions
export default filterSlice.reducer
