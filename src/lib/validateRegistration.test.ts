import { describe, it, expect } from "vitest";
import { validateRegistration } from "./validateRegistration";
import type { RegistrationValues } from "./validateRegistration";

const validValues: RegistrationValues = {
  fullName: "Didar Kalabayev",
  email: "didar@example.com",
  password: "password123",
  confirmPassword: "password123",
  acceptTerms: true,
};

describe("validateRegistration", () => {
  it("accepts valid registration values", () => {
    expect(validateRegistration(validValues)).toEqual({});
  });

  it("rejects a full name shorter than two characters", () => {
    const errors = validateRegistration({
      ...validValues,
      fullName: "A",
    });

    expect(errors.fullName).toBe("Enter your full name");
  });

  it("rejects an invalid email", () => {
    const errors = validateRegistration({
      ...validValues,
      email: "invalid-email",
    });

    expect(errors.email).toBe(
      "Enter a valid email, like name@example.com",
    );
  });

  it("rejects a password shorter than eight characters", () => {
    const errors = validateRegistration({
      ...validValues,
      password: "abc123",
      confirmPassword: "abc123",
    });

    expect(errors.password).toBe("Use at least 8 characters");
  });

  it("rejects a password without a number", () => {
    const errors = validateRegistration({
      ...validValues,
      password: "password",
      confirmPassword: "password",
    });

    expect(errors.password).toBe("Include at least one number");
  });

  it("rejects passwords that do not match", () => {
    const errors = validateRegistration({
      ...validValues,
      confirmPassword: "different123",
    });

    expect(errors.confirmPassword).toBe("Passwords do not match");
  });

  it("requires acceptance of the terms", () => {
    const errors = validateRegistration({
      ...validValues,
      acceptTerms: false,
    });

    expect(errors.acceptTerms).toBe("Accept the terms to continue");
  });

  it("reports multiple invalid fields", () => {
    const errors = validateRegistration({
      ...validValues,
      fullName: "",
      email: "invalid",
      acceptTerms: false,
    });

    expect(errors).toHaveProperty("fullName");
    expect(errors).toHaveProperty("email");
    expect(errors).toHaveProperty("acceptTerms");
  });
});