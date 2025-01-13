import { JSX, memo } from "react";

type LabelProps = {
  children: JSX.Element | string;
  className?: string;
};

const Label = (props: LabelProps) => {
  const { children, className = "" } = props;

  return <label className={className}>{children}</label>;
};

export default memo(Label);
