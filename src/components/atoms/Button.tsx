import { JSX, memo } from "react";

type ButtonProps = {
  children: JSX.Element;
  className?: string;
  onClick?: () => void;
};

const Button = (props: ButtonProps) => {
  const { children, className = "", onClick } = props;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default memo(Button);
