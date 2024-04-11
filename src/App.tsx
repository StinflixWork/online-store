import { Header } from 'components/header/Header.tsx'

import { CatalogPage, FavouritePage } from './pages'

function App() {
	return (
		<div className='min-h-full pb-52'>
			<Header />
			<main className='py-7'>
				<CatalogPage />
				<FavouritePage />
			</main>
		</div>
	)
}

export default App
