import { render } from '@czechitas/render'
import { Index } from './components/Index'
import { getToken } from './utilities/getToken'

const token = await getToken()

const response = await fetch('https://nakupy.kodim.app/api/me/week', {
	headers: {
		Authorization: `Bearer ${token}`,
	},
})
const data = await response.json()

const root = document.querySelector('#root')
root.innerHTML = render(<Index lists={data.result} />)
