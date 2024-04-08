import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import 'styles/reset.scss'

import App from './App.tsx'
import { store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
