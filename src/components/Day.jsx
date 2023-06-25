import { Container } from './Container'
import { Layout } from './Layout'

export const Day = ({ name, items }) => {
	return (
		<Layout>
			<Container>
				<h2>{name}</h2>
				{items.length === 0 ? (
					<p>Seznam je prázdný.</p>
				) : (
					<ul>
						{items.map((item) => (
							<li key={item.id}>
								{item.done ? '✅' : '❌'} {item.product} ({item.amount}{' '}
								{item.unit})
							</li>
						))}
					</ul>
				)}
			</Container>
		</Layout>
	)
}
