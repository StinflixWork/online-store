import { FC, useState } from 'react'

import { AutoComplete } from 'antd'
import Search from 'antd/es/input/Search'
import { SearchProps } from 'antd/lib/input'

import { useSelectAllProducts } from 'hooks/useSelectAllProducts.ts'

type TypeProps = {
	setSearch: (search: string) => void
}

export const Header: FC<TypeProps> = ({ setSearch }) => {
	const [options, setOptions] = useState<{ value: string }[]>([])
	const allListProducts = useSelectAllProducts()

	const onSearch: SearchProps['onSearch'] = (value, _e) =>
		setSearch(value.trim().toLocaleLowerCase())

	// autocomplete, знайдені запроси зробити посиланням
	const handleSearch = (searchText: string) => {
		if (searchText) {
			const filteredProductsTitles = allListProducts
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
		<header className='h-20 px-5 flex items-center'>
			<AutoComplete style={{ width: 350 }} options={options} onSearch={handleSearch}>
				<Search onSearch={onSearch} placeholder='Я шукаю...' allowClear enterButton='Знайти' />
			</AutoComplete>
		</header>
	)
}
