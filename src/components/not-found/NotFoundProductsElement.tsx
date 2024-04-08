import { FC } from 'react'

export const NotFoundProductsElement: FC<{ text: string }> = ({ text }) => {
	return (
		<div>
			<p className='text-2xl font-medium mb-2'>
				За запитом <span className='text-[#00a046]'>&laquo;{text}&raquo;</span> нічого не знайдено
				:(
			</p>
			<p className='text-gray-800'>
				Перевірте правильність написання запиту, спробуйте використати синоніми чи більш загальні
				запити
			</p>
		</div>
	)
}
