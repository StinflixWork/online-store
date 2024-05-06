import { Select } from 'antd'
import { setSort } from 'store/slices/filterSlice.ts'

import { useAppDispatch } from 'hooks/store-hooks.ts'

import { TypeSort } from 'interfaces/filters.interface.ts'

export const SelectSort = () => {
	const dispatch = useAppDispatch()

	const handleSelectSort = (value: TypeSort) => {
		dispatch(setSort(value))
	}

	return (
		<Select
			options={[
				{ label: 'Від дешевих до дорогих', value: 'cheap' },
				{ label: 'Від дорогих до дешевих', value: 'expensive' },
				{ label: 'Новинки', value: 'new' },
				{ label: 'За рейтингом', value: 'rating' }
			]}
			defaultValue='rating'
			onChange={handleSelectSort}
			style={{ width: 200 }}
		/>
	)
}
