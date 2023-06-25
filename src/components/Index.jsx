import { Container } from './Container'
import { Layout } from './Layout'

export const Index = ({ lists }) => {
	return (
		<Layout>
			<Container>
				<h2>Všechny seznamy</h2>
				<ul>
					{lists.map((item) => (
						<li key={item.id}>
							<a href={`/templating-demo/den.html?id=${item.id}`}>{item.id}</a>
						</li>
					))}
				</ul>
			</Container>
		</Layout>
	)
}
