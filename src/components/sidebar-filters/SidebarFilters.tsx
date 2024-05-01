import { setFilterBrand, setFilterPrice } from 'store/slices/filterSlice.ts'

import { useAppDispatch } from 'hooks/store-hooks.ts'

import { MyCheckbox } from 'components/fields/checkbox/MyCheckbox.tsx'
import { SliderPrice } from 'components/fields/slider-price/SliderPrice.tsx'

export const SidebarFilters = () => {
	const dispatch = useAppDispatch()

	return (
		<div className='basis-[300px] border-r border-solid border-gray-300 px-4'>
			<div className='flex flex-col gap-y-8'>
				<div className='flex flex-col gap-y-2'>
					<h5>Бренд</h5>
					<MyCheckbox setFilters={brand => dispatch(setFilterBrand(brand))} />
				</div>
				<div className='flex flex-col gap-y-2'>
					<h5>Ціна</h5>
					<SliderPrice setFilters={price => dispatch(setFilterPrice(price))} />
				</div>
			</div>
		</div>
	)
}
