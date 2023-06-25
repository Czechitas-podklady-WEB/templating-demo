import { Footer } from './Footer'
import { Header } from './Header'
import './Layout.css'

export const Layout = ({ children }) => {
	return (
		<div className="layout">
			<div className="layout__header">
				<Header />
			</div>
			<div className="layout__main">
				<main>{children}</main>
			</div>
			<div className="layout__footer">
				<Footer />
			</div>
		</div>
	)
}
