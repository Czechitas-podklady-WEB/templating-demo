import { Container } from './Container'
import './Footer.css'

export const Footer = () => {
	const rok = new Date().getFullYear()

	return (
		<footer className="footer">
			<Container size="wide">Patička ©️ {rok}</Container>
		</footer>
	)
}
