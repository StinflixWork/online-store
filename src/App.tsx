import { useState } from 'react'

import { Header } from 'components/header/Header.tsx'

import { CatalogPage, FavouritePage } from './pages'

function App() {
	const [search, setSearch] = useState<string>('')

	return (
		<div className='min-h-full pb-52'>
			<Header setSearch={setSearch} />
			<main className='py-7'>
				<CatalogPage search={search} />
				<FavouritePage />
			</main>
		</div>
	)
}

export default App
