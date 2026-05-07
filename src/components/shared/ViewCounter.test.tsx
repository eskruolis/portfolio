import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { ViewCounter } from './ViewCounter'

vi.mock('@/actions/views', () => ({
  incrementViews: vi.fn(),
}))

import { incrementViews } from '@/actions/views'
const mockIncrementViews = vi.mocked(incrementViews)

beforeEach(() => {
  mockIncrementViews.mockReset()
})

describe('ViewCounter', () => {
  it('renders nothing before incrementViews resolves', () => {
    mockIncrementViews.mockReturnValue(new Promise(() => {}))
    const { container } = render(<ViewCounter slug="test-post" />)
    expect(container).toBeEmptyDOMElement()
  })

  it('calls incrementViews with the slug on mount', async () => {
    mockIncrementViews.mockResolvedValue(6)
    render(<ViewCounter slug="test-post" />)
    await waitFor(() => expect(mockIncrementViews).toHaveBeenCalledWith('test-post'))
  })

  it('displays the count after incrementViews resolves', async () => {
    mockIncrementViews.mockResolvedValue(42)
    render(<ViewCounter slug="test-post" />)
    await waitFor(() => expect(screen.getByText(/42 views/i)).toBeInTheDocument())
  })

  it('uses singular "view" when count is 1', async () => {
    mockIncrementViews.mockResolvedValue(1)
    render(<ViewCounter slug="test-post" />)
    await waitFor(() => expect(screen.getByText(/1 view$/i)).toBeInTheDocument())
  })
})
