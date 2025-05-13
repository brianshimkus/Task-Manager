import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
	test('renders Task Manager heading', () => {
		render(<App />)
		const headingElement = screen.getByText(/Task Manager/i)
		expect(headingElement).toBeInTheDocument()
		expect(headingElement).toHaveClass('text-2xl', 'font-bold')
		expect(headingElement.tagName).toBe('H1')
	})
})
