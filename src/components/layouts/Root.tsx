import { Outlet } from 'react-router-dom'

import { Header } from 'components/header/Header.tsx'

export const Root = () => {
	return (
		<div className='min-h-full overflow-clip'>
			<Header />
			<main className='py-7'>
				<Outlet />
			</main>
		</div>
	)
}
