import { renderToString } from 'react-dom/server'

/**
 * @param {HTMLElement} rootElement
 * @param {ReactElement} reactNode
 */
export const render = (rootElement, reactNode) => {
	const html = renderToString(reactNode)

	rootElement.innerHTML = html
}
