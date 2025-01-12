import { JSX } from "react";

type TextProps = {
  children: JSX.Element | string;
  className?: string;
};

const Text = (props: TextProps) => {
  const { children, className = "" } = props;

  return <span className={className}>{children}</span>;
};

export default Text;
