type ButtonProps = {
  children: React.ReactNode;
  type? : string;
  handleClick: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, handleClick, type = 'button' }: ButtonProps) {
  return (
    <button
      type={ type }
      onClick={ handleClick }
    >
      {children}
    </button>
  );
}
