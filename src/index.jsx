import { render } from '@czechitas/render'
import { Index } from './components/Index'

const response = await fetch('https://nakupy.kodim.app/api/sampleweek')
const data = await response.json()

const root = document.querySelector('#root')
root.innerHTML = render(<Index lists={data.result} />)
