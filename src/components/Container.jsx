import './Container.css'

export const Container = ({ children, size = 'normal' }) => {
	return <div className={`container container--${size}`}>{children}</div>
}
