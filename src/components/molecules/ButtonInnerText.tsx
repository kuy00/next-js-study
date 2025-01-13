import { memo } from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

type ButtonInnerTextProps = {
  text: string;
  buttonClassName?: string;
  textClassName?: string;
};

const LoginButton = (props: ButtonInnerTextProps) => {
  const { text, buttonClassName = "", textClassName = "" } = props;

  return (
    <Button className={buttonClassName}>
      <Text className={textClassName}>{text}</Text>
    </Button>
  );
};

export default memo(LoginButton);
