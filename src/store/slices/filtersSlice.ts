import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type TypeFilters = {
	search: string
}

const initialState: TypeFilters = {
	search: ''
}

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setSearchFilter: (state, action: PayloadAction<string>) => {
			state.search = action.payload
		}
	}
})

export const { setSearchFilter } = filtersSlice.actions
export default filtersSlice.reducer
