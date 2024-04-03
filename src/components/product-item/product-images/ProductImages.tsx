import { TypeImage } from 'interfaces/product.interface.ts'
import { FC } from 'react'

type TypeProps = {
	images: TypeImage[]
}

export const ProductImages: FC<TypeProps> = ({ images }) => {
	return (
		<div className='h-[290px] relative group/card-img'>
			<a href='#'>
				<img src={images[0].src} alt={images[0].src} className='w-full h-full object-contain' />
			</a>
		</div>
	)
}
