import { ReactNode, useState } from 'react'

import { useSelectAllProducts } from 'hooks/useSelectAllProducts.ts'

import { Header } from 'components/header/Header.tsx'
import { NotFoundProductsElement } from 'components/not-found/NotFoundProductsElement.tsx'
import ProductItem from 'components/product-item/ProductItem.tsx'

function App() {
	const [search, setSearch] = useState<string>('')

	const allListProducts = useSelectAllProducts()

	const productsItems = allListProducts
		.filter(filteredItem => filteredItem.title.toLocaleLowerCase().includes(search))
		.map(item => <ProductItem key={item.id} product={item} />)

	let catalogContent: ReactNode

	if (!productsItems.length) {
		if (search === '') {
			catalogContent = <p>Loading</p>
		} else {
			catalogContent = <NotFoundProductsElement text={search} />
		}
	} else {
		catalogContent = productsItems
	}

	return (
		<div className='min-h-full pb-52'>
			<Header setSearch={setSearch} />
			<main className='py-7'>
				<div className='flex flex-wrap px-5'>{catalogContent}</div>
			</main>
		</div>
	)
}

export default App
