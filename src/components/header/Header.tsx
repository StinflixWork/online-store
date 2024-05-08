import { useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { GiFlowers } from 'react-icons/gi'
import { Link } from 'react-router-dom'

import { SearchProps } from 'antd/lib/input'
import { selectAllProducts } from 'store/selectors/catalogSelectors.ts'
import { setSearch } from 'store/slices/filterSlice.ts'

import { useAppDispatch, useAppSelector } from 'hooks/store-hooks.ts'

import { Logo } from 'components/logo/Logo.tsx'

import { SearchField } from './search-field/SearchField.tsx'

export const Header = () => {
	const [options, setOptions] = useState<{ value: string }[]>([])
	const products = useAppSelector(selectAllProducts)
	const dispatch = useAppDispatch()

	const onSearch: SearchProps['onSearch'] = (value, _e) =>
		dispatch(setSearch(value.trim().toLocaleLowerCase()))

	// autocomplete, знайдені запроси зробити посиланням
	const handleSearch = (searchText: string) => {
		if (searchText) {
			const filteredProductsTitles = products
				.filter(selectBySearchProducts =>
					selectBySearchProducts.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
				)
				.map(filteredProduct => ({
					value: filteredProduct.title
				}))

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
			<div className='sticky top-0 h-20 px-5 flex items-center justify-between bg-[#222222]'>
				<Logo />
				<div className='flex items-center gap-x-4'>
					<SearchField options={options} handleSearch={handleSearch} onSearchChange={onSearch} />
					<Link to='/favourites'>
						<FaRegHeart color='#fff' size={22} />
					</Link>
				</div>
			</div>
		</header>
	)
}
