type InputProps = {
  type?: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ type = 'text', value, handleChange } : InputProps) {
  return (
    <input
      type={ type }
      value={ value }
      onChange={ handleChange }
    />
  );
}
