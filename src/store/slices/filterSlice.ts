import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IFilters } from 'interfaces/filters.interface.ts'

const initialState: IFilters = {
	filters: {
		brand: [],
		price: []
	},
	search: '',
	sort: 'asc'
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
		}
	}
})

export const { setFilterBrand, setFilterPrice, setSearch } = filterSlice.actions
export default filterSlice.reducer
