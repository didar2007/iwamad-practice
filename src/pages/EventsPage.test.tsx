
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import EventsPage from './EventsPage'
import '@testing-library/jest-dom/vitest'

describe('EventsPage', () => {
  it('renders events and their details links', () => {
    render(
      <MemoryRouter>
        <EventsPage />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', {
        name: /upcoming events/i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /technology and ai talk/i,
      }),
    ).toBeInTheDocument()

    expect(
      screen.getAllByRole('link', {
        name: /details and sign-up/i,
      }),
    ).toHaveLength(4)
  })
})
