import { TypeFilters } from 'store/slices/filtersSlice.ts'

export const selectFilters = (state: { filters: TypeFilters }) => state.filters
