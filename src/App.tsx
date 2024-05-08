import { Route, Routes } from 'react-router-dom'

import { Header } from 'components/header/Header.tsx'

import { CatalogPage, FavouritePage } from './pages'

function App() {
	return (
		<div className='min-h-full pb-52 overflow-clip'>
			<Header />
			<main className='py-7'>
				<Routes>
					<Route path='/' element={<CatalogPage />} />
					<Route path='/favourites' element={<FavouritePage />} />
				</Routes>
			</main>
		</div>
	)
}

export default App
