import { useParams } from 'react-router-dom'

import { selectAllProducts } from 'store/selectors/catalogSelectors.ts'

import { useAppSelector } from 'hooks/store-hooks.ts'

export const SingleProductPage = () => {
	const { idProduct } = useParams()

	const productById = useAppSelector(selectAllProducts)
	const productItem = productById.find(item => item.id === Number(idProduct))

	return (
		<div className='flex'>
			<div className='basis-2/4'>
				<img
					src={productItem?.images[0].src}
					alt={productItem?.images[0].alt}
					width={400}
					className='mx-auto'
				/>
			</div>
			<div className='basis-2/4'>
				<h1 className='text-3xl font-semibold mb-1'>{productItem?.title}</h1>
				<h2 className='text-2xl text-[#00a046] font-medium mb-5'>{productItem?.price} Грн</h2>
				<p className='text-gray-700 leading-6'>{productItem?.description}</p>
			</div>
		</div>
	)
}
