import { selectFavouriteProducts } from 'store/selectors/catalogSelectors.ts'

import { useAppSelector } from 'hooks/store-hooks.ts'

import { ProductItem } from 'components/product-item/ProductItem.tsx'

export const FavouritePage = () => {
	const favouriteListProducts = useAppSelector(selectFavouriteProducts)

	const favouriteProductsItems = favouriteListProducts.map(item => (
		<ProductItem key={item.id} product={item} />
	))

	return (
		<div className='px-5'>
			<h2 className='mb-5 text-2xl'>Favourites:</h2>
			<div className='flex flex-wrap'>{favouriteProductsItems}</div>
		</div>
	)
}
