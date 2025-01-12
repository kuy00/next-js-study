export type InputProps = {
  className?: string;
  type?: string;
  value?: string;
  placeholder?: string;
};

const Input = (props: InputProps) => {
  const { className = "", type = "text", value = "", placeholder = "" } = props;

  return (
    <input
      className={className}
      type={type}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
