import { useEffect, useState } from 'react'

import { useAppSelector } from 'hooks/store-hooks.ts'

import { IProduct, IProductList } from 'interfaces/product.interface.ts'

export const useSelectAllProducts = () => {
	const [allListProducts, setAllListProducts] = useState<IProduct[]>([])
	const selectedProducts = useAppSelector(state => state.catalog)

	useEffect(() => {
		const arrProducts: IProduct[] = []

		for (const productDataKey in selectedProducts) {
			arrProducts.push(...selectedProducts[productDataKey as keyof IProductList])
		}

		setAllListProducts(arrProducts)
	}, [selectedProducts])

	return allListProducts
}
