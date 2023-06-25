import { render } from '@czechitas/render'
import { Day } from './components/Day'

const root = document.querySelector('#root')

root.innerHTML = render(<Day />)
