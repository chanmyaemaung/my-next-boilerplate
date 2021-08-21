import Layout from '@components/Layout'
import Link from 'next/link'

export default function NotFoundPage() {
	return (
		<Layout title='404 Not Found!'>
			<div className='flex flex-col min-h-screen items-center justify-center'>
				<h1 className='text-7xl'>404!</h1>
				<h4 className='text-3xl'>Sorry, there is nothing here.</h4>
				<Link className='text-2xl' href='/'>
					Go Back
				</Link>
			</div>
		</Layout>
	)
}
