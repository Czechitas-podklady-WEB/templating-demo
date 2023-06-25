import { AddProduct } from './AddProduct'
import { Container } from './Container'
import './Day.css'
import { Layout } from './Layout'

export const Day = ({ id, name, items }) => {
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
								<button
									className="day__action"
									data-id={item.id}
									data-done={item.done}
								>
									{item.done ? '✅' : '❌'}{' '}
									<span className="day__product">
										{item.product} ({item.amount} {item.unit})
									</span>
								</button>
							</li>
						))}
					</ul>
				)}
				<AddProduct dayId={id} />
			</Container>
		</Layout>
	)
}
