import Search from 'antd/es/input/Search'
import { SearchProps } from 'antd/lib/input'
import { FC } from 'react'

type TypeProps = {
	setSearch: (search: string) => void
}

export const Header: FC<TypeProps> = ({ setSearch }) => {
	const onSearch: SearchProps['onSearch'] = (value, _e) =>
		setSearch(value.trim().toLocaleLowerCase())

	return (
		<header className='h-20 px-5 flex items-center'>
			<div className='w-[450px]'>
				<Search onSearch={onSearch} placeholder='Я шукаю...' allowClear enterButton='Знайти' />
			</div>
		</header>
	)
}
