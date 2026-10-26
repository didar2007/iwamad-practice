import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import TextField from "../components/ui/TextField";
import {
  validateRegistration,
  type RegistrationValues,
} from "../lib/validateRegistration";

const initialValues: RegistrationValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>(initialValues);
  const [touched, setTouched] = useState<
    Partial<Record<keyof RegistrationValues, boolean>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState("");

  const errors = validateRegistration(values);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = event.target;

    setValues((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setSuccess("");
  }

  function handleBlur(name: keyof RegistrationValues) {
    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    const validationErrors = validateRegistration(values);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess(`Thanks, ${values.fullName.trim()}. You are registered.`);
    } else {
      setSuccess("");
    }
  }

  function visibleError(name: keyof RegistrationValues) {
    return submitted || touched[name] ? errors[name] : undefined;
  }

  return (
    <section className="register-page">
      <h2>Register</h2>
      <p>Create your account using the form below.</p>

      <form onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          type="text"
          autoComplete="name"
          value={values.fullName}
          onChange={handleChange}
          onBlur={() => handleBlur("fullName")}
          error={visibleError("fullName")}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          onBlur={() => handleBlur("email")}
          error={visibleError("email")}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          value={values.password}
          onChange={handleChange}
          onBlur={() => handleBlur("password")}
          error={visibleError("password")}
        />

        <TextField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={() => handleBlur("confirmPassword")}
          error={visibleError("confirmPassword")}
        />

        <div className="text-field">
          <label htmlFor="acceptTerms">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={values.acceptTerms}
              onChange={handleChange}
              onBlur={() => handleBlur("acceptTerms")}
              aria-invalid={Boolean(visibleError("acceptTerms"))}
              aria-describedby={
                visibleError("acceptTerms")
                  ? "acceptTerms-error"
                  : undefined
              }
            />
            I accept the terms and conditions
          </label>

          {visibleError("acceptTerms") && (
            <p id="acceptTerms-error" className="field-error">
              {visibleError("acceptTerms")}
            </p>
          )}
        </div>

        <button type="submit">Create account</button>

        {success && <p role="status">{success}</p>}
      </form>
    </section>
  );
}

export default RegisterPage;