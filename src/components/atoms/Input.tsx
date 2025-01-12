import { ChangeEventHandler } from "react";

export type InputProps = {
  className?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const Input = (props: InputProps) => {
  const {
    className = "",
    type = "text",
    value = "",
    placeholder = "",
    onChange,
  } = props;

  return (
    <input
      className={className}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
