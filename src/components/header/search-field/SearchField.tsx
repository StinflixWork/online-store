import { FC } from 'react'

import { AutoComplete, ConfigProvider } from 'antd'
import Search from 'antd/es/input/Search'

type TypeProps = {
	options: { value: string }[]
	handleSearch: (value: string) => void
	onSearchChange: (value: string) => void
}

export const SearchField: FC<TypeProps> = ({ options, handleSearch, onSearchChange }) => {
	return (
		<ConfigProvider
			theme={{
				components: {
					Input: {
						colorBgBase: '#f2f2f2',
						colorText: '#222222',
						controlOutline: 'none',
						colorBorder: 'transparent',
						activeBorderColor: 'transparent',
						hoverBorderColor: 'transparent',
						borderRadius: 2,
						controlHeight: 40
					},
					Button: {
						colorPrimary: '#00a046',
						colorPrimaryHover: '#00bc52',
						colorPrimaryActive: '#00bc52'
					}
				}
			}}
		>
			<AutoComplete style={{ width: 500 }} options={options} onSearch={handleSearch}>
				<Search
					onSearch={onSearchChange}
					placeholder='Я шукаю...'
					allowClear
					enterButton='Знайти'
				/>
			</AutoComplete>
		</ConfigProvider>
	)
}
