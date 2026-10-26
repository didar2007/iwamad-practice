
import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import TextField from './ui/TextField'
import Button from './ui/Button'
import {
  validateSignup,
  type SignupValues,
  type SignupErrors,
} from '../lib/validateSignup'

type EventSignupFormProps = {
  seatsLeft: number
  onBook: (tickets: number) => void
}

export default function EventSignupForm({
  seatsLeft,
  onBook,
}: EventSignupFormProps) {
  const [values, setValues] = useState<SignupValues>({
    fullName: '',
    email: '',
    tickets: '1',
  })

  const [errors, setErrors] = useState<SignupErrors>({})
  const [success, setSuccess] = useState(false)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    setValues((previous) => ({
      ...previous,
      [name]: value,
    }))

    setSuccess(false)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const validationErrors = validateSignup(values, seatsLeft)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setSuccess(false)
      return
    }

    onBook(Number(values.tickets))
    setSuccess(true)
    setErrors({})
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <TextField
        label="Full name"
        name="fullName"
        value={values.fullName}
        onChange={handleChange}
        error={errors.fullName}
        autoComplete="name"
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
        autoComplete="email"
      />

      <TextField
        label="Tickets"
        name="tickets"
        type="number"
        min={1}
        max={4}
        value={values.tickets}
        onChange={handleChange}
        error={errors.tickets}
      />

      <Button type="submit">Book</Button>

      {success && (
        <p role="status">Booking successful!</p>
      )}
    </form>
  )
}
