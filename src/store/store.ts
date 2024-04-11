import { configureStore } from '@reduxjs/toolkit'

import catalogReducer from './slices/catalogSlice'
import filtersReducer from './slices/filtersSlice'

export const store = configureStore({
	reducer: {
		catalog: catalogReducer,
		filters: filtersReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
