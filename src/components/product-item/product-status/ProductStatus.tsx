import { PiTruckLight } from 'react-icons/pi'

export const ProductStatus = ({ inStock = false }) => {
	return inStock ? (
		<>
			<p className='text-[12px] text-[#00a046]'>Готовий до відправлення</p>
			<PiTruckLight size={20} color='#00a046' />
		</>
	) : (
		<p className='text-[14px] text-gray-400'>Немає в наявності</p>
	)
}
