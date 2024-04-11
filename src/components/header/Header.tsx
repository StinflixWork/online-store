import { useState } from 'react'
import { GiFlowers } from 'react-icons/gi'

import { SearchProps } from 'antd/lib/input'
import { selectAllProducts } from 'store/selectors/catalogSelectors.ts'
import { setSearchFilter } from 'store/slices/filtersSlice.ts'

import { useAppDispatch, useAppSelector } from 'hooks/store-hooks.ts'

import { Logo } from 'components/logo/Logo.tsx'

import { SearchField } from './search-field/SearchField.tsx'

export const Header = () => {
	const [options, setOptions] = useState<{ value: string }[]>([])
	const products = useAppSelector(selectAllProducts)
	const dispatch = useAppDispatch()

	const onSearch: SearchProps['onSearch'] = (value, _e) =>
		dispatch(setSearchFilter(value.trim().toLocaleLowerCase()))

	// autocomplete, знайдені запроси зробити посиланням
	const handleSearch = (searchText: string) => {
		if (searchText) {
			const filteredProductsTitles = products
				.filter(product =>
					product.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
				)
				.map(filteredProduct => ({ value: filteredProduct.title }))

			setOptions(filteredProductsTitles)
		} else {
			setOptions([])
		}
	}

	return (
		<header className='flex flex-col'>
			<div className='h-8 px-5 bg-[#b4ffe8] flex items-center justify-center gap-x-1.5'>
				<p className='font-semibold uppercase text-[#222222]'>квітнуть знижки повесні</p>
				<GiFlowers />
			</div>
			<div className='h-20 px-5 flex items-center justify-between bg-[#222222]'>
				<Logo />
				<SearchField options={options} handleSearch={handleSearch} onSearchChange={onSearch} />
			</div>
		</header>
	)
}
