type ButtonProps = {
  children: React.ReactNode;
  type? : string;
  className?: string;
  handleClick: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children, handleClick, type = 'button', className = 'btn',
}: ButtonProps) {
  return (
    <button
      type={ type }
      onClick={ handleClick }
      className={ className }
    >
      {children}
    </button>
  );
}
