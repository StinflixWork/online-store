import { TypeImage } from 'interfaces/product.interface.ts'
import { FC } from 'react'

type TypeProps = {
	images: TypeImage[]
}

export const ProductImages: FC<TypeProps> = ({ images }) => {
	return (
		<div className='h-[290px] relative group/card-img'>
			<a href='#'>
				<img
					src={images[0].src}
					alt={images[0].src}
					className='relative w-full h-full object-contain z-10 group-hover/card-img:hidden'
				/>
				<img
					src={images[1].src}
					alt={images[1].src}
					className='w-full h-[290px] object-contain absolute inset-0 opacity-0 group-hover/card-img:opacity-100'
				/>
			</a>
		</div>
	)
}
