import { render } from '@czechitas/render'
import { Day } from './components/Day'

const parameters = new URLSearchParams(window.location.search)
const id = parameters.get('id')
const response = await fetch(`https://nakupy.kodim.app/api/sampleweek/${id}`)
const data = await response.json()

const root = document.querySelector('#root')
root.innerHTML = render(
	<Day name={data.result.dayName} items={data.result.items} />,
)
