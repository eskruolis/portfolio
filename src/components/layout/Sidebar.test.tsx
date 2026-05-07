import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

vi.mock('@/components/ui/button', () => ({
  buttonVariants: () => '',
}))

vi.mock('next-themes', () => ({
  useTheme: () => ({ resolvedTheme: 'light', setTheme: vi.fn() }),
}))

vi.mock('next/link', () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode
    href: string
    [key: string]: unknown
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

vi.mock('@/hooks/use-active-section', () => ({
  useActiveSection: () => null,
}))

beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      observe = vi.fn()
      disconnect = vi.fn()
      unobserve = vi.fn()
    },
  )
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('Sidebar', () => {
  it('renders the hamburger button on mobile', () => {
    render(<Sidebar />)
    expect(screen.getByRole('button', { name: /open navigation menu/i })).toBeInTheDocument()
  })

  it('hamburger has aria-controls pointing at the drawer id', () => {
    render(<Sidebar />)
    expect(screen.getByRole('button', { name: /open navigation menu/i })).toHaveAttribute(
      'aria-controls',
      'mobile-nav-drawer',
    )
  })

  it('opens the mobile drawer when the hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)

    await user.click(screen.getByRole('button', { name: /open navigation menu/i }))

    expect(screen.getByRole('dialog', { name: /navigation menu/i })).toBeInTheDocument()
  })

  it('drawer panel has the id that aria-controls references', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)

    await user.click(screen.getByRole('button', { name: /open navigation menu/i }))

    expect(document.getElementById('mobile-nav-drawer')).toBeInTheDocument()
  })

  it('closes the drawer when the close button is clicked', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)

    await user.click(screen.getByRole('button', { name: /open navigation menu/i }))
    await user.click(screen.getByRole('button', { name: /close navigation menu/i }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the drawer when Escape is pressed', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)

    await user.click(screen.getByRole('button', { name: /open navigation menu/i }))
    await user.keyboard('{Escape}')

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('sets aria-expanded on the hamburger button when drawer is open', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)

    const btn = screen.getByRole('button', { name: /open navigation menu/i })
    expect(btn).toHaveAttribute('aria-expanded', 'false')

    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
  })
})
