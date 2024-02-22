import "./FormError.scss";

type FormErrorProps = {
  error: string;
};

export function FormError({ error }: FormErrorProps) {
  return (
    <span role="alert" className="form-error form-error--invalid">
      {error}
    </span>
  );
}
