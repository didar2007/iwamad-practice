
import { describe, it, expect } from 'vitest'
import { validateSignup } from './validateSignup'

describe('validateSignup', () => {
  it('accepts valid values', () => {
    expect(
      validateSignup(
        {
          fullName: 'Ali Student',
          email: 'ali@example.com',
          tickets: '2',
        },
        5,
      ),
    ).toEqual({})
  })

  it('requires a full name', () => {
    expect(
      validateSignup(
        {
          fullName: ' A ',
          email: 'ali@example.com',
          tickets: '1',
        },
        5,
      ),
    ).toEqual({
      fullName: 'Enter your full name',
    })
  })

  it('rejects an invalid email', () => {
    expect(
      validateSignup(
        {
          fullName: 'Ali Student',
          email: 'invalid-email',
          tickets: '1',
        },
        5,
      ),
    ).toEqual({
      email: 'Enter a valid email, like name@example.com',
    })
  })

  it('rejects more than four tickets', () => {
    expect(
      validateSignup(
        {
          fullName: 'Ali Student',
          email: 'ali@example.com',
          tickets: '5',
        },
        10,
      ),
    ).toEqual({
      tickets: 'Choose 1 to 4 tickets',
    })
  })

  it('rejects more tickets than available seats', () => {
    expect(
      validateSignup(
        {
          fullName: 'Ali Student',
          email: 'ali@example.com',
          tickets: '3',
        },
        2,
      ),
    ).toEqual({
      tickets: 'Only 2 seats left',
    })
  })

  it('rejects zero tickets', () => {
    expect(
      validateSignup(
        {
          fullName: 'Ali Student',
          email: 'ali@example.com',
          tickets: '0',
        },
        5,
      ),
    ).toEqual({
      tickets: 'Choose 1 to 4 tickets',
    })
  })
})
