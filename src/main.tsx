import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import 'styles/reset.scss'

import { Catalog, ErrorPage, FavouritePage, SingleProductPage } from 'pages/index.ts'

import { Root } from 'components/layouts/Root.tsx'

import { store } from './store/store.ts'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Catalog />
			},
			{
				path: '/favourites',
				element: <FavouritePage />
			},
			{
				path: '/product/:idProduct',
				element: <SingleProductPage />
			}
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)
