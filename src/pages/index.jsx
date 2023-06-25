import { render } from '@czechitas/render'
import { Index } from '../components/Index'

const root = document.querySelector('#root')

root.innerHTML = render(<Index />)
