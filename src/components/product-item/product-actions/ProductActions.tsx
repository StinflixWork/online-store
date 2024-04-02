import { GoHeart } from 'react-icons/go'
import { MdOutlineShoppingCart } from 'react-icons/md'

export const ProductActions = () => {
	return (
		<div className='flex gap-x-1'>
			<div className='p-1 rounded hover:bg-gray-100'>
				<GoHeart size={24} color='#fca311' />
			</div>
			<div className='p-1 rounded hover:bg-gray-100'>
				<MdOutlineShoppingCart size={24} color='#00a046' />
			</div>
		</div>
	)
}
