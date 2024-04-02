import { productData } from 'data/product.data.ts'

import ProductItem from 'components/product-item/ProductItem.tsx'

function App() {
	return (
		<div className='min-h-full p-10'>
			<div className='flex'>
				<ProductItem product={productData.mobiles[0]} />
			</div>
		</div>
	)
}

export default App
