import { FC } from 'react'
import { GoHeart, GoHeartFill } from 'react-icons/go'
import { MdOutlineShoppingCart } from 'react-icons/md'

type TypeProps = {
	isFavourite: boolean
	setFavourite: () => void
}

export const ProductActions: FC<TypeProps> = ({ isFavourite, setFavourite }) => {
	return (
		<div className='flex gap-x-1'>
			{isFavourite ? (
				<button onClick={setFavourite} className='p-1 rounded hover:bg-gray-100'>
					<GoHeartFill size={24} color='#fca311' />
				</button>
			) : (
				<button onClick={setFavourite} className='p-1 rounded hover:bg-gray-100'>
					<GoHeart size={24} color='#fca311' />
				</button>
			)}
			<button className='p-1 rounded hover:bg-gray-100'>
				<MdOutlineShoppingCart size={24} color='#00a046' />
			</button>
		</div>
	)
}
