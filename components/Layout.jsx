import Head from 'next/head'

const Layout = ({ title, keywords, description, children }) => {
	return (
		<div className='flex flex-col min-h-screen w-4/5 mx-auto text-center'>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>{children}</main>
		</div>
	)
}

Layout.defaultProps = {
	title: 'Chen Lay, NEXT JS Boilerplate!',
	description: 'This is a page where you can describe your own information.',
	keywords: 'chenlay, pjk-dev',
}

export default Layout
