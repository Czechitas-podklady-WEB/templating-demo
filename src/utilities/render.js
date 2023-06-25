import { renderToString } from 'react-dom/server'

export const render = (rootElement, reactNode) => {
	const html = renderToString(reactNode)

	rootElement.innerHTML = html
}
