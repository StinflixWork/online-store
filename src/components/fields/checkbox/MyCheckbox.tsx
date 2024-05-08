import { FC } from 'react'

import { Checkbox, GetProp } from 'antd'

type TypeProps = {
	setFilters: (value: string[]) => void
}

export const MyCheckbox: FC<TypeProps> = ({ setFilters }) => {
	const options = [
		{ label: 'Apple', value: 'apple' },
		{ label: 'LG', value: 'lg' },
		{ label: 'Acer', value: 'acer' },
		{ label: 'Samsung', value: 'samsung' },
		{ label: 'Sony', value: 'sony' },
		{ label: 'Other', value: 'other' }
	]

	const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = checkedValues => {
		setFilters(checkedValues as string[])
	}

	return <Checkbox.Group options={options} onChange={onChange} className='flex flex-col' />
}
