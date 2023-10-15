type InputProps = {
  type?: string;
  placeholder?: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  type = 'text', value, placeholder = '', handleChange, ...rest } : InputProps) {
  return (
    <input
      type={ type }
      value={ value }
      placeholder={ placeholder }
      onChange={ handleChange }
      { ...rest }
    />
  );
}
