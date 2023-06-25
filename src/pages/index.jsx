import { render } from '@czechitas/render'
import { App } from '../components/App'

const root = document.querySelector('#root')

root.innerHTML = render(<App />)
