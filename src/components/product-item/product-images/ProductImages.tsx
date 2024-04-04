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
					className='w-full h-full object-contain group-hover/card-img:hidden'
				/>
				<img
					src={images[1]?.src || images[0].src}
					alt={images[1]?.src || images[0].src}
					className='w-full h-full object-contain absolute inset-0 hidden
					group-hover/card-img:block'
				/>
			</a>
		</div>
	)
}
