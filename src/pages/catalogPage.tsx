import { FC, ReactNode } from 'react'

import { selectAllProducts } from 'store/selectors/catalogSelectors.ts'

import { useAppSelector } from 'hooks/store-hooks.ts'

import { NotFoundProductsElement } from 'components/not-found/NotFoundProductsElement.tsx'
import { ProductItem } from 'components/product-item/ProductItem.tsx'

type TypeProps = {
	search: string
}

export const CatalogPage: FC<TypeProps> = ({ search }) => {
	const allListProducts = useAppSelector(selectAllProducts)

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
		<div className='flex flex-col gap-y-10'>
			<div className='px-5'>
				<h2 className='mb-5 text-2xl'>Catalog:</h2>
				<div className='flex flex-wrap'>{catalogContent}</div>
			</div>
		</div>
	)
}
