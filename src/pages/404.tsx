import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
	const error: any = useRouteError()
	console.error(error)

	return (
		<div className='min-h-full grid place-items-center'>
			<div className='text-center'>
				<h1 className='text-3xl font-semibold mb-2'>Oops!</h1>
				<div className='text-gray-700 text-[18px] leading-5'>
					<p>Вибачте, сталася непередбачена помилка.</p>
					<p className='text-red-500'>
						<i>{error.statusText || error.message}</i>
					</p>
				</div>
			</div>
		</div>
	)
}
