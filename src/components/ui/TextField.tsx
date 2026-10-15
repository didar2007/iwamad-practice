import type { InputHTMLAttributes } from "react";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

function TextField({
  label,
  error,
  id,
  ...inputProps
}: TextFieldProps) {
  const inputId = id ?? inputProps.name;
  const errorId = `${inputId}-error`;

  return (
    <div className="text-field">
      <label htmlFor={inputId}>{label}</label>

      <input
        {...inputProps}
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />

      {error && (
        <p id={errorId} className="field-error">
          {error}
        </p>
      )}
    </div>
  );
}

export default TextField;