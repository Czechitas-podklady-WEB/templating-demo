import { Container } from './Container'
import './Header.css'

export const Header = () => {
	return (
		<header className="header">
			<Container size="wide">
				<div className="header__content">
					<h1 className="header__brand">
						<a className="header__brand-link" href="/templating-demo/">
							🏠 Templating demo
						</a>
					</h1>
					<nav className="header__navigation">
						{' '}
						<a
							className="header__navigation-link"
							href="/templating-demo/kontakt/zkouska/"
						>
							Kontakt
						</a>{' '}
						<a
							className="header__navigation-link"
							href="https://www.czechitas.cz/"
						>
							Czechitas.cz
						</a>{' '}
						<a className="header__navigation-link" href="https://kodim.cz/">
							Kódím.cz
						</a>
					</nav>
				</div>
			</Container>
		</header>
	)
}
