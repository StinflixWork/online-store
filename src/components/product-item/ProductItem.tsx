import { IProduct } from 'interfaces/product.interface.ts'
import { FC } from 'react'
import { formatCurrency } from 'utils/formatCurrency.ts'

import { ProductActions } from './product-actions/ProductActions.tsx'
import { ProductImages } from './product-images/ProductImages.tsx'
import { ProductRating } from './product-rating/ProductRating.tsx'
import { ProductStatus } from './product-status/ProductStatus.tsx'

type TypeProps = {
	product: IProduct
}

const ProductItem: FC<TypeProps> = ({ product }) => {
	const price = formatCurrency(product.price)

	return (
		<div
			className='group/card w-[270px] flex flex-col gap-y-5 relative p-4
			border border-solid border-gray-300 hover:shadow-card'
		>
			<ProductImages images={product.images} />
			<div className='flex flex-col gap-y-2.5'>
				<div className='h-9 overflow-hidden'>
					<h4 className='leading-5'>
						<a href='#'>{product.title}</a>
					</h4>
				</div>
				<div className='flex'>
					<ProductRating />
				</div>
				<div className='flex items-center justify-between'>
					<p className='text-gray-700 font-medium text-xl'>{price}</p>
					<ProductActions />
				</div>
				<div className='flex items-center gap-x-2'>
					<ProductStatus inStock={product.inStock} />
				</div>
				<div>
					<p className='text-[12px] text-gray-800 leading-5'>{product.summaryDescription}</p>
				</div>
			</div>
		</div>
	)
}

export default ProductItem
