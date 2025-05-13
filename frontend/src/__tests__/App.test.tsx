import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('Task Manager heading', () => {
	beforeEach(() => {
		render(<App />)
	})
	test('exists', () => {
		const headingElement = screen.getByText(/Task Manager/i)
		expect(headingElement).toBeInTheDocument()
	})
	test('is within an H1 tag', () => {
		const headingElement = screen.getByText(/Task Manager/i)
		expect(headingElement.tagName).toBe('H1')
	})
	test('is size 2xl', () => {
		const headingElement = screen.getByText(/Task Manager/i)
		expect(headingElement).toHaveClass('text-2xl')
	})
	test('is bold', () => {
		const headingElement = screen.getByText(/Task Manager/i)
		expect(headingElement).toHaveClass('font-bold')
	})
})
