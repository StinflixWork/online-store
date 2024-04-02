import { IProductMobile } from 'interfaces/product.interface.ts'
import { FC } from 'react'
import { formatCurrency } from 'utils/formatCurrency.ts'

import { ProductActions } from './product-actions/ProductActions.tsx'
import { ProductImages } from './product-images/ProductImages.tsx'
import { ProductRating } from './product-rating/ProductRating.tsx'
import { ProductStatus } from './product-status/ProductStatus.tsx'

type TypeProps = {
	product: IProductMobile
}

const ProductItem: FC<TypeProps> = ({ product }) => {
	const price = formatCurrency(product.price)

	return (
		<div
			className='w-[270px] flex flex-col gap-y-5 relative group/card
			border border-solid border-gray-300 border-l-transparent p-4 first:border-l-gray-300
			hover:shadow-card hover:border-none'
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
				<div className='hidden group-hover/card:block'>
					<p className='text-[12px] leading-5 text-gray-900'>{product.summaryDescription}</p>
				</div>
			</div>
		</div>
	)
}

export default ProductItem
