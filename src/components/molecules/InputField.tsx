import Input, { InputProps } from "../atoms/Input";
import Label from "../atoms/Label";

type InputFieldProps = InputProps & {
  label: string;
};

const InputField = (props: InputFieldProps) => {
  const { label, ...inputProps } = props;

  return (
    <div className="flex justify-between">
      <Label className="mr-5 text-lg">{label}</Label>
      <Input {...inputProps} className={`${inputProps.className ?? ""} h-10`} />
    </div>
  );
};

export default InputField;
