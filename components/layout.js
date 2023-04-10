import Footer from '../components/footer'
import Meta from '../components/meta'
import { AiOutlineTwitter } from 'react-icons/ai'

export default function Layout({ preview, children }) {
	return (
		<>
			<Meta />
			<header>
				<nav className="h-12 bg-black flex justify-end text-lg items-center text-white">
					<div className="basis-1/4 flex justify-evenly ">
						<a href="https://twitter.com/el_dato_mx" target="_blank">
							<AiOutlineTwitter className="cursor-pointer" size="1.8rem" />
						</a>
					</div>
				</nav>
			</header>
			<div className="min-h-screen">
				<main>{children}</main>
			</div>
			<Footer />
		</>
	)
}
