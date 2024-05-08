import { Link } from 'react-router-dom'

export const Logo = () => {
	return (
		<Link to='/' className='w-[240px] h-[40px]'>
			<img src='/logo/logo.svg' alt='logo' width='100%' height='100%' />
		</Link>
	)
}
