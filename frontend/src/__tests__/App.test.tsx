import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('Task Manager heading', () => {
	render(<App />)
	const headingElement = screen.getByText(/Task Manager/i)
	test('exists', () => {
		expect(headingElement).toBeInTheDocument()
	})
	test('is within an H1 tag', () => {
		expect(headingElement.tagName).toBe('H1')
	})
	test('is size 2xl', () => {
		expect(headingElement).toHaveClass('text-2xl')
	})
	test('is bold', () => {
		expect(headingElement).toHaveClass('font-bold')
	})
})
