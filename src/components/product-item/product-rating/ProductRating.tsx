import { MdOutlineStar, MdOutlineStarOutline } from 'react-icons/md'

export const ProductRating = () => {
	const rate = [1, 1, 1, 1, 0] //fake rate

	return (
		<>
			{rate.map(el => {
				return el === 1 ? (
					<MdOutlineStar size={18} color='#fcbf49' />
				) : (
					<MdOutlineStarOutline size={18} color='#fcbf49' />
				)
			})}
		</>
	)
}
