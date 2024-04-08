import { useEffect, useState } from 'react'

import { productData } from 'data/product.data.ts'

import { IProduct, IProductList } from 'interfaces/product.interface.ts'

export const useSelectAllProducts = () => {
	const [allListProducts, setAllListProducts] = useState<IProduct[]>([])

	useEffect(() => {
		const arrProducts: IProduct[] = []

		for (const productDataKey in productData) {
			arrProducts.push(...productData[productDataKey as keyof IProductList])
		}

		setAllListProducts(arrProducts)
	}, [productData])

	return allListProducts
}
