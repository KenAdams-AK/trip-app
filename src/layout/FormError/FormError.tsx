import "./FormError.scss";

type FormErrorProps = {
  error: string;
  modifier?: "valid" | "invalid";
};

export function FormError({ error, modifier = "invalid" }: FormErrorProps) {
  return (
    <span role="alert" className={`form-error form-error--${modifier}`}>
      {error}
    </span>
  );
}
