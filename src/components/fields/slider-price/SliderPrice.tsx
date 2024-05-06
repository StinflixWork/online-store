import { FC, useEffect, useState } from 'react'

import { InputNumber, Slider } from 'antd'

type TypeProps = {
	setFilters: (value: number[]) => void
}

export const SliderPrice: FC<TypeProps> = ({ setFilters }) => {
	const MIN_PRICE = 0
	const MAX_PRICE = 80000

	const [price, setPrice] = useState<number[]>([4500, 60000])

	const handlePriceSliderChange = (value: number[]) => {
		setPrice(value)
	}

	const handlePriceCompleted = (value: number[]) => {
		setFilters(value)
	}

	useEffect(() => {
		handlePriceCompleted(price)
	}, [])

	return (
		<div>
			<div className='flex items-center gap-x-1.5'>
				<InputNumber
					min={MIN_PRICE}
					max={MAX_PRICE}
					value={price[0]}
					onChange={value => setPrice([value || 0, price[1]])}
				/>
				<span>-</span>
				<InputNumber
					min={price[0]}
					max={MAX_PRICE}
					value={price[1]}
					onChange={value => setPrice([price[0], value || 0])}
				/>
			</div>
			<Slider
				range
				min={MIN_PRICE}
				max={MAX_PRICE}
				value={price}
				onChange={handlePriceSliderChange}
				onChangeComplete={handlePriceCompleted}
			/>
		</div>
	)
}
