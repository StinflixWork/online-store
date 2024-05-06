import { ReactNode } from 'react'

import { selectFilteredProducts } from 'store/selectors/catalogSelectors.ts'

import { useAppSelector } from 'hooks/store-hooks.ts'

import { SelectSort } from 'components/fields/select/SelectSort.tsx'
import { NotFoundProductsElement } from 'components/not-found/NotFoundProductsElement.tsx'
import { ProductItem } from 'components/product-item/ProductItem.tsx'
import { SidebarFilters } from 'components/sidebar-filters/SidebarFilters.tsx'

export const CatalogPage = () => {
	const search = useAppSelector(state => state.filters.search)
	const filteredProducts = useAppSelector(selectFilteredProducts)

	const productsItems = filteredProducts.map(item => <ProductItem key={item.id} product={item} />)

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
		<div className='flex'>
			<SidebarFilters />
			<div className='px-5 flex flex-col'>
				<div className='pb-5'>
					<SelectSort />
				</div>
				<div className='flex flex-wrap gap-y-10'>{catalogContent}</div>
			</div>
		</div>
	)
}
