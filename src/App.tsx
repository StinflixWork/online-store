import { useSelectAllProducts } from 'hooks/useSelectAllProducts.ts'
import { useState } from 'react'

import { Header } from 'components/header/Header.tsx'
import ProductItem from 'components/product-item/ProductItem.tsx'

function App() {
	const [search, setSearch] = useState<string>('')

	const allListProducts = useSelectAllProducts()

	const productsItems = allListProducts
		.filter(filteredItem => filteredItem.title.toLocaleLowerCase().includes(search))
		.map(item => <ProductItem key={item.id} product={item} />)

	return (
		<div className='min-h-full pb-52'>
			<Header setSearch={setSearch} />
			<div className='flex flex-wrap px-5'>{productsItems}</div>
		</div>
	)
}

export default App
