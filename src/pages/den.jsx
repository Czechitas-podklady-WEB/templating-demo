import { render } from '@czechitas/render'
import { Day } from '../components/Day'
import '../global.css'
import { getToken } from '../utilities/getToken'

const token = await getToken()

const parameters = new URLSearchParams(window.location.search)
const id = parameters.get('id')
const response = await fetch(`https://nakupy.kodim.app/api/me/week/${id}`, {
	headers: {
		Authorization: `Bearer ${token}`,
	},
})
const data = await response.json()

const root = document.querySelector('#root')
root.innerHTML = render(
	<Day id={id} name={data.result.dayName} items={data.result.items} />,
)

document
	.querySelector('#add-product')
	.addEventListener('submit', async (event) => {
		event.preventDefault()

		await fetch(`https://nakupy.kodim.app/api/me/week/${id}/items`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				product: document.querySelector('#product-name').value,
				amount: document.querySelector('#product-amount').valueAsNumber,
				unit: document.querySelector('#product-unit').value,
			}),
		})
		window.location.reload()
	})

document.querySelectorAll('.day__action').forEach((button) => {
	button.addEventListener('click', async () => {
		const done = button.dataset.done === 'true'
		await fetch(
			`https://nakupy.kodim.app/api/me/week/${id}/items/${button.dataset.id}`,
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					done: !done,
				}),
			},
		)
		window.location.reload()
	})
})
